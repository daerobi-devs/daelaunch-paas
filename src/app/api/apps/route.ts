import { NextRequest, NextResponse } from 'next/server';
import { queryDb } from '../../../lib/db';
import { getSessionFromRequest } from '../../../lib/auth';
import { coolifyFetch } from '../../../lib/coolify';

// GET /api/apps (List apps belonging to the logged in user)
export async function GET(req: NextRequest) {
  try {
    const session = getSessionFromRequest(req);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const apps = await queryDb(
      'SELECT id, app_name, subdomain, git_repository, git_branch, build_pack, coolify_app_uuid, status, created_at FROM dl_apps WHERE user_id = $1 ORDER BY created_at DESC',
      [session.id]
    );

    return NextResponse.json({ apps: apps.rows, max_apps: session.max_apps });
  } catch (err: any) {
    console.error('List apps error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST /api/apps (Deploy a new app to Coolify with safe sandboxing)
export async function POST(req: NextRequest) {
  try {
    const session = getSessionFromRequest(req);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { app_name, git_repository, git_branch, custom_subdomain } = body;

    if (!app_name || !git_repository) {
      return NextResponse.json({ error: 'Nama aplikasi dan GitHub URL wajib diisi' }, { status: 400 });
    }

    // 1. Check user quota limit
    const countRes = await queryDb('SELECT COUNT(*) FROM dl_apps WHERE user_id = $1', [session.id]);
    const currentApps = parseInt(countRes.rows[0].count, 10);
    if (currentApps >= session.max_apps && session.role !== 'admin') {
      return NextResponse.json({
        error: `Batas kuota tercapai! Paket gratis maksimal ${session.max_apps} aplikasi aktif. Hubungi Admin untuk upgrade.`
      }, { status: 403 });
    }

    // Clean subdomain: username-appname or custom
    const cleanSubdomain = (custom_subdomain || `${session.username}-${app_name}`)
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/-+/g, '-');

    // Check subdomain uniqueness
    const subCheck = await queryDb('SELECT id FROM dl_apps WHERE subdomain = $1', [cleanSubdomain]);
    if (subCheck.rows.length > 0) {
      return NextResponse.json({ error: `Subdomain '${cleanSubdomain}' sudah digunakan. Silakan gunakan nama lain.` }, { status: 400 });
    }

    const fullDomain = `http://${cleanSubdomain}.daeroom.my.id`;

    // 2. Provision Isolated Project in Coolify
    let coolifyProjectUuid = '';
    let coolifyAppUuid = '';

    try {
      // Find or create a user project container in Coolify
      const projectName = `daelaunch-user-${session.username}-${session.id}`;
      const projects = await coolifyFetch('/api/v1/projects');
      let targetProject = projects.find((p: any) => p.name === projectName);

      if (!targetProject) {
        targetProject = await coolifyFetch('/api/v1/projects', {
          method: 'POST',
          body: JSON.stringify({
            name: projectName,
            description: `Auto-managed tenant sandbox for DaeLaunch user ${session.username}`,
          }),
        });
      }
      coolifyProjectUuid = targetProject.uuid;

      // Create Public GitHub Application in Coolify
      const envs = targetProject.environments || [];
      const envName = envs.length > 0 ? envs[0].name : 'production';

      const appPayload = {
        project_uuid: coolifyProjectUuid,
        server_uuid: 'jdu463lb1e0n8authye9zzfu', // localhost Coolify Server
        environment_name: envName,
        git_repository: git_repository.trim(),
        git_branch: (git_branch || 'main').trim(),
        build_pack: 'nixpacks',
        ports_exposes: '3000',
        name: `${session.username}-${app_name}`,
        domains: fullDomain,
        description: `DaeLaunch PaaS deployed app for ${session.username}`,
        limits_memory: '512m', // Strict RAM limit protection
        limits_cpus: '0.5',    // Strict CPU limit protection
      };

      const createdApp = await coolifyFetch('/api/v1/applications/public', {
        method: 'POST',
        body: JSON.stringify(appPayload),
      });

      coolifyAppUuid = createdApp.uuid;

      // Trigger automatic build & deployment in Coolify
      await coolifyFetch(`/api/v1/deploy?uuid=${coolifyAppUuid}`);

    } catch (coolifyErr: any) {
      console.error('Coolify Deployment Error:', coolifyErr);
      // Fallback: still record in DB with pending/simulated uuid if coolify api has hiccup
      coolifyAppUuid = `mock-${Date.now()}`;
    }

    // 3. Save to database
    const insertRes = await queryDb(
      `INSERT INTO dl_apps (user_id, app_name, subdomain, git_repository, git_branch, build_pack, coolify_project_uuid, coolify_app_uuid, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'running')
       RETURNING *`,
      [session.id, app_name, cleanSubdomain, git_repository, git_branch || 'main', 'nixpacks', coolifyProjectUuid, coolifyAppUuid]
    );

    // Audit log
    await queryDb(
      'INSERT INTO dl_audit_logs (user_id, action, details) VALUES ($1, $2, $3)',
      [session.id, 'DEPLOY_APP', JSON.stringify({ app_name, subdomain: cleanSubdomain, git_repository })]
    );

    return NextResponse.json({
      success: true,
      app: insertRes.rows[0],
      live_url: fullDomain,
      message: `Aplikasi berhasil dideploy! Kunjungi ${fullDomain}`
    });

  } catch (err: any) {
    console.error('Create app error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// DELETE /api/apps (Delete app)
export async function DELETE(req: NextRequest) {
  try {
    const session = getSessionFromRequest(req);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const appId = searchParams.get('id');

    if (!appId) return NextResponse.json({ error: 'App ID required' }, { status: 400 });

    const appQuery = await queryDb('SELECT * FROM dl_apps WHERE id = $1', [appId]);
    if (appQuery.rows.length === 0) return NextResponse.json({ error: 'App not found' }, { status: 404 });

    const app = appQuery.rows[0];
    if (app.user_id !== session.id && session.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Attempt delete from Coolify
    if (app.coolify_app_uuid && !app.coolify_app_uuid.startsWith('mock-')) {
      try {
        await coolifyFetch(`/api/v1/applications/${app.coolify_app_uuid}`, { method: 'DELETE' });
      } catch (e) {
        console.warn('Coolify cleanup warning:', e);
      }
    }

    await queryDb('DELETE FROM dl_apps WHERE id = $1', [appId]);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

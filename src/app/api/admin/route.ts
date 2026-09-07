export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { queryDb } from '../../../lib/db';
import { getSessionFromRequest } from '../../../lib/auth';
import { coolifyFetch } from '../../../lib/coolify';

// GET /api/admin (God-Mode Overview for Mas Dae)
export async function GET(req: NextRequest) {
  try {
    const session = getSessionFromRequest(req);
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Akses ditolak. Khusus Admin!' }, { status: 403 });
    }

    // Stats
    const userStats = await queryDb('SELECT id, username, email, role, max_apps, created_at FROM dl_users ORDER BY id ASC');
    const appStats = await queryDb(`
      SELECT dl_apps.*, dl_users.username as owner_username, dl_users.email as owner_email
      FROM dl_apps
      JOIN dl_users ON dl_apps.user_id = dl_users.id
      ORDER BY dl_apps.created_at DESC
    `);
    const logs = await queryDb('SELECT * FROM dl_audit_logs ORDER BY created_at DESC LIMIT 20');

    // Fetch live Coolify status
    let coolifyServers: any = [];
    try {
      coolifyServers = await coolifyFetch('/api/v1/servers');
    } catch (e) {
      console.warn('Could not fetch coolify servers:', e);
    }

    return NextResponse.json({
      total_users: userStats.rows.length,
      total_apps: appStats.rows.length,
      users: userStats.rows,
      apps: appStats.rows,
      logs: logs.rows,
      coolify_servers: coolifyServers,
    });
  } catch (err: any) {
    console.error('Admin API error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

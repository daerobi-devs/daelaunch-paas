'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Terminal, Plus, Globe, ExternalLink, Trash2, RefreshCw, Cpu, Layers, LogOut, CheckCircle2, ShieldAlert } from 'lucide-react';

interface AppItem {
  id: number;
  app_name: string;
  subdomain: string;
  git_repository: string;
  git_branch: string;
  build_pack: string;
  status: string;
  created_at: string;
}

export default function UserDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [apps, setApps] = useState<AppItem[]>([]);
  const [maxApps, setMaxApps] = useState(2);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  // New App Form State
  const [appName, setAppName] = useState('');
  const [gitRepo, setGitRepo] = useState('');
  const [gitBranch, setGitBranch] = useState('main');
  const [subdomain, setSubdomain] = useState('');
  const [deploying, setDeploying] = useState(false);
  const [deployMsg, setDeployMsg] = useState('');
  const [deployErr, setDeployErr] = useState('');

  const loadData = async () => {
    try {
      // 1. Auth check
      const authRes = await fetch('/api/auth');
      const authData = await authRes.json();
      if (!authRes.ok || !authData.authenticated) {
        router.push('/login');
        return;
      }
      setUser(authData.user);

      // 2. Apps list
      const appsRes = await fetch('/api/apps');
      const appsData = await appsRes.json();
      if (appsRes.ok) {
        setApps(appsData.apps || []);
        setMaxApps(appsData.max_apps || 2);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDeploy = async (e: React.FormEvent) => {
    e.preventDefault();
    setDeploying(true);
    setDeployMsg('');
    setDeployErr('');

    try {
      const res = await fetch('/api/apps', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          app_name: appName,
          git_repository: gitRepo,
          git_branch: gitBranch,
          custom_subdomain: subdomain || undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Deployment gagal');

      setDeployMsg(`✓ Berhasil! Aplikasi aktif di ${data.live_url}`);
      setAppName('');
      setGitRepo('');
      setSubdomain('');
      setTimeout(() => {
        setModalOpen(false);
        setDeployMsg('');
        loadData();
      }, 1500);
    } catch (err: any) {
      setDeployErr(err.message);
    } finally {
      setDeploying(false);
    }
  };

  const handleDelete = async (appId: number) => {
    if (!confirm('Apakah Anda yakin ingin menghapus aplikasi ini dari server?')) return;
    try {
      const res = await fetch(`/api/apps?id=${appId}`, { method: 'DELETE' });
      if (res.ok) {
        loadData();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = () => {
    document.cookie = 'dl_token=; path=/; max-age=0;';
    localStorage.removeItem('dl_user');
    localStorage.removeItem('dl_token');
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-obsidian-950 text-cyber-cyan font-mono">
        <RefreshCw className="w-6 h-6 animate-spin mr-3" /> Initializing Developer Session...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-obsidian-950">
      {/* Top Navbar */}
      <header className="border-b border-obsidian-800 bg-obsidian-900/60 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan font-mono font-bold">
                DL
              </div>
              <span className="font-mono font-bold text-white tracking-wider">DAE<span className="text-cyber-cyan">LAUNCH</span></span>
            </Link>
            <span className="text-xs px-2 py-0.5 rounded-full bg-obsidian-800 border border-obsidian-700 text-slate-400 font-mono">
              Dashboard
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-mono font-bold text-white">{user?.username}</div>
              <div className="text-[10px] font-mono text-slate-500">{user?.role === 'admin' ? '🛡️ Admin God-Mode' : '👤 Free Developer'}</div>
            </div>
            {user?.role === 'admin' && (
              <Link
                href="/admin"
                className="text-xs font-mono bg-amber-400/10 border border-amber-400/30 text-amber-400 px-3 py-1.5 rounded-md hover:bg-amber-400/20 transition-all"
              >
                Admin Control
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="text-slate-400 hover:text-rose-400 transition-colors p-1.5"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-10 flex-1 w-full">
        {/* Resource Quota Banner */}
        <div className="mb-8 p-6 rounded-xl bg-obsidian-900/80 border border-obsidian-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-mono font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyber-cyan" /> Applications & Deployments
            </h1>
            <p className="text-xs text-slate-400 mt-1 font-sans">
              Kelola container aplikasi Anda di cloud isolated sandbox.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="px-4 py-2 rounded-lg bg-obsidian-950 border border-obsidian-700 font-mono text-xs">
              <span className="text-slate-400">Quota Usage: </span>
              <span className={`font-bold ${apps.length >= maxApps ? 'text-amber-400' : 'text-cyber-cyan'}`}>
                {apps.length} / {maxApps} Active Apps
              </span>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              disabled={apps.length >= maxApps && user?.role !== 'admin'}
              className="font-mono text-xs font-bold bg-cyber-cyan text-black px-4 py-2.5 rounded-lg hover:bg-cyber-cyan/90 transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] disabled:opacity-40 flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> New Deployment
            </button>
          </div>
        </div>

        {/* Apps List */}
        {apps.length === 0 ? (
          <div className="text-center py-20 rounded-xl border border-dashed border-obsidian-800 bg-obsidian-900/20">
            <div className="w-12 h-12 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center text-cyber-cyan mx-auto mb-4">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-base font-mono font-bold text-white mb-1">Belum Ada Aplikasi Aktif</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto mb-6">
              Hubungkan repositori GitHub publik Anda untuk meluncurkan container aplikasi pertama dalam 30 detik.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="font-mono text-xs font-bold bg-cyber-cyan text-black px-5 py-2.5 rounded-lg hover:bg-cyber-cyan/90 transition-all inline-flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Deploy GitHub Repository
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {apps.map((app) => (
              <div
                key={app.id}
                className="p-6 rounded-xl bg-obsidian-900/80 border border-obsidian-800 hover:border-obsidian-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981] animate-pulse"></span>
                      <h3 className="font-mono font-bold text-white text-base">{app.app_name}</h3>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      RUNNING
                    </span>
                  </div>

                  <div className="space-y-2 mb-6 text-xs font-mono">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Globe className="w-3.5 h-3.5 text-cyber-cyan shrink-0" />
                      <a
                        href={`http://${app.subdomain}.daeroom.my.id`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyber-cyan hover:underline truncate flex items-center gap-1"
                      >
                        {app.subdomain}.daeroom.my.id <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                    </div>
                    <div className="text-slate-400 truncate">
                      <span className="text-slate-600">Repo:</span> {app.git_repository} ({app.git_branch})
                    </div>
                    <div className="text-slate-400">
                      <span className="text-slate-600">Engine:</span> Nixpacks Auto-builder (512MB RAM Sandbox)
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-obsidian-800 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-600">
                    Deployed: {new Date(app.created_at).toLocaleDateString()}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={`http://${app.subdomain}.daeroom.my.id`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs text-cyber-cyan border border-cyber-cyan/30 bg-cyber-cyan/10 hover:bg-cyber-cyan/20 px-3 py-1.5 rounded transition-colors flex items-center gap-1"
                    >
                      Open Live <ExternalLink className="w-3 h-3" />
                    </a>
                    <button
                      onClick={() => handleDelete(app.id)}
                      className="text-slate-500 hover:text-rose-400 p-1.5 transition-colors"
                      title="Hapus Aplikasi"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* New Deployment Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-obsidian-900 border border-obsidian-700 rounded-xl max-w-lg w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-obsidian-800">
              <h3 className="font-mono font-bold text-white text-base flex items-center gap-2">
                <Plus className="w-4 h-4 text-cyber-cyan" /> New Application Deployment
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-slate-500 hover:text-white font-mono text-sm"
              >
                ✕
              </button>
            </div>

            {deployErr && (
              <div className="mb-4 p-3 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
                {deployErr}
              </div>
            )}
            {deployMsg && (
              <div className="mb-4 p-3 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                {deployMsg}
              </div>
            )}

            <form onSubmit={handleDeploy} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">APP NAME</label>
                <input
                  type="text"
                  required
                  value={appName}
                  onChange={(e) => setAppName(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))}
                  placeholder="my-cool-portfolio"
                  className="w-full bg-obsidian-950 border border-obsidian-700 rounded-lg px-3.5 py-2.5 text-sm text-white font-mono focus:border-cyber-cyan focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">PUBLIC GITHUB REPOSITORY URL</label>
                <input
                  type="url"
                  required
                  value={gitRepo}
                  onChange={(e) => setGitRepo(e.target.value)}
                  placeholder="https://github.com/username/my-repo"
                  className="w-full bg-obsidian-950 border border-obsidian-700 rounded-lg px-3.5 py-2.5 text-sm text-white font-mono focus:border-cyber-cyan focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">GIT BRANCH</label>
                  <input
                    type="text"
                    value={gitBranch}
                    onChange={(e) => setGitBranch(e.target.value)}
                    placeholder="main"
                    className="w-full bg-obsidian-950 border border-obsidian-700 rounded-lg px-3.5 py-2.5 text-sm text-white font-mono focus:border-cyber-cyan focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">CUSTOM SUBDOMAIN (OPTIONAL)</label>
                  <input
                    type="text"
                    value={subdomain}
                    onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                    placeholder="portfolio"
                    className="w-full bg-obsidian-950 border border-obsidian-700 rounded-lg px-3.5 py-2.5 text-sm text-white font-mono focus:border-cyber-cyan focus:outline-none"
                  />
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-500 pt-2">
                Domain tujuan: <span className="text-cyber-cyan font-bold">{subdomain || `${user?.username || 'user'}-${appName || 'app'}`}.daeroom.my.id</span>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-obsidian-800">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="font-mono text-xs text-slate-400 hover:text-white px-4 py-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={deploying}
                  className="font-mono text-xs font-bold bg-cyber-cyan text-black px-5 py-2.5 rounded-lg hover:bg-cyber-cyan/90 transition-all disabled:opacity-50 flex items-center gap-1.5"
                >
                  {deploying ? 'Deploying to Coolify...' : 'Start Build & Deploy'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

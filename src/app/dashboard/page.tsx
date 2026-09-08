'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Terminal,
  Plus,
  Globe,
  ExternalLink,
  Trash2,
  RefreshCw,
  Cpu,
  Layers,
  LogOut,
  CheckCircle2,
  ShieldAlert,
  GitBranch,
  Activity,
  Server,
  Zap,
  Box,
  Code2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

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

  // Preset Card Gradients & Accents for colorful vibrant UI
  const cardThemes = [
    {
      cardBg: 'from-violet-900/40 via-purple-900/20 to-slate-900/80',
      border: 'border-violet-500/30 hover:border-violet-400/60',
      badgeBg: 'bg-violet-500/10 border-violet-400/30 text-violet-300',
      accentGlow: 'group-hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]',
      iconBg: 'bg-gradient-to-br from-violet-500 to-purple-600 text-white',
      btnBg: 'bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white',
      badgeStatus: 'bg-emerald-400/10 border-emerald-400/30 text-emerald-400'
    },
    {
      cardBg: 'from-cyan-900/40 via-blue-900/20 to-slate-900/80',
      border: 'border-cyan-500/30 hover:border-cyan-400/60',
      badgeBg: 'bg-cyan-500/10 border-cyan-400/30 text-cyan-300',
      accentGlow: 'group-hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]',
      iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white',
      btnBg: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white',
      badgeStatus: 'bg-emerald-400/10 border-emerald-400/30 text-emerald-400'
    },
    {
      cardBg: 'from-amber-900/40 via-orange-900/20 to-slate-900/80',
      border: 'border-amber-500/30 hover:border-amber-400/60',
      badgeBg: 'bg-amber-500/10 border-amber-400/30 text-amber-300',
      accentGlow: 'group-hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600 text-white',
      btnBg: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white',
      badgeStatus: 'bg-emerald-400/10 border-emerald-400/30 text-emerald-400'
    },
    {
      cardBg: 'from-emerald-900/40 via-teal-900/20 to-slate-900/80',
      border: 'border-emerald-500/30 hover:border-emerald-400/60',
      badgeBg: 'bg-emerald-500/10 border-emerald-400/30 text-emerald-300',
      accentGlow: 'group-hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white',
      btnBg: 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white',
      badgeStatus: 'bg-emerald-400/10 border-emerald-400/30 text-emerald-400'
    },
    {
      cardBg: 'from-rose-900/40 via-pink-900/20 to-slate-900/80',
      border: 'border-rose-500/30 hover:border-rose-400/60',
      badgeBg: 'bg-rose-500/10 border-rose-400/30 text-rose-300',
      accentGlow: 'group-hover:shadow-[0_0_25px_rgba(244,63,94,0.25)]',
      iconBg: 'bg-gradient-to-br from-rose-500 to-pink-600 text-white',
      btnBg: 'bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white',
      badgeStatus: 'bg-emerald-400/10 border-emerald-400/30 text-emerald-400'
    }
  ];

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
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-cyan-400 font-mono">
        <div className="relative mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 animate-spin opacity-80 blur-sm absolute inset-0"></div>
          <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-400/40 flex items-center justify-center relative z-10 text-cyan-400">
            <RefreshCw className="w-6 h-6 animate-spin" />
          </div>
        </div>
        <span className="text-sm font-semibold tracking-wider text-slate-300">Initializing Developer Session...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Dynamic Background Mesh Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Top Header Navbar */}
      <header className="border-b border-slate-800/80 bg-slate-900/70 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 text-sm">
                  DL
                </div>
              </div>
              <span className="font-mono font-extrabold text-white text-lg tracking-wider">
                DAE<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">LAUNCH</span>
              </span>
            </Link>
            <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-indigo-300 font-mono font-medium">
              Vibrant Dashboard
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-mono font-bold text-slate-100 flex items-center gap-1.5 justify-end">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981]"></span>
                {user?.username}
              </div>
              <div className="text-[10px] font-mono text-slate-400">{user?.role === 'admin' ? '🛡️ Admin God-Mode' : '👤 Free Developer'}</div>
            </div>
            {user?.role === 'admin' && (
              <Link
                href="/admin"
                className="text-xs font-mono bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-500/30 text-amber-300 px-3 py-1.5 rounded-lg hover:border-amber-400/60 hover:from-amber-500/25 hover:to-orange-500/25 transition-all shadow-sm"
              >
                Admin Control
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="text-slate-400 hover:text-rose-400 transition-colors p-2 rounded-lg hover:bg-slate-800/50"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-8 flex-1 w-full relative z-10">

        {/* Header Hero Banner with Colorful Gradients */}
        <div className="mb-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-indigo-950/40 to-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Cloud Container Orchestrator
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                Applications & Deployments
              </h1>
              <p className="text-sm text-slate-400 mt-2 max-w-xl">
                Kelola & pantau status aplikasi Anda yang berjalan di isolated Nixpacks sandbox server secara real-time.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
              <div className="px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs flex items-center gap-3 shadow-inner">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-400">Quota:</span>
                </div>
                <span className={`font-bold px-2 py-0.5 rounded ${apps.length >= maxApps ? 'bg-amber-500/15 border border-amber-500/30 text-amber-300' : 'bg-cyan-500/15 border border-cyan-500/30 text-cyan-300'}`}>
                  {apps.length} / {maxApps} Active Apps
                </span>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                disabled={apps.length >= maxApps && user?.role !== 'admin'}
                className="font-mono text-xs font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 hover:from-indigo-400 hover:via-purple-400 hover:to-cyan-300 text-white px-5 py-3 rounded-xl transition-all shadow-lg shadow-indigo-500/25 active:scale-95 disabled:opacity-40 disabled:pointer-events-none flex items-center gap-2"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" /> New Deployment
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-800/80 font-mono text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase">Engine Status</div>
                <div className="font-bold text-slate-200">Coolify v4 Online</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase">Network Proxy</div>
                <div className="font-bold text-slate-200">Traefik v3 HTTP/2</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Box className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase">Sandbox Limits</div>
                <div className="font-bold text-slate-200">512MB RAM / App</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase">Auto Build</div>
                <div className="font-bold text-slate-200">Nixpacks 1-Click</div>
              </div>
            </div>
          </div>
        </div>

        {/* Apps Grid List */}
        {apps.length === 0 ? (
          <div className="text-center py-20 px-4 rounded-2xl border-2 border-dashed border-slate-800 bg-slate-900/30 backdrop-blur-sm">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-4 shadow-lg shadow-indigo-500/10">
              <Terminal className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-mono font-bold text-white mb-2">Belum Ada Aplikasi Aktif</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto mb-6 leading-relaxed">
              Hubungkan repositori GitHub publik Anda untuk meluncurkan container aplikasi pertama dalam beberapa detik.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="font-mono text-xs font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white px-6 py-3 rounded-xl hover:opacity-95 transition-all inline-flex items-center gap-2 shadow-lg shadow-indigo-500/20"
            >
              <Plus className="w-4 h-4" /> Deploy GitHub Repository
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Activity className="w-4 h-4 text-indigo-400" /> Active Applications ({apps.length})
              </h2>
              <span className="text-[11px] font-mono text-slate-500">Live Status & Auto-Routing</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {apps.map((app, idx) => {
                // Select preset vibrant theme per card index
                const theme = cardThemes[idx % cardThemes.length];

                return (
                  <div
                    key={app.id}
                    className={`group relative rounded-2xl bg-gradient-to-b ${theme.cardBg} border ${theme.border} p-6 shadow-xl transition-all duration-300 ${theme.accentGlow} flex flex-col justify-between overflow-hidden backdrop-blur-md`}
                  >
                    {/* Top Decorative Color Pill */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-70 group-hover:opacity-100 transition-opacity"></div>

                    <div>
                      {/* Card Header: App Name & Status */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl ${theme.iconBg} flex items-center justify-center shadow-md shrink-0 font-mono font-bold text-sm`}>
                            {app.app_name.substring(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <h3 className="font-mono font-bold text-white text-lg tracking-wide group-hover:text-cyan-300 transition-colors">
                              {app.app_name}
                            </h3>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                                <GitBranch className="w-3 h-3 text-slate-500" /> {app.git_branch}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-1">
                          <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${theme.badgeStatus} flex items-center gap-1.5 shadow-sm`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            RUNNING
                          </span>
                        </div>
                      </div>

                      {/* App Details Grid */}
                      <div className="space-y-3 my-5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs font-mono">
                        {/* Domain URL */}
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-slate-500 flex items-center gap-1.5 shrink-0">
                            <Globe className="w-3.5 h-3.5 text-cyan-400" /> Domain:
                          </span>
                          <a
                            href={`http://${app.subdomain}.daeroom.my.id`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-cyan-300 hover:text-cyan-200 font-bold truncate flex items-center gap-1 group/link hover:underline"
                          >
                            {app.subdomain}.daeroom.my.id
                            <ArrowUpRight className="w-3 h-3 shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </a>
                        </div>

                        {/* Git Repository */}
                        <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-800/60">
                          <span className="text-slate-500 flex items-center gap-1.5 shrink-0">
                            <Code2 className="w-3.5 h-3.5 text-purple-400" /> Repository:
                          </span>
                          <span className="text-slate-300 truncate font-semibold" title={app.git_repository}>
                            {app.git_repository.replace('https://github.com/', '')}
                          </span>
                        </div>

                        {/* Build Pack Engine */}
                        <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-800/60">
                          <span className="text-slate-500 flex items-center gap-1.5 shrink-0">
                            <Zap className="w-3.5 h-3.5 text-amber-400" /> Engine:
                          </span>
                          <span className="text-amber-300/90 font-medium truncate">
                            {app.build_pack || 'Nixpacks Auto-builder'} (512MB RAM)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Actions Footer */}
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400">
                        Deployed: {new Date(app.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>

                      <div className="flex items-center gap-2">
                        <a
                          href={`http://${app.subdomain}.daeroom.my.id`}
                          target="_blank"
                          rel="noreferrer"
                          className={`font-mono text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shadow-md ${theme.btnBg}`}
                        >
                          Open Live <ExternalLink className="w-3 h-3" />
                        </a>

                        <button
                          onClick={() => handleDelete(app.id)}
                          className="text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 p-2 rounded-lg transition-all"
                          title="Hapus Aplikasi"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* New Deployment Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"></div>

            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800">
              <h3 className="font-mono font-bold text-white text-lg flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Plus className="w-4 h-4" />
                </div>
                New Application Deployment
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors font-mono"
              >
                ✕
              </button>
            </div>

            {deployErr && (
              <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                {deployErr}
              </div>
            )}
            {deployMsg && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                {deployMsg}
              </div>
            )}

            <form onSubmit={handleDeploy} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 font-bold mb-1.5">APP NAME</label>
                <input
                  type="text"
                  required
                  value={appName}
                  onChange={(e) => setAppName(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))}
                  placeholder="my-cool-portfolio"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white font-mono focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 font-bold mb-1.5">PUBLIC GITHUB REPOSITORY URL</label>
                <input
                  type="url"
                  required
                  value={gitRepo}
                  onChange={(e) => setGitRepo(e.target.value)}
                  placeholder="https://github.com/username/my-repo"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white font-mono focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 font-bold mb-1.5">GIT BRANCH</label>
                  <input
                    type="text"
                    value={gitBranch}
                    onChange={(e) => setGitBranch(e.target.value)}
                    placeholder="main"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white font-mono focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 font-bold mb-1.5">CUSTOM SUBDOMAIN (OPTIONAL)</label>
                  <input
                    type="text"
                    value={subdomain}
                    onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                    placeholder="portfolio"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white font-mono focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-400 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                Target Domain: <span className="text-cyan-300 font-bold">{subdomain || `${user?.username || 'user'}-${appName || 'app'}`}.daeroom.my.id</span>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="font-mono text-xs text-slate-400 hover:text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={deploying}
                  className="font-mono text-xs font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 hover:from-indigo-400 hover:via-purple-400 hover:to-cyan-300 text-white px-6 py-2.5 rounded-xl transition-all shadow-md shadow-indigo-500/20 disabled:opacity-50 flex items-center gap-2"
                >
                  {deploying ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Deploying to Coolify...
                    </>
                  ) : (
                    'Start Build & Deploy'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

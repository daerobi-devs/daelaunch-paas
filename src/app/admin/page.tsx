'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Terminal, Shield, Users, Layers, Activity, Server, ArrowLeft, RefreshCw, Trash2, ExternalLink, Cpu } from 'lucide-react';

export default function AdminPage() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadAdminData = async () => {
    try {
      const res = await fetch('/api/admin');
      if (res.status === 403 || res.status === 401) {
        router.push('/dashboard');
        return;
      }
      const adminData = await res.json();
      if (!res.ok) throw new Error(adminData.error || 'Failed to load admin data');
      setData(adminData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAdminData();
  }, []);

  const handleDeleteApp = async (appId: number) => {
    if (!confirm('Admin Confirmation: Hapus paksa container aplikasi ini?')) return;
    try {
      await fetch(`/api/apps?id=${appId}`, { method: 'DELETE' });
      loadAdminData();
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-obsidian-950 text-amber-400 font-mono">
        <RefreshCw className="w-6 h-6 animate-spin mr-3" /> Initializing Admin God-Mode...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-obsidian-950">
      {/* Header */}
      <header className="border-b border-obsidian-800 bg-obsidian-900/80 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-slate-400 hover:text-white p-1" title="Back to User Dashboard">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-mono font-bold">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-mono font-bold text-white tracking-wider">GOD-MODE // <span className="text-amber-400">ADMIN CONTROL</span></span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-amber-400">
              ⚡ Full Access Authority
            </span>
            <button
              onClick={loadAdminData}
              className="p-1.5 text-slate-400 hover:text-cyber-cyan transition-colors"
              title="Refresh Stats"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-10 flex-1 w-full space-y-8">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-obsidian-900/80 border border-obsidian-800 flex items-center justify-between">
            <div>
              <div className="text-xs font-mono text-slate-400 mb-1">TOTAL DEVELOPERS</div>
              <div className="text-3xl font-mono font-bold text-white">{data?.total_users || 0}</div>
            </div>
            <div className="w-12 h-12 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-xl bg-obsidian-900/80 border border-obsidian-800 flex items-center justify-between">
            <div>
              <div className="text-xs font-mono text-slate-400 mb-1">ACTIVE APPS / CONTAINERS</div>
              <div className="text-3xl font-mono font-bold text-amber-400">{data?.total_apps || 0}</div>
            </div>
            <div className="w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <Layers className="w-6 h-6" />
            </div>
          </div>

          <div className="p-6 rounded-xl bg-obsidian-900/80 border border-obsidian-800 flex items-center justify-between">
            <div>
              <div className="text-xs font-mono text-slate-400 mb-1">COOLIFY HOST STATUS</div>
              <div className="text-base font-mono font-bold text-emerald-400 flex items-center gap-1.5 mt-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981] animate-pulse"></span>
                ONLINE (100.119.6.69)
              </div>
            </div>
            <div className="w-12 h-12 rounded-lg bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
              <Server className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Global Applications Table */}
        <div className="rounded-xl bg-obsidian-900/80 border border-obsidian-800 overflow-hidden">
          <div className="p-6 border-b border-obsidian-800 flex items-center justify-between">
            <h2 className="text-base font-mono font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" /> All Tenant Deployments (Across All Users)
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-obsidian-950 border-b border-obsidian-800 text-slate-400">
                <tr>
                  <th className="p-4">APP NAME</th>
                  <th className="p-4">DEVELOPER</th>
                  <th className="p-4">DOMAIN / URL</th>
                  <th className="p-4">GIT REPO</th>
                  <th className="p-4">STATUS</th>
                  <th className="p-4 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-obsidian-800 text-slate-300">
                {data?.apps?.map((app: any) => (
                  <tr key={app.id} className="hover:bg-obsidian-800/40 transition-colors">
                    <td className="p-4 font-bold text-white">{app.app_name}</td>
                    <td className="p-4 text-cyber-cyan">{app.owner_username}</td>
                    <td className="p-4">
                      <a
                        href={`http://${app.subdomain}.daeroom.my.id`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyber-cyan hover:underline flex items-center gap-1"
                      >
                        {app.subdomain}.daeroom.my.id <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                    <td className="p-4 max-w-xs truncate text-slate-400">{app.git_repository}</td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        {app.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => handleDeleteApp(app.id)}
                        className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"
                        title="Kill & Delete Container"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Registered Developers */}
        <div className="rounded-xl bg-obsidian-900/80 border border-obsidian-800 overflow-hidden">
          <div className="p-6 border-b border-obsidian-800">
            <h2 className="text-base font-mono font-bold text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-cyber-cyan" /> Registered Developers & Quotas
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-obsidian-950 border-b border-obsidian-800 text-slate-400">
                <tr>
                  <th className="p-4">ID</th>
                  <th className="p-4">USERNAME</th>
                  <th className="p-4">EMAIL</th>
                  <th className="p-4">ROLE</th>
                  <th className="p-4">MAX APPS QUOTA</th>
                  <th className="p-4">JOINED DATE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-obsidian-800 text-slate-300">
                {data?.users?.map((u: any) => (
                  <tr key={u.id} className="hover:bg-obsidian-800/40 transition-colors">
                    <td className="p-4 text-slate-500">#{u.id}</td>
                    <td className="p-4 font-bold text-white">{u.username}</td>
                    <td className="p-4 text-slate-400">{u.email}</td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded ${u.role === 'admin' ? 'bg-amber-400/10 text-amber-400 border border-amber-400/30' : 'bg-slate-800 text-slate-300'}`}>
                        {u.role.toUpperCase()}
                      </span>
                    </td>
                    <td className="p-4">{u.max_apps} Containers (512MB RAM each)</td>
                    <td className="p-4 text-slate-500">{new Date(u.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

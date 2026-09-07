'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Terminal, Lock, User, ArrowRight, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'login', username, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login gagal');

      // Save token to localStorage as well
      localStorage.setItem('dl_user', JSON.stringify(data.user));
      localStorage.setItem('dl_token', data.token);

      if (data.user.role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/dashboard');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-obsidian-950">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
            <div className="w-10 h-10 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan font-mono font-bold group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              DL
            </div>
          </Link>
          <h2 className="text-2xl font-mono font-bold text-white tracking-wide">Developer Console Login</h2>
          <p className="text-sm text-slate-400 mt-1 font-sans">Masuk ke dashboard manajemen deployment Anda</p>
        </div>

        <div className="p-8 rounded-xl bg-obsidian-900/80 border border-obsidian-800 shadow-2xl backdrop-blur-xl">
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center gap-3 text-rose-400 text-xs font-mono">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-2">USERNAME / EMAIL</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="lxion atau dev@daeroom.my.id"
                  className="w-full bg-obsidian-950 border border-obsidian-700 rounded-lg px-4 py-3 text-sm text-white font-mono focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan transition-all placeholder:text-slate-600"
                />
                <User className="w-4 h-4 text-slate-500 absolute right-3.5 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-2">PASSWORD</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-obsidian-950 border border-obsidian-700 rounded-lg px-4 py-3 text-sm text-white font-mono focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan transition-all placeholder:text-slate-600"
                />
                <Lock className="w-4 h-4 text-slate-500 absolute right-3.5 top-3.5" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full font-mono text-sm font-bold bg-cyber-cyan text-black py-3 rounded-lg hover:bg-cyber-cyan/90 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
            >
              {loading ? 'Authenticating...' : 'Sign In to Console'}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-obsidian-800 text-center text-xs font-mono text-slate-400">
            Belum punya akun?{' '}
            <Link href="/register" className="text-cyber-cyan hover:underline font-bold">
              Buat Akun Gratis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

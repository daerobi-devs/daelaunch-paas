'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Terminal, Lock, User, Mail, ArrowRight, AlertCircle, ShieldCheck } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
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
        body: JSON.stringify({ action: 'register', username, email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Registrasi gagal');

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
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 bg-slate-950 text-slate-100 font-sans relative overflow-hidden selection:bg-emerald-500 selection:text-white">
      {/* Background Mesh Gradients - White & Green Accents */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header Branding */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-white p-[1.5px] shadow-xl shadow-emerald-500/20 group-hover:scale-105 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-white text-base">
                DL
              </div>
            </div>
            <span className="font-mono font-extrabold text-white text-2xl tracking-wider">
              DAE<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">LAUNCH</span>
            </span>
          </Link>

          <h2 className="text-2xl font-mono font-bold text-white tracking-tight flex items-center justify-center gap-2">
            Create Developer Account
          </h2>
          <p className="text-xs text-slate-300 mt-2 font-sans font-medium">
            Dapatkan akses deployment gratis dengan sandbox isolasi
          </p>
        </div>

        {/* Register Form Container - High Visibility White/Green Design */}
        <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-white via-emerald-400 to-teal-500"></div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-rose-500/15 border border-rose-500/40 flex items-center gap-3 text-rose-300 text-xs font-mono shadow-sm">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          <div className="mb-6 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-xs text-slate-200 font-sans">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong className="text-emerald-300">Free Tier Account:</strong> Alokasi 2 aplikasi aktif, 512MB RAM limit per container, subdomain gratis <code className="text-emerald-400 font-mono font-bold">*.daeroom.my.id</code>.
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-2">USERNAME</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                  placeholder="username_dev"
                  className="w-full bg-slate-950 border-2 border-slate-700 rounded-xl px-4 py-3 text-sm text-white font-mono placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all font-medium"
                />
                <User className="w-4 h-4 text-emerald-400 absolute right-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-2">EMAIL ADDRESS</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="dev@daeroom.my.id"
                  className="w-full bg-slate-950 border-2 border-slate-700 rounded-xl px-4 py-3 text-sm text-white font-mono placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all font-medium"
                />
                <Mail className="w-4 h-4 text-emerald-400 absolute right-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-2">PASSWORD</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-slate-950 border-2 border-slate-700 rounded-xl px-4 py-3 text-sm text-white font-mono placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all font-medium"
                />
                <Lock className="w-4 h-4 text-emerald-400 absolute right-4 top-3.5" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full font-mono text-sm font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 hover:to-teal-400 text-slate-950 py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-500/25 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                'Creating Account...'
              ) : (
                <>
                  Create Free Account <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-800 text-center text-xs font-mono text-slate-400 flex items-center justify-between">
            <span>Sudah punya akun?</span>
            <Link
              href="/login"
              className="text-emerald-400 hover:text-emerald-300 font-bold hover:underline flex items-center gap-1"
            >
              Sign In <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

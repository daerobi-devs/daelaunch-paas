'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Terminal, Shield, Zap, ArrowRight, Server, Cpu, Database, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Top Navbar */}
      <header className="border-b border-obsidian-800 bg-obsidian-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan font-mono font-bold shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              DL
            </div>
            <div>
              <span className="font-mono font-bold text-lg tracking-wider text-white">DAE<span className="text-cyber-cyan">LAUNCH</span></span>
              <span className="text-[10px] ml-2 px-1.5 py-0.5 rounded bg-obsidian-800 text-slate-400 font-mono border border-obsidian-700">v1.0 PaaS</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-xs font-mono text-slate-300 hover:text-cyber-cyan transition-colors px-3 py-1.5"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="text-xs font-mono font-semibold bg-cyber-cyan text-black px-4 py-2 rounded-md hover:bg-cyber-cyan/90 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center gap-1.5"
            >
              Get Started <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20 flex-1 flex flex-col items-center text-center justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-800/80 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono mb-8 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-cyber-cyan shadow-[0_0_8px_#00F0FF]"></span>
          Personal Developer Cloud Platform
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight sm:leading-none mb-6">
          Deploy GitHub Repos to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-teal-300 to-amber-400">Isolated Cloud Containers</span> in Seconds.
        </h1>

        <p className="text-slate-400 max-w-2xl text-base sm:text-lg mb-10 leading-relaxed font-sans">
          Platform-as-a-Service mandiri bertenaga Coolify & PostgreSQL. Hubungkan repositori Git Anda, dapatkan subdomain instan <code className="text-cyber-cyan bg-obsidian-800 px-1.5 py-0.5 rounded font-mono text-xs">*.daeroom.my.id</code>, dan pantau aplikasi Anda secara real-time.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/register"
            className="w-full sm:w-auto font-mono text-sm font-bold bg-cyber-cyan text-black px-8 py-3.5 rounded-lg hover:bg-cyber-cyan/90 transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 fill-black" /> Launch Your First App
          </Link>
          <Link
            href="/login"
            className="w-full sm:w-auto font-mono text-sm font-semibold bg-obsidian-800/80 border border-obsidian-700 text-slate-200 px-8 py-3.5 rounded-lg hover:bg-obsidian-700 transition-all flex items-center justify-center gap-2"
          >
            <Terminal className="w-4 h-4 text-cyber-cyan" /> Access Console
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full text-left">
          <div className="p-6 rounded-xl bg-obsidian-900/60 border border-obsidian-800 hover:border-cyber-cyan/40 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center text-cyber-cyan mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-mono font-bold text-white text-base mb-2">Automated Nixpacks Build</h3>
            <p className="text-sm text-slate-400 font-sans leading-relaxed">
              Deteksi otomatis Node.js, Python, Go, PHP, Dockerfile tanpa konfigurasi rumit. Cukup masukkan link GitHub Anda.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-obsidian-900/60 border border-obsidian-800 hover:border-amber-400/40 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-mono font-bold text-white text-base mb-2">Strict Tenant Isolation</h3>
            <p className="text-sm text-slate-400 font-sans leading-relaxed">
              Setiap user berjalan di sandbox terisolasi dengan kuota CPU & RAM ketat, melindungi stabilitas host server.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-obsidian-900/60 border border-obsidian-800 hover:border-emerald-400/40 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="font-mono font-bold text-white text-base mb-2">Coolify Host Integration</h3>
            <p className="text-sm text-slate-400 font-sans leading-relaxed">
              Terhubung langsung ke Coolify Engine v4.1.2 dan PostgreSQL central database via secure Tailscale private network.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-obsidian-800 bg-obsidian-900/40 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            DAELAUNCH // ENGINEERED FOR <span className="text-slate-300">MAS DAE (LXION)</span>
          </div>
          <div>
            POWERED BY COOLIFY • PROXMOX • NEXT.JS 15 • POSTGRESQL
          </div>
        </div>
      </footer>
    </div>
  );
}

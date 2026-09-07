'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Terminal, 
  Zap, 
  ShieldCheck, 
  Server, 
  GitBranch, 
  Cpu, 
  Layers, 
  Activity, 
  Globe, 
  CheckCircle2, 
  ChevronRight,
  Code2,
  Lock,
  Box
} from 'lucide-react';

export default function DaeLaunchEditorialLanding() {
  const deployments = [
    {
      repo: 'daerobi-devs/portfolio-v3',
      branch: 'main',
      status: 'HEALTHY',
      domain: 'porto.daeroom.my.id',
      latency: '24ms',
      type: 'Next.js 15'
    },
    {
      repo: 'daerobi-devs/ai-rag-gateway',
      branch: 'master',
      status: 'HEALTHY',
      domain: 'rag.daeroom.my.id',
      latency: '38ms',
      type: 'FastAPI / Python'
    },
    {
      repo: 'daerobi-devs/docs-engine',
      branch: 'main',
      status: 'HEALTHY',
      domain: 'docs.daeroom.my.id',
      latency: '19ms',
      type: 'Astro / Markdown'
    }
  ];

  const features = [
    {
      icon: <Zap className="w-5 h-5 text-forest-800" />,
      tag: 'AUTOMATED NIXPACKS & DOCKER',
      title: 'Zero-Configuration Build Pipeline',
      desc: 'Deteksi otomatis stack aplikasi (Node.js, Python, Go, Rust, PHP, Bun). Cukup masukkan URL repository GitHub, pipeline akan mengompilasi dan mengisolasi container secara mandiri.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-forest-800" />,
      tag: 'MULTI-TENANT SANDBOX',
      title: 'Strict Resource & Security Isolation',
      desc: 'Setiap user beroperasi pada ruang terisolasi dengan kuota CPU, batas memori (512MB RAM), dan jaringan private agar tidak mengganggu stabilitas host server utama.'
    },
    {
      icon: <Globe className="w-5 h-5 text-forest-800" />,
      tag: 'DYNAMIC TRAEFIK ROUTING',
      title: 'Instant Subdomain & SSL Automation',
      desc: 'Alokasi otomatis subdomain *.daeroom.my.id dengan reverse proxy Traefik v3, kompresi gzip/zstd terintegrasi, dan konfigurasi port load balancer otomatis.'
    }
  ];

  const stats = [
    { num: '99.98%', label: 'Container Uptime SLA' },
    { num: '< 45s', label: 'Rata-rata Durasi Build & Deploy' },
    { num: '512 MB', label: 'Batas Alokasi Memori Per Tenant' },
    { num: '100% Free', label: 'Tersedia untuk Pengembang Personal' }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF8] text-[#132A13] font-sans antialiased selection:bg-forest-900 selection:text-white">
      {/* Top Gazette Bar with Deep Forest Green Accent */}
      <div className="border-b border-forest-900/20 bg-forest-950 text-[11px] font-mono tracking-wider py-2 px-6 text-forest-100">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-emerald-300">SYSTEM: DAELAUNCH ENGINE // v1.0 PAAS</span>
            <span className="text-forest-600">•</span>
            <span>SELASA, 08 SEPTEMBER 2026</span>
            <span className="text-forest-600">•</span>
            <span>COOLIFY NODE: LXION HOST</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-forest-300">CENTRAL DB: PGVECTOR:PG18</span>
            <span className="text-forest-600">•</span>
            <span className="bg-forest-800 border border-forest-600/50 text-emerald-200 px-2.5 py-0.5 rounded font-mono text-[10px] tracking-normal font-semibold">
              SERVER STATUS: ALL GREEN
            </span>
          </div>
        </div>
      </div>

      {/* Main Masthead Header */}
      <header className="border-b-4 border-forest-950 bg-white py-8 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-forest-700 font-semibold mb-2">
            <Server className="w-4 h-4 text-forest-600" /> The Autonomous Developer Cloud & Application Platform
          </div>
          <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-forest-950 uppercase border-y-2 border-forest-900/10 py-3 w-full my-2">
            DAELAUNCH // CLOUD PAAS
          </h1>
          <div className="w-full flex items-center justify-between border-b border-forest-900/10 pt-2 pb-1 text-xs font-mono text-forest-800 tracking-wider">
            <span>SELF-HOSTED APPLICATION HOSTING</span>
            <span className="hidden sm:inline">POWERED BY COOLIFY ENGINE & POSTGRESQL</span>
            <span>AUTOMATED • ISOLATED • INSTANT</span>
          </div>
        </div>
      </header>

      {/* Navigation Sub-Bar with Forest Hue */}
      <nav className="border-b border-forest-900/15 bg-forest-900 text-white sticky top-0 z-40 px-6 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8 text-xs font-mono uppercase tracking-wider font-medium text-forest-100">
            <a href="#overview" className="hover:text-emerald-300 transition-colors">Overview</a>
            <a href="#features" className="hover:text-emerald-300 transition-colors">Arsitektur</a>
            <a href="#live-nodes" className="hover:text-emerald-300 transition-colors">Live Containers</a>
            <a href="#specs" className="hover:text-emerald-300 transition-colors">Spesifikasi Quota</a>
            <Link href="/admin" className="hover:text-emerald-300 transition-colors flex items-center gap-1">
              <Lock className="w-3 h-3 text-emerald-400" /> Admin Command
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link 
              href="/login" 
              className="text-xs font-mono text-forest-200 hover:text-white px-3 py-1.5 transition-colors uppercase tracking-wider"
            >
              Sign In
            </Link>
            <Link 
              href="/register" 
              className="text-xs font-mono font-semibold bg-emerald-400 text-forest-950 px-4 py-2 hover:bg-emerald-300 transition-all uppercase tracking-wider flex items-center gap-2 rounded-sm shadow-sm"
            >
              Deploy App Now <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Editorial Front Page Section (Magazine Layout) */}
        <section id="overview" className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-b border-forest-900/20 pb-16">
          {/* Main Headline Feature Column */}
          <div className="lg:col-span-8 flex flex-col justify-between pr-0 lg:pr-8 border-r-0 lg:border-r border-forest-900/20">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-forest-900 bg-forest-100 border border-forest-300 px-3 py-1 mb-5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-forest-700"></span> Public Free-Tier Launch Edisi 2026
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-forest-950 leading-[1.15] mb-6">
                Deploy Repositori GitHub ke Container Cloud Mandiri Tanpa Konfigurasi Rumit.
              </h2>
              <div className="text-forest-900/90 text-base sm:text-lg leading-relaxed space-y-4 mb-8 font-serif">
                <p className="drop-cap">
                  DaeLaunch adalah platform cloud hosting mandiri (PaaS) yang dibangun langsung di atas infrastruktur Coolify Engine dan database PostgreSQL berkinerja tinggi. Dirancang khusus bagi pengembang yang menginginkan kecepatan deployment instan layaknya Vercel atau Render, namun dengan kendali penuh di atas dedicated virtual server.
                </p>
                <p className="font-sans text-sm text-forest-800 leading-relaxed">
                  Cukup daftarkan akun, hubungkan repositori Git publik atau privat Anda, pilih nama subdomain impian di bawah domain <code className="bg-forest-100 px-1.5 py-0.5 rounded text-forest-950 font-mono text-xs">*.daeroom.my.id</code>, dan biarkan sistem orkestrasi container menangani proses build, routing, dan health-checking secara otomatis.
                </p>
              </div>
            </div>

            {/* Terminal Preview Bento */}
            <div className="border-l-4 border-forest-800 pl-6 py-4 my-6 bg-forest-50/70 border-r border-y border-forest-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-forest-800 font-bold uppercase tracking-wider">
                  $ DAELAUNCH CLI ORCHESTRATION PIPELINE
                </span>
                <span className="font-mono text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-semibold">
                  SECURE PROXY ACTIVE
                </span>
              </div>
              <pre className="font-mono text-xs text-forest-950 overflow-x-auto p-2 bg-white/80 border border-forest-200 rounded">
                <code>{`> git push origin master
> [Coolify Engine] Fetching repository: daerobi-devs/app ...
> [Nixpacks] Autodetected Node.js environment (v22 Alpine)
> [Traefik] Router assigned: https://app.daeroom.my.id (Port 3000)
> [HealthCheck] Status 200 OK — Deployment Live in 34s`}</code>
              </pre>
            </div>

            {/* Quick Feature Metric Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-forest-900/15">
              {stats.map((st, i) => (
                <div key={i} className="flex flex-col bg-white p-3 border border-forest-200 rounded-sm">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">{st.num}</span>
                  <span className="font-mono text-[10px] text-forest-700 uppercase tracking-tight mt-1 font-medium">{st.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Gazette Sidebar Column */}
          <div className="lg:col-span-4 flex flex-col space-y-8">
            <div className="border-b border-forest-900/20 pb-4">
              <div className="flex items-center justify-between pb-2 border-b-2 border-forest-900 mb-4">
                <h3 className="font-mono text-xs uppercase tracking-widest font-bold text-forest-950">
                  Live Container Node
                </h3>
                <span className="font-mono text-[10px] text-forest-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> ACTIVE
                </span>
              </div>
              <div className="space-y-4">
                {deployments.map((dep, idx) => (
                  <div key={idx} className="bg-white p-4 border border-forest-200 hover:border-forest-700 transition-all rounded-sm shadow-sm">
                    <div className="flex items-center justify-between text-[10px] font-mono text-forest-600 mb-1.5">
                      <span className="text-forest-900 font-bold bg-forest-100 px-1.5 py-0.5 rounded">{dep.type}</span>
                      <span className="text-emerald-700 font-semibold">{dep.status}</span>
                    </div>
                    <h4 className="font-mono text-xs font-bold text-forest-950 truncate mb-1">
                      {dep.repo}
                    </h4>
                    <div className="flex items-center justify-between text-[11px] font-mono text-forest-700">
                      <span className="text-emerald-800 underline">{dep.domain}</span>
                      <span className="text-forest-500">{dep.latency}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Deploy Box with Green Accent Banner */}
            <div className="border border-forest-900/20 bg-forest-900 text-white p-6 shadow-md rounded-sm">
              <div className="font-mono text-[10px] uppercase tracking-wider text-emerald-300 font-bold mb-2">
                1-Click Developer Portal
              </div>
              <h4 className="font-serif text-xl font-bold text-white mb-2">
                Siap Meluncurkan Proyek Baru?
              </h4>
              <p className="text-xs text-forest-100/90 leading-relaxed font-sans mb-4">
                Daftar sekarang untuk mendapatkan alokasi kuota 2 aplikasi mandiri, SSL otomatis Let&apos;s Encrypt, dan pemantauan log real-time gratis.
              </p>
              <Link 
                href="/register" 
                className="w-full font-mono text-xs font-bold bg-emerald-400 text-forest-950 py-2.5 px-4 rounded-sm flex items-center justify-center gap-2 hover:bg-emerald-300 transition-colors"
              >
                Buka Developer Console <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Technical Architecture Bento Section */}
        <section id="features" className="py-16 border-b border-forest-900/20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-forest-900/10">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-forest-700 font-bold mb-1">
                ENGINEERING ARCHITECTURE
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
                Pondasi Infrastruktur & Keamanan Mandiri
              </h2>
            </div>
            <p className="font-mono text-xs text-forest-700 max-w-sm mt-3 sm:mt-0">
              Menghubungkan API Coolify v4.1.2 dengan proxy isolasi multi-tenant yang aman dan teruji.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div 
                key={idx} 
                className="border border-forest-200 p-8 bg-white hover:border-forest-800 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 border border-forest-300 bg-forest-50 flex items-center justify-center mb-6 group-hover:bg-forest-900 group-hover:text-white transition-colors">
                    {feat.icon}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-forest-700 font-semibold mb-2">
                    {feat.tag}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-forest-950 mb-3 group-hover:text-forest-800">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-forest-800/90 font-sans leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-forest-100 flex items-center justify-between text-xs font-mono text-forest-700 font-medium">
                  <span>Lihat Dokumentasi Teknis</span>
                  <ChevronRight className="w-4 h-4 text-forest-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quota Specs Grid */}
        <section id="specs" className="py-16 border-b border-forest-900/20">
          <div className="font-mono text-xs uppercase tracking-widest text-forest-700 font-bold mb-1">
            TIER SPECIFICATIONS
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 mb-8">
            Spesifikasi Sandbox & Batas Sumber Daya
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="border border-forest-200 p-5 bg-white flex flex-col justify-between hover:border-forest-700 transition-colors shadow-sm">
              <div>
                <div className="font-mono text-[11px] font-bold text-forest-800 mb-1">01 // MEMORY ALLOCATION</div>
                <div className="font-serif text-lg font-bold text-forest-950 mb-2">512 MB RAM / App</div>
                <p className="text-xs text-forest-800/80 font-sans leading-relaxed">
                  Cukup untuk menjalankan microservices modern, Next.js dynamic apps, backend REST API, atau bot.
                </p>
              </div>
              <div className="font-mono text-[10px] text-forest-600 pt-4 mt-4 border-t border-forest-100 font-semibold">
                HARD LIMIT WITH SWAP PROTECTION
              </div>
            </div>

            <div className="border border-forest-200 p-5 bg-forest-50/60 flex flex-col justify-between hover:border-forest-700 transition-colors shadow-sm">
              <div>
                <div className="font-mono text-[11px] font-bold text-forest-800 mb-1">02 // COMPUTING CORE</div>
                <div className="font-serif text-lg font-bold text-forest-950 mb-2">0.5 vCPU Core Share</div>
                <p className="text-xs text-forest-800/80 font-sans leading-relaxed">
                  Resource scheduling yang adil guna mencegah satu aplikasi menghabiskan thread prosesor host.
                </p>
              </div>
              <div className="font-mono text-[10px] text-forest-600 pt-4 mt-4 border-t border-forest-100 font-semibold">
                FAIR SHARE CPU CFS SCHEDULER
              </div>
            </div>

            <div className="border border-forest-200 p-5 bg-white flex flex-col justify-between hover:border-forest-700 transition-colors shadow-sm">
              <div>
                <div className="font-mono text-[11px] font-bold text-forest-800 mb-1">03 // APP CONCURRENCY</div>
                <div className="font-serif text-lg font-bold text-forest-950 mb-2">2 Active Containers</div>
                <p className="text-xs text-forest-800/80 font-sans leading-relaxed">
                  Setiap akun pengembang mendapatkan jatah 2 aplikasi aktif simultan untuk proyek frontend & backend.
                </p>
              </div>
              <div className="font-mono text-[10px] text-forest-600 pt-4 mt-4 border-t border-forest-100 font-semibold">
                FREE TIER DEFAULT QUOTA
              </div>
            </div>

            <div className="border border-forest-200 p-5 bg-forest-50/60 flex flex-col justify-between hover:border-forest-700 transition-colors shadow-sm">
              <div>
                <div className="font-mono text-[11px] font-bold text-forest-800 mb-1">04 // DOMAIN & SSL</div>
                <div className="font-serif text-lg font-bold text-forest-950 mb-2">Instant Subdomain</div>
                <p className="text-xs text-forest-800/80 font-sans leading-relaxed">
                  Subdomain kustom langsung di bawah *.daeroom.my.id dengan sertifikat SSL otomatis HTTPS.
                </p>
              </div>
              <div className="font-mono text-[10px] text-forest-600 pt-4 mt-4 border-t border-forest-100 font-semibold">
                WILDCARD TRAEFIK ROUTING
              </div>
            </div>
          </div>
        </section>

        {/* PPDB / Register Callout Banner */}
        <section className="py-16 bg-forest-950 text-white p-8 sm:p-14 my-8 rounded-sm shadow-xl border border-forest-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-300 mb-3 bg-forest-900 px-3 py-1 rounded">
              <Zap className="w-3.5 h-3.5 text-emerald-400" /> SELF-HOSTED PAAS ENGINE AKTIF
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Mulai Hosting Aplikasi Web Anda dalam Hitungan Menit.
            </h2>
            <p className="text-forest-200 font-sans text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
              DaeLaunch menyediakan platform cloud tanpa biaya lisensi pihak ketiga, terisolasi dengan aman di atas server Coolify mandiri.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-mono text-xs">
              <Link 
                href="/register" 
                className="bg-emerald-400 text-forest-950 font-bold px-8 py-3.5 hover:bg-emerald-300 transition-colors uppercase tracking-wider flex items-center gap-2 w-full sm:w-auto justify-center rounded-sm"
              >
                Buat Akun & Deploy Repositori <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/login" 
                className="border border-forest-700 text-forest-200 px-8 py-3.5 hover:border-emerald-400 hover:text-white transition-colors uppercase tracking-wider w-full sm:w-auto justify-center rounded-sm"
              >
                Akses Developer Console
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Gazette Style Footer */}
      <footer className="border-t-4 border-forest-950 bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-forest-200 text-xs font-sans">
          <div>
            <div className="font-serif text-lg font-bold text-forest-950 mb-3 flex items-center gap-2">
              <Server className="w-5 h-5 text-forest-700" /> DAELAUNCH // PAAS
            </div>
            <p className="text-forest-800/80 leading-relaxed mb-4">
              Autonomous Cloud Platform & Micro-PaaS engine untuk personal server hosting bertenaga Coolify & Next.js.
            </p>
            <div className="font-mono text-[11px] text-forest-600 font-medium">
              NODE HOST: 100.119.6.69 • ENGINE v4.1.2
            </div>
          </div>

          <div>
            <div className="font-mono font-bold uppercase tracking-wider text-forest-950 mb-3">
              INFRASTRUKTUR
            </div>
            <div className="text-forest-800 space-y-2 font-mono text-[11px]">
              <div>• Proxmox VE Dedicated Hypervisor</div>
              <div>• Central Database: PostgreSQL pgvector:pg18</div>
              <div>• Traefik v3 Reverse Proxy & Load Balancer</div>
              <div>• Tailscale Private Encrypted Mesh Network</div>
            </div>
          </div>

          <div>
            <div className="font-mono font-bold uppercase tracking-wider text-forest-950 mb-3">
              PORTAL NAVIGASI
            </div>
            <ul className="space-y-1.5 text-forest-800 font-mono text-[11px]">
              <li><Link href="/login" className="hover:text-forest-950 hover:underline">Developer Console</Link></li>
              <li><Link href="/register" className="hover:text-forest-950 hover:underline">Registrasi Akun Baru</Link></li>
              <li><Link href="/admin" className="hover:text-forest-950 hover:underline">Admin Command Center</Link></li>
              <li><a href="#specs" className="hover:text-forest-950 hover:underline">Resource Quota</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono font-bold uppercase tracking-wider text-forest-950 mb-3">
              KEAMANAN & PRIVASI
            </div>
            <p className="text-forest-800/80 leading-relaxed mb-3">
              Seluruh deployment terisolasi secara kriptografis dan dibatasi kuota kernel Linux cgroups v2.
            </p>
            <div className="font-mono text-[10px] text-forest-700 uppercase font-semibold">
              ENGINEERED FOR MAS DAE (LXION)
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-forest-700 gap-4">
          <div>
            © 2026 DAELAUNCH PAAS. POWERED BY COOLIFY ENGINE.
          </div>
          <div>
            EDITORIAL GAZETTE THEME // WHITE & DEEP FOREST GREEN
          </div>
        </div>
      </footer>
    </div>
  );
}

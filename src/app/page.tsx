'use client';

import React from 'react';
import { 
  ArrowUpRight, 
  BookOpen, 
  Award, 
  Users, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Compass, 
  Sparkles, 
  ChevronRight,
  GraduationCap,
  Microscope,
  Palette,
  ShieldCheck,
  CheckCircle2,
  TreePine,
  Library
} from 'lucide-react';

export default function SchoolLandingPage() {
  const articles = [
    {
      category: 'WARTA UTAMA',
      date: '08 September 2026',
      readTime: '4 mnt baca',
      title: 'Transformasi Kurikulum Berbasis AI & Riset Terapan Hijau di SMA Cendekia Nusantara',
      desc: 'Mempersiapkan generasi cendekiawan muda dengan pemahaman teknologi komputasi berkelanjutan dan penguasaan bioteknologi terapan.',
      author: 'Dr. Hardiansyah, M.Kom. — Kepala Dewan Pembina',
      highlight: true
    },
    {
      category: 'PRESTASI SISWA',
      date: '04 September 2026',
      readTime: '3 mnt baca',
      title: 'Tim Robotika & Biosains Raih Medali Emas Olimpiade Sains Nasional 2026',
      desc: 'Inovasi sensor pertanian hidroponik berbasis sensor cerdas karya siswa kelas XI berhasil mengungguli 84 sekolah unggulan nasional.',
      author: 'Redaksi Sains & Robotik'
    },
    {
      category: 'KABAR KAMPUS',
      date: '01 September 2026',
      readTime: '2 mnt baca',
      title: 'Simposium Kebudayaan & Pameran Herbarium Siswa Edisi Semester Ganjil',
      desc: 'Pameran karya dokumentasi biodiversitas lokal dan pementasan teater sastra tradisional dalam tajuk Cendekia Eco-Art Festival.',
      author: 'Sie Kesenian & Lingkungan Hidup'
    }
  ];

  const programs = [
    {
      icon: <Microscope className="w-5 h-5 text-forest-800" />,
      tag: 'FAKULTAS SAINS & TEKNOLOGI',
      title: 'Advanced STEM & Biodiversity Computing',
      desc: 'Kurikulum mendalam tentang data science lingkungan, bioteknologi terapan, robotika otomasi, dan matematika murni.'
    },
    {
      icon: <Palette className="w-5 h-5 text-forest-800" />,
      tag: 'FAKULTAS HUMANIORA & SENI',
      title: 'Literary Arts, Philosophy & Global Diplomacy',
      desc: 'Pengasahan kemampuan berpikir kritis, debat Model United Nations (MUN), jurnalisme investigatif, dan etika komunikasi global.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-forest-800" />,
      tag: 'KEPEMIMPINAN & KARAKTER',
      title: 'Leadership & Sustainable Impact Incubator',
      desc: 'Program pengabdian masyarakat terstruktur, kepanduan alam terbuka, dan inkubasi wirausaha sosial berbasis kelestarian ekologis.'
    }
  ];

  const stats = [
    { num: '98.4%', label: 'Lulusan Diterima di PTN & Top Global Campus' },
    { num: '42+', label: 'Riset Siswa Terbit di Jurnal Nasional' },
    { num: '1 : 12', label: 'Rasio Guru & Siswa untuk Mentoring Maksimal' },
    { num: '100%', label: 'Akreditasi A Unggul (BAN-SM)' }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF8] text-[#132A13] font-sans antialiased selection:bg-forest-900 selection:text-white">
      {/* Top Gazette Bar with Deep Forest Green Accent */}
      <div className="border-b border-forest-900/20 bg-forest-950 text-[11px] font-mono tracking-wider py-2 px-6 text-forest-100">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-emerald-300">EDISI: VOL. XXIV // NO. 09</span>
            <span className="text-forest-600">•</span>
            <span>SELASA, 08 SEPTEMBER 2026</span>
            <span className="text-forest-600">•</span>
            <span>JAKARTA SELATAN, INDONESIA</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-forest-300">KODE NPSN: 20108922</span>
            <span className="text-forest-600">•</span>
            <span className="bg-forest-800 border border-forest-600/50 text-emerald-200 px-2.5 py-0.5 rounded font-mono text-[10px] tracking-normal font-semibold">
              AKREDITASI A UNGGUL
            </span>
          </div>
        </div>
      </div>

      {/* Main Masthead Header */}
      <header className="border-b-4 border-forest-950 bg-white py-8 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-forest-700 font-semibold mb-2">
            <TreePine className="w-4 h-4 text-forest-600" /> The Journal of Academic Excellence & Sustainable Character
          </div>
          <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-forest-950 uppercase border-y-2 border-forest-900/10 py-3 w-full my-2">
            SMA CENDEKIA NUSANTARA
          </h1>
          <div className="w-full flex items-center justify-between border-b border-forest-900/10 pt-2 pb-1 text-xs font-mono text-forest-800 tracking-wider">
            <span>SEKOLAH MENENGAH ATAS UNGGULAN RISET & SENI</span>
            <span className="hidden sm:inline">DIRIDHOI SEJAK 1998</span>
            <span>VERITAS • VIRTUS • EXCELLENTIA</span>
          </div>
        </div>
      </header>

      {/* Navigation Sub-Bar with Forest Hue */}
      <nav className="border-b border-forest-900/15 bg-forest-900 text-white sticky top-0 z-40 px-6 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8 text-xs font-mono uppercase tracking-wider font-medium text-forest-100">
            <a href="#profil" className="hover:text-emerald-300 transition-colors">Profil Sekolah</a>
            <a href="#kurikulum" className="hover:text-emerald-300 transition-colors">Kurikulum</a>
            <a href="#prestasi" className="hover:text-emerald-300 transition-colors">Prestasi</a>
            <a href="#warta" className="hover:text-emerald-300 transition-colors">Warta & Berita</a>
            <a href="#galeri" className="hover:text-emerald-300 transition-colors">Fasilitas</a>
            <a href="#kontak" className="hover:text-emerald-300 transition-colors">Kontak</a>
          </div>
          <a 
            href="#pendaftaran" 
            className="text-xs font-mono font-semibold bg-emerald-400 text-forest-950 px-4 py-2 hover:bg-emerald-300 transition-all uppercase tracking-wider flex items-center gap-2 rounded-sm shadow-sm"
          >
            Pendaftaran PPDB 2026 <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Editorial Front Page Section (Magazine Layout) */}
        <section id="profil" className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-b border-forest-900/20 pb-16">
          {/* Main Headline Feature Column */}
          <div className="lg:col-span-8 flex flex-col justify-between pr-0 lg:pr-8 border-r-0 lg:border-r border-forest-900/20">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-forest-900 bg-forest-100 border border-forest-300 px-3 py-1 mb-5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-forest-700"></span> Editorial Utama Edisi 2026/2027
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-forest-950 leading-[1.15] mb-6">
                Membentuk Pola Pikir Saintifik, Integritas Luhur, dan Kepemimpinan Visioner Generasi Bangsa.
              </h2>
              <div className="text-forest-900/90 text-base sm:text-lg leading-relaxed space-y-4 mb-8 font-serif">
                <p className="drop-cap">
                  SMA Cendekia Nusantara berdiri di atas pondasi kuat integrasi antara riset keilmuan mutakhir dan nilai kelestarian budi pekerti nusantara. Kami meyakini bahwa pendidikan tingkat menengah bukan sekadar jembatan menuju perguruan tinggi terkemuka, melainkan kawah candradimuka tempat integritas moral ditempa.
                </p>
                <p className="font-sans text-sm text-forest-800 leading-relaxed">
                  Dengan kurikulum adaptif berbasis proyek mandiri, laboratorium digital & sains modern, serta bimbingan intensif dari para akademisi berdedikasi, siswa didorong untuk aktif memecahkan tantangan riil masyarakat melalui karya nyata dan inovasi terapan.
                </p>
              </div>
            </div>

            {/* Quote of the Month Bento in Forest Green Frame */}
            <div className="border-l-4 border-forest-800 pl-6 py-4 my-6 bg-forest-50/70 border-r border-y border-forest-200">
              <blockquote className="font-serif italic text-lg sm:text-xl text-forest-950">
                &ldquo;Pendidikan sejati tidak hanya mengisi bejana pengetahuan, tetapi menyalakan api rasa ingin tahu dan keberanian moral untuk berkontribusi bagi kelestarian peradaban.&rdquo;
              </blockquote>
              <div className="font-mono text-xs text-forest-700 uppercase tracking-wider mt-2.5 font-semibold">
                — Ir. H. Prabowo Soemitro, Ph.D. // Pendiri Yayasan Cendekia
              </div>
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
                  Warta Terkini Sekolah
                </h3>
                <span className="font-mono text-[10px] text-forest-600">LIVE FEED</span>
              </div>
              <div className="space-y-6">
                {articles.map((art, idx) => (
                  <article key={idx} className="group cursor-pointer bg-white p-4 border border-forest-200 hover:border-forest-700 transition-all">
                    <div className="flex items-center justify-between text-[10px] font-mono text-forest-600 mb-1.5">
                      <span className="text-forest-900 font-bold bg-forest-100 px-1.5 py-0.5 rounded">{art.category}</span>
                      <span>{art.date}</span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-forest-950 group-hover:text-forest-700 transition-colors leading-snug mb-2">
                      {art.title}
                    </h4>
                    <p className="text-xs text-forest-800/80 line-clamp-2 mb-2 font-sans">
                      {art.desc}
                    </p>
                    <div className="text-[10px] font-mono text-forest-600 italic">
                      Penulis: {art.author}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Principal Welcome Box with Green Accent Banner */}
            <div className="border border-forest-900/20 bg-forest-900 text-white p-6 shadow-md rounded-sm">
              <div className="font-mono text-[10px] uppercase tracking-wider text-emerald-300 font-bold mb-2">
                Prakata Kepala Sekolah
              </div>
              <h4 className="font-serif text-xl font-bold text-white mb-2">
                Dra. Hj. Nurul Fadilah, M.Pd.
              </h4>
              <p className="text-xs text-forest-100/90 leading-relaxed font-sans mb-4">
                Selamat datang di portal warta resmi SMA Cendekia Nusantara. Kami menyajikan transparansi kegiatan, kultur riset unggulan, dan wadah prestasi bagi seluruh civitas akademika dan orang tua murid.
              </p>
              <div className="font-mono text-[10px] text-emerald-300/80 border-t border-forest-800 pt-3">
                SK Izin Operasional: No. 421.3/982/Disdik-2026
              </div>
            </div>
          </div>
        </section>

        {/* Academic Program Section (Curriculum Bento) */}
        <section id="kurikulum" className="py-16 border-b border-forest-900/20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-forest-900/10">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-forest-700 font-bold mb-1">
                PILAR PENDIDIKAN & KURIKULUM
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
                Peminatan Khusus & Laboratorium Keunggulan
              </h2>
            </div>
            <p className="font-mono text-xs text-forest-700 max-w-sm mt-3 sm:mt-0">
              Kurikulum adaptif berstandar nasional & internasional diselaraskan dengan pendekatan kurikulum merdeka berbasis riset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((prog, idx) => (
              <div 
                key={idx} 
                className="border border-forest-200 p-8 bg-white hover:border-forest-800 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 border border-forest-300 bg-forest-50 flex items-center justify-center mb-6 group-hover:bg-forest-900 group-hover:text-white transition-colors">
                    {prog.icon}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-forest-700 font-semibold mb-2">
                    {prog.tag}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-forest-950 mb-3 group-hover:text-forest-800">
                    {prog.title}
                  </h3>
                  <p className="text-sm text-forest-800/90 font-sans leading-relaxed">
                    {prog.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-forest-100 flex items-center justify-between text-xs font-mono text-forest-700 font-medium">
                  <span>Lihat Silabus Lengkap</span>
                  <ChevronRight className="w-4 h-4 text-forest-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Campus Facilities & Culture Magazine Photo Section */}
        <section id="galeri" className="py-16 border-b border-forest-900/20">
          <div className="font-mono text-xs uppercase tracking-widest text-forest-700 font-bold mb-1">
            ATMOSFER BELAJAR & EKOSISTEM
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 mb-8">
            Ruang Diskusi & Fasilitas Riset Siswa
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="border border-forest-200 p-5 bg-white flex flex-col justify-between hover:border-forest-700 transition-colors shadow-sm">
              <div>
                <div className="font-mono text-[11px] font-bold text-forest-800 mb-1">01 // PERPUSTAKAAN DIGITAL</div>
                <div className="font-serif text-lg font-bold text-forest-950 mb-2">Graha Pustaka Cendekia</div>
                <p className="text-xs text-forest-800/80 font-sans leading-relaxed">
                  Koleksi 15.000+ buku fisik, akses jurnal internasional IEEE & Nature, serta ruang hening untuk studi literatur.
                </p>
              </div>
              <div className="font-mono text-[10px] text-forest-600 pt-4 mt-4 border-t border-forest-100 font-semibold">
                KAPASITAS: 200 PEMBACA
              </div>
            </div>

            <div className="border border-forest-200 p-5 bg-forest-50/60 flex flex-col justify-between hover:border-forest-700 transition-colors shadow-sm">
              <div>
                <div className="font-mono text-[11px] font-bold text-forest-800 mb-1">02 // SAINS & BIOTEKNOLOGI</div>
                <div className="font-serif text-lg font-bold text-forest-950 mb-2">Laboratorium Terpadu</div>
                <p className="text-xs text-forest-800/80 font-sans leading-relaxed">
                  Mikroskop elektron, instrumen spektroskopi dasar, dan fasilitas steril budidaya kultur jaringan tanaman.
                </p>
              </div>
              <div className="font-mono text-[10px] text-forest-600 pt-4 mt-4 border-t border-forest-100 font-semibold">
                STANDAR K3 INTERNASIONAL
              </div>
            </div>

            <div className="border border-forest-200 p-5 bg-white flex flex-col justify-between hover:border-forest-700 transition-colors shadow-sm">
              <div>
                <div className="font-mono text-[11px] font-bold text-forest-800 mb-1">03 // SENI & TEATER</div>
                <div className="font-serif text-lg font-bold text-forest-950 mb-2">Auditorium Sasana Budaya</div>
                <p className="text-xs text-forest-800/80 font-sans leading-relaxed">
                  Panggung akustik profesional untuk orkestra, pementasan drama tradisi, orasi ilmiah, dan wisuda akbar.
                </p>
              </div>
              <div className="font-mono text-[10px] text-forest-600 pt-4 mt-4 border-t border-forest-100 font-semibold">
                AKUSTIK PROFESIONAL 800 KURSI
              </div>
            </div>

            <div className="border border-forest-200 p-5 bg-forest-50/60 flex flex-col justify-between hover:border-forest-700 transition-colors shadow-sm">
              <div>
                <div className="font-mono text-[11px] font-bold text-forest-800 mb-1">04 // KOMPUTASI & AI</div>
                <div className="font-serif text-lg font-bold text-forest-950 mb-2">High Performance Lab</div>
                <p className="text-xs text-forest-800/80 font-sans leading-relaxed">
                  Workstation komputasi grafis dan cloud untuk eksperimen model machine learning serta cybersecurity.
                </p>
              </div>
              <div className="font-mono text-[10px] text-forest-600 pt-4 mt-4 border-t border-forest-100 font-semibold">
                FIBER OPTIC GIGABIT CONNECTION
              </div>
            </div>
          </div>
        </section>

        {/* Admission / PPDB Registration Callout with Bold Dark Forest Banner */}
        <section id="pendaftaran" className="py-16 bg-forest-950 text-white p-8 sm:p-14 my-8 rounded-sm shadow-xl border border-forest-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-300 mb-3 bg-forest-900 px-3 py-1 rounded">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> PPDB TAHUN AJARAN 2026/2027 DIBUKA
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Bergabung Bersama Komunitas Pembelajar Berkarakter Unggul & Peduli Lingkungan.
            </h2>
            <p className="text-forest-200 font-sans text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
              Pendaftaran Jalur Prestasi Akademik, Riset Sains Lingkungan, dan Minat Bakat Seni dibuka mulai 10 September hingga 30 Oktober 2026. Disediakan beasiswa penuh bagi calon siswa berprestasi tinggi.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-mono text-xs">
              <button className="bg-emerald-400 text-forest-950 font-bold px-8 py-3.5 hover:bg-emerald-300 transition-colors uppercase tracking-wider flex items-center gap-2 w-full sm:w-auto justify-center rounded-sm">
                Unduh Brosur & Panduan Pendaftaran <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="border border-forest-700 text-forest-200 px-8 py-3.5 hover:border-emerald-400 hover:text-white transition-colors uppercase tracking-wider w-full sm:w-auto justify-center rounded-sm">
                Konsultasi Layanan PPDB Online
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Gazette Style Footer */}
      <footer id="kontak" className="border-t-4 border-forest-950 bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-forest-200 text-xs font-sans">
          <div>
            <div className="font-serif text-lg font-bold text-forest-950 mb-3 flex items-center gap-2">
              <TreePine className="w-5 h-5 text-forest-700" /> SMA CENDEKIA NUSANTARA
            </div>
            <p className="text-forest-800/80 leading-relaxed mb-4">
              Lembaga pendidikan menengah atas berfokus pada integrasi sains terapan, literasi humaniora, dan pembentukan kepemimpinan etis berwawasan global.
            </p>
            <div className="font-mono text-[11px] text-forest-600 font-medium">
              NPSN: 20108922 • NSS: 301016001002
            </div>
          </div>

          <div>
            <div className="font-mono font-bold uppercase tracking-wider text-forest-950 mb-3">
              ALAMAT KAMPUS
            </div>
            <div className="text-forest-800 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                <span>Jl. Cendekia Raya No. 45, Bintaro Jaya Sektor 7, Tangerang Selatan, Banten 15412</span>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <Phone className="w-4 h-4 text-forest-700 shrink-0" />
                <span>+62 (21) 745-8900</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-forest-700 shrink-0" />
                <span>sekretariat@cendekianusantara.sch.id</span>
              </div>
            </div>
          </div>

          <div>
            <div className="font-mono font-bold uppercase tracking-wider text-forest-950 mb-3">
              NAVIGASI CEPAT
            </div>
            <ul className="space-y-1.5 text-forest-800 font-mono text-[11px]">
              <li><a href="#profil" className="hover:text-forest-950 hover:underline">Sejarah & Visi Misi</a></li>
              <li><a href="#kurikulum" className="hover:text-forest-950 hover:underline">Struktur Kurikulum Merdeka</a></li>
              <li><a href="#prestasi" className="hover:text-forest-950 hover:underline">Daftar Kejuaraan & Prestasi</a></li>
              <li><a href="#galeri" className="hover:text-forest-950 hover:underline">Fasilitas Laboratorium</a></li>
              <li><a href="#pendaftaran" className="hover:text-forest-950 hover:underline">Alur Pendaftaran PPDB</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono font-bold uppercase tracking-wider text-forest-950 mb-3">
              DEWAN REDAKSI WARTA
            </div>
            <p className="text-forest-800/80 leading-relaxed mb-3">
              Dikelola oleh Biro Humas & Informasi Publik SMA Cendekia Nusantara. Terbit berkala mingguan secara cetak dan digital.
            </p>
            <div className="font-mono text-[10px] text-forest-700 uppercase font-semibold">
              TERDAFTAR DI KEMENDIKBUDRISTEK RI
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-forest-700 gap-4">
          <div>
            © 2026 SMA CENDEKIA NUSANTARA. SELURUH HAK CIPTA DILINDUNGI UNDANG-UNDANG.
          </div>
          <div>
            EDITORIAL GAZETTE THEME // WHITE & DEEP FOREST GREEN
          </div>
        </div>
      </footer>
    </div>
  );
}

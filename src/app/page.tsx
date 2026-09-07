'use client';

import React, { useState } from 'react';
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
  ShieldCheck
} from 'lucide-react';

export default function SchoolLandingPage() {
  const [activeTab, setActiveTab] = useState('akademik');

  const articles = [
    {
      category: 'WARTA UTAMA',
      date: '08 September 2026',
      readTime: '4 mnt baca',
      title: 'Transformasi Kurikulum Berbasis AI & Riset Terapan di SMA Cendekia Nusantara',
      desc: 'Mempersiapkan generasi cendekiawan muda dengan pemahaman teknologi komputasi etis dan penguasaan sains modern sejak bangku menengah.',
      author: 'Dr. Hardiansyah, M.Kom. — Kepala Dewan Pembina',
      highlight: true
    },
    {
      category: 'PRESTASI SISWA',
      date: '04 September 2026',
      readTime: '3 mnt baca',
      title: 'Tim Robotika Nusantara Raih Juara 1 Olimpiade Otomasi Tingkat Nasional',
      desc: 'Inovasi robot pemantau lingkungan karya siswa kelas XI berhasil mengungguli 84 sekolah unggulan se-Indonesia.',
      author: 'Redaksi Sains & Robotik'
    },
    {
      category: 'KABAR KAMPUS',
      date: '01 September 2026',
      readTime: '2 mnt baca',
      title: 'Simposium Kebudayaan & Galeri Seni Rupa Siswa Edisi Musim Gugur 2026',
      desc: 'Pameran karya lukis, arsitektur mini, dan pementasan teater sastra tradisional dalam tajuk Cendekia Art Fair.',
      author: 'Sie Kesenian & Budaya'
    }
  ];

  const programs = [
    {
      icon: <Microscope className="w-5 h-5 text-neutral-800" />,
      tag: 'FAKULTAS SAINS & TEKNOLOGI',
      title: 'Advanced STEM & Artificial Intelligence Lab',
      desc: 'Kurikulum mendalam tentang data science dasar, robotika, bioteknologi, dan matematika murni.'
    },
    {
      icon: <Palette className="w-5 h-5 text-neutral-800" />,
      tag: 'FAKULTAS HUMANIORA & SENI',
      title: 'Literary Arts, Philosophy & Global Diplomacy',
      desc: 'Fokus pada kemampuan berpikir kritis, debat internasional (Model UN), jurnalisme investigatif, dan sastra.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-neutral-800" />,
      tag: 'KEPEMIMPINAN & KARAKTER',
      title: 'Leadership & Social Impact Incubator',
      desc: 'Program pengabdian masyarakat terstruktur, kepanduan modern, dan inkubasi proyek wirausaha sosial siswa.'
    }
  ];

  const stats = [
    { num: '98.4%', label: 'Lulusan Diterima di PTN & Top Global Campus' },
    { num: '42+', label: 'Riset Siswa Terbit di Jurnal Nasional' },
    { num: '1 : 12', label: 'Rasio Guru & Siswa untuk Mentoring Maksimal' },
    { num: '100%', label: 'Akreditasi A Unggul (BAN-SM)' }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans antialiased selection:bg-neutral-900 selection:text-white">
      {/* Top Gazette Bar */}
      <div className="border-b border-neutral-300/80 bg-[#F4F1EA] text-[11px] font-mono tracking-wider py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-neutral-600 gap-2">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-neutral-900">EDISI: VOL. XXIV // NO. 09</span>
            <span>•</span>
            <span>SELASA, 08 SEPTEMBER 2026</span>
            <span>•</span>
            <span>JAKARTA SELATAN, INDONESIA</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-neutral-500">KODE NPSN: 20108922</span>
            <span>•</span>
            <span className="bg-neutral-900 text-white px-2 py-0.5 rounded font-mono text-[10px] tracking-normal">AKREDITASI A UNGGUL</span>
          </div>
        </div>
      </div>

      {/* Main Masthead Header */}
      <header className="border-b-4 border-neutral-900 bg-[#FAF9F6] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="text-[12px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-2">
            The Journal of Academic Excellence & Character Development
          </div>
          <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-neutral-950 uppercase border-y border-neutral-200 py-3 w-full my-2">
            SMA CENDEKIA NUSANTARA
          </h1>
          <div className="w-full flex items-center justify-between border-b border-neutral-300 pt-2 pb-1 text-xs font-mono text-neutral-600 tracking-wider">
            <span>SEKOLAH MENENGAH ATAS UNGGULAN RISET & SENI</span>
            <span>DIRIDHOI SEJAK 1998</span>
            <span>VERITAS • VIRTUS • EXCELLENTIA</span>
          </div>
        </div>
      </header>

      {/* Navigation Sub-Bar */}
      <nav className="border-b border-neutral-300 bg-[#F4F1EA]/60 backdrop-blur-sm sticky top-0 z-40 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8 text-xs font-mono uppercase tracking-wider font-medium text-neutral-700">
            <a href="#profil" className="hover:text-neutral-950 hover:underline underline-offset-4 transition-colors">Profil Sekolah</a>
            <a href="#kurikulum" className="hover:text-neutral-950 hover:underline underline-offset-4 transition-colors">Kurikulum</a>
            <a href="#prestasi" className="hover:text-neutral-950 hover:underline underline-offset-4 transition-colors">Prestasi</a>
            <a href="#warta" className="hover:text-neutral-950 hover:underline underline-offset-4 transition-colors">Warta & Berita</a>
            <a href="#galeri" className="hover:text-neutral-950 hover:underline underline-offset-4 transition-colors">Galeri Kampus</a>
            <a href="#kontak" className="hover:text-neutral-950 hover:underline underline-offset-4 transition-colors">Kontak</a>
          </div>
          <a 
            href="#pendaftaran" 
            className="text-xs font-mono font-semibold bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-800 transition-colors uppercase tracking-wider flex items-center gap-2"
          >
            Pendaftaran Siswa Baru (PPDB 2026) <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Editorial Front Page Section (Magazine Layout) */}
        <section id="profil" className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-b border-neutral-300 pb-16">
          {/* Main Headline Feature Column */}
          <div className="lg:col-span-8 flex flex-col justify-between pr-0 lg:pr-8 border-r-0 lg:border-r border-neutral-300">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-600 bg-neutral-200/80 px-2.5 py-1 mb-4">
                <span className="w-2 h-2 rounded-full bg-neutral-900"></span> Editorial Utama Edisi 2026/2027
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-[1.15] mb-6">
                Membentuk Pola Pikir Saintifik, Integritas Luhur, dan Kepemimpinan Visioner Generasi Bangsa.
              </h2>
              <div className="text-neutral-700 text-base sm:text-lg leading-relaxed space-y-4 mb-8 font-serif">
                <p className="drop-cap">
                  SMA Cendekia Nusantara berdiri di atas pondasi kuat integrasi antara riset keilmuan mutakhir dan nilai budi pekerti nusantara. Kami meyakini bahwa pendidikan tingkat menengah bukan sekadar jembatan menuju perguruan tinggi, melainkan kawah candradimuka tempat karakter integritas ditempa.
                </p>
                <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                  Dengan kurikulum adaptif berbasis proyek mandiri, laboratorium digital modern, serta bimbingan intensif dari para akademisi berdedikasi, siswa didorong untuk tidak sekadar menghafal teori, tetapi aktif memecahkan tantangan riil di masyarakat melalui karya nyata.
                </p>
              </div>
            </div>

            {/* Quote of the Month Bento */}
            <div className="border-l-2 border-neutral-900 pl-6 py-3 my-6 bg-neutral-100/60">
              <blockquote className="font-serif italic text-lg text-neutral-900">
                &ldquo;Pendidikan sejati tidak hanya mengisi bejana pengetahuan, tetapi menyalakan api rasa ingin tahu dan keberanian moral untuk berkontribusi bagi peradaban.&rdquo;
              </blockquote>
              <div className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-2">
                — Ir. H. Prabowo Soemitro, Ph.D. // Pendiri Yayasan Cendekia
              </div>
            </div>

            {/* Quick Feature Metric Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-300">
              {stats.map((st, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950">{st.num}</span>
                  <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-tight mt-1">{st.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Gazette Sidebar Column */}
          <div className="lg:col-span-4 flex flex-col space-y-8">
            <div className="border-b border-neutral-300 pb-4">
              <h3 className="font-mono text-xs uppercase tracking-widest font-bold text-neutral-900 pb-2 border-b-2 border-neutral-900 mb-4">
                Warta Terkini Sekolah
              </h3>
              <div className="space-y-6">
                {articles.map((art, idx) => (
                  <article key={idx} className="group cursor-pointer">
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-1.5">
                      <span className="text-neutral-800 font-semibold">{art.category}</span>
                      <span>{art.date}</span>
                    </div>
                    <h4 className="font-serif text-lg font-bold text-neutral-900 group-hover:text-neutral-600 transition-colors leading-snug mb-2">
                      {art.title}
                    </h4>
                    <p className="text-xs text-neutral-600 line-clamp-2 mb-2 font-sans">
                      {art.desc}
                    </p>
                    <div className="text-[11px] font-mono text-neutral-400 italic">
                      Penulis: {art.author}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Principal Welcome Box */}
            <div className="border border-neutral-300 p-6 bg-[#F4F1EA]">
              <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mb-2">
                Prakata Kepala Sekolah
              </div>
              <h4 className="font-serif text-xl font-bold text-neutral-900 mb-3">
                Dra. Hj. Nurul Fadilah, M.Pd.
              </h4>
              <p className="text-xs text-neutral-700 leading-relaxed font-sans mb-4">
                Selamat datang di portal informasi resmi SMA Cendekia Nusantara. Kami berkomitmen menyajikan transparansi kegiatan, kultur akademik riset, dan wadah prestasi bagi seluruh civitas akademika dan orang tua murid.
              </p>
              <div className="font-mono text-[11px] text-neutral-500 border-t border-neutral-300 pt-3">
                Surat Keputusan Izin Operasional: No. 421.3/982/Disdik-2026
              </div>
            </div>
          </div>
        </section>

        {/* Academic Program Section (Curriculum Bento) */}
        <section id="kurikulum" className="py-16 border-b border-neutral-300">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-neutral-200">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-1">
                PILAR PENDIDIKAN & KURIKULUM
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-950">
                Peminatan Khusus & Laboratorium Keunggulan
              </h2>
            </div>
            <p className="font-mono text-xs text-neutral-500 max-w-sm mt-3 sm:mt-0">
              Pendekatan pembelajaran berstandar internasional yang diselaraskan dengan Kurikulum Nasional Merdeka Berbagi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((prog, idx) => (
              <div 
                key={idx} 
                className="border border-neutral-300 p-8 bg-white hover:border-neutral-900 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 border border-neutral-300 bg-[#FAF9F6] flex items-center justify-center mb-6 group-hover:border-neutral-900 transition-colors">
                    {prog.icon}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-2">
                    {prog.tag}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-700">
                    {prog.title}
                  </h3>
                  <p className="text-sm text-neutral-600 font-sans leading-relaxed">
                    {prog.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>Lihat Silabus Lengkap</span>
                  <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Campus Facilities & Culture Magazine Photo Section */}
        <section id="galeri" className="py-16 border-b border-neutral-300">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-1">
            ATMOSFER BELAJAR & EKOSISTEM
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-950 mb-8">
            Ruang Diskusi & Fasilitas Pendukung Riset Siswa
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-neutral-300 p-4 bg-[#F4F1EA] flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold text-neutral-900 mb-1">01 // PERPUSTAKAAN DIGITAL</div>
                <div className="font-serif text-lg font-bold text-neutral-900 mb-2">Graha Pustaka Cendekia</div>
                <p className="text-xs text-neutral-600 font-sans">
                  Koleksi 15.000+ buku fisik, akses jurnal internasional IEEE & Nature, serta ruang hening untuk studi literatur.
                </p>
              </div>
              <div className="font-mono text-[10px] text-neutral-500 pt-4 mt-4 border-t border-neutral-200">
                KAPASITAS: 200 PEMBACA
              </div>
            </div>

            <div className="border border-neutral-300 p-4 bg-white flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold text-neutral-900 mb-1">02 // SAINS & BIOTEKNOLOGI</div>
                <div className="font-serif text-lg font-bold text-neutral-900 mb-2">Laboratorium Terpadu</div>
                <p className="text-xs text-neutral-600 font-sans">
                  Mikroskop elektron, instrumen spektroskopi dasar, dan fasilitas steril budidaya kultur jaringan tanaman.
                </p>
              </div>
              <div className="font-mono text-[10px] text-neutral-500 pt-4 mt-4 border-t border-neutral-200">
                STANDAR K3 INTERNASIONAL
              </div>
            </div>

            <div className="border border-neutral-300 p-4 bg-[#F4F1EA] flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold text-neutral-900 mb-1">03 // SENI & TEATER</div>
                <div className="font-serif text-lg font-bold text-neutral-900 mb-2">Auditorium Sasana Budaya</div>
                <p className="text-xs text-neutral-600 font-sans">
                  Panggung akustik profesional untuk orkestra, pementasan drama tradisi, orasi ilmiah, dan wisuda akbar.
                </p>
              </div>
              <div className="font-mono text-[10px] text-neutral-500 pt-4 mt-4 border-t border-neutral-200">
                AKUSTIK PROFESIONAL 800 KURSI
              </div>
            </div>

            <div className="border border-neutral-300 p-4 bg-white flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold text-neutral-900 mb-1">04 // KOMPUTASI & AI</div>
                <div className="font-serif text-lg font-bold text-neutral-900 mb-2">High Performance Lab</div>
                <p className="text-xs text-neutral-600 font-sans">
                  Workstation komputasi grafis dan workstation cloud untuk eksperimen model machine learning serta cybersecurity.
                </p>
              </div>
              <div className="font-mono text-[10px] text-neutral-500 pt-4 mt-4 border-t border-neutral-200">
                FIBER OPTIC GIGABIT CONNECTION
              </div>
            </div>
          </div>
        </section>

        {/* Admission / PPDB Registration Callout */}
        <section id="pendaftaran" className="py-16 bg-[#1A1A1A] text-white p-8 sm:p-14 my-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-3">
              PENERIMAAN PESERTA DIDIK BARU // TAHUN AJARAN 2026/2027
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-6">
              Bergabung Bersama Komunitas Pembelajar Berkarakter Unggul.
            </h2>
            <p className="text-neutral-300 font-sans text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
              Pendaftaran Jalur Prestasi Akademik, Riset Sains, dan Minat Bakat Seni dibuka mulai 10 September hingga 30 Oktober 2026. Disediakan beasiswa penuh bagi calon siswa berprestasi tinggi.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-mono text-xs">
              <button className="bg-white text-black font-bold px-8 py-3.5 hover:bg-neutral-200 transition-colors uppercase tracking-wider flex items-center gap-2 w-full sm:w-auto justify-center">
                Unduh Brosur & Panduan Pendaftaran <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="border border-neutral-600 text-neutral-300 px-8 py-3.5 hover:border-white hover:text-white transition-colors uppercase tracking-wider w-full sm:w-auto justify-center">
                Konsultasi Layanan PPDB Online
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Gazette Style Footer */}
      <footer id="kontak" className="border-t-2 border-neutral-900 bg-[#F4F1EA] py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-neutral-300 text-xs font-sans">
          <div>
            <div className="font-serif text-lg font-bold text-neutral-950 mb-3">
              SMA CENDEKIA NUSANTARA
            </div>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Lembaga pendidikan menengah atas berfokus pada integrasi sains terapan, literasi humaniora, dan pembentukan kepemimpinan etis berwawasan global.
            </p>
            <div className="font-mono text-[11px] text-neutral-500">
              NPSN: 20108922 • NSS: 301016001002
            </div>
          </div>

          <div>
            <div className="font-mono font-bold uppercase tracking-wider text-neutral-900 mb-3">
              ALAMAT KAMPUS
            </div>
            <div className="text-neutral-600 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-neutral-700 shrink-0 mt-0.5" />
                <span>Jl. Cendekia Raya No. 45, Bintaro Jaya Sektor 7, Tangerang Selatan, Banten 15412</span>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <Phone className="w-4 h-4 text-neutral-700 shrink-0" />
                <span>+62 (21) 745-8900</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neutral-700 shrink-0" />
                <span>sekretariat@cendekianusantara.sch.id</span>
              </div>
            </div>
          </div>

          <div>
            <div className="font-mono font-bold uppercase tracking-wider text-neutral-900 mb-3">
              NAVIGASI CEPAT
            </div>
            <ul className="space-y-1.5 text-neutral-600 font-mono text-[11px]">
              <li><a href="#profil" className="hover:underline">Sejarah & Visi Misi</a></li>
              <li><a href="#kurikulum" className="hover:underline">Struktur Kurikulum Merdeka</a></li>
              <li><a href="#prestasi" className="hover:underline">Daftar Kejuaraan & Prestasi</a></li>
              <li><a href="#galeri" className="hover:underline">Fasilitas Laboratorium</a></li>
              <li><a href="#pendaftaran" className="hover:underline">Alur Pendaftaran PPDB</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono font-bold uppercase tracking-wider text-neutral-900 mb-3">
              DEWAN REDAKSI WARTA
            </div>
            <p className="text-neutral-600 leading-relaxed mb-3">
              Dikelola oleh Biro Humas & Informasi Publik SMA Cendekia Nusantara. Terbit berkala mingguan secara cetak dan digital.
            </p>
            <div className="font-mono text-[10px] text-neutral-500 uppercase">
              TERDAFTAR DI KEMENTERIAN PENDIDIKAN & KEBUDAYAAN RI
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-500 gap-4">
          <div>
            © 2026 SMA CENDEKIA NUSANTARA. SELURUH HAK CIPTA DILINDUNGI UNDANG-UNDANG.
          </div>
          <div>
            DESIGNED WITH EDITORIAL GAZETTE SYSTEM // HOSTED ON COOLIFY
          </div>
        </div>
      </footer>
    </div>
  );
}

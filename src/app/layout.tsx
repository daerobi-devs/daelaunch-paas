import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SMA Cendekia Nusantara // Profil & Warta Akademik',
  description: 'Portal Resmi Profil Sekolah, Prestasi, dan Warta Kegiatan SMA Cendekia Nusantara.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FDFCF7] text-neutral-900 selection:bg-neutral-800 selection:text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

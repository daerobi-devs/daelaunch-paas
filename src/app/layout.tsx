import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DaeLaunch // Developer Cloud & App Engine',
  description: 'Deploy GitHub repositories to isolated cloud containers in seconds. Powered by Coolify & PostgreSQL.',
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
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F8FAF8] text-[#132A13] font-sans antialiased selection:bg-forest-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}

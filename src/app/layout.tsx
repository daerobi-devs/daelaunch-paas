import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DaeLaunch // Micro-PaaS & Cloud App Engine',
  description: 'Instant Developer Cloud Platform powered by Coolify & Next.js 15',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-obsidian-950 text-slate-100 selection:bg-cyber-cyan selection:text-black">
        {children}
      </body>
    </html>
  );
}

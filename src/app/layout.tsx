import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'AppCloid Technologies | Enterprise AI & Bespoke Software in Glasgow',
  description: 'AppCloid Technologies democratizes elite, AI-first software solutions for SMBs across the UK. Based in Glasgow, we build high-performance web, mobile, and AI infrastructure.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.emailjs.com" />
      </head>
      <body className={`${inter.className} bg-midnight text-white antialiased selection:bg-cyan selection:text-midnight`}>
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-0LB5NZPPR2" />
      </body>
    </html>
  );
}

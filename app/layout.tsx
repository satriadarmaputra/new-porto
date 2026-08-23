import type { Metadata } from 'next';
import { Archivo_Black, Space_Grotesk } from 'next/font/google';
import './globals.css';

const display = Archivo_Black({ variable: '--font-display', weight: '400', subsets: ['latin'] });
const body = Space_Grotesk({ variable: '--font-body', subsets: ['latin'] });

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://satria-darma-social-portfolio.satriadarma01.chatgpt.site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Satria Darma Putra — Social Media Portfolio',
  description: 'Tujuh konten pilihan dan akumulasi hasil kerja Satria Darma Putra, Social Media Specialist.',
  openGraph: {
    title: 'Satria Darma Putra — Social Media Portfolio',
    description: '7 konten, beda angle. 45M+ views dari berbagai platform.',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'Satria Darma Putra — Social Media Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Satria Darma Putra — Social Media Portfolio',
    description: '7 konten, beda angle. 45M+ views dari berbagai platform.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}

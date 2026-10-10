import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import '@/styles/modern-portfolio.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Nikita Khadse | Frontend Developer & UI/UX Designer',
  description: 'Portfolio of Nikita Khadse — Frontend Developer and UI/UX Designer specializing in React.js, modern web development and digital experiences.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Nikita Khadse | Frontend Developer & UI/UX Designer', description: 'Frontend Developer and UI/UX Designer specializing in React.js, modern web development and digital experiences.', url: '/', siteName: 'Nikita Khadse Portfolio', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Nikita Khadse | Frontend Developer & UI/UX Designer', description: 'React.js Developer | UI/UX Designer | Creative Frontend Developer' },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#080b12' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const fontFallbacks = {
    '--font-sora': '"Trebuchet MS", "Segoe UI", sans-serif',
    '--font-manrope': '"Segoe UI", Arial, sans-serif',
  } as React.CSSProperties;

  return <html lang="en" style={fontFallbacks}><body>{children}</body></html>;
}

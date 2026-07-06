import './globals.css';

import { Geist } from 'next/font/google';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import site from '@/data/site';

const geist = Geist({
  subsets: ['latin'],
});

export const metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: site.title,
    template: `%s | ${site.name}`
  },
  description: site.description,
  applicationName: site.name,
  authors: [
    {
      name: site.name,
    }
  ],
  creator: site.name,
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${geist.className} bg-zinc-950 text-zinc-100`}>
        <Header />

        <div className="pt-16">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}

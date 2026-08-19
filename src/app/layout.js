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
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: site.title,
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: ['/opengraph-image'],
  },

  robots: {
    index: true,
    follow: true,
  }
}

const themeScript = `
  try {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const theme = savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : 'dark';

    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = 'dark';
  }
`;


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript
          }}
        />
      </head>

      <body className={`${geist.className}`}>
        <Header />

        <div className="pt-16">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}

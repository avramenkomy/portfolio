import './globals.css';

import { Geist } from 'next/font/google';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const geist = Geist({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Mikhail Avramenko | Frontend Developer',
  description: 'personal portfolio',
}


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${geist.className} bg-zinc-950 text-zinc-500`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}

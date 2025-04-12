import { M_PLUS_1p } from 'next/font/google';

import './globals.css';
import SideMenu from './components/SideMenu';

const m_PLUS_1p = M_PLUS_1p({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'My Portfolio',
  description: 'Nextjs や Laravel を使った開発実績・個人制作物をまとめたポートフォリオサイトです。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={m_PLUS_1p.className}>
        <main className="flex flex-row">
          <SideMenu />
          <section
            className="pl-[300px] max-lg:pl-[146px] max-md:pl-0 w-full min-h-screen overflow-hidden py-4"
            id="home"
          >
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}

import { M_PLUS_1p } from 'next/font/google';

import './globals.css';

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
    <html lang="ja" suppressHydrationWarning>
      <body className={m_PLUS_1p.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

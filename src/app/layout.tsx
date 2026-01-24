import type { Metadata } from 'next'
import './globals.css'
import Provider from './Provider'

export const metadata: Metadata = {
  title: '白地図プロローグ',
  description: 'アイドルグループ「白地図プロローグ」の公式サイトです。「完成された物語」ではなく、「始まり続ける物語」を届けるために。',
  metadataBase: new URL('https://hakuchizu-prologue.com'),
  openGraph: {
    title: '白地図プロローグ',
    description: 'アイドルグループ「白地図プロローグ」の公式サイトです。',
    url: 'https://hakuchizu-prologue.com',
    siteName: '白地図プロローグ',
    images: [
      {
        url: '/白地図プロローグ.jpg',
        width: 1200,
        height: 630,
        alt: '白地図プロローグ',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '白地図プロローグ',
    description: 'アイドルグループ「白地図プロローグ」の公式サイトです。',
    images: ['/白地図プロローグ.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}

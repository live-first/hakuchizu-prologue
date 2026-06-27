import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ログイン | 白地図プロローグ',
  description: 'ログインページ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SHOP管理 | 白地図プロローグ',
  description: 'SHOP管理',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}

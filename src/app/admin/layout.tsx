import type { Metadata } from 'next'
import './style.css'

export const metadata: Metadata = {
  title: 'Dashboard | 白地図プロローグ',
  description: 'ダッシュボード',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}

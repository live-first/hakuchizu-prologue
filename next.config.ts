import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://hakuchizu-prologue.com/**')],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
}

export default nextConfig

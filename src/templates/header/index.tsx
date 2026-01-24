'use client'

import { ReactNode, useEffect, useState } from 'react'
import './style.css'
import { cn } from '@/components/utils'
import Link from 'next/link'
import xLogo from '@/image/x-logo.png'
import ytLogo from '@/image/youtube-logo.png'
import ttLogo from '@/image/tiktok-logo.png'
import { Img } from '@/components/Image'

export type HeaderProps = {
  logoArea: ReactNode
  pcView: ReactNode
  spView: ReactNode
}

export const Header = (props: HeaderProps) => {
  const [isShow, setShow] = useState<boolean>(false)
  const { logoArea, pcView, spView } = props
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 80) // 上部50px以内なら "上部" と判断
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初期チェック

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={cn('flex flex-col w-full h-full')}>
      <div className='flex w-full h-full px-3 justify-between items-center shadow-sm shadow-cyan-500/50 bg-white'>
        <Link href='/' className='h-full'>
          {logoArea}
        </Link>
        <div className='hidden md:flex'>{pcView}</div>
        <button
          className={cn(
            'flex flex-col md:hidden hamburger-menu items-center mr-3',
            isShow ? 'active' : '',
          )}
          id='menu01'
          onClick={() => setShow(!isShow)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className='flex w-full justify-end gap-6 px-6 py-1'>
        <Link href='https://twitter.com/aime_staff' target='_blank'>
          <Img cName='h-6' src={xLogo.src} alt='x-logo' />
        </Link>
        <Link href='https://www.tiktok.com/@aime_1005' target='_blank'>
          <Img cName='h-6' src={ttLogo.src} alt='tiktok-logo' />
        </Link>
        <Link href='https://www.youtube.com/@aiMe_2024' target='_blank'>
          <Img cName='h-6' src={ytLogo.src} alt='youtube-logo' />
        </Link>
      </div>

      {isShow ? (
        <div className='absolute top-0 left-0 w-dvw h-dvh md:hidden overflow-scroll pb-4'>
          {spView}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

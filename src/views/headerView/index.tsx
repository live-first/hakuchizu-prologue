'use client'

import { Img } from '@/components/Image'
import { cn } from '@/components/utils'
import { Header } from '@/templates/header'
import { useRouter } from 'next/navigation'
import logo from '@/image/白地図プロローグロゴ.png'
import x_logo from '@/image/X.svg'
import tiktok_logo from '@/image/TikTok.svg'
import youtube_logo from '@/image/Youtube.png'
import Link from 'next/link'

export const HeaderView = ({ url }: { url?: string }) => {
  const router = useRouter()
  const Logo = () => {
    return (
      <Img src={logo.src} cName='h-full object-contain object-left' style={{ width: undefined }} />
    )
  }

  type HeaderCellProps = {
    label: string
    url: string
    active?: boolean
    className?: string
  }

  const HeaderPcCell = (props: HeaderCellProps) => {
    const { label, url, active, className } = props
    return (
      <button
        className={cn(
          'flex flex-col h-full font-bold  hover:text-secondary py-1 px-3 text-krf-pink text-shadow-lg whitespace-nowrap justify-center',
          active ? 'text-secondary' : 'hover:cursor-pointer',
          className,
        )}
        onClick={() => router.push(url)}
      >
        {label}
      </button>
    )
  }

  const HeaderSpCell = (props: HeaderCellProps) => {
    const { label, url } = props
    return (
      <button
        className='flex flex-col py-2 gap-1 font-bold items-center hover:cursor-pointer'
        onClick={() => router.push(url)}
      >
        <div className='flex'>{label}</div>
      </button>
    )
  }

  return (
    <Header
      logoArea={<Logo />}
      pcView={
        <div className='flex rounded-l-full'>
          <HeaderPcCell label='HOME' url='/' active={url === 'home'} />
          <span className='border-r border-white' />
          <HeaderPcCell label='PROFILE' url='/profile' active={url === 'group-profile'} />
          <span className='border-r border-white' />
          <HeaderPcCell label='MEMBER' url='/member' active={url === 'member'} />
          <span className='border-r border-white' />
          <HeaderPcCell label='SHOP' url='/shop' active={url === 'shop'} />
          <span className='border-r border-white' />
          <HeaderPcCell label='SCHEDULE' url='/schedule' active={url === 'schedule'} />
          <span className='border-r border-white' />
          <button
            className={cn(
              'flex flex-col h-full font-bold bg-secondary text-white hover:text-[#6f95ff] px-4 text-krf-pink text-shadow-lg whitespace-nowrap justify-center',
            )}
            onClick={() => router.push('/contact')}
          >
            CONTACT
          </button>
        </div>
      }
      spView={
        <div className='flex flex-col gap-6 pt-16 px-4 bg-blue-200 h-dvh'>
          <HeaderSpCell label='HOME' url='/' />
          <HeaderSpCell label='PROFILE' url='/profile' />
          <HeaderSpCell label='MEMBER' url='/member' />
          <HeaderSpCell label='SHOP' url='/shop' />
          <HeaderSpCell label='SCHEDULE' url='/schedule' />
          <HeaderSpCell label='CONTACT' url='/contact' />
          <Img src={logo.src} />
          <div className='flex justify-center content-center gap-12 items-center'>
            <Link href='https://x.com/HCPL_official' className='w-1/6'>
              <Img src={x_logo.src} alt='x-logo' />
            </Link>
            <Link href='https://www.tiktok.com/@hcpl_official' className='w-1/6'>
              <Img src={tiktok_logo.src} alt='tiktok-logo' />
            </Link>
            <Link
              href='https://youtube.com/@%E7%99%BD%E5%9C%B0%E5%9B%B3%E3%83%97%E3%83%AD%E3%83%AD%E3%83%BC%E3%82%B0'
              className='w-1/6'
            >
              <Img src={youtube_logo.src} alt='youtube-logo' />
            </Link>
          </div>
        </div>
      }
    />
  )
}

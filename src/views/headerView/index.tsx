'use client'

import { Img } from '@/components/Image'
import { cn } from '@/components/utils'
import { Header } from '@/templates/header'
import { useRouter } from 'next/navigation'
import { FaHeart } from 'react-icons/fa'
import logo from '@/image/ワンダーウィード天ロゴ.jpg'

export const HeaderView = ({ url }: { url?: string }) => {
  const Logo = () => {
    return (
      <Img src={logo.src} cName='h-full object-contain object-left' style={{ width: undefined }} />
    )
  }

  type HeaderCellProps = {
    label: string
    url: string
    active?: boolean
    isBorder?: boolean
  }

  const HeaderPcCell = (props: HeaderCellProps) => {
    const router = useRouter()
    const { label, url, active, isBorder = false } = props
    return (
      <button
        className={cn(
          'flex flex-col h-full font-bold  hover:text-[#ca9b52] p-1 text-krf-pink text-shadow-lg whitespace-nowrap',
          active ? 'text-[#ca9b52]' : 'hover:cursor-pointer',
          isBorder ? 'border-r border-white' : '',
        )}
        onClick={() => router.push(url)}
      >
        {label}
      </button>
    )
  }

  const HeaderSpCell = (props: HeaderCellProps) => {
    const router = useRouter()
    const { label, url } = props
    return (
      <button
        className='flex flex-col py-2 gap-1 font-bold items-center rounded-full hover:cursor-pointer bg-white p-1 text-fuchsia-400'
        onClick={() => router.push(url)}
      >
        <div className='flex'>
          <span className='h-full self-center'>
            <FaHeart />
          </span>
          {label}
        </div>
      </button>
    )
  }

  return (
    <Header
      logoArea={<Logo />}
      pcView={
        <div className='flex py-1 gap-3 pl-12 pr-3 rounded-l-full'>
          <HeaderPcCell label='PROFILE' url='/about' active={url === 'about'} isBorder />
          <HeaderPcCell label='MEMBER' url='/ticket' active={url === 'ticket'} isBorder />
          <HeaderPcCell label='MUSIC' url='/lineup' active={url === 'lineup'} isBorder />
          <HeaderPcCell
            label='タイムテーブル'
            url='/timetable'
            active={url === 'timetable'}
            isBorder
          />
          <HeaderPcCell label='CONTACT' url='/access' active={url === 'access'} />
        </div>
      }
      spView={
        <div className='flex flex-col gap-6 pt-16 px-4'>
          <HeaderSpCell label='クロフェス' url='/about' />
          <HeaderSpCell label='チケット' url='/ticket' />
          <HeaderSpCell label='アーティスト' url='/lineup' />
          <HeaderSpCell label='タイムテーブル' url='/timetable' />
          <HeaderSpCell label='アクセス' url='/access' />
          <div className='flex gap-2 sm:gap-6 px-1 sm:px-6'></div>
          <div className='flex w-[150px] self-center'>
            <Img src='https://kurofes-dashin.com/pictures/kurofes-logo.png' alt='クロフェスロゴ' />
          </div>
        </div>
      }
    />
  )
}

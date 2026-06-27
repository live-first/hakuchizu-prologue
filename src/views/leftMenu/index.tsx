'use client'

import { cn } from '@/components/utils'
import { LabelUrl } from '@/domain/labelUrl'
import Link from 'next/link'

export const LeftMenuView = (props: { url: string }) => {
  const menus: LabelUrl[] = [
    {
      label: 'SHOP管理',
      url: '/admin/shop',
    },
    {
      label: '購入管理',
      url: '/admin/purchase',
    },
  ]

  return (
    <div className='flex flex-col w-full'>
      {menus.map((menu, index) => {
        return (
          <Link
            href={menu.url}
            key={index}
            className={cn('w-full', props.url === menu.url ? 'bg-blue-400' : 'hover:bg-blue-100')}
          >
            <div className={cn('p-2 flex border-b border-gray-500')}>{menu.label}</div>
          </Link>
        )
      })}
    </div>
  )
}

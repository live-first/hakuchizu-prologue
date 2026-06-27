'use client'

import Link from 'next/link'

export const ShopManagementView = () => {
  return (
    <div className='flex flex-col gap-4 pt-10'>
      <Link href='/admin/shop/create'>
        <span className='border border-secondary rounded-lg p-4 font-bold bg-white hover:bg-secondary hover:text-white'>
          商品追加
        </span>
      </Link>
    </div>
  )
}

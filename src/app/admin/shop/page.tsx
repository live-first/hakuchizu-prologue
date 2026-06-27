'use client'

import { useEffect } from 'react'
import { FiLogOut } from 'react-icons/fi'
import { useStore } from '@/store/useStore'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const { getItem, removeItem } = useStore('user')
  const router = useRouter()
  let bucketName = ''
  try {
    const parsedValue = JSON.parse(getItem() ?? '')

    if (parsedValue && typeof parsedValue === 'object' && 'bucketName' in parsedValue) {
      bucketName = parsedValue.bucketName
    }
  } catch {
    router.push('/admin/login')
    return
  }

  useEffect(() => {
    if (!getItem()) {
      router.push('/login')
      return
    }
  }, [])

  const logout = () => {
    removeItem()
    router.push('/login')
  }

  return (
    <div className='flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black'>
      <header className='relative h-20 w-full'>
        <h1 className='absolute top-1/2 left-1/2 -translate-1/2 text-4xl w-full text-center font-bold'>
          SHOP管理
        </h1>
        <button
          className='text-3xl absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer'
          onClick={() => logout()}
        >
          <FiLogOut />
        </button>
        <p>ログアウト</p>
      </header>
      <main className='flex flex-col w-full px-2 gap-4'></main>
    </div>
  )
}

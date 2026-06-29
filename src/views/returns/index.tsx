'use client'

import { Options, Select } from '@/components/Select'
import { cn } from '@/components/utils'
import { returnItems, ReturnItemType } from '@/data/items/returnItems'
import { useHomePresenter } from '@/presenter/homePresenter'
import { useStore } from '@/store/useStore'
import { useRouter } from 'next/navigation'
import { ChangeEventHandler, useEffect, useState } from 'react'

export type ItemContent = {
  id: string
  title: string
  amount: number
  count: string //いくつか
}

export const ReturnView = () => {
  const [items, setItems] = useState<ItemContent[]>()
  const [show, setShow] = useState<boolean>(false)
  const [checked, setCheck] = useState<boolean>(true)
  // const [total, setTotal] = useState<number>(0)
  const router = useRouter()
  const store = useStore('return-items')
  const deliveryStore = useStore('other-items')
  const { isBeforeStart, isClosedProject } = useHomePresenter()

  useEffect(() => {
    deliveryStore.setItem({ isDelivery: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setShow(items ? items.length !== 0 : false)
    // 合計金額は表示しない
    // const totalAmount =
    //   items?.reduce((sum, item) => {
    //     return sum + item.amount * Number(item.count)
    //   }, 0) ?? 0
    // setTotal(totalAmount)
  }, [items, items?.length])

  const onChangeHandler = (props: ReturnItemType) => {
    const { id, title, count, amount } = props
    setItems((prev) => {
      const list = prev ? [...prev] : []

      const index = list.findIndex((item) => item.id === id)

      console.log(count)

      // ▼ count が "0" の場合 → リストから削除
      if (count === '0') {
        console.log(count, index)
        if (index !== -1) {
          list.splice(index, 1) // ← 削除
        }
        store.setItem(list)
        return list
      }

      // ▼ それ以外は追加 or 更新
      if (index === -1) {
        list.push({ id, title, amount, count })
      } else {
        list[index] = {
          ...list[index],
          count,
        }
      }

      store.setItem(list)

      return list
    })
  }

  const onCheckClick = () => {
    setCheck(!checked)
    deliveryStore.setItem({ isDelivery: !checked })
  }

  const onClickHandler = () => {
    router.push('/checkout')
  }

  return (
    <div className='flex flex-col pt-12 mb-24 pb-24 items-center gap-12'>
      <h2 id='return' className='font-bold text-3xl text-yellow-500 drop-shadow-sm scroll-mt-24'>
        咲真まつり生誕祭『世界１おまつりさわぎな成人式』
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
        {returnItems.map((item, index) => {
          return (
            <ItemPanel
              key={index}
              id={item.id}
              amount={item.amount}
              title={item.title}
              detail={item.detail}
              date={item.date}
              maxCount={item.maxCount}
              onChange={(e) => {
                onChangeHandler({ ...item, count: e.target.value })
              }}
              disabled={isBeforeStart || isClosedProject}
              count=''
            />
          )
        })}
      </div>
      <div className='w-full px-2'>
        <button
          className={cn(
            'flex gap-2 border border-secondary rounded-lg w-full p-4 font-bold',
            checked ? 'bg-secondary text-white' : 'bg-white hover:bg-secondary hover:text-white',
          )}
          onClick={() => onCheckClick()}
        >
          <input type='checkbox' checked={checked} />
          配送料(1,000円)
        </button>
      </div>

      {show && (
        <button
          className='fixed bottom-6 w-11/12 md:w-8/12 px-4 md:px-12 bg-secondary border border-white rounded-full h-[80px] flex justify-center items-center text-white transition-all duration-300 transform hover:scale-105 z-50'
          onClick={onClickHandler}
        >
          <p className='text-xl md:text-3xl font-bold whitespace-nowrap'>購入する</p>
        </button>
      )}
    </div>
  )
}

type ItemProps = {
  supporterCount?: number
  maxCount: number[]
  onChange: ChangeEventHandler<HTMLSelectElement>
  disabled?: boolean
} & ReturnItemType

const ItemPanel = (props: ItemProps) => {
  const { id, title, detail, date, maxCount, onChange, disabled } = props

  return (
    <div className='flex flex-col gap-2 bg-white w-full rounded-3xl p-6 shadow-lg border border-secondary hover:shadow-2xl transition-shadow'>
      {title && <p className='text-lg font-bold leading-6 text-gray-700'>{title}</p>}
      <div
        dangerouslySetInnerHTML={{
          __html: `${detail}`,
        }}
        className='text-gray-600 leading-7'
      />

      <div className='flex flex-col pt-2 gap-1'>
        <p className='flex text-sm text-gray-400'>{date}</p>
      </div>
      <div className='mt-auto pt-4'>
        <Select
          id={id}
          options={maxCount.map((count) => {
            return { value: count, label: `${count}個` } as Options
          })}
          onChange={onChange}
          className='w-full bg-pink-50 border-pink-200 text-gray-700 rounded-xl'
          disabled={disabled}
        />
      </div>
    </div>
  )
}

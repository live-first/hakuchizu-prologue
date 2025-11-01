'use client'

import React from 'react'
import Link from 'next/link'
import { useNewsApi } from '@/api/newsApi'

export const NewsList = () => {
  const { getNews } = useNewsApi()

  // const scrollTop = (): number => {
  //   return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
  // }

  // useEffect(() => {
  //   //表示データを抽出
  //   setDisplayedItems(newsList.slice((page - 1) * max, page * max))
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // const handleChange = (event: ChangeEvent<unknown>, page: number) => {
  //   setPage(page)
  //   setDisplayedItems(newsList.slice((page - 1) * max, page * max))
  //   scrollTop()
  // }

  return (
    <div className='w-full'>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
        {getNews.data?.contents.map((data, index) => {
          return (
            <Link href={`/news/${data.id}`} key={index}>
              <div>
                <div>{data.publishedAt}</div>
                <div>{data.title}</div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

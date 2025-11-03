'use client'

import React from 'react'
import Link from 'next/link'
import { NewsContentsType } from '@/domain/news'
import { formatDate } from '@/utils/stringUtils'

type NewsListProps = {
  news: NewsContentsType[]
  max?: number
}

export const NewsList = (props: NewsListProps) => {
  const { news, max = news.length } = props

  return (
    <div className='w-full'>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
        {news?.map((data, index) => {
          return index < max ? (
            <Link href={`/news/${data.id}`} key={index}>
              <div>
                <div>{formatDate(data.publishedAt, 'YYYY/MM/DD')}</div>
                <div>{data.title}</div>
              </div>
            </Link>
          ) : (
            <></>
          )
        })}
      </div>
    </div>
  )
}

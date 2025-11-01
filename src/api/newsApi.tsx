'use client'

import { useQuery } from '@tanstack/react-query'
import { NewsType } from '@/domain/news'
import { axios } from './baseApi'

export const useNewsApi = () => {
  const getNews = useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      return (await axios.get(`/news`)).data as NewsType
    },
  })

  return {
    getNews,
  }
}

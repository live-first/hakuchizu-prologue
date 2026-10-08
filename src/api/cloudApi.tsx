'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { axios } from './baseApi'

export type CloudFundResponseType = {
  id: string
  supporterCount: number
  count: number
  supporterTotal: number
}

export type CloudRequest = {
  product?: string
  name: string
  email: string
  content: string
}

export const useCloudFundApi = () => {
  const queryClient = useQueryClient()
  const URL =
    'https://script.google.com/macros/s/AKfycbz_FywA5T97mysGudnUE63TyqW78LUFHlNXJ46_qM27o-_-fDJ_q-TLHxwjjxFYLVua/exec'

  const getCloudFund = useQuery({
    queryKey: ['auditions'],
    queryFn: async () => {
      return await axios.get('')
    },
  })

  const addFund = useMutation({
    mutationFn: (data: CloudRequest) => {
      return axios.post(
        URL,
        encodeURI(
          `name=${data.name}&email=${data.email}&content=${data.content}&product=${data.product}`,
        ),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        },
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cloud-fund'] })
    },
  })

  return { getCloudFund, addFund }
}

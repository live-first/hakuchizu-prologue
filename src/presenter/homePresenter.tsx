'use client'

import { CloudFundResponseType, useCloudFundApi } from '@/api/cloudApi'

export const useHomePresenter = () => {
  const { getCloudFund } = useCloudFundApi()
  const res = getCloudFund.data?.data as CloudFundResponseType[]
  // ローディング状態を取得
  const isLoading = getCloudFund.isLoading

  // プロジェクト開始日時
  const startDate = new Date(2026, 9, 8, 22, 0, 0)
  // プロジェクト終了日時
  const endDate = new Date(2026, 9, 20, 23, 59, 0)
  // 現在日時
  const now = new Date()
  // 残り何日
  const restDay = Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  // 開始前
  const isBeforeStart = now < startDate
  // 終了後
  const isClosedProject = endDate < now

  return {
    startDate,
    endDate,
    restDay,
    isBeforeStart,
    isClosedProject,
    res,
    isLoading,
  }
}

'use client'

export const useHomePresenter = () => {
  // プロジェクト開始日時
  const startDate = new Date(2026, 4, 30, 22, 0, 0)
  // プロジェクト終了日時
  const endDate = new Date(2026, 5, 29, 23, 59, 0)
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
  }
}

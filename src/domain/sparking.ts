// 購入したアイテム
export type SelectedItemType = {
  vip: number // VIPチケット
  general: number // 一般チケット
  common: number // 共通特典券
  ouen: number // 応援チケット
  kuji: number // くじ
  shoutai: number // 招待
}

type PricingType = {
  price: number // 金額
  voting: number // 投票券枚数
  items: {
    id: string // 特典内容のid
    amount: number // 枚数
  }[]
}

export type VotingType = {
  vip: PricingType
  general: PricingType
  common: PricingType
  ouen: PricingType
  kuji: PricingType
  shoutai: PricingType
}

// 特典内容
export type ReturnItemType = {
  id: string
  title: string
  price: number // 通常の物販時の価値
}

export type PresentType = {
  id: string
  title: string
  amount: number
}

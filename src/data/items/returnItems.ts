export type ReturnItemType = {
  id: string
  img?: string
  amount: number
  title?: string
  detail: string
  date?: string
  maxCount: number[]
}

/**
 * リターン品の情報はここに入れる
 */
export const returnItems: ReturnItemType[] = [
  {
    id: '1',
    img: undefined,
    amount: 2500,
    title: '咲真まつり生誕祭『世界１おまつりさわぎな成人式』【オリジナルアクリルスタンド】',
    detail:
      '＝＝＝＝＝＝＝<br />限定30個‼️<br />＝＝＝＝＝＝＝<br />１枚2,500円(税込)<br />咲真まつり生誕祭のために特別にデザインされたオリジナルアクリルスタンド♡',
    date: '※この商品の販売期間は2026年5月30日 22:00 ~ 2026年6月29日 23:59です。',
    maxCount: [1, 2, 3, 4, 5],
  },
  {
    id: '2',
    img: undefined,
    amount: 4000,
    title: '咲真まつり生誕祭『世界１おまつりさわぎな成人式』【オリジナルTシャツ】',
    detail:
      '＝＝＝＝＝＝＝<br />限定30枚‼️<br />＝＝＝＝＝＝＝<br />１枚4,000円(税込)<br />咲真まつり考案のオリジナルTシャツとなります。<br />※サイズはXLのみ',
    date: '※この商品の販売期間は2026年5月30日 22:00 ~ 2026年6月29日 23:59です。',
    maxCount: [1, 2, 3, 4, 5],
  },
  {
    id: '3',
    img: undefined,
    amount: 3500,
    title: '咲真まつり生誕祭『世界１おまつりさわぎな成人式』【生誕チェキ券】',
    detail:
      '＝＝＝＝＝＝＝<br />限定150枚‼️<br />＝＝＝＝＝＝＝<br />１枚3,500円(税込)<br />生誕メンバー限定で使用可能な、サインありチェキ券としてご利用いただけます。<br />※使用期限2026年9月30日まで',
    date: '※この商品の販売期間は2026年5月30日 22:00 ~ 2026年6月29日 23:59です。',
    maxCount: [1, 2, 3, 4, 5],
  },
]

// export type NewsType = {
//   id: number
//   date: string
//   title: string
//   context: string[]
//   urls: UrlType[]
//   img: ImgProps[]
// }
export type NewsType = {
  contents: NewsContentsType[]
  totalCount: number
  offset: number
  limit: number
}

export type NewsContentsType = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  category: {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    name: string
  }
  open: string
}

import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { FooterView } from '@/views/footerView'
import { HeaderView } from '@/views/headerView'
import { NewsDetailView } from '@/views/newsDetailView'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function NewsDetail(props: { params: any }) {
  const { params } = props
  return (
    <SingleViewLayout
      header={<HeaderView />}
      main={<NewsDetailView id={params?.id} />}
      footer={<FooterView />}
    />
  )
}

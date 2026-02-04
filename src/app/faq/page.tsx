import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { FaqView } from '@/views/faqView'
import { FooterView } from '@/views/footerView'
import { HeaderView } from '@/views/headerView'

export default function Shop() {
  return (
    <SingleViewLayout
      header={<HeaderView url='faq' />}
      main={<FaqView />}
      footer={<FooterView />}
    />
  )
}

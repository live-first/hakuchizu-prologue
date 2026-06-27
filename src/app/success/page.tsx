import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { FooterView } from '@/views/footerView'
import { HeaderView } from '@/views/headerView'
import { SuccessView } from '@/views/success'

export default function Success() {
  return (
    <SingleViewLayout
      header={<HeaderView url='shop' />}
      allView={<SuccessView />}
      footer={<FooterView />}
    />
  )
}

import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { FooterView } from '@/views/footerView'
import { HeaderView } from '@/views/headerView'
import { ShopView } from '@/views/shopView'

export default function Shop() {
  return (
    <SingleViewLayout
      header={<HeaderView url='shop' />}
      main={<ShopView />}
      footer={<FooterView />}
    />
  )
}

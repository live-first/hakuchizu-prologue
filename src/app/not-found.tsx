import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { FooterView } from '@/views/footerView'
import { HeaderView } from '@/views/headerView'
import { NotFoundView } from '@/views/notFoundView'

const NotFoundPage = () => {
  return (
    <SingleViewLayout header={<HeaderView />} allView={<NotFoundView />} footer={<FooterView />} />
  )
}

export default NotFoundPage

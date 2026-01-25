import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { FooterView } from '@/views/footerView'
import { HeaderView } from '@/views/headerView'
import { ScheduleView } from '@/views/scheduleView'

export default function Video() {
  return (
    <SingleViewLayout
      header={<HeaderView url='schedule' />}
      main={<ScheduleView />}
      footer={<FooterView />}
    />
  )
}

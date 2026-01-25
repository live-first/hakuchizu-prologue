'use client'

import { Heading } from '@/components/Heading'

export const ScheduleView = () => {
  return (
    <div className='flex flex-col gap-12 pt-8 justify-center items-center pb-40 px-1 md:px-6'>
      <Heading tag={2} label='SCHEDULE' className='pt-24 pb-8' />
      <div className='flex flex-col gap-4 w-full'>
        <iframe
          title='カレンダー'
          src='https://timetreeapp.com/public_calendars/hcpl/embed/monthly?calendar_name=false&frame_color=%23e5f5ff'
          className='h-[700px] w-full border-none'
        />
      </div>
    </div>
  )
}

import { Heading } from '@/components/Heading'
import { ReturnView } from '../returns'

export const ShopView = () => {
  return (
    <div className='flex flex-col gap-12 pt-8 justify-center items-center pb-40 px-1 md:px-6'>
      <Heading tag={2} label='SHOP' className='pt-24 pb-8' />
      <div className='flex flex-col gap-3'>
        <ReturnView />
      </div>
    </div>
  )
}

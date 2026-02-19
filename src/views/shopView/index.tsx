import { Heading } from '@/components/Heading'
import { Img } from '@/components/Image'
import sales from '@/image/sales.jpg'
import new_customer from '@/image/new_customer.jpg'

export const ShopView = () => {
  return (
    <div className='flex flex-col gap-12 pt-8 justify-center items-center pb-40 px-1 md:px-6'>
      <Heading tag={2} label='SHOP' className='pt-24 pb-8' />
      <div className='flex flex-col gap-3'>
        <Img src={sales.src} alt='グッズレギュレーション' />
        <Img src={new_customer.src} alt='新規特典' />
      </div>
    </div>
  )
}

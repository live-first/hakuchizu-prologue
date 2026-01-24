import { Img } from '@/components/Image'
import topImage from '@/image/白地図プロローグ.jpg'

export const TopHeaderView = () => {
  return (
    <div className='w-full'>
      <Img src={topImage.src} alt='白地図プロローグ' />
    </div>
  )
}

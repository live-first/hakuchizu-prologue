import { Img } from '@/components/Image'
import { Footer } from '@/templates/footer'

export const FooterView = () => {
  const Bottom = () => {
    return (
      <div className='flex w-full'>
        <Img src='' alt='フッター' />
      </div>
    )
  }
  return (
    <Footer
      bottom={<Bottom />}
      copyright='Copyright © 2025 ワンダーウィード 天 公式サイト All Rights Reserved'
    >
      <div className='flex flex-col items-center pt-3 gap-4'></div>
    </Footer>
  )
}

import { Heading } from '@/components/Heading'
import { PropsWithChildren } from 'react'
import topImage from '@/image/白地図プロローグ.jpg'
import { Img } from '@/components/Image'

export const GroupProfileView = () => {
  const Section = ({ children }: PropsWithChildren) => {
    return <div className='flex flex-col w-full gap-2 items-center'>{children}</div>
  }
  return (
    <div className='flex flex-col gap-12 pt-8 justify-center pb-40 px-1 md:px-6'>
      <div className='mx-auto max-w-3xl px-4'>
        <Img src={topImage.src} alt='白地図プロローグ' />
        <Section>
          <Heading tag={2} label='白地図プロローグ' />
          <div></div>
        </Section>
      </div>
    </div>
  )
}

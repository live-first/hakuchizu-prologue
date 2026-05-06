import { Heading } from '@/components/Heading'
import { PropsWithChildren } from 'react'
import topImage from '@/image/白地図プロローグ.jpg'
import { Img } from '@/components/Image'
import { Timeline } from '@/components/ui/timeline'

export const GroupProfileView = () => {
  const data = [
    {
      title: '2025.2.1',
      content: (
        <div>
          <p className='mb-8 text-xl font-bold text-secondary'>プレデビュー</p>
          <div className='py-4'>シアターマーキュリー新宿にてステージデビュー！</div>
        </div>
      ),
    },
    {
      title: '2025.3.5',
      content: (
        <div>
          <p className='mb-8 text-xl font-bold text-secondary'>SPARKing 優勝</p>
          <div className='py-4'>「SPARK 2026」の出演権をかけたイベント「SPARKing」にて優勝！</div>
        </div>
      ),
    },
    {
      title: '2025.5.3',
      content: (
        <div>
          <p className='mb-8 text-xl font-bold text-secondary'>IDOL SUMMER JUNGLE GOLDEN出演</p>
          <div className='py-4'>大型IDOLフェス出演</div>
        </div>
      ),
    },
    {
      title: '2025.5.19',
      content: (
        <div>
          <p className='mb-8 text-xl font-bold text-secondary'>デビュー</p>
          <div className='py-4'>ViBlue EBISUにて、メンバー７人でデビュー単独ワンマン</div>
        </div>
      ),
    },
  ]

  const Section = ({ children }: PropsWithChildren) => {
    return <div className='flex flex-col w-full gap-2 items-center'>{children}</div>
  }

  return (
    <div className='flex flex-col gap-12 pt-8 justify-center pb-40 px-1 md:px-6'>
      <div className='mx-auto max-w-3xl px-4'>
        <Img src={topImage.src} alt='白地図プロローグ' />
        <Section>
          <Heading tag={2} label='白地図プロローグ' />
          <div>
            <Timeline data={data} />
          </div>
        </Section>
      </div>
    </div>
  )
}

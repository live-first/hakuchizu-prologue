import SlideUpAnimation from '@/components/animation/slideUpAnimation'
import { Heading } from '@/components/Heading'
import { Img } from '@/components/Image'
import matsuri from '@/image/咲真まつり.png'
import hikaru from '@/image/佐藤ひかる.png'
import mio from '@/image/橘みお.png'
import koko from '@/image/櫻葉ここ.png'
import xLogo from '@/image/x-logo.png'
import ttLogo from '@/image/tiktok-logo.png'
import instaLogo from '@/image/instagram_logo.png'
import Link from 'next/link'

export const MemberView = () => {
  return (
    <div className='flex flex-col gap-12 pt-8 justify-center items-center pb-40 px-1 md:px-6'>
      <Heading tag={2} label='MEMBER' className='pt-24 pb-8' />
      <div className='flex flex-col'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6'>
          <SlideUpAnimation>
            <div className='flex flex-col p-1 md:p-3 w-full' id='佐藤ひかる'>
              <Img src={hikaru.src} alt='佐藤ひかる' cName='duration-700 hover:scale-105' />
              <div className='pt-6 pb-2 text-2xl font-bold'>佐藤ひかる</div>
              <div>
                <p>生年月日：10月22日</p>
                <p>MBTI：INFJ</p>
                <p>出身地：広島県</p>
                <p>担当カラー：レッド</p>
                <p>血液型:O型</p>
                <p>趣味：掃除 または 犬の散歩を見る または アイドル鑑賞</p>
                <p>特技：中国語</p>
              </div>
              <div className='flex justify-center gap-8 pt-2'>
                <Link href='https://x.com/HCPL_hikaru' className='w-1/8'>
                  <Img src={xLogo.src} />
                </Link>
                <Link href='https://t.co/l2bwbSqmN2' className='w-1/8'>
                  <Img src={ttLogo.src} />
                </Link>
              </div>
            </div>
          </SlideUpAnimation>
          <SlideUpAnimation>
            <div className='flex flex-col p-1 md:p-3 w-full' id='櫻葉ここ'>
              <Img src={koko.src} alt='櫻葉ここ' cName='duration-700 hover:scale-105' />
              <div className='pt-6 pb-2 text-2xl font-bold'>櫻葉ここ</div>
              <div>
                <p>生年月日：9月26日</p>
                <p>MBTI：ESFP</p>
                <p>出身地：山梨県</p>
                <p>担当カラー：ピンク</p>
                <p>血液型:AB型</p>
                <p>
                  特技：おしゃべり たくさん笑うこと 躓くこと 迷子になること 美味しそうに食べること
                  人差し指と小指を両手くっつけることができるとこ
                </p>
              </div>
              <div className='flex justify-center gap-8 pt-2'>
                <Link href='https://x.com/HCPL_koko' className='w-1/8'>
                  <Img src={xLogo.src} />
                </Link>
                <Link href='https://t.co/nnvPBGNes3' className='w-1/8'>
                  <Img src={ttLogo.src} />
                </Link>
              </div>
            </div>
          </SlideUpAnimation>
          <SlideUpAnimation>
            <div className='flex flex-col p-1 md:p-3 w-full' id='橘みお'>
              <Img src={mio.src} alt='橘みお' cName='duration-700 hover:scale-105' />
              <div className='pt-6 pb-2 text-2xl font-bold'>橘みお</div>
              <div>
                <p>生年月日：10月28日</p>
                <p>MBTI：ISFJ</p>
                <p>出身地：大阪府</p>
                <p>担当カラー：オレンジ</p>
                <p>血液型:O型</p>
                <p>趣味：お菓子作り、カラオケ</p>
              </div>
              <div className='flex justify-center gap-8 pt-2'>
                <Link href='https://x.com/HCPL_mio' className='w-1/8'>
                  <Img src={xLogo.src} />
                </Link>
                <Link href='https://t.co/FcJrEYhZGd' className='w-1/8'>
                  <Img src={ttLogo.src} />
                </Link>
                <Link href='https://t.co/aLBEAGizU6' className='w-1/7'>
                  <Img src={instaLogo.src} />
                </Link>
              </div>
            </div>
          </SlideUpAnimation>
          <SlideUpAnimation>
            <div className='flex flex-col p-1 md:p-3 w-full' id='咲真まつり'>
              <Img src={matsuri.src} alt='咲真まつり' cName='duration-700 hover:scale-105' />
              <div className='pt-6 pb-2 text-2xl font-bold'>咲真まつり</div>
              <div>
                <p>生年月日：6月27日</p>
                <p>MBTI：ENTP</p>
                <p>出身地：埼玉県</p>
                <p>担当カラー：イエロー</p>
                <p>血液型:A型</p>
                <p>趣味：アニメを見ること</p>
                <p>特技：ダンス、韓国語</p>
              </div>
              <div className='flex justify-center gap-8 pt-2'>
                <Link href='https://x.com/HCPL_matsuri' className='w-1/8'>
                  <Img src={xLogo.src} />
                </Link>
                <Link href='https://t.co/AQ3l1jjSHV' className='w-1/8'>
                  <Img src={ttLogo.src} />
                </Link>
              </div>
            </div>
          </SlideUpAnimation>
        </div>
      </div>
    </div>
  )
}

'use client'

import { Heading } from '@/components/Heading'
import { homeVideo } from '@/data/homeVideo'
import { NewsList } from '@/templates/newsList'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import YouTube from 'react-youtube'
import hane_kotomi from '@/image/羽根ことみ.jpg'
import sendo_suzuka from '@/image/千堂すずか.jpg'
import nakajo_airi from '@/image/中條あいり.jpg'
import shinonome_shiori from '@/image/東雲しおり.jpg'
import shirakawa_yumeka from '@/image/白川ゆめか.jpg'
import arisu_nanase from '@/image/有栖ななせ.jpg'
import yuzuki_reia from '@/image/悠月れいあ.jpg'
import x_logo from '@/image/X.svg'
import tiktok_logo from '@/image/TikTok.svg'
import youtube_logo from '@/image/Youtube.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Img } from '@/components/Image'
import { Container } from '@mui/material'
import SlideUpAnimation from '@/components/animation/slideUpAnimation'
import { useNewsApi } from '@/api/newsApi'
import { NewsContentsType } from '@/domain/news'

export const HomeView = () => {
  const { getNews } = useNewsApi()
  const news: NewsContentsType[] = getNews.data
    ? (getNews.data.contents as unknown as NewsContentsType[])
    : []

  const Section = ({ children }: PropsWithChildren) => {
    return (
      <SlideUpAnimation>
        <div className='flex flex-col w-full gap-2 items-center'>{children}</div>
      </SlideUpAnimation>
    )
  }

  const ViewAllButton = ({ href }: { href: string }) => (
    <Link href={href}>
      <span className='flex px-20 py-4 mt-8 border bg-black hover:bg-white hover:text-black hover:border'>
        VIEW All
      </span>
    </Link>
  )

  return (
    <div className='flex flex-col gap-32 py-8 justify-center px-1 md:px-6'>
      <Section>
        <Heading tag={2} label='NEWS' />
        <Container maxWidth='md'>
          <NewsList max={3} news={news} />
        </Container>
        <ViewAllButton href='/news' />
      </Section>
      <Section>
        <Heading tag={2} label='Schedule' />
        <Container maxWidth='md'>
          <iframe
            title='カレンダー'
            src='https://timetreeapp.com/public_calendars/hcpl/embed/list?calendar_name=false&frame_color=%23e5f5ff'
            className='w-full h-[500px]'
          />
        </Container>
      </Section>
      <Section>
        <Heading tag={2} label='MEMBER' />
        <div className='flex w-full'>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            pagination={{ clickable: false, el: '#pagination' }}
            mousewheel={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={500}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              500: {
                slidesPerView: 1.8,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
              1600: {
                slidesPerView: 3.3,
                spaceBetween: 30,
              },
              1800: {
                slidesPerView: 4.3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <Link href='/member#白川ゆめか'>
                <Img src={shirakawa_yumeka.src} alt='白川ゆめか' />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/member#東雲しおり'>
                <Img src={shinonome_shiori.src} alt='東雲しおり' />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/member#千堂すずか'>
                <Img src={sendo_suzuka.src} alt='千堂すずか' />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/member#中條あいり'>
                <Img src={nakajo_airi.src} alt='中條あいり' />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/member#羽根ことみ'>
                <Img src={hane_kotomi.src} alt='羽根ことみ' />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/member#有栖ななせ'>
                <Img src={arisu_nanase.src} alt='有栖ななせ' />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/member#悠月れいあ'>
                <Img src={yuzuki_reia.src} alt='悠月れいあ' />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
        <ViewAllButton href='/member' />
      </Section>
      <Section>
        <Heading tag={2} label='SNS' />
        <Container maxWidth='sm'>
          <div className='flex justify-center content-center gap-12 items-center'>
            <Link href='https://x.com/HCPL_official' className='w-1/6'>
              <Img src={x_logo.src} alt='x-logo' />
            </Link>
            {/* <Link href='' className='w-1/3'>
            <Img src={insta_logo.src} alt='insta-logo' />
          </Link> */}
            <Link href='https://www.tiktok.com/@hcpl_official' className='w-1/6'>
              <Img src={tiktok_logo.src} alt='tiktok-logo' />
            </Link>
            <Link
              href='https://www.youtube.com/@%E7%99%BD%E5%9C%B0%E5%9B%B3%E3%83%97%E3%83%AD%E3%83%AD%E3%83%BC%E3%82%B0'
              className='w-1/6'
            >
              <Img src={youtube_logo.src} alt='youtube-logo' />
            </Link>
          </div>
        </Container>
      </Section>
      <Section>
        <Heading tag={2} label='CONTACT' />
        <div className='flex flex-col gap-4 text-center pt-4'>
          <p>イベント出演のお誘い / 取材 / 仕事依頼 /</p>
          <p>その他のお問い合わせは下記までお願いします。</p>
        </div>
        <Link href='/contact'>
          <span className='flex px-20 py-4 mt-8 border bg-black hover:bg-white hover:text-black hover:border'>
            お問い合わせはこちら
          </span>
        </Link>
      </Section>
    </div>
  )
}

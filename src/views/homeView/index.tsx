'use client'

import { Heading } from '@/components/Heading'
import { NewsList } from '@/templates/newsList'
import Link from 'next/link'
import matsuri from '@/image/咲真まつり.png'
import hikaru from '@/image/佐藤ひかる.png'
import mio from '@/image/橘みお.png'
import koko from '@/image/櫻葉ここ.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Img } from '@/components/Image'
import { Container } from '@mui/material'
import { useNewsApi } from '@/api/newsApi'
import { NewsContentsType } from '@/domain/news'
import { SlideUpSection } from '@/templates/section/SlideUpSection'
import x_logo from '@/image/X.svg'
import tiktok_logo from '@/image/TikTok.svg'
import youtube_logo from '@/image/Youtube.png'
import './style.css'

export const HomeView = () => {
  const { getNews } = useNewsApi()
  const news: NewsContentsType[] = getNews.data
    ? (getNews.data.contents as unknown as NewsContentsType[])
    : []

  const ViewAllButton = ({ href }: { href: string }) => (
    <Link href={href}>
      <span className='flex px-20 py-4 mt-8 border bg-[#e5f5ff] border-blue-400 hover:bg-white'>
        VIEW All
      </span>
    </Link>
  )

  return (
    <div className='flex flex-col gap-32 pt-8 justify-center'>
      <SlideUpSection>
        <Heading tag={2} label='NEWS' />
        <Container maxWidth='md'>
          <NewsList max={3} news={news} />
        </Container>
        <ViewAllButton href='/news' />
      </SlideUpSection>
      <SlideUpSection>
        <Heading tag={2} label='Schedule' />
        <Container maxWidth='md'>
          <iframe
            title='カレンダー'
            src='https://timetreeapp.com/public_calendars/hcpl/embed/list?calendar_name=false&frame_color=%23e5f5ff'
            className='w-full h-[500px]'
          />
        </Container>
      </SlideUpSection>
      <SlideUpSection>
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
              <Link href='/member#佐藤ひかる'>
                <Img src={hikaru.src} alt='佐藤ひかる' />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/member#櫻葉ここ'>
                <Img src={koko.src} alt='櫻葉ここ' />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/member#橘みお'>
                <Img src={mio.src} alt='橘みお' />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/member#咲真まつり'>
                <Img src={matsuri.src} alt='咲真まつり' />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
        <ViewAllButton href='/member' />
      </SlideUpSection>
      <div className='flex flex-col py-32 gap-32 bg-blue-gradient'>
        <SlideUpSection>
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
        </SlideUpSection>
        <SlideUpSection>
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
        </SlideUpSection>
      </div>
    </div>
  )
}

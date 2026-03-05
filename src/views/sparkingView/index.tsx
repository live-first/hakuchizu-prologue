'use client'

import { Img } from '@/components/Image'
import './style.css'
import spark_logo from '@/image/spark/sparking_logo.svg'
import hcpl_logo from '@/image/白地図プロローグロゴ.png'
import hcpl from '@/image/白地図プロローグ.jpg'
import rule1 from '@/image/spark/rule1.jpeg'
import reg1 from '@/image/spark/reg1.jpeg'
import reg2 from '@/image/spark/reg2.jpeg'
import reg3 from '@/image/spark/reg3.jpeg'
import timetable0305 from '@/image/spark/timetable0305.jpg'
import { Container } from '@mui/material'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { IoMdArrowDown } from 'react-icons/io'
import { Heading } from '@/components/Heading'
import Link from 'next/link'
import { PropsWithChildren, useEffect, useState } from 'react'
import { LetterPanel } from '@/templates/letterPanel'
import { Marker } from '@/components/Marker'
import { YoutubeContainer } from '@/templates/youtube'
import { PresentType, SelectedItemType } from '@/domain/sparking'
import { initSelectedItem, votingMaster as vm } from '@/data/sparking'
import { returnItems as ri } from '@/data/sparkingItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const SparkingView = () => {
  return (
    <div className='flex flex-col relative'>
      <Link
        href='https://ticketdive.com/event/springsparking'
        target='_blank'
        className='fixed z-20 right-4 top-2 bg-fuchsia-400 text-white font-bold italic font-sans px-4 py-2 rounded-full text-3xl'
      >
        チケット
      </Link>
      <Header />
      <Caution />
      <About />
      <Rule />
      <Faq />
      <Simulator />
      <Caution2 />
    </div>
  )
}

const Header = () => {
  return (
    <div className='flex flex-col w-full h-[500px] bg-gradient-original p-2 items-center justify-center'>
      <Img src={spark_logo.src} alt='SPARKingロゴ' />
      <div className='text-white italic font-bold text-5xl text-shadow'>
        2026<span className='text-3xl'>年</span>3<span className='text-3xl'>月</span>4
        <span className='text-3xl'>日</span>-5<span className='text-3xl'>日</span>
      </div>
      <div className='text-white italic font-bold text-2xl md:text-5xl text-shadow'>
        有楽町ヒューリックホール
      </div>
      <div className='flex flex-col bg-white p-3 shadow mt-2'>
        <div className='flex text-red-600'>3/5（木）</div>
        <div className='flex text-red-600'>
          {' '}
          《ライブ》16:10〜16:25
          <br />
          《特典会》16:45〜17:45
        </div>
        <div className='flex'>
          <div className='bg-fuchsia-500 px-1 text-white'>投票可能時間</div>
          <div className='flex text-red-600'>12:30〜17:45</div>
        </div>
      </div>
    </div>
  )
}

const Caution = () => {
  return (
    <div className='flex w-full bg-yellow-300 px-4 justify-center text-sm'>
      ※本サイトは「白地図プロローグ」を応援してくれる方向けに作成しております。
    </div>
  )
}

const Caution2 = () => {
  return (
    <div className='flex w-full bg-yellow-300 px-4 justify-center text-sm'>
      ※本サイトは「白地図プロローグ」を応援してくれる方向けに作成しております。
      <br />
      「白地図プロローグ」以外に関する内容は一切の責任を負いませんので、ご了承ください。
      <br />
      最新の情報や各グループの情報については、それぞれの公式X等をご確認ください。
    </div>
  )
}

const About = () => {
  return (
    <div className='flex flex-col bg-babble pt-12 pb-24 gap-6'>
      <Container maxWidth='xl'>
        <Img src={hcpl_logo.src} alt='白地図プロローグロゴ' cName='pb-6' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4'>
          <LetterPanel title='SPARKingとは'>
            <div>
              <Marker theme='yellow'>SPARKing</Marker>
              は、毎年夏に開催されている大型のアイドルの対バンイベント
              <Marker theme='pink'>『SPARK』</Marker>に出場するための、予選会イベントです。
              <br />
              <br />
              今回は第三回目のイベントで優勝賞金は<Marker theme='yellow'>150万円</Marker>
              となっております。
              <br />
              <br />
              <YoutubeContainer videoId='pEWiRDS_Zw8' />
            </div>
          </LetterPanel>

          <LetterPanel title='白地図プロローグ'>
            <div>
              <Marker theme='yellow'>白地図プロローグ</Marker>は
              <Marker theme='pink'>
                「完成された物語」ではなく「始まり続ける物語」を届けるために。
              </Marker>
              をコンセプトに東京拠点で活動しているアイドルグループです。2026年2月1日からプレデビューとして活動を開始しています。
            </div>
            <Img src={hcpl.src} alt='白地図プロローグ' />
          </LetterPanel>
        </div>
      </Container>
    </div>
  )
}

const Rule = () => {
  return (
    <div className='flex flex-col w-full bg-[#ef9fff] py-12 items-center justify-center'>
      <Container maxWidth='md'>
        <Img src={rule1.src} alt='SPARKingルール' />
        <Heading tag={2} label='TIME TABLE' className='pt-24 pb-8' />
        <Img src={timetable0305.src} alt='タイムテーブル' />
        <Heading tag={2} label='レギュレーション' className='pt-24 pb-8' />
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
            }}
          >
            <SwiperSlide>
              <Img src={reg1.src} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={reg2.src} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={reg3.src} alt='' />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  )
}

const Faq = () => {
  return (
    <div className='flex flex-col bg-gradient-original pb-34'>
      <Container maxWidth='md'>
        <Heading tag={2} label='FAQ' className='pt-24 pb-8' />

        <div className='flex flex-col gap-6'>
          <Heading tag={4} label='応援チケットについて' />
          <AccordionTemp question='Q.応援チケットとは？'>
            A.プレイガイドの申し込み完了で「1票」となります！
            <br />
            チケットはまだ発売前です！
            <br />
            受付が始まり次第改めてお知らせします🔥🔥🔥
            <br />
            <br />
            チケットお申し込みの際はお目当てを「白地図プロローグ」でお願いいたします！
            <br />
            ※別のお目当てグループの場合は対象外になります🙇
            <br />
          </AccordionTemp>
          <AccordionTemp question='Q.特典の引き換えについてどうしたらいい？'>
            A.物販卓にてチケット申込画面をご提示ください。
            <br />
            ※特典は当日受け取りでなくても問題ありません。後日の物販にて引き換え可能です！
            <br />
            →確認後、票数分の特典＋購入特典をお渡しします✨
            <br />
          </AccordionTemp>
          <AccordionTemp question='Q. 現地でも申し込める？'>
            A. 可能です🗳️
            <br />
            オンライン投票なので、現地・遠方どちらからでも投票できます◎
            <br />
          </AccordionTemp>
        </div>
        <div className='flex flex-col gap-6 mt-12'>
          <Heading tag={4} label='特典について' />
          <AccordionTemp question='Q.累計投票特典とは？'>
            A.グループの総票数ではありません！あなた自身が投票した票数に応じて特典がもらえます🗳️
            <br />
            <br />
            投票の際は「白地図プロローグ」でお願いいたします！
            <br />
            <br />
            例:VIPチケットで入場すると投票券が5枚配布されます。その5枚を自分で投票すると「5票」扱いになり、累計投票特典の5票分（囲み写メ）が受け取れます✨✨✨
            <br />
          </AccordionTemp>
          <AccordionTemp question='Q.デジタル手紙とは？'>
            A.オリジナルメッセージ画像です📱
            <br />
            <br />
            推しメン1名から、あなた宛のメッセージが書かれた画像を公式DMよりお送りします。
            <br />
            <br />
            ※特典の受け取りは事前申請制です。
            <br />
            申請時に「推しメン」と「宛名」をお伺いします。
            <br />
            推しメン選択について、らら🅿も可能です！
            <br />
          </AccordionTemp>
          <AccordionTemp question='Q.お弁当は複数人で受け取れる？'>
            A. 1名のみ対象です。
          </AccordionTemp>
          <AccordionTemp question='Q. お弁当のサイズは？'>
            A.
            内容・サイズともに自由（メンバーにお任せです！）一応、持ち帰れるサイズにするようにとは伝えます🍱🥷
          </AccordionTemp>
          <AccordionTemp question='Q. 累計投票特典の60票を、30票×2に分けて2人からデジタル手紙をもらえますか？'>
            A. 振り分けは可能です！ただし、通過制特典は重複しません（1回のみ付与）
            <br />
            <br />
            例:100票で「50票特典」を2つ希望された場合
            <br />
            → 通過特典の付与は1回のみとなります。
            <br />
          </AccordionTemp>
          <AccordionTemp question='Q.チケットを申し込んだけど急遽行けなくなってしまった…体調不良で当日来られなくなった…「行けないけどVIP特典が欲しい！」'>
            A.公式（@HCPL_official）DMまでご連絡ください！こちらで対応いたします✨
          </AccordionTemp>
        </div>
      </Container>
    </div>
  )
}

const Simulator = () => {
  // 選択されたアイテム
  const [item, setItem] = useState<SelectedItemType>(initSelectedItem)
  // 投票数
  const [voting, setVoting] = useState<number>(0)
  const [present, setPresent] = useState<PresentType[]>([])

  useEffect(() => {
    const votingAmount =
      item.vip * vm.vip.voting +
      item.general * vm.general.voting +
      item.common * vm.common.voting +
      item.ouen * vm.ouen.voting +
      item.kuji * vm.kuji.voting +
      item.shoutai * vm.shoutai.voting
    setVoting(votingAmount)

    const presentAll: PresentType[] = []
    // VIP
    vm.vip.items.map((vi) => {
      // リターンアイテムを抽出する
      const pi = ri.filter((content) => content.id === vi.id)[0]
      presentAll.push({ id: pi.id, title: pi.title, amount: vi.amount * item.vip })
    })

    // 一般
    vm.general.items.map((vi) => {
      // リターンアイテムを抽出する
      const pi = ri.filter((content) => content.id === vi.id)[0]
      presentAll.push({ id: pi.id, title: pi.title, amount: vi.amount * item.general })
    })

    // 応援
    vm.ouen.items.map((vi) => {
      // リターンアイテムを抽出する
      const pi = ri.filter((content) => content.id === vi.id)[0]
      presentAll.push({ id: pi.id, title: pi.title, amount: vi.amount * item.ouen })
    })

    // 招待
    vm.shoutai.items.map((vi) => {
      // リターンアイテムを抽出する
      const pi = ri.filter((content) => content.id === vi.id)[0]
      presentAll.push({ id: pi.id, title: pi.title, amount: vi.amount * item.shoutai })
    })

    const merged = Object.values(
      presentAll.reduce<Record<string, PresentType>>((acc, item) => {
        if (!acc[item.id]) {
          acc[item.id] = { ...item }
        } else {
          acc[item.id].amount += item.amount
        }
        return acc
      }, {}),
    )
    setPresent(merged)
  }, [item.common, item.general, item.kuji, item.ouen, item.shoutai, item.vip])

  return (
    <div className='bg-amber-100'>
      <Container maxWidth='md' className=''>
        <Heading tag={2} label='Simulator' className='pt-24 pb-8' />
        <div className='gap-6 pb-24 grid grid-cols-1 md:grid-cols-2'>
          <LetterPanel title='購入商品'>
            <p className='leading-4'>購入したチケットの枚数や各種券の枚数を入力してください</p>
            <div className='flex flex-col gap-4 py-2'>
              <div className='flex justify-between'>
                <p>VIPチケット</p>
                <input
                  type='number'
                  min={0}
                  max={200}
                  className='spin-erase spin w-20'
                  onChange={(e) => {
                    setItem({
                      ...item,
                      vip: Number(e.target.value),
                    })
                  }}
                />
              </div>
              <div className='flex justify-between'>
                <p>一般チケット</p>
                <input
                  type='number'
                  min={0}
                  max={200}
                  className='spin-erase spin w-20'
                  onChange={(e) => {
                    setItem({
                      ...item,
                      general: Number(e.target.value),
                    })
                  }}
                />
              </div>
              <div className='flex justify-between'>
                <p>応援チケット</p>
                <input
                  type='number'
                  min={0}
                  max={200}
                  className='spin-erase spin w-20'
                  onChange={(e) => {
                    setItem({
                      ...item,
                      ouen: Number(e.target.value),
                    })
                  }}
                />
              </div>
              <div className='flex justify-between'>
                <p>共通特典券</p>
                <input
                  type='number'
                  min={0}
                  max={200}
                  className='spin-erase spin w-20'
                  onChange={(e) => {
                    setItem({
                      ...item,
                      common: Number(e.target.value),
                    })
                  }}
                />
              </div>
              <div className='flex justify-between'>
                <p>SPARKingくじ</p>
                <input
                  type='number'
                  min={0}
                  max={200}
                  className='spin-erase spin w-20'
                  onChange={(e) => {
                    setItem({
                      ...item,
                      kuji: Number(e.target.value),
                    })
                  }}
                />
              </div>
              <div className='flex justify-between'>
                <p>招待</p>
                <input
                  type='number'
                  min={0}
                  max={200}
                  className='spin-erase spin w-20'
                  onChange={(e) => {
                    setItem({
                      ...item,
                      shoutai: Number(e.target.value),
                    })
                  }}
                />
              </div>
            </div>
          </LetterPanel>
          <div className='flex flex-col gap-6 w-full'>
            <LetterPanel title='投票数'>
              <div className='flex justify-center'>
                <div className='text-2xl font-bold'>
                  {voting}
                  <span className='pl-2'>票</span>
                </div>
              </div>
            </LetterPanel>
            <LetterPanel title='獲得特典内容'>
              <div className='flex flex-col gap-2'>
                {present.map((cont, index) => {
                  return cont.amount > 0 ? (
                    <div className='flex justify-between' key={index}>
                      <div>{cont.title}</div>
                      <div>{cont.amount} 枚</div>
                    </div>
                  ) : (
                    <></>
                  )
                })}
              </div>
            </LetterPanel>
          </div>
        </div>
      </Container>
    </div>
  )
}

const AccordionTemp = ({ question, children }: PropsWithChildren<{ question: string }>) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<IoMdArrowDown />}
        style={{ backgroundColor: '#ffffff', color: '#332878' }}
        className='font-bold'
      >
        {question}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  )
}

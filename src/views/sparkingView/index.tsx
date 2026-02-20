'use client'

import { Img } from '@/components/Image'
import './style.css'
import spark_logo from '@/image/spark/sparking_logo.svg'
import hcpl_logo from '@/image/白地図プロローグロゴ.png'
import hcpl from '@/image/白地図プロローグ.jpg'
import rule1 from '@/image/spark/rule1.jpeg'
import { Container } from '@mui/material'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { IoMdArrowDown } from 'react-icons/io'
import { Heading } from '@/components/Heading'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { LetterPanel } from '@/templates/letterPanel'
import { Marker } from '@/components/Marker'
import { YoutubeContainer } from '@/templates/youtube'

export const SparkingView = () => {
  return (
    <div className='flex flex-col relative'>
      <Link
        href='https://ticketdive.com/event/springsparking'
        target='_blank'
        className='fixed z-20 right-4 top-2 bg-fuchsia-400 text-white font-bold italic font-sans px-4 py-2 rounded-full text-3xl'
      >
        チケットはこちら
      </Link>
      <Header />
      <Caution />
      <About />
      <Rule />
      <Faq />
      <Caution2 />
    </div>
  )
}

const Header = () => {
  return (
    <div className='flex flex-col w-full h-[400px] bg-gradient-original p-2 items-center justify-center'>
      <Img src={spark_logo.src} alt='SPARKingロゴ' />
      <div className='text-white italic font-bold text-5xl text-shadow'>
        2026<span className='text-3xl'>年</span>3<span className='text-3xl'>月</span>4
        <span className='text-3xl'>日</span>-5<span className='text-3xl'>日</span>
      </div>
      <div className='text-white italic font-bold text-2xl md:text-5xl text-shadow'>
        有楽町ヒューリックホール
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
          <AccordionTemp question='Q. リセール時の返金はいつになりますか？'>
            A. 返金時期は個別対応となります。
            <br />
            該当の方は、必ず一度公式（@HCPL_official）DMまでご連絡ください🙇
            <br />
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

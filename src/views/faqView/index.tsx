'use client'

import { Heading } from '@/components/Heading'
import { Img } from '@/components/Image'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { IoMdArrowDown } from 'react-icons/io'
import sales from '@/image/sales.jpg'
import pic from '@/image/photo_reguration.jpg'
import new_customer from '@/image/new_customer.jpg'
import howTo from '@/image/howTo.jpeg'

export const FaqView = () => {
  return (
    <div className='flex flex-col gap-12 pt-8 justify-center items-center pb-40 px-1 md:px-6'>
      <Heading tag={2} label='FAQ' className='pt-24 pb-8' />
      <div className='flex flex-col gap-6'>
        <Accordion>
          <AccordionSummary
            expandIcon={<IoMdArrowDown />}
            style={{ backgroundColor: '#332878', color: 'white' }}
            className='font-bold'
          >
            ライブの撮影はできますか？
          </AccordionSummary>
          <AccordionDetails>
            <div className='flex flex-col gap-8'>
              <Img src={pic.src} alt='撮影レギュレーション' />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<IoMdArrowDown />}
            style={{ backgroundColor: '#332878', color: 'white' }}
            className='font-bold'
          >
            プレゼントを渡すことはできますか？
          </AccordionSummary>
          <AccordionDetails>
            <div className='flex flex-col gap-8'>
              <div>
                ・プレゼントやお手紙はメンバーに直接お渡し頂くことも可能ですが、スタッフが中身を確認させていただきます。また、お客様のお名前とお渡ししたいメンバーの名前のご記入をお願い致します。
              </div>
              <div>
                ・プレゼントに関しまして、いかに該当するものはお受け取りできかねますので予めご了承ください。
              </div>
              <ul className='pl-4'>
                <li>私物、開封済みの物</li>
                <li>手作り、開封済みの食べ物</li>
                <li>動植物、虫など</li>
                <li>金券、15000円を超える高価な物</li>
                <li>その他運営が受け取れないと判断する物</li>
              </ul>
              <div>
                ・お手紙に関しまして、ネガティブな内容や活動と関係のない物、個人的な内容のお手紙はこちらで処分させていただく場合がございます。
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<IoMdArrowDown />}
            style={{ backgroundColor: '#332878', color: 'white' }}
            className='font-bold'
          >
            プレゼントを送ることはできますか？
          </AccordionSummary>
          <AccordionDetails>
            現在は送ることができません。会場に来てお持ちいただく形のみとなります。ご了承ください。今後、レギュレーションが変わる可能性もありますので、その際にご案内させていただきます。
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<IoMdArrowDown />}
            style={{ backgroundColor: '#332878', color: 'white' }}
            className='font-bold'
          >
            物販はどのようなレギュレーションですか？
          </AccordionSummary>
          <AccordionDetails>
            <Img
              src={sales.src}
              alt='物販レギュレーション'
            />
            <Img
              src={new_customer.src}
              alt='新規特典など'
            />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<IoMdArrowDown />}
            style={{ backgroundColor: '#332878', color: 'white' }}
            className='font-bold'
          >
            ライブ〜物販の楽しみ方を教えてください。
          </AccordionSummary>
          <AccordionDetails>
            <Img
              src={howTo.src}
              alt='楽しみ方'
            />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

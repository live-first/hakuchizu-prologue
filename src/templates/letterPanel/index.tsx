import { Panel } from '@/components/Panel'
import { PropsWithChildren } from 'react'
import './style.css'

type LetterPanelProps = {
  title?: string
}
export const LetterPanel = (props: PropsWithChildren<LetterPanelProps>) => {
  const { title, children } = props
  return (
    <Panel className='relative px-4 pb-4 pt-12'>
      <span className='absolute top-0 h-1 w-1/3 bg-primary' />
      <h2 className='absolute -top-3 -left-2 text-2xl font-bold bg-white px-2 py-1 border border-primary letter-title'>
        {title}
      </h2>
      {children}
    </Panel>
  )
}

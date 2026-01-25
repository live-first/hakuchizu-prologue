import { PropsWithChildren, ReactNode } from 'react'

type FooterProps = {
  bottom?: ReactNode
  copyright: string
}

export const Footer = (props: PropsWithChildren<FooterProps>) => {
  const { bottom, copyright, children } = props
  return (
    <div className='flex flex-col relative'>
      {children}
      {bottom}
      <div className='flex pt-4 pb-1 w-full justify-center'>{copyright}</div>
    </div>
  )
}

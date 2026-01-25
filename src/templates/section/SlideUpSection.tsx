import SlideUpAnimation from "@/components/animation/slideUpAnimation"
import { PropsWithChildren } from "react"

export const SlideUpSection = ({ children }: PropsWithChildren) => {
  return (
    <SlideUpAnimation>
      <div className='flex flex-col w-full gap-2 items-center'>{children}</div>
    </SlideUpAnimation>
  )
}

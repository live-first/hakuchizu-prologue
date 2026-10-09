'use client'

import { CloudRequest } from '@/api/cloudApi'
import { useState } from 'react'
import { init, send } from '@emailjs/browser'
import { useStore } from '@/store/useStore'
import { ItemContent } from '@/views/returns'

export const useCheckoutPresenter = () => {
  const [notice, setNotice] = useState<boolean>(false)
  const [sending, setSending] = useState<boolean>(false)

  const sendNotification = async (data: CloudRequest) => {
    init('IdTWr2VgMdRiCW1AG')
    if (!notice) {
      setNotice(true)
      await send('service_livefirst', 'cloud-fund-notification', data)
    }
  }

  const sendEmail = async (data: CloudRequest) => {
    init('IdTWr2VgMdRiCW1AG')
    if (!sending) {
      setSending(true)
      await send('service_livefirst', 'hcpl_goods', data)
    }
  }

  const stored = useStore('return-items').getItem()
  const items = JSON.parse(stored!) as ItemContent[]
  const request = ({
    name,
    email,
    content,
  }: {
    name: string
    email: string
    content: string
  }): CloudRequest => {
    return {
      name: name,
      email: email,
      content: content,
      product1: items[0] ? items[0]?.count.toString() : '0',
      product2: items[1] ? items[1]?.count.toString() : '0',
      product3: items[2] ? items[2]?.count.toString() : '0',
    }
  }

  return { sendNotification, setNotice, sendEmail, setSending, request }
}

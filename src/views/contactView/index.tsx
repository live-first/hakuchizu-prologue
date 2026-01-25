'use client'

import { Heading } from '@/components/Heading'
import { ContactForm } from '@/templates/contactForm'
import { Container } from '@mui/material'

export const ContactView = () => {
  return (
    <div className='flex flex-col gap-12 pt-8 pb-40 justify-center items-center '>
      <Heading tag={2} label='CONTACT' className='pt-24 pb-8' />
      <Container maxWidth='sm'>
        <ContactForm />
      </Container>
    </div>
  )
}

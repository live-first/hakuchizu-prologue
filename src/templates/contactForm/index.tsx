import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { company, contact, contactType, email, kana, name, phoneNumber } from '@/domain/schema'
import { TextFieldForm } from '@/components/form/TextFieldForm'
import { TextAreaForm } from '@/components/form/TextAreaForm'
import { useState } from 'react'
import { init, send } from '@emailjs/browser'
import { Alert } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export const ContactForm = () => {
  const [emailStatusMessage, setEmailStatusMessage] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const ContactSchema = z.object({
    company: company,
    name: name,
    kana: kana,
    phoneNumber: phoneNumber,
    email: email,
    contactType: contactType,
    content: contact,
  })

  type ContactType = z.infer<typeof ContactSchema>

  const sendEmail = async (data: ContactType) => {
    setEmailStatusMessage(false)
    setError(false)
    try {
      init('IdTWr2VgMdRiCW1AG')
      await send('service_aime_contact', 'get_aime_notification', data)

      setEmailStatusMessage(true)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError(true)
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ContactType>({
    mode: 'onChange',
    resolver: zodResolver(ContactSchema),
  })

  return (
    <form onSubmit={handleSubmit((e) => sendEmail(e))} className='w-full'>
      <div className='flex flex-col gap-4'>
        <TextFieldForm
          title='貴社名/団体名'
          register={register('company')}
          error={errors.company?.message}
        />
        <TextFieldForm
          title='名前'
          required
          placeholder='山田　太郎'
          register={register('name')}
          error={errors.name?.message}
        />
        <TextFieldForm
          title='名前（フリガナ）'
          required
          placeholder='ヤマダ　タロウ'
          register={register('kana')}
          error={errors.kana?.message}
        />
        <TextFieldForm
          title='電話番号'
          required
          placeholder='0901234567'
          register={register('phoneNumber')}
          error={errors.phoneNumber?.message}
        />
        <TextFieldForm
          title='メールアドレス'
          required
          placeholder='mail@example.com'
          register={register('email')}
          error={errors.email?.message}
          type='email'
        />
        <TextFieldForm
          title='お問い合わせ件名'
          placeholder='お問い合わせ件名を入力してください'
          register={register('contactType')}
          error={errors.contactType?.message}
        />
        <TextAreaForm
          title='お問い合わせ内容'
          required
          placeholder='お問い合わせ内容を入力してください'
          register={register('content')}
          error={errors.content?.message}
        />
        <button
          type='submit'
          disabled={!isValid || isSubmitting}
          className='bg-slate-800 hover:bg-slate-600 rounded px-4 py-2 text-white  disabled:bg-gray-300 md:self-center'
        >
          送信する
        </button>
        {emailStatusMessage && (
          <Alert icon={<CheckIcon fontSize='inherit' />} severity='success'>
            お問い合わせを受け付けました。
          </Alert>
        )}
        {error && (
          <Alert severity='error'>
            お問い合わせの送信に失敗しました。時間をおいて再度送信お願いします。
          </Alert>
        )}
      </div>
    </form>
  )
}

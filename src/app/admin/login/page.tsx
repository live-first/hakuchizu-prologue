'use client'

import { Input, TextField, Label, Button } from '@heroui/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useStore } from '@/store/useStore'
import { Users } from '@/const/user'
import { useState } from 'react'

const schema = z.object({
  email: z.string().min(1, 'ユーザーIDを入力してください'),
  password: z.string().min(1, 'パスワードを入力してください'),
})

type FormData = z.infer<typeof schema>

export default function Login() {
  const router = useRouter()
  const { setItem } = useStore('user')
  const [message, setMessage] = useState<string>()

  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const value = watch()

  const onSubmit = async () => {
    const user = Users.find((u) => u.email === value.email && u.password === value.password)
    if (user) {
      setItem({ email: user.email, bucketName: user.bucketName })
      router.push('/admin/shop')
    } else {
      setMessage('ユーザーIDまたはパスワードが正しくありません。')
    }
  }

  return (
    <div className='flex flex-col flex-1 items-center justify-center h-screen bg-zinc-50 font-sans dark:bg-black'>
      <header>
        <h1 className='text-4xl font-bold py-4'>Ansys. Login</h1>
      </header>
      <main className='flex flex-col w-full max-w-lg rounded-2xl items-center justify-between py-12 lg:px-16 sm:px-8 px-2 bg-gray-200 dark:bg-black sm:items-start'>
        {message && <span className='text-red-600'>{message}</span>}
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 p-6 mb-8 w-full'>
          <TextField className='w-full' name='email' type='email'>
            <Label>ユーザーID（Email）</Label>
            <Input placeholder='Enter your email' {...register('email')} />
          </TextField>
          <TextField className='w-full' name='password' type='password'>
            <Label>パスワード</Label>
            <Input placeholder='Enter your password' {...register('password')} />
          </TextField>
          <Button type='submit' isDisabled={!isValid} className='w-full'>
            ログイン
          </Button>
        </form>
      </main>
    </div>
  )
}

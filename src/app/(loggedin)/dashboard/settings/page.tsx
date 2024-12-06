'use client'

import PageLayout from '@/components/dashboard/PageLayout'
import GeneralButton from '@/components/GeneralButton'
import GeneralInput from '@/components/GeneralInput'
import { userPatchSchema } from '@/schemas/userSchema'
import { type Inputs } from '@/types/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import spinner from '@/assets/spinner.svg'

export default function Settings (): JSX.Element {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const { data: session, status } = useSession()
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(userPatchSchema)
  })
  const errorMessage: Record<string, string> = {
    'User not exists': 'Invalid username or password',
    'Invalid authentication': 'Invalid username or password',
    'Internal error': 'An error occurred while trying to login',
    'User not active': 'Account not validated'
  }
  // name Email cellphone source

  // password

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(222)

    setLoading(true)
    const { name, email, cellphone, source } = data
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          cellphone,
          source
        })
      }
    )

    const responseApi = await res.json()

    if (!res.ok) {
      setLoading(false)
      setError(errorMessage[
        (responseApi.code.length > 0)
          ? responseApi.code
          : 'Unknown error message'
      ])
    }
  }

  if (status === 'loading') {
    return <Image src={spinner} width={25} height={25} alt="Spinner" />
  }

  return (
    <PageLayout>
      <section className="bg-black w-full h-full text-white">
        <header className="bg-accentColor w-full min-h-20" />
        <main className="p-4">
          <h3>{session?.user.name}</h3>
          <p>{session?.user.email}</p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-6"
          >

            <GeneralInput
              type="text"
              value="name"
              register={register}
              placeholder="Name"
              firstValue={session?.user.name}
            />
            {
              (errors.name?.message !== undefined)
                ? <p className="text-red-400 text-justify">{errors.name.message}</p>
                : null
            }

            <GeneralInput
              type="email"
              value="email"
              register={register}
              placeholder="Email"
              firstValue={session?.user.email}
            />
            {
              (errors.email?.message !== undefined)
                ? <p className="text-red-400 text-justify">{errors.email.message}</p>
                : null
            }

            <GeneralInput
              type="number"
              value="cellphone"
              register={register}
              placeholder="cellphone"
            />
            {
              (errors.cellphone?.message !== undefined)
                ? <p className="text-red-400 text-justify">{errors.cellphone.message}</p>
                : null
            }

            <GeneralButton label="Save changes" type="primary" loading={loading} />

            {
              (error !== null)
                ? <p className="text-red-400 text-justify">{error}</p>
                : null
            }
          </form>
        </main>

      </section>
    </PageLayout>
  )
}

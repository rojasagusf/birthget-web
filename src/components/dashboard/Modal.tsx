'use client'

import { type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import friendSchema from '@/schemas/friendSchema'
import { useState } from 'react'
import { type friendInputs } from '@/types/types'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import closeIcon from '@/assets/close.svg'
import GeneralButton from '../GeneralButton'

interface NavProps {
  reference: React.RefObject<HTMLInputElement | HTMLDivElement>
  hide: boolean
  setHide: (value: boolean) => void
}

export default function Modal (
  { reference, hide, setHide }: NavProps
):
  JSX.Element {
  const { data: session } = useSession()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const { register, handleSubmit, formState: { errors } } = useForm<friendInputs>({
    resolver: zodResolver(friendSchema)
  })
  const errorMessage: Record<string, string> = {
    internal_error: 'An error occurred while trying create a friend'
  }

  const onSubmit: SubmitHandler<friendInputs> = async (data) => {
    setLoading(true)
    const { name, birthdate } = data
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/friends`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          birthdate
        })
      }
    )

    const responseApi = await res.json()

    if (!res.ok) {
      setLoading(false)
      setError(errorMessage[responseApi.code || 'Unknown error message'])
      return
    }

    setLoading(false)
    setHide(true)
  }

  return (
    <div className={`${hide ? 'hidden' : ''} h-screen w-full bg-[rgba(0,0,0,.5)] fixed left-0 top-0 flex justify-center items-center p-6`}>
      <div className="w-full md:w-4/5 xl:w-2/5 bg-black p-6" ref={reference}>
        <header className="flex justify-between items-center gap-4">
          <h1 className="text-white text-xs font-delusion">New friend</h1>

          <button type="button" onClick={() => { setHide(true) }} className="w-8">
            <Image src={closeIcon} alt="Close icon" />
          </button>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-6 my-6">

          <div className="flex flex-col gap-4">
            <input className="h-10  bg-transparent border-b-2 border-accentColor outline-none text-white w-full" type="text" id="name" {...register('name')} placeholder="Name" />
            {errors.name?.message && <p className="text-red-400 text-justify">{errors.name.message}</p>}

            <input type="date" placeholder="Birthdate" id="birthdate" {...register('birthdate')} />
            {errors.birthdate?.message && <p className="text-red-400 text-justify">{errors.birthdate.message}</p>}
          </div>

          <GeneralButton label="Login" type="primary" loading={loading} />
          {error && <p className="text-red-400 text-justify">{error}</p>}
        </form>
      </div>
    </div>
  )
}

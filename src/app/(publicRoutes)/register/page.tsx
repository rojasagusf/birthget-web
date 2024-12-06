'use client'

import GeneralButton from '@/components/GeneralButton'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema } from '@/schemas/userSchema'
import { type Inputs } from '@/types/types'
import GeneralInput from '@/components/GeneralInput'
import { useContext, useState } from 'react'
import googleIcon from '@/assets/google.svg'
import githubIcon from '@/assets/github.svg'
import mailSendedImg from '@/assets/mail-sended.svg'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { Link } from 'next-view-transitions'
import { cursorVariantContext } from '@/context/CursorVariantProvider'

export default function Register () {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [isRegistered, setIsRegistered] = useState<boolean>(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(userSchema)
  })
  const context = useContext(cursorVariantContext)

  const errorMessage: Record<string, string> = {
    user_already_exists: 'Account already exists',
    invalid_user_creation: 'An error occurred while trying to register',
    invalid_code_verifier_creation: 'An error occurred while trying to register',
    internal_error: 'An error occurred while trying to register'
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true)
    const { name, email, password } = data
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      }
    )

    const responseApi = await res.json()

    if (!res.ok) {
      setLoading(false)
      setError(errorMessage[responseApi.code || 'Unknown error message'])
      return
    }

    setIsRegistered(true)
  }

  if (!context) throw new Error('No context provided')

  if (isRegistered) {
    return (
      <section className="flex flex-col gap-4 justify-center items-center mt-6 md:mt-12 bg-[#383838] bg-opacity-40 p-12 rounded-md text-center w-full max-w-2xl">
        <h3 className="text-white text-lg md:text-xl font-bold">
          Please, check your email inbox to validate.
        </h3>

        <Image className="max-w-80" src={mailSendedImg} alt="Mail sent" />
      </section>
    )
  }

  return (
    <section className="flex flex-col gap-4 justify-center items-center mt-6 md:mt-12 bg-[#383838] bg-opacity-40 p-12 rounded-md text-center w-full max-w-2xl drop-shadow-2xl">
      <h2 onMouseEnter={() => { context.setValue('text') }} onMouseLeave={() => { context.setValue('default') }} className="font-delusion text-xl text-white md:text-3xl">Create your account</h2>
      <p className="text-white text-sm mb-6">
        You have an account?
        {' '}
        <Link onMouseEnter={() => { context.setValue('link') }} onMouseLeave={() => { context.setValue('default') }} href="/login" className="font-bold underline hover:text-accentColor duration-150">Sign in</Link>
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-6">

        <div className="flex flex-col gap-4">
          <GeneralInput type="text" value="name" register={register} placeholder="Name" />
          {errors.name?.message && <p className="text-red-400 text-justify">{errors.name.message}</p>}

          <GeneralInput type="email" value="email" register={register} placeholder="Email" />
          {errors.email?.message && <p className="text-red-400 text-justify">{errors.email.message}</p>}

          <GeneralInput type="password" value="password" register={register} placeholder="Password" />
          {errors.password?.message && <p className="text-red-400 text-justify">{errors.password.message}</p>}

          <GeneralInput type="password" value="confirmPassword" register={register} placeholder="Confirm Password" />
          {errors.confirmPassword?.message && <p className="text-red-400 text-justify">{errors.confirmPassword.message}</p>}
        </div>

        <GeneralButton label="Sign up" type="primary" loading={loading} />
        {error && <p className="text-red-400 text-justify">{error}</p>}

      </form>

      <div className="flex justify-center items-center gap-4 text-white w-full my-6">
        <hr className="text-white h-1 w-full flex-1" />
        <p className="font-bold">Or</p>
        <hr className="text-white h-1 w-full flex-1" />
      </div>

      <div className="w-full flex flex-col justify-evenly gap-4">
        <GeneralButton action={() => signIn('google', { callbackUrl: '/dashboard/overview' })} label="Sign up with Google" type="secondary" icon={googleIcon} />
        <GeneralButton action={() => signIn('github', { callbackUrl: '/dashboard/overview' })} label="Sign up with Github" type="secondary" icon={githubIcon} />
      </div>
    </section>
  )
}

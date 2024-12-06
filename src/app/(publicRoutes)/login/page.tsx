'use client'

import GeneralButton from '@/components/GeneralButton'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userLoginSchema } from '@/schemas/userSchema'
import { useContext, useState } from 'react'
import { type Inputs } from '@/types/types'
import GeneralInput from '@/components/GeneralInput'
import { useRouter } from 'next/navigation'
import { Link } from 'next-view-transitions'
import googleIcon from '@/assets/google.svg'
import githubIcon from '@/assets/github.svg'
import { signIn } from 'next-auth/react'
import { cursorVariantContext } from '@/context/CursorVariantProvider'

export default function Login (): JSX.Element {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(userLoginSchema)
  })
  const errorMessage: Record<string, string> = {
    'User not exists': 'Invalid username or password',
    'Invalid authentication': 'Invalid username or password',
    'Internal error': 'An error occurred while trying to login',
    'User not active': 'Account not validated'
  }
  const context = useContext(cursorVariantContext)

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true)
    const { email, password } = data

    const responseNextAuth = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (typeof responseNextAuth?.error === 'string') {
      setLoading(false)
      setError(errorMessage[
        (responseNextAuth.error.length > 0)
          ? responseNextAuth.error
          : 'Unknown error message'
      ])
      return
    }

    setLoading(false)
    router.push('/dashboard/overview')
  }

  if (context === undefined) throw new Error('No context provided')

  return (
    <section
      className="flex flex-col gap-4 justify-center items-center mt-6 md:mt-12 bg-[#383838] bg-opacity-40 p-12 rounded-md text-center w-full max-w-2xl shadow-xñ"
    >
      <h2
        onMouseEnter={() => { context.setValue('text') }}
        onMouseLeave={() => { context.setValue('default') }}
        className="font-delusion text-xl text-white md:text-3xl"
      >
        Welcome Back
      </h2>

      <p className="text-white text-sm mb-6">
        Dont have an account yet?
        {' '}
        <Link
          onMouseEnter={() => { context.setValue('link') }}
          onMouseLeave={() => { context.setValue('default') }}
          href="/register"
          className="font-bold underline hover:text-accentColor duration-150"
        >
          Sign up

        </Link>
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-6"
      >
        <div className="flex flex-col gap-4">
          <GeneralInput
            type="email"
            value="email"
            register={register}
            placeholder="Email"
          />
          {
            (errors.email?.message !== undefined)
              ? <p className="text-red-400 text-justify">{errors.email.message}</p>
              : null
          }

          <GeneralInput
            type="password"
            value="password"
            register={register}
            placeholder="Password"
          />
          {
            (errors.password?.message !== undefined)
              ? <p className="text-red-400 text-justify">{errors.password.message}</p>
              : null
          }
        </div>

        <GeneralButton label="Login" type="primary" loading={loading} />
        {
          (error !== null)
            ? <p className="text-red-400 text-justify">{error}</p>
            : null
        }

      </form>

      <div
        className="flex justify-center items-center gap-4 text-white w-full my-6"
      >
        <hr className="text-white h-1 w-full flex-1" />
        <p className="font-bold">Or</p>
        <hr className="text-white h-1 w-full flex-1" />
      </div>

      <div className="w-full flex flex-col justify-evenly gap-4">
        <GeneralButton
          action={() => signIn('google', { callbackUrl: '/dashboard/overview' })}
          label="Sign in with Google"
          type="secondary"
          icon={googleIcon}
        />
        <GeneralButton
          action={() => signIn('github', { callbackUrl: '/dashboard/overview' })}
          label="Sign in with Github"
          type="secondary"
          icon={githubIcon}
        />
      </div>
    </section>
  )
}

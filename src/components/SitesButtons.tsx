'use client'

import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import spinner from '@/assets/spinner.svg'
import { Link } from 'next-view-transitions'
import { useRouter } from 'next/navigation'
import GeneralButton from './GeneralButton'

interface SitesButtonsProps {
  setHide?: (value: boolean) => void
}

export default function SitesButtons (
  { setHide }: SitesButtonsProps
): JSX.Element {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return <Image src={spinner} width={25} height={25} alt="Spinner" />
  }

  if (session === null) {
    return (
      <>
        <Link
          onClick={() => {
            if (setHide !== undefined) {
              setHide(true)
            }
          }}
          href="/login"
        >
          <GeneralButton type="secondary" label="Login" />
        </Link>
        <Link
          onClick={() => {
            if (setHide !== undefined) {
              setHide(true)
            }
          }}
          href="/register"
        >
          <GeneralButton type="primary" label="Get Started" />
        </Link>
      </>
    )
  }

  return (
    <>
      <GeneralButton
        type="primary"
        label="Dashboard"
        action={() => { router.push('/dashboard/overview') }}
      />
      <GeneralButton
        type="secondary"
        label="Logout"
        action={() => signOut()}
      />
    </>
  )
}

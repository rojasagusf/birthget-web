'use client';
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import spinner from '@/assets/spinner.svg';
import GeneralButton from "./GeneralButton";
import { Link } from "next-view-transitions";
import { useRouter } from 'next/navigation'

interface SitesButtonsProps {
  setHide?: (value: boolean) => void;
}

export default function SitesButtons({setHide} : SitesButtonsProps) {
  const {data: session, status} = useSession();
  const router = useRouter();

  return (
    <>
      {
        status === 'loading' ? <Image src={spinner} width={25} height={25} alt='Spinner' /> :
        session ? (
          <>
            <GeneralButton type="primary" label='Dashboard' action={() => router.push('/dashboard/overview')} />
            <GeneralButton type="secondary" label='Logout' action={() => signOut()} />
          </>
        )
        : (
          <>
            <Link onClick={() => setHide ? setHide(true) : null} href={'/login'}>
              <GeneralButton type="secondary" label="Login" />
            </Link>
            <Link onClick={() => setHide ? setHide(true) : null} href={'/register'}>
              <GeneralButton type="primary" label="Get Started" />
            </Link>
          </>
        )
    }
    </>
  )
}

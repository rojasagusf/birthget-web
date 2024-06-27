'use client';
import { Link } from 'next-view-transitions'
import GeneralButton from "./GeneralButton";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'
import spinner from '@/assets/spinner.svg';
import Image from 'next/image';

export default function Links() {
  const {data: session, status} = useSession();
  const router = useRouter();

  return (
    <nav className="hidden md:flex gap-12 justify-center items-center">
      <ul className="flex justify-center items-center gap-6">
        <li className="text-white hover:text-accentColor duration-150">
          <Link href={'/landing'}>Home</Link>
        </li>
        <li className="text-white hover:text-accentColor duration-150">
          <Link href={'/landing#about'}>About</Link>
        </li>
      </ul>
      <section className="flex gap-4 justify-center items-center">
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
              <Link href={'/login'}>
                <GeneralButton type="secondary" label="Login" />
              </Link>
              <Link href={'/register'}>
                <GeneralButton type="primary" label="Get Started" />
              </Link>
            </>
          )
        }
      </section>
    </nav>
  )
}

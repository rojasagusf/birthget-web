'use client'

import Image from 'next/image'
import userIcon from '@/assets/user.svg'
import logoutIcon from '@/assets/logout.svg'
import closeIcon from '@/assets/close.svg'
import { Link } from 'next-view-transitions'
import overviewIcon from '@/assets/overview.svg'
import settingsIcon from '@/assets/settings.svg'
import friendsIcon from '@/assets/friends.svg'
import { signOut, useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'

interface NavProps {
  reference: React.RefObject<HTMLInputElement | HTMLDivElement>
  hide: boolean
  setHide: (value: boolean) => void
}

export default function NavBar (
  { reference, hide, setHide }: NavProps
): JSX.Element {
  const { data: session } = useSession()
  const pathname = usePathname()
  const currentPage = pathname.split('/')[2]

  return (
    <div
      className={`bg-black text-white w-4/5 h-screen p-2 fixed top-0 ${hide ? '-left-full' : 'left-0'} transition-all duration-700 md:left-0 md:w-2/6 xl:w-1/6 shadow-lg`}
      ref={reference}
    >
      <header
        className="flex justify-between gap-4 items-center p-4 rounded-md border-b-[.085em] border-b-white"
      >
        <div className="flex justify-center items-center gap-3">
          <button
            type="button"
            onClick={() => { setHide(true) }}
            className="bg-accentColor rounded-md py-1 px-2"
          >
            <Image alt="User icon" width={30} height={30} src={userIcon} />
          </button>

          <h2 className="font-delusion text-[.7rem]">
            Hi,
            {' '}
            <span className="text-gray-400">{session?.user.name}</span>
          </h2>
        </div>

        <button
          type="button"
          onClick={() => { setHide(true) }}
          className="md:hidden"
        >
          <Image src={closeIcon} alt="Close icon" />
        </button>
      </header>

      <nav>
        <ul className="flex flex-col gap-4 p-4">
          <li
            className={`w-full ${currentPage === 'overview' ? 'bg-[#1d1d1d]' : null} } hover:bg-[#1d1d1d] duration-150`}
          >
            <Link
              className="flex justify-start items-center gap-2 p-4"
              onClick={() => { setHide(true) }}
              href="/dashboard/overview"
            >
              <Image src={overviewIcon} alt="Overview" />
              Overview
            </Link>
          </li>

          <li
            className={`w-full ${currentPage === 'friends' ? 'bg-[#1d1d1d]' : null} } hover:bg-[#1d1d1d] duration-150`}
          >
            <Link
              className="flex justify-start items-center gap-2 p-4"
              onClick={() => { setHide(true) }}
              href="/dashboard/friends"
            >
              <Image src={friendsIcon} alt="Friends" />
              Friends
            </Link>
          </li>

          <li
            className={`w-full ${currentPage === 'settings' ? 'bg-[#1d1d1d]' : null} } hover:bg-[#1d1d1d] duration-150`}
          >
            <Link
              className="flex justify-start items-center gap-2  w-full h-full p-4"
              onClick={() => { setHide(true) }}
              href="/dashboard/settings"
            >
              <Image src={settingsIcon} alt="Overview" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        className="w-11/12 bg-accentColor p-3 absolute bottom-6 left-0 flex rounded-md items-center justify-start gap-2 ml-auto mr-auto right-0"
        onClick={() => signOut()}
      >
        <Image alt="LogOut" width={30} height={30} src={logoutIcon} />
        Logout
      </button>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import hamburgerIcon from '@/assets/Menu.svg'
import NavBar from '@/components/dashboard/Navbar'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header (): JSX.Element {
  const [hideNav, setHideNav] = useState(true)
  const navRef = useRef<HTMLInputElement | HTMLDivElement>(null)
  const path = usePathname()

  useEffect(() => {
    const handler: (e: MouseEvent) => void = (e: MouseEvent) => {
      if (navRef.current?.contains(e.target as Node) === false) {
        setHideNav(true)
      }
    }

    document.addEventListener('mousedown', handler)
  })

  return (
    <header className="flex justify-between items-center py-4">
      <motion.button
        whileTap={{ scale: 1.1 }}
        whileHover={{ rotate: 2 }}
        className="cursor-pointer active:scale-110 md:hidden"
        onClick={() => { setHideNav(false) }}
      >
        <Image src={hamburgerIcon} alt="Menu icon" />
      </motion.button>
      <h2 className="text-white text-md font-delusion">{path.split('/')[2]}</h2>
      <NavBar reference={navRef} hide={hideNav} setHide={setHideNav} />
    </header>
  )
}

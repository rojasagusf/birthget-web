'use client'
import Image from "next/image";
import hamburgerIcon from '@/assets/Menu.svg'
import { useEffect, useRef, useState } from "react";
import Nav from "@/components/NavBar";
import { Link } from 'next-view-transitions'
import Links from "./Links";
import {motion} from 'framer-motion';

export default function Header(){
    const [hideNav, setHideNav] = useState(true);
    let navRef = useRef<HTMLInputElement | HTMLDivElement>(null);

    useEffect(() => {
        let handler = (e: MouseEvent) => {
            if (!navRef.current?.contains(e.target as Node)) {
                setHideNav(true);
            }
        }

        document.addEventListener('mousedown', handler);
    });

    return (
        <header className="flex justify-between items-center w-full p-2">
          <Link href={'/landing'}>
            <motion.h1
              whileHover={{rotate: -1.1}}
              className="text-[#fafafa] font-delusion text-sm duration-150"
            >Birth<span className="text-accentColor">get</span></motion.h1>
          </Link>
          <motion.button
            whileTap={{scale: 1.1}}
            whileHover={{rotate: 2}}
            className="cursor-pointer active:scale-110 md:hidden"
            onClick={() => setHideNav(false)}
          >
            <Image src={hamburgerIcon} alt="Menu icon" />
          </motion.button>
          <Nav reference={navRef} hide={hideNav} setHide={setHideNav} />
          <Links />
        </header>
    )
}

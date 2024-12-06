'use client'

import Image from 'next/image'
import people from '@/assets/holiday.svg'
import wave from '@/assets/waves.svg'
import arrowDown from '@/assets/arrowdown.svg'
import AboutCard from '@/components/AboutCard'
import { Link } from 'next-view-transitions'
import SitesButtons from '@/components/SitesButtons'
import { useContext } from 'react'
import { cursorVariantContext } from '@/context/CursorVariantProvider'

export default function Landing (): JSX.Element {
  const aboutInfo = [
    {
      title: 'Effortless Birthday Reminders',
      description: 'Stay on top of all your loved ones\' special days with our seamless birthday reminder system. Our platform ensures you never miss a birthday by sending you timely notifications and reminders. Simply add the birthdays, and we\'ll handle the rest, making sure you celebrate every important moment.'
    },
    {
      title: 'Personalized Birthday Wishes',
      description: 'Make each birthday extra special with our personalized birthday wishes feature. Choose from a variety of pre-written messages or customize your own to add a personal touch. Our tool allows you to schedule and send heartfelt messages automatically, so your friends and family feel cherished and remembered.'
    },
    {
      title: 'Easy-to-Use Interface',
      description: 'Navigating through our website is a breeze, thanks to our user-friendly interface. Designed with simplicity in mind, you can easily add, edit, and manage birthday reminders in just a few clicks. Whether you\'re tech-savvy or not, our platform ensures a hassle-free experience for everyone.'
    }
  ]
  const context = useContext(cursorVariantContext)

  if (context === undefined) {
    throw new Error('No context')
  }

  return (
    <>
      <main
        className="min-h-screen flex flex-col gap-16 justify-start items-center flex-1"
      >
        <section
          className="flex flex-col justify-start items-center pt-16 lg:flex-row  lg:pt-36 lg:justify-center lg:gap-0"
        >
          <h1
            onMouseEnter={() => { context.setValue('text') }}
            onMouseLeave={() => { context.setValue('default') }}
            className="text-white font-delusion text-2xl tracking-widest z-10 sm:text-3xl md:text-3xl text-center xl:text-5xl leading-loose xl:leading-normal sm:leading-loose md:leading-loose"
          >
            Celebrate Every Birthday, On
            <span className="text-accentColor">
              Time
            </span>
          </h1>
          <Image
            className="rotate-3 z-0 mt-6 sm:w-96 lg:w-96"
            src={people}
            width={300}
            height={300}
            alt="Friends Image"
          />
        </section>

        <button
          type="button"
          onMouseEnter={() => { context.setValue('arrow') }}
          onMouseLeave={() => { context.setValue('default') }}
          className="absolute bottom-10"
        >
          <Link href="#about">
            <Image src={arrowDown} width={50} alt="Arrow up" />
          </Link>
        </button>
      </main>
      <section
        onMouseEnter={() => { context.setValue('invert') }}
        onMouseLeave={() => { context.setValue('default') }}
        id="about"
        className="bg-accentColor w-screen relative"
      >
        <Image
          className="w-screen h-20 absolute top-0 -my-1 select-none"
          src={wave}
          width={100}
          height={100}
          alt="wave"
        />
        <h2
          className="text-darkGeneral mt-24 mb-14 text-2xl font-bold text-center font-delusion tracking-widest"
        >
          About Us
        </h2>
        <section
          className="flex flex-col justify-center items-center gap-6 p-6 md:flex-row flex-wrap"
        >
          {aboutInfo.map((info) => (
            <AboutCard
              title={info.title}
              description={info.description}
              key={info.title}
            />
          ))}
        </section>
      </section>
      <footer
        className="bg-darkGeneral w-full py-8 relative flex flex-col justify-center items-start gap-6 md:flex-row md:justify-between md:items-start md:min-h-56"
      >
        <section>
          <Link
            onMouseEnter={() => { context.setValue('link') }}
            onMouseLeave={() => { context.setValue('default') }}
            href="/"
          >
            <h1
              className="text-[#fafafa] font-delusion text-sm duration-150 mb-2"
            >
              Birth
              <span className="text-accentColor">get</span>
            </h1>
          </Link>
          <p className="text-slate-200">
            Your personal birthday reminder.
          </p>
        </section>

        <section>
          <h4
            className="text-white font-bold mb-4 border-b-accentColor border-b-2"
          >
            Links
          </h4>
          <ul
            className="flex flex-col justify-center items-start gap-1"
          >
            <li
              onMouseEnter={() => { context.setValue('link') }}
              onMouseLeave={() => { context.setValue('default') }}
              className="text-white hover:text-accentColor duration-150"
            >
              <Link href="/landing">Home</Link>
            </li>
            <li
              onMouseEnter={() => { context.setValue('link') }}
              onMouseLeave={() => { context.setValue('default') }}
              className="text-white hover:text-accentColor duration-150"
            >
              <Link href="/landing#about">About</Link>
            </li>
          </ul>
        </section>

        <section className="mb-16 flex flex-col gap-2 md:mb-0">
          <SitesButtons />
        </section>

        <p className="text-slate-200 absolute bottom-10 text-xs">
          © 2024 All Rights Reserverd. Designed and developed by
          {' '}
          <a
            onMouseEnter={() => { context.setValue('link') }}
            onMouseLeave={() => { context.setValue('default') }}
            className="text-accentColor hover:underline"
            target="_blank"
            href="https://linkedin.com/in/rojasagusf"
            rel="noreferrer"
          >
            Rojas

          </a>
        </p>
      </footer>
    </>
  )
}

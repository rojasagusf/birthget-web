'use client'

import useMouse from '@react-hook/mouse-position'
import React, { useRef, useContext } from 'react'
import { motion } from 'framer-motion'
import { cursorVariantContext } from '@/context/CursorVariantProvider'

export default function CursorWrapper ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  const context = useContext(cursorVariantContext)
  const ref = useRef(null)
  const mouse = useMouse(ref, {
    enterDelay: 0,
    leaveDelay: 0
  })
  let mouseXPosition = 0
  let mouseYPosition = 0

  if (mouse.x !== null && mouse.clientX !== null) {
    mouseXPosition = mouse.clientX
  }

  if (mouse.y !== null && mouse.clientY !== null) {
    mouseYPosition = mouse.clientY
  }

  const variants = {
    default: {
      x: mouseXPosition - 25,
      y: mouseYPosition + 70,
      backgroundColor: '#29cc8d',
      transition: {
        type: 'spring',
        mass: 0.3
      },
      opacity: 1,
      height: 50,
      width: 50
    },
    text: {
      height: 150,
      width: 150,
      x: mouseXPosition - 70,
      y: mouseYPosition + 20,
      backgroundColor: '#29cc8d',
      opacity: 0.8
    },
    invert: {
      x: mouseXPosition - 25,
      y: mouseYPosition + 70,
      backgroundColor: '#0d0d0d',
      transition: {
        type: 'spring',
        mass: 0.3
      },
      opacity: 1,
      height: 50,
      width: 50
    },
    button: {
      x: mouseXPosition - 60,
      y: mouseYPosition + 70,
      backgroundColor: 'transparent',
      transition: {
        type: 'spring',
        mass: 0.3
      },
      opacity: 1,
      height: 60,
      width: 150
    },
    link: {
      x: mouseXPosition - 25,
      y: mouseYPosition + 70,
      backgroundColor: '#29cc8d',
      transition: {
        type: 'spring',
        mass: 0.3
      },
      opacity: 1,
      height: 20,
      width: 20
    },
    arrow: {
      x: mouseXPosition - 35,
      y: mouseYPosition + 60,
      backgroundColor: 'transparent',
      transition: {
        type: 'spring',
        mass: 0.3
      },
      opacity: 1,
      height: 80,
      width: 80
    }
  }

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 28
  }

  if (context === undefined) {
    throw new Error('No context provided')
  }

  return (
    <div ref={ref} className="min-h-screen min-w-screen">
      <div className="max-w-7xl min-h-full flex flex-col justify-center items-center p-6 ml-auto mr-auto">
        <motion.div
          variants={variants}
          animate={context.value}
          transition={spring}
          className={`fixed z-50 hidden sm:flex justify-center items-center -top-24 left-0 h-6 w-6 bg-accentColor ${context.value !== 'button' ? 'rounded-full' : 'rounded-md border-2 border-dashed border-accentColor'} ${context.value === 'arrow' ? 'border-2 border-accentColor' : ''} pointer-events-none text-center`}
        />
        {children}
      </div>
    </div>
  )
}

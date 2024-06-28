'use client';
import useMouse from "@react-hook/mouse-position";
import React, { useRef, useState } from "react";
import { motion } from 'framer-motion';

export default function CursorWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 0,
    leaveDelay: 0
  });
  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null && mouse.clientX !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null && mouse.clientY !== null) {
    mouseYPosition = mouse.clientY;
  }

  const [cursorVariant, setCursorVariant] = useState('default');
  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

  const variants = {
    default: {
      x: mouseXPosition,
      y: mouseYPosition,
      backgroundColor: '#29cc8d',
      transition: {
        type: "spring",
        mass: 0.6
      },
      opacity: 1,
      height: 40,
      width: 40,
      fontSize: "16px",
    },
    text: {
      height: 150,
      width: 150,
      x: mouseXPosition,
      y: mouseYPosition,
      backgroundColor: '#29cc8d',
      opacity: 0.5,
    }
  }

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28
  };

  return (
    <div ref={ref} className="min-h-screen min-w-screen">
      <div className="max-w-7xl min-h-full flex flex-col justify-center items-center p-6 ml-auto mr-auto">
        <motion.div
          variants={variants}
          animate={cursorVariant}
          transition={spring}
          className="fixed z-50 hidden sm:flex justify-center items-center -top-24 left-0 h-6 w-6 bg-accentColor rounded-full pointer-events-none text-center"
        />
        {children}
      </div>
    </div>
  );
}

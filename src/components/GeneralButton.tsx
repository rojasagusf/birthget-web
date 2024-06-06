'use client';
import {motion} from 'framer-motion';

const types = {
  primary: 'bg-accentColor',
  secondary: 'bg-transparent border-2 border-accentColor hover:bg-accentColor duration-300',
} as const;

type ButtonType = keyof typeof types;

export default function GeneralButton({label, type, action}: {label: string, type: ButtonType, action?: () => void}) {
  return (
    <motion.button
      whileTap={{scale: 1.2}}
      className={`p-2 rounded-lg ${types[type]} w-full font-bold text-white min-w-28`}
      onClick={action}
     >
      {label}
    </motion.button>
  )
}

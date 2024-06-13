'use client';
import {motion} from 'framer-motion';
import Image from 'next/image';
import spinner from '@/assets/spinner.svg';

const types = {
  primary: 'bg-accentColor duration-150',
  secondary: 'bg-transparent border-2 border-accentColor hover:bg-accentColor duration-150',
} as const;

type ButtonType = keyof typeof types;

export default function GeneralButton({label, type, action, loading}: {label: string, type: ButtonType, action?: () => void, loading?: boolean}) {

  const checkIfLoading = () => {
    if (loading) {
      return <Image src={spinner} width={60} height={20} alt='Spinner' />;
    }

    return label;
  }

  return (
    <motion.button
      whileTap={{ scale: 0.5 }}
      className={`p-2 rounded-lg ${types[type]} w-full font-bold text-white min-w-28`}
      onClick={action}
     >
      {checkIfLoading()}
    </motion.button>
  )
}

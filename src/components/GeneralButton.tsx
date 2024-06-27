'use client';
import {motion} from 'framer-motion';
import Image from 'next/image';
import spinner from '@/assets/spinner.svg';

const types = {
  primary: 'bg-accentColor duration-150',
  secondary: 'bg-transparent border-2 border-accentColor hover:bg-accentColor duration-150',
} as const;

type ButtonType = keyof typeof types;

export default function GeneralButton({label, type, action, loading, icon}: {label: string, type: ButtonType, action?: () => void, loading?: boolean, icon?: string | undefined}) {

  const checkIfLoading = () => {
    if (loading) {
      return <Image src={spinner} width={25} height={25} alt='Spinner' />;
    }

    return label;
  }

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`p-2 rounded-lg ${types[type]} w-full font-bold text-white min-w-28 flex justify-center items-center gap-4`}
      onClick={action}
     >
      {icon ? <Image src={icon} width={20} height={20} alt='Icon' /> : null}
      {checkIfLoading()}
    </motion.button>
  )
}

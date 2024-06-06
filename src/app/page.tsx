import Header from "@/components/Header";
import Image from "next/image";
import people from '@/assets/holiday.svg';
import wave from '@/assets/waves.svg';
import arrowDown from '@/assets/arrowdown.svg'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col gap-16 justify-start items-center flex-1">
        <section className="flex flex-col justify-start items-center pt-16 lg:flex-row  lg:pt-36 lg:justify-center lg:gap-0">
          <h1 className="text-white font-delusion text-2xl tracking-widest z-10 sm:text-3xl md:text-3xl text-center xl:text-5xl leading-loose xl:leading-normal sm:leading-loose md:leading-loose">Celebrate Every Birthday, On <span className="text-accentColor">Time</span></h1>
          <Image className="rotate-3 z-0 mt-6 sm:w-96 lg:w-96" src={people} width={300} height={300} alt="Friends Image" />
        </section>

        <button className="absolute bottom-10">
          <Link href={'#about'}>
            <Image src={arrowDown} width={50} alt="Arrow up" />
          </Link>
        </button>
      </main>
    </>
  );
}

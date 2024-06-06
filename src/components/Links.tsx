import Link from "next/link";
import GeneralButton from "./GeneralButton";

export default function Links() {
  return (
    <nav className="hidden md:flex gap-12 justify-center items-center">
      <ul className="flex justify-center items-center gap-6">
        <li className="text-accentColor">
          <Link href={'/home'}>Home</Link>
        </li>
        <li className="text-white hover:text-accentColor">
          <Link href={'#about'}>About</Link>
        </li>
        <li className="text-white hover:text-accentColor">
          <Link href={'#contact'}>Contact</Link>
        </li>
      </ul>
      <section className="flex gap-4 justify-center items-center">
        <Link href={'/login'}>
          <GeneralButton type="secondary" label="Login" />
        </Link>
        <Link href={'/register'}>
          <GeneralButton type="primary" label="Get Started" />
        </Link>
      </section>
    </nav>
  )
}

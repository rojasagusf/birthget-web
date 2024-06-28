import { Link } from 'next-view-transitions'
import SitesButtons from './SitesButtons'

export default function Links() {
  return (
    <nav className="hidden md:flex gap-12 justify-center items-center">
      <ul className="flex justify-center items-center gap-6">
        <li className="text-white hover:text-accentColor duration-150">
          <Link href={'/landing'}>Home</Link>
        </li>
        <li className="text-white hover:text-accentColor duration-150">
          <Link href={'/landing#about'}>About</Link>
        </li>
      </ul>
      <section className="flex gap-4 justify-center items-center">
        <SitesButtons />
      </section>
    </nav>
  )
}

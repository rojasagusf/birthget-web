import { Link } from 'next-view-transitions'
import SitesButtons from './SitesButtons'
import { useContext } from 'react'
import { cursorVariantContext } from '@/context/CursorVariantProvider'

export default function Links() {
  const context = useContext(cursorVariantContext);

  if (!context) throw new Error('No context provided');

  return (
    <nav className="hidden md:flex gap-12 justify-center items-center">
      <ul className="flex justify-center items-center gap-6">
        <li onMouseEnter={() => context.setValue('link')} onMouseLeave={() => context.setValue('default')} className="text-white hover:text-accentColor duration-150">
          <Link href={'/landing'}>Home</Link>
        </li>
        <li onMouseEnter={() => context.setValue('link')} onMouseLeave={() => context.setValue('default')} className="text-white hover:text-accentColor duration-150">
          <Link href={'/landing#about'}>About</Link>
        </li>
      </ul>
      <section className="flex gap-4 justify-center items-center">
        <SitesButtons />
      </section>
    </nav>
  )
}

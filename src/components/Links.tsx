import { Link } from 'next-view-transitions'
import { useContext } from 'react'
import { cursorVariantContext } from '@/context/CursorVariantProvider'
import SitesButtons from './SitesButtons'

export default function Links (): JSX.Element {
  const context = useContext(cursorVariantContext)

  if (context === undefined) throw new Error('No context provided')

  return (
    <nav className="hidden md:flex gap-12 justify-center items-center">
      <ul className="flex justify-center items-center gap-6">
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
      <section className="flex gap-4 justify-center items-center">
        <SitesButtons />
      </section>
    </nav>
  )
}

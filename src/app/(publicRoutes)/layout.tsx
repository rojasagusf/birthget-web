import CursorWrapper from '@/components/CursorWrapper'
import Header from '@/components/Header'

export default function PublicLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <CursorWrapper>
      <Header />
      {children}
    </CursorWrapper>
  )
}

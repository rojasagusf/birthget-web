import Header from '@/components/dashboard/Header'
import PageLayout from '@/components/dashboard/PageLayout'

export default function DashboardLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <PageLayout>
      <Header />
      {children}
    </PageLayout>
  )
}

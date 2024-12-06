export default function PageLayout (
  { children }: { children: React.ReactNode }
): JSX.Element {
  return (
    <section
      className="w-full md:w-4/6 xl:w-5/6 flex flex-col gap-6 ml-auto p-6 relative"
    >
      {children}
    </section>
  )
}

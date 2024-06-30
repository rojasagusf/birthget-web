import { cursorVariantContext } from "@/context/CursorVariantProvider"
import { useContext } from "react"

export default function AboutCard({title, description} : {title: string, description: string}) {
  const context = useContext(cursorVariantContext);

  if (!context) throw new Error('No context provided');

  return (
    <div onMouseEnter={() => context.setValue('default')} onMouseLeave={() => context.setValue('invert')} className="bg-darkGeneral min-h-96 w-full md:w-1/5 text-white rounded-lg p-6 flex flex-col justify-center items-center min-w-72">
      <h3 className="font-bold tracking-widest text-2xl mb-6 text-center">{title}</h3>
      <p className="text-slate-200 text-center">{description}</p>
    </div>
  )
}

export default function AboutCard({title, description} : {title: string, description: string}) {
  return (
    <div className="bg-darkGeneral min-h-96 w-full md:w-1/5 text-white rounded-lg p-6 flex flex-col justify-center items-center min-w-72">
      <h3 className="font-bold tracking-widest text-2xl mb-6 text-center">{title}</h3>
      <p className="text-slate-200 text-center">{description}</p>
    </div>
  )
}

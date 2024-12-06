import { Link } from 'next-view-transitions'

export default function NotFound (): JSX.Element {
  return (
    <div
      className="text-white flex flex-col gap-6 justify-center items-center bg-[#383838] w-full"
    >
      <h2 className="text-2xl font-bold">Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        <button
          type="button"
          className="font-bold py-2 px-4 bg-accentColor rounded-md"
        >
          Return Home
        </button>
      </Link>
    </div>
  )
}

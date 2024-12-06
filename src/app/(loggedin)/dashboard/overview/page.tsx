import Image from 'next/image'
import userIcon from '@/assets/user.svg'

export default function Overview (): JSX.Element {
  return (
    <main className="flex flex-col gap-4 xl:flex-row flex-wrap">
      <section
        className="flex flex-col justify-start items-center border-2 border-[#4F4F4F] rounded-md max-h-96 flex-1"
      >
        <section className=" bg-[#4F4F4F] rounded-t-md py-6 w-full text-center">
          <h3
            className="text-white text-[.6rem] font-delusion"
          >
            Next birthdays
          </h3>
        </section>

        <section
          className="w-full px-4 my-4 flex flex-col gap-4 justify-start items-center overflow-auto"
        >
          <div
            className="bg-transparent border-2 border-accentColor rounded-md flex justify-between items-center p-4 w-full"
          >
            <button
              type="button"
              className="bg-accentColor rounded-md py-1 px-2"
            >
              <Image alt="User icon" width={30} height={30} src={userIcon} />
            </button>

            <p
              className="text-accentColor text-sm font-bold"
            >
              Agustin Rojas - 30/01/2001
            </p>
          </div>

          <div
            className="bg-transparent border-2 border-accentColor rounded-md flex justify-between items-center p-4 w-full"
          >
            <button
              type="button"
              className="bg-accentColor rounded-md py-1 px-2"
            >
              <Image alt="User icon" width={30} height={30} src={userIcon} />
            </button>

            <p
              className="text-accentColor text-sm font-bold"
            >
              Agustin Rojas - 30/01/2001
            </p>
          </div>

          <div
            className="bg-transparent border-2 border-accentColor rounded-md flex justify-between items-center p-4 w-full"
          >
            <button
              type="button"
              className="bg-accentColor rounded-md py-1 px-2"
            >
              <Image alt="User icon" width={30} height={30} src={userIcon} />
            </button>

            <p
              className="text-accentColor text-sm font-bold"
            >
              Agustin Rojas - 30/01/2001
            </p>
          </div>

        </section>
      </section>
      <section
        className="flex flex-col justify-start items-center border-2 border-[#4F4F4F] rounded-md max-h-96 flex-1"
      >
        <section className=" bg-[#4F4F4F] rounded-t-md py-6 w-full text-center">
          <h3
            className="text-white text-[.6rem] font-delusion"
          >
            Next birthdays
          </h3>
        </section>

        <section className="w-full px-4 my-4 flex flex-col gap-4 justify-start items-center overflow-auto">

          <div className="bg-transparent border-2 border-accentColor rounded-md flex justify-between items-center p-4 w-full">
            <button
              type="button"
              className="bg-accentColor rounded-md py-1 px-2"
            >
              <Image alt="User icon" width={30} height={30} src={userIcon} />
            </button>

            <p className="text-accentColor text-sm font-bold">Agustin Rojas - 30/01/2001</p>
          </div>

          <div className="bg-transparent border-2 border-accentColor rounded-md flex justify-between items-center p-4 w-full">
            <button
              type="button"
              className="bg-accentColor rounded-md py-1 px-2"
            >
              <Image alt="User icon" width={30} height={30} src={userIcon} />
            </button>

            <p className="text-accentColor text-sm font-bold">Agustin Rojas - 30/01/2001</p>
          </div>

          <div className="bg-transparent border-2 border-accentColor rounded-md flex justify-between items-center p-4 w-full">
            <button
              type="button"
              className="bg-accentColor rounded-md py-1 px-2"
            >
              <Image alt="User icon" width={30} height={30} src={userIcon} />
            </button>

            <p className="text-accentColor text-sm font-bold">Agustin Rojas - 30/01/2001</p>
          </div>

        </section>
      </section>
      <section className="flex flex-col justify-start items-center border-2 border-[#4F4F4F] rounded-md w-full max-h-96">
        <section className=" bg-[#4F4F4F] rounded-t-md py-6 w-full text-center">
          <h3 className="text-white text-[.6rem] font-delusion">Next birthdays</h3>
        </section>

        <section className="w-full px-4 my-4 flex flex-col gap-4 justify-start items-center overflow-auto">

          <div className="bg-transparent border-2 border-accentColor rounded-md flex justify-between items-center p-4 w-full">
            <button
              type="button"
              className="bg-accentColor rounded-md py-1 px-2"
            >
              <Image alt="User icon" width={30} height={30} src={userIcon} />
            </button>

            <p className="text-accentColor text-sm font-bold">Agustin Rojas - 30/01/2001</p>
          </div>

          <div className="bg-transparent border-2 border-accentColor rounded-md flex justify-between items-center p-4 w-full">
            <button
              type="button"
              className="bg-accentColor rounded-md py-1 px-2"
            >
              <Image alt="User icon" width={30} height={30} src={userIcon} />
            </button>

            <p className="text-accentColor text-sm font-bold">Agustin Rojas - 30/01/2001</p>
          </div>

          <div className="bg-transparent border-2 border-accentColor rounded-md flex justify-between items-center p-4 w-full">
            <button type="button" className="bg-accentColor rounded-md py-1 px-2">
              <Image alt="User icon" width={30} height={30} src={userIcon} />
            </button>

            <p className="text-accentColor text-sm font-bold">Agustin Rojas - 30/01/2001</p>
          </div>

        </section>
      </section>
    </main>
  )
}

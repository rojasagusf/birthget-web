import { getAllFriends } from '@/actions/friends-actions'
import Image from 'next/image'
import { type Friend } from '@/interfaces'
import userIcon from '@/assets/user.svg'
import { Suspense } from 'react'

export default async function Friends (): Promise<JSX.Element> {
  const friends = await getAllFriends()
  return (
    <>
      {/*
        <GeneralButton action={() => setHideModal(false)} label="Add new friend" type="primary"/>
        <Modal reference={modalRef} hide={hideModal} setHide={setHideModal} />
      */}
      <section
        className="flex flex-col gap-6 justify-center items-center text-white md:flex-row flex-wrap"
      >
        <Suspense fallback={<div>Loading...</div>}>
          {
            friends.map((friend: Friend) => (
              <div
                key={friend.id}
                className="w-full bg-black border-b-[.085rem] border-accentColor rounded-md flex flex-col justify-center items-center md:w-1/5 text-white shadow-md"
              >
                <header
                  className="w-full min-h-20 p-4 relative rounded-md bg-transparent bg-gray-400"
                >
                  <button
                    type="button"
                    className="bg-accentColor rounded-full py-1 px-2 absolute -bottom-6 w-12 h-12 left-0 right-0 ml-auto mr-auto"
                  >
                    <Image
                      alt="User icon"
                      width={30}
                      height={30}
                      src={userIcon}
                    />
                  </button>
                </header>

                <section className="w-full p-6">
                  <h3 className="font-bold">{friend.name}</h3>
                  <p className="text-xs">{String(friend.birthdate)}</p>
                </section>
              </div>
            ))
          }
        </Suspense>
      </section>
    </>
  )
}

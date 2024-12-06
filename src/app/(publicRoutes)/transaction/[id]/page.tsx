'use client'

import GeneralButton from '@/components/GeneralButton'
import { Link } from 'next-view-transitions'
import { useEffect, useState } from 'react'

export default function Transaction (
  { params }: { params: { id: string } }
): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const validateTransaction: () => void = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/codeverifier`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          transaction: params.id
        })
      }
    )

    if (!res.ok) {
      setError(true)
      return
    }

    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    validateTransaction()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (error) {
    return (
      <section className="mt-6">
        <h1
          className="text-white text-2xl"
        >
          Error while trying validate email
        </h1>
      </section>
    )
  }

  if (loading) {
    return <h1 className="text-white">Loading...</h1>
  }

  return (
    <section>
      <h1 className="text-white">Email validated</h1>
      <Link href="/login">
        <GeneralButton type="primary" label="Go to login" />
      </Link>
    </section>
  )
}

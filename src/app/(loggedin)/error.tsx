'use client'

export default function ErrorPage ({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}): JSX.Element {
  return (
    <div className="text-white">
      <h2>Something went wrong!</h2>
      <h1>{error.message}</h1>
      <button type="button" onClick={() => { reset() }}>Try again</button>
    </div>
  )
}

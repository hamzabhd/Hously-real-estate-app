'use client'

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1248px] items-center p-4 md:p-6">
      <div className="mx-auto flex flex-col md:w-1/2">
        <span className="mx-auto block text-9xl font-light">ERROR</span>
        <span className="mx-auto mb-4 block text-center text-4xl font-extralight">
          Something went wrong
        </span>
        <p className="mb-6 inline-block text-center text-lg text-black/60">
          Oops! An unexpected error occurred. Please try again later.
        </p>
        <div className="mt-auto flex gap-x-2">
          <button className="flex w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-3 font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600">
            <span className="block" onClick={() => reset()}>
              Try again
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage

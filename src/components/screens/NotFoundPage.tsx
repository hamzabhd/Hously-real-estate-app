'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const NotFoundPage = () => {
  const router = useRouter()
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1248px] items-center p-4 md:p-6">
      <div className="ali mx-auto flex flex-col md:w-1/2">
        <span className="mx-auto block text-9xl font-light">404</span>
        <span className="mx-auto mb-4 block text-center text-4xl font-extralight">
          Page Not Found
        </span>
        <p className="mb-6 inline-block text-center text-lg text-black/60">
          Oops! The page you're looking for is nowhere to be found.
        </p>
        <div className="mt-auto flex gap-x-2">
          <button
            onClick={() => router.back()}
            className="flex w-full cursor-pointer items-center justify-center rounded-full border border-grey px-8 py-[calc(0.75rem-1px)] font-medium text-black transition-colors hover:border-black/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
          >
            <span className="block">Go back</span>
          </button>
          <Link
            href="/"
            className="flex w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-3 font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
          >
            <span className="block">Go home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage

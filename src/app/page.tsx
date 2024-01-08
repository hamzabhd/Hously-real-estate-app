import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiSearch } from 'react-icons/fi'

const page = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <div className="px-4 py-2 ">
        <nav className="flex items-center justify-between">
          <Link href="/home" className="font-bold">
            <span>Hously.</span>
          </Link>

          <div className="flex items-center gap-x-6">
            <Link
              href="/sign-in"
              className="font-medium transition lg:hover:underline"
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className="cursor-pointer rounded-full bg-black px-6 py-3 font-medium text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
            >
              Sign up
            </Link>
          </div>
        </nav>
        <div className="my-16 text-center">
          <h1 className="main-header relative mb-8 font-medium">
            Own Your Ideal{' '}
            <span className="font-black md:relative md:inline-block">
              <Image
                src="/svg/star.svg"
                width={48}
                height={48}
                alt="star"
                className="absolute bottom-full right-0 md:left-full md:-translate-x-1/2  md:translate-y-1/2"
              />
              Home.
            </span>
          </h1>

          <p className="mb-8 text-black/60">
            <span className="font-bold">Discover</span> a curated selection of
            apartments, tailored to your{' '}
            <span className="font-bold md:block">unique lifestyle.</span>
          </p>

          <Link
            href="/home"
            className="flex cursor-pointer items-center justify-center rounded-full bg-black px-12 py-4 font-medium text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600 sm:mx-auto sm:w-fit"
          >
            <span>Get started</span>
          </Link>
        </div>
      </div>
      <div className="h-ful relative w-full flex-grow">
        <Image
          src="/images/home-image.jpg"
          alt="home image"
          style={{
            objectFit: 'cover',
            maxWidth: '100%',
            height: '100%',
          }}
          sizes="100vw"
          fill
          priority
        />
      </div>
    </div>
  )
}

export default page

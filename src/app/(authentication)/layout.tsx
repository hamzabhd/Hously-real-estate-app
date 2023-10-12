import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { montserrat } from '../fonts'
import { HiHome } from 'react-icons/hi'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto flex h-screen max-w-[1248px]">
      <div className=" relative w-full p-4 md:flex md:w-1/2 md:items-center xl:p-0">
        <Link
          href="/"
          className="w-fit cursor-pointer select-none py-2 transition-colors md:absolute md:top-4"
        >
          <span className={`${montserrat.className} font-bold lg:text-xl`}>
            Hously.
          </span>
        </Link>
        {children}
      </div>
      <div className="relative hidden h-screen flex-1 select-none sm:hidden md:flex md:items-center md:justify-center xl:absolute xl:right-0 xl:flex xl:w-1/2">
        <Image
          className="object-cover"
          src="/images/blur-bg.png"
          alt="blur background"
          fill
        />

        <Link
          href="/"
          className={`${montserrat.className} z-10 flex flex-col items-center justify-center`}
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-black drop-shadow ">
            <HiHome className="h-12 w-12 text-beige" />
          </div>

          <span className="mb-1 mt-2 text-4xl font-bold">Hously.</span>
          <span className="text-xl">Everyone should get a nice house</span>
        </Link>
      </div>
    </div>
  )
}

export default layout

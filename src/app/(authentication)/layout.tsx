import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { HiHome } from 'react-icons/hi'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto flex h-screen max-w-[1248px]">
      <div className=" relative w-full p-4 md:flex md:w-1/2 md:items-center xl:p-0">
        <Link
          href="/"
          className="w-fit cursor-pointer select-none py-2 transition-colors md:absolute md:top-4"
        >
          <span className="font-bold lg:text-xl">Hously.</span>
        </Link>
        {children}
      </div>
      <div className="relative hidden h-screen flex-1 select-none sm:hidden md:flex md:items-center md:justify-center xl:absolute xl:right-0 xl:flex xl:w-1/2">
        <Image
          src="/images/abstract-cover.jpg"
          alt="blur background"
          sizes="(min-width: 1024px) 50vw, 100vw"
          quality={100}
          style={{
            objectFit: 'cover',
          }}
          loading="lazy"
          fill
        />

        <Link href="/" className="z-10 flex flex-col justify-center">
          <div className="flex items-end gap-x-2 ">
            <HiHome className="h-12 w-12" />
            <span className="text-4xl font-bold tracking-wider">Hously.</span>
          </div>
          <span className="text-xl font-light tracking-wider text-black/80">
            Everyone should get a nicer house.
          </span>
        </Link>
      </div>
    </div>
  )
}

export default layout

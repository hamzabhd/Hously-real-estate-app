import LogoImage from '@/components/ui/LogoImage'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import { serverSession } from 'utils/getUser'

const layout = async ({ children }: { children: ReactNode }) => {
  const currentUser = await serverSession()
  if (currentUser) {
    redirect('/')
  }
  return (
    <div className="mx-auto flex h-screen max-w-[1248px]">
      <div className=" relative w-full p-4 md:flex md:w-1/2 md:items-center xl:p-0">
        <Link
          href="/"
          className="flex  w-fit cursor-pointer select-none items-center gap-x-2 py-2 transition-colors md:absolute md:top-4"
        >
          <LogoImage width={48} height={48} />
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
            <LogoImage width={96} height={96} />
            <span className="text-4xl font-extrabold tracking-wider">
              Hously.
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default layout

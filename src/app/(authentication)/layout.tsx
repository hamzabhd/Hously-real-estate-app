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
    <div className="mx-auto flex h-screen lg:flex lg:gap-x-8">
      <div className="relative hidden h-full basis-1/4 overflow-hidden lg:block 2xl:rounded-e-[3rem]">
        <Image
          src="/images/auth-image.jpg"
          alt="auth image"
          style={{
            objectFit: 'cover',
            maxWidth: '100%',
            height: '100%',
          }}
          className="hidden lg:block"
          sizes="(min-width: 1024px) 50vw,100vw"
          fill
          priority
        />
      </div>
      <div className="relative m-auto flex w-fit flex-col px-4 py-3 lg:ml-0">
        <Link
          href="/home"
          className="flex cursor-pointer select-none items-center gap-x-2 rounded-lg py-2 transition-colors"
        >
          <LogoImage />
          <span className="font-bold tracking-wide lg:text-lg">Hously.</span>
        </Link>

        {children}
      </div>
    </div>
  )
}

export default layout

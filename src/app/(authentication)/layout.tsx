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
    <div className="mx-auto flex h-screen lg:flex">
      <div className="relative flex w-full flex-col px-4 py-5">
        <Link href="/home" className="text-left font-bold">
          <span>Hously.</span>
        </Link>
        {children}
      </div>
      <div className="relative hidden h-full w-full lg:block">
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
    </div>
  )
}

export default layout

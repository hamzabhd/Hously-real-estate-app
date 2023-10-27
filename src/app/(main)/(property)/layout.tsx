import Image from 'next/image'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="absolute top-0 z-[-10] h-64 w-full border-b-2 border-black/20 xl:h-80">
        <Image
          src="/images/profile-cover.png"
          alt="profile page cover image"
          className="object-cover object-center"
          fill
        />
      </div>
      {children}
    </>
  )
}

export default layout

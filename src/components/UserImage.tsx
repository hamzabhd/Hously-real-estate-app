import React from 'react'
import Image from 'next/image'

const UserImage = ({ imageUrl, name }: { imageUrl?: string; name: string }) => {
  return (
    <>
      {imageUrl ? (
        <Image
          src="/images/person.jpg"
          alt="user profile image"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full bg-white object-cover"
        />
      ) : (
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white">
          {name}
        </span>
      )}
    </>
  )
}

export default UserImage

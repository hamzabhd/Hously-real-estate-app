import React from 'react'
import Image from 'next/image'

const UserImage = ({
  name,
  imageUrl,
  width,
  height,
}: {
  name: string
  imageUrl?: string
  width?: number
  height?: number
}) => {
  name = 'Hamza ELBOHDIDI'
  const username =
    name.split(' ')[0].slice(0, 1) + name.split(' ')[1].slice(0, 1)

  return (
    <>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="user profile image"
          width={width || 40}
          height={height || 40}
          className={`h-${height ? height / 4 : '10'} w-${
            width ? width / 4 : '10'
          } rounded-full bg-white object-cover`}
        />
      ) : (
        <span
          className={`flex h-${height ? height / 4 : '10'} 
          w-${
            width ? width / 4 : '10'
          } items-center justify-center rounded-full border border-slate-300 bg-white text-${
            width ? '4xl' : 'base'
          }`}
        >
          {username}
        </span>
      )}
    </>
  )
}

export default UserImage

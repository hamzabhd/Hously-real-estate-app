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
          className={`flex h-${height ? height / 4 : '10'} w-${
            width ? width / 4 : '10'
          } items-center justify-center rounded-full border border-slate-300 bg-white text-${
            width ? '4xl' : 'base'
          }`}
        >
          {name}
        </span>
      )}
    </>
  )
}

export default UserImage

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
  const username = /\s+/g.test(name.trim())
    ? name.split(' ')[0].slice(0, 1) + name.split(' ')[1].slice(0, 1)
    : name.slice(0, 1)

  const imgHeight = height ? 'h-' + height / 4 : 'h-10'
  const imgWidth = width ? 'w-' + width / 4 : 'w-10'
  const textSize = width ? 'text-4xl' : 'text-base'

  return (
    <>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="user profile image"
          width={width || 40}
          height={height || 40}
          className={`${imgHeight} ${imgWidth} flex-shrink-0 rounded-full bg-white object-cover`}
        />
      ) : (
        <span
          className={`flex ${imgHeight} ${imgWidth} flex-shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white ${textSize}`}
        >
          {username}
        </span>
      )}
    </>
  )
}

export default UserImage

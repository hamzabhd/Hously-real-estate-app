import React from 'react'
import Image from 'next/image'

const UserImage = ({
  name,
  imageUrl,
  isProfile,
}: {
  name: string
  imageUrl?: string
  isProfile?: boolean
}) => {
  const username = /\s+/g.test(name.trim())
    ? name.split(' ')[0].slice(0, 1) + name.split(' ')[1].slice(0, 1)
    : name.slice(0, 1)

  const imgHeight = isProfile ? 'h-24 lg:h-32' : 'h-10'
  const imgWidth = isProfile ? 'w-24 lg:w-32' : 'w-10'
  const textSize = isProfile ? 'text-4xl' : 'text-base'

  return (
    <>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="user profile image"
          width={200}
          height={200}
          loading="lazy"
          className={`flex-shrink-0 rounded-full bg-white object-cover ${imgHeight} ${imgWidth}`}
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

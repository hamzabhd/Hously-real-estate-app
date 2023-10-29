import Image from 'next/image'
import React from 'react'
import { IoClose } from 'react-icons/io5'

const ImagePreviewer = ({
  image,
  clearImage,
}: {
  image: string
  clearImage: () => void
}) => {
  return (
    <div
      className={`fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/60 backdrop-blur-sm ${
        !image ? 'hidden' : 'block'
      }`}
    >
      <div className="relative aspect-video w-3/4 overflow-hidden rounded-3xl shadow-md">
        {image && (
          <Image
            src={image}
            alt="property image"
            className="object-cover"
            fill
          />
        )}
      </div>
      <div
        className="group absolute right-6 top-6 cursor-pointer rounded-full bg-white/60 p-2 transition-colors hover:bg-white"
        onClick={clearImage}
      >
        <IoClose className="h-4 w-4" />
      </div>
    </div>
  )
}

export default ImagePreviewer

import Image from 'next/image'
import React from 'react'
import { HiOutlineX } from 'react-icons/hi'

const ImagePreviewer = ({
  image,
  clearImage,
}: {
  image: string
  clearImage: () => void
}) => {
  return (
    <div
      className={`left-0 top-0 z-50 hidden h-full w-full items-center justify-center bg-black/60 backdrop-blur-sm lg:fixed ${
        !image ? 'hidden' : 'lg:flex'
      }`}
    >
      <div className="relative flex overflow-hidden rounded-3xl shadow-md lg:w-3/4 xl:w-1/2">
        {image && (
          <Image
            src={image}
            alt="property image"
            height={500}
            width={500}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88R8AAvUB+VkkrXoAAAAASUVORK5CYII="
            style={{
              objectFit: 'cover',
              width: '100%',
            }}
          />
        )}
      </div>
      <div
        className="group absolute right-6 top-6 cursor-pointer rounded-full bg-white/60 p-2 transition-colors hover:bg-white"
        onClick={clearImage}
      >
        <HiOutlineX className="h-4 w-4" />
      </div>
    </div>
  )
}

export default ImagePreviewer

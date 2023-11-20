import Image from 'next/image'
import React from 'react'
import { MdOutlineClose } from 'react-icons/md'

const ImageController = ({
  imgUrl,
  index,
  isEdit,
  removeImage,
}: {
  imgUrl: string
  index: number
  isEdit: boolean
  removeImage: (id: number) => void
}) => {
  return (
    <div
      className={`group relative flex aspect-square h-full w-full flex-shrink-0 overflow-hidden rounded-3xl ${
        !isEdit ? 'cursor-pointer' : 'opacity-60'
      }`}
    >
      <Image
        src={imgUrl}
        alt="property image"
        height={300}
        width={300}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88R8AAvUB+VkkrXoAAAAASUVORK5CYII="
        style={{
          objectFit: 'cover',
          width: '100%',
          height: 'auto',
        }}
        loading="lazy"
      />
      {!isEdit && (
        <button
          type="button"
          className="group/close small-btn absolute right-2 top-2 transition-all lg:opacity-0 lg:group-hover:opacity-100"
          onClick={() => removeImage(index)}
        >
          <MdOutlineClose className="h-4 w-4 text-black/40 transition-colors group-hover/close:text-black" />
        </button>
      )}
    </div>
  )
}

export default ImageController

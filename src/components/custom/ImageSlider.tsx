import Image from 'next/image'
import React, { useState } from 'react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

const ImageSlider = ({
  imagesArr,
  isCard,
  selectImage,
}: {
  imagesArr: string[]
  isCard: boolean
  selectImage?: (image: string) => void
}) => {
  const [imageCount, setImageCount] = useState(0)

  const nextImage = () => {
    return setImageCount((prevState) => {
      if (imageCount >= imagesArr.length - 1) {
        return 0
      }
      return prevState + 1
    })
  }

  const prevImage = () => {
    return setImageCount((prevState) => {
      if (imageCount <= 0) {
        return imagesArr.length - 1
      }
      return prevState - 1
    })
  }
  return (
    <>
      <button
        type="button"
        className="absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/60 p-2 transition hover:bg-white md:left-4 lg:opacity-0 lg:group-hover:opacity-100"
        onClick={prevImage}
      >
        <PiCaretLeftBold className="h-4 w-4" />
      </button>

      {imagesArr.map((image, i) => (
        <div
          key={i}
          style={{ translate: `${-100 * imageCount}%` }}
          className={`flex w-full flex-shrink-0 transition-all ease-in md:col-span-2 md:h-full lg:cursor-pointer ${
            !isCard ? 'aspect-video' : 'aspect-square'
          }`}
          onClick={() => selectImage?.(image)}
        >
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
              height: 'auto',
            }}
          />
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-x-2">
        {imagesArr.map((_, i) => (
          <span
            onClick={() => setImageCount(i)}
            key={i}
            className={`z-50 block h-2 w-2 cursor-pointer rounded-full ${
              imageCount === i ? 'dot-active w-6 bg-white' : 'bg-white/60'
            }`}
          ></span>
        ))}
      </div>

      <button
        type="button"
        className="absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/60 p-2 transition hover:bg-white md:right-4 lg:opacity-0 lg:group-hover:opacity-100"
        onClick={nextImage}
      >
        <PiCaretRightBold className="h-4 w-4" />
      </button>
    </>
  )
}

export default ImageSlider

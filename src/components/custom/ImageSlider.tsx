import Image from 'next/image'
import React, { useState } from 'react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

const ImageSlider = ({
  imagesArr,
  selectImage,
}: {
  imagesArr: string[]
  selectImage: (image: string) => void
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
    <div className="group relative flex w-full overflow-hidden lg:row-span-2 lg:h-full">
      <button
        type="button"
        className="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/60 p-2 opacity-0 transition hover:bg-white group-hover:opacity-100"
        onClick={prevImage}
      >
        <PiCaretLeftBold className="h-4 w-4" />
      </button>

      {imagesArr.map((image, i) => (
        <div
          key={i}
          style={{ translate: `${-100 * imageCount}%` }}
          className="relative aspect-video w-full flex-shrink-0 flex-grow-0 overflow-hidden transition-all ease-in sm:rounded-3xl md:col-span-2 md:h-full lg:cursor-pointer"
          onClick={() => selectImage(image)}
        >
          <Image
            src={image}
            alt="property image"
            sizes="(max-width: 1200px) 100vw, (max-width: 1530px) 33vw"
            style={{
              objectFit: 'cover',
            }}
            fill
          />
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-x-2">
        {imagesArr.map((image, i) => (
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
        className="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/60 p-2 opacity-0 transition hover:bg-white group-hover:opacity-100"
        onClick={nextImage}
      >
        <PiCaretRightBold className="h-4 w-4" />
      </button>
    </div>
  )
}

export default ImageSlider

import Image from 'next/image'
import React, { useState } from 'react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

const ImageSlider = ({
  imagesArr,
  isCard,
  selectImage,
  redirectClick,
}: {
  imagesArr: string[]
  isCard: boolean
  selectImage?: (image: string) => void
  redirectClick?: () => void
}) => {
  const [imageCount, setImageCount] = useState(0)
  const singleImage = imagesArr.length === 1
  const style = singleImage ? 'hidden' : 'lg:group-hover:opacity-100'

  const nextImage = () => {
    if (singleImage) return
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
  // decide wether to allow the click or not
  const handleClick = (image: string) => {
    if (!isCard && selectImage) return selectImage(image)
    return redirectClick?.()
  }

  return (
    <>
      <button
        type="button"
        className={`absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/60 p-1 transition hover:bg-white md:left-4 md:p-2 lg:opacity-0 ${style}`}
        onClick={prevImage}
      >
        <PiCaretLeftBold className="h-4 w-4" />
      </button>

      {imagesArr.map((image, i) => (
        <div
          key={i}
          style={{ translate: `${-100 * imageCount}%` }}
          className="${ flex aspect-[16/10] w-full flex-shrink-0 transition-all ease-in md:col-span-2 md:h-full
             lg:cursor-pointer"
          onClick={() => handleClick(image)}
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
              width: 'auto',
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
        className={`absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/60 p-1 transition hover:bg-white md:right-4 md:p-2 lg:opacity-0 ${style}`}
        onClick={nextImage}
      >
        <PiCaretRightBold className="h-4 w-4" />
      </button>
    </>
  )
}

export default ImageSlider

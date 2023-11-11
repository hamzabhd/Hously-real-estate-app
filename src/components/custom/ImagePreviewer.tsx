import { CldImage } from 'next-cloudinary'
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
      className={`relative left-0 top-0 z-50 hidden h-full w-full items-center justify-center bg-black/60 backdrop-blur-sm lg:fixed ${
        !image ? 'hidden' : 'lg:flex'
      }`}
    >
      <div className="relative aspect-video  h-3/4 w-[1200px] overflow-hidden rounded-3xl shadow-md ">
        {image && (
          <CldImage
            src={image}
            alt="property image"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88R8AAvUB+VkkrXoAAAAASUVORK5CYII="
            loading="lazy"
            style={{
              objectFit: 'cover',
            }}
            sizes="(min-width: 1024px) 1200px"
            fill
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

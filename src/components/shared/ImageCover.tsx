import Image from 'next/image'

const ImageCover = () => {
  return (
    <div className="absolute top-0 z-[-10] h-64 w-full border-b border-black/20 xl:h-80">
      <Image
        src="/images/abstract-cover.jpg"
        alt="cover image"
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
        loading="lazy"
        fill
      />
    </div>
  )
}

export default ImageCover

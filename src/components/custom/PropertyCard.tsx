import Image from 'next/image'
import React from 'react'
const PropertyCard = () => {
  return (
    <div>
      <div className="">
        <Image
          src="https://res.cloudinary.com/hmzbhd/image/upload/v1698339301/hously_app/properties/tep2lnormjdsieztf8b7.jpg"
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
    </div>
  )
}

export default PropertyCard

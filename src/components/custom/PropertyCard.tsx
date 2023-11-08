'use client'
import React from 'react'
import ImageSlider from './ImageSlider'

const imagesArr = [
  '/images/person.jpg',
  '/images/spain.png',
  '/images/spain.png',
  '/images/spain.png',
]

const PropertyCard = () => {
  return (
    <div className="mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:max-w-[1400px] lg:grid-cols-4">
      <div className="group relative flex w-full overflow-hidden sm:rounded-3xl lg:h-full">
        <ImageSlider imagesArr={imagesArr} isCard />
      </div>
      <div className="group relative flex w-full overflow-hidden sm:rounded-3xl lg:h-full">
        <ImageSlider imagesArr={imagesArr} isCard />
      </div>
      <div className="group relative flex w-full overflow-hidden sm:rounded-3xl lg:h-full">
        <ImageSlider imagesArr={imagesArr} isCard />
      </div>
      <div className="group relative flex w-full overflow-hidden sm:rounded-3xl lg:h-full">
        <ImageSlider imagesArr={imagesArr} isCard />
      </div>
    </div>
  )
}

export default PropertyCard

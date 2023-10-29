'use client'

import {
  MdOutlineClose,
  MdMoreHoriz,
  MdOutlineModeComment,
  MdSingleBed,
} from 'react-icons/md'
import { TbResize } from 'react-icons/tb'
import { HiLocationMarker } from 'react-icons/hi'
import { BiBath } from 'react-icons/bi'
import { LuBed, LuBedDouble } from 'react-icons/lu'
import { PiFlagBold } from 'react-icons/pi'
import { GoShare } from 'react-icons/go'
import UserImage from '../UserImage'
import { useState } from 'react'
import Image from 'next/image'
import { montserrat } from '@/app/fonts'
import SeeMoreBtn from '../custom/SeeMoreBtn'
import { HiOutlineBookmark } from 'react-icons/hi'
import { features, rules } from 'utils/itemManagement/data/data'
import { icons } from 'utils/icons'
import { PiCaretRightBold, PiCaretLeftBold } from 'react-icons/pi'
import ImageSlider from '../custom/ImageSlider'
import { IoClose } from 'react-icons/io5'
import ImagePreviewer from '../custom/ImagePreviewer'

const PropertyDetails = () => {
  const isIntercepted = true

  return (
    // px-4 md:px-6
    <div className="lg:mt-4">
      <MainDetails />
    </div>
  )
}

const imagesArr = [
  '/images/house.jpg',
  '/images/person.jpg',
  '/images/house.jpg',
  '/images/person.jpg',
]

const MainDetails = () => {
  const [selectedImage, setSelectedImage] = useState('')

  return (
    <div className="items-start lg:grid lg:grid-cols-2 lg:gap-x-8">
      {/* Image previewer */}
      <div className="lg:hidden">
        <ImageSlider imagesArr={imagesArr} />
      </div>

      <div className="hidden lg:col-span-1 lg:grid lg:grid-cols-2 lg:gap-4">
        {imagesArr.map((image, i) => (
          <div
            key={i}
            className="relative aspect-[16/10] cursor-pointer overflow-hidden rounded-3xl first:col-span-2 first:aspect-video last:col-span-2 last:aspect-video"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt="property image"
              className="object-cover"
              fill
            />
          </div>
        ))}
      </div>

      <ImagePreviewer
        image={selectedImage}
        clearImage={() => setSelectedImage('')}
      />

      <div>
        <div>
          <PropertyOptions />

          <div className="px-4 md:p-0">
            <div className="mb-8 mt-4 lg:mt-6">
              <h1 className={`mb-1 text-3xl font-medium lg:text-4xl`}>
                Cozy Urban Apartment
              </h1>
              <div className="flex items-center gap-x-2">
                <HiLocationMarker className="h-4 w-4 text-grey" />
                <span className="text-sm text-black/60">
                  1621 Libby Street/Los angles, USA{' '}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex flex-wrap items-center justify-between sm:justify-normal sm:gap-x-6 lg:gap-x-10">
                <div className="flex flex-col items-start gap-y-1">
                  <LuBedDouble className="h-6 w-6" />
                  <span className="text-sm font-medium">3 bedrooms</span>
                </div>
                <div className="flex flex-col gap-y-1">
                  <BiBath className="h-6 w-6" />
                  <span className="text-sm font-medium">2 bathrooms</span>
                </div>

                <div className="flex flex-col gap-y-1">
                  <LuBed className="h-6 w-6" />
                  <span className="text-sm font-medium">5 beds</span>
                </div>

                <div className="flex flex-col gap-y-1">
                  <TbResize className="h-6 w-6" />
                  <span className="text-sm font-medium">1,200 Ft²</span>
                </div>
              </div>
            </div>

            <p className="mb-12 leading-relaxed text-black/60">
              This modern urban apartment offers a comfortable and convenient
              city living experience. Enjoy breathtaking views of the city
              skyline from the large windows in the spacious living area. The
              open-concept design provides a seamless flow between the kitchen,
              dining, and living spaces.{' '}
              <span className="cursor-pointer font-medium text-tealBlue hover:underline">
                Read more.
              </span>
            </p>

            <div className="mb-12">
              <ul className="grid list-disc grid-cols-2 gap-2 px-6">
                {features.slice(0, 8).map((item, i) => (
                  <li key={i}>
                    <span className="ml-2 text-sm text-black/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <ul className="grid list-disc grid-cols-2 gap-2 px-6">
                {rules.slice(0, 1).map((item, i) => (
                  <li key={i}>
                    <span className="ml-2 text-sm text-black/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <SeeMoreBtn label="View more details" />
          </div>
        </div>
      </div>
    </div>
  )
}

const PropertyOptions = () => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className="border-b p-4 md:mt-4 md:border-none md:p-0">
      <ul className="flex items-center gap-2">
        <li className="cursor-pointer">
          <UserImage imageUrl="/images/person.jpg" name="Jana Lorene" />
        </li>

        <li className="border-gray group block cursor-pointer rounded-full border p-3 transition-colors hover:border-black/60">
          <HiOutlineBookmark className="h-4 w-4 text-black/40 transition-colors group-hover:text-black" />
        </li>

        <li className="border-gray group block cursor-pointer rounded-full border p-3 transition-colors hover:border-black/60">
          <GoShare className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
        </li>

        <li
          className="border-gray group block cursor-pointer rounded-full border p-3 transition-colors hover:border-black/60"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? (
            <MdOutlineClose className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
          ) : (
            <MdMoreHoriz className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
          )}
        </li>
        {showMore && (
          <>
            <li className="border-gray group block cursor-pointer rounded-full border p-3 transition-colors hover:border-black/60">
              <MdOutlineModeComment className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
            </li>
            <li className="border-gray group block cursor-pointer rounded-full border p-3 transition-colors hover:border-black/60">
              <PiFlagBold className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default PropertyDetails

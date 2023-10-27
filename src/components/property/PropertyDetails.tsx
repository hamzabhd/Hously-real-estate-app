'use client'

import {
  MdOutlineClose,
  MdMoreHoriz,
  MdOutlineModeComment,
  MdSingleBed,
} from 'react-icons/md'
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

const PropertyDetails = () => {
  const isIntercepted = true

  return (
    // px-4 md:px-6
    <div className=" lg:mt-4">
      {isIntercepted && <PropertyOptions />}
      <MainDetails />
    </div>
  )
}

const PropertyOptions = () => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className="flex items-center justify-between border p-4 xl:border-none 2xl:absolute 2xl:left-4">
      <ul className="flex items-center gap-2 2xl:flex-col">
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
      <span className="lg:hidden">
        <MdOutlineClose className="cursor-pointer text-black/60 transition-colors hover:text-black" />
      </span>
    </div>
  )
}

const MainDetails = () => {
  return (
    <div className="md:grid md:grid-cols-2">
      {/* Image previewer */}
      <div className="sm:p-4">
        <div className="relative aspect-square w-full overflow-hidden sm:rounded-3xl md:h-full">
          <Image
            src="/images/house.jpg"
            alt="property image"
            objectFit="fill"
            fill
          />
        </div>
      </div>

      {/* Property Details */}
      <div className="p-4 pt-6 sm:pt-4">
        <h1 className={`${montserrat.className} mb-6 text-2xl font-bold`}>
          Cozy Urban Apartment with Stunning City Views
        </h1>
        <span className="block h-px w-full bg-grey"></span>
        <div className="py-4">
          <div className="flex flex-wrap items-center gap-4">
            <Image
              src="/images/person.jpg"
              width={56}
              height={56}
              alt="user profile"
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="mr-4 flex flex-grow flex-col">
              <span className="text-lg font-bold text-black">Jana Lorene</span>
              <span className="text-sm font-medium text-black/40">
                Property owner
              </span>
            </div>
            <SeeMoreBtn className="ml-auto" label="View profile" />
          </div>
        </div>
        <span className="block h-px w-full bg-grey"></span>

        <div className="mt-4">
          <div className="my-5 flex items-center justify-around rounded-3xl bg-light-100 p-4">
            <div className="flex flex-col items-center gap-y-1">
              <LuBedDouble className="h-6 w-6" />
              <span className="text-sm font-medium text-black/60">
                3 bedrooms
              </span>
            </div>
            <span className="h-8 w-px bg-grey"></span>
            <div className="flex flex-col items-center gap-y-1">
              <BiBath className="h-6 w-6" />
              <span className="text-sm font-medium text-black/60">
                2 bathrooms
              </span>
            </div>
            <span className="h-8 w-px bg-grey"></span>

            <div className="flex flex-col items-center gap-y-1">
              <LuBed className="h-6 w-6" />
              <span className="text-sm font-medium text-black/60">5 beds</span>
            </div>
          </div>
        </div>

        <p className="mb-4 leading-relaxed text-black/60">
          This modern urban apartment offers comfortable and convenient city
          living experience. Enjoy breathtaking views of the city skyline from
          the large windows in the spacious living area.
          <span className="cursor-pointer font-medium text-tealBlue hover:underline">
            {' '}
            Read more.
          </span>
        </p>

        <SeeMoreBtn label="View more details" />
      </div>
    </div>
  )
}

export default PropertyDetails

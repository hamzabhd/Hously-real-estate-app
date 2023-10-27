'use client'

import {
  MdOutlineClose,
  MdMoreHoriz,
  MdOutlineModeComment,
} from 'react-icons/md'
import { BsBookmark, BsExclamation } from 'react-icons/bs'
import { GoShare } from 'react-icons/go'
import UserImage from '../UserImage'
import { useState } from 'react'
import Image from 'next/image'
import { montserrat } from '@/app/fonts'
import SeeMoreBtn from '../custom/SeeMoreBtn'

const PropertyDetails = () => {
  const isIntercepted = true

  return (
    // px-4 md:px-6
    <div className="lg:mt-8">
      {isIntercepted && <PropertyOptions />}
      <MainDetails />
    </div>
  )
}

const PropertyOptions = () => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className="flex items-center justify-between border p-4">
      <ul className="flex items-center gap-2 lg:absolute lg:left-6 lg:flex-col">
        <li className="cursor-pointer">
          <UserImage imageUrl="/images/person.jpg" name="Jana Lorene" />
        </li>

        <li className="border-gray group block cursor-pointer rounded-full border p-3 transition-colors hover:border-black/60">
          <BsBookmark className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
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
              <BsExclamation className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
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
    <div>
      {/* Image previewer */}
      <div className="relative aspect-square w-full">
        <Image
          src="/images/house.jpg"
          alt="property image"
          className="object-fill"
          fill
        />
      </div>

      <div className="p-4 pt-6">
        <h1 className={`${montserrat.className} mb-6 text-2xl font-bold`}>
          Cozy Urban Apartment with Stunning City Views
        </h1>
        <span className="w- block h-px w-full bg-grey"></span>
        <div className="py-4">
          <div className="flex flex-wrap items-center gap-x-4">
            <div className="w-fit rounded-full">
              <UserImage
                imageUrl="/images/person.jpg"
                width={56}
                height={56}
                name="Jana Lorene"
              />
            </div>
            <div className="mt-2 flex flex-col gap-y-2">
              <span
                className={`text-xl font-bold leading-3 text-black ${montserrat.className}`}
              >
                Jana Lorene
              </span>
              <span className="font-medium text-black/60">Property owner</span>
            </div>
            <SeeMoreBtn className="ml-auto" />
          </div>
        </div>
        <span className="w- block h-px w-full bg-grey"></span>
      </div>
    </div>
  )
}

export default PropertyDetails

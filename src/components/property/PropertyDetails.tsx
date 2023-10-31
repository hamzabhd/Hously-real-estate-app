'use client'

import { useState } from 'react'
import {
  MdOutlineClose,
  MdMoreHoriz,
  MdOutlineModeComment,
} from 'react-icons/md'
import { TbResize } from 'react-icons/tb'
import { HiLocationMarker } from 'react-icons/hi'
import { BiBath } from 'react-icons/bi'
import { LuBed, LuBedDouble } from 'react-icons/lu'
import { PiFlagBold } from 'react-icons/pi'
import { GoShare } from 'react-icons/go'
import { HiOutlineBookmark } from 'react-icons/hi'
import { features, reviewsArr, rules } from 'utils/itemManagement/data/data'
import { montserrat } from '@/app/fonts'
import UserImage from '../UserImage'
import ImageSlider from '../custom/ImageSlider'
import ImagePreviewer from '../custom/ImagePreviewer'
import SeeMoreBtn from '../custom/SeeMoreBtn'
import Reviews from '../custom/Reviews'
import Map from '../custom/Map'

const imagesArr = [
  '/images/1.webp',
  '/images/person.jpg',
  '/images/1.webp',
  '/images/person.jpg',
]

const PropertyDetails = () => {
  const isIntercepted = true

  return (
    // px-4 md:px-6
    <div className="lg:mt-4">
      <MainDetails />
      <PropertyReviews />
      <PropertyLocation address="1987 Linda Street, Portland, Pennsylvania 97205, USA" />
    </div>
  )
}

const MainDetails = () => {
  const [selectedImage, setSelectedImage] = useState('')

  return (
    <div className="items-start lg:grid lg:h-[736px] lg:grid-cols-2 lg:gap-x-8">
      {/* Image previewer */}
      <ImageSlider
        imagesArr={imagesArr}
        selectImage={(image: string) => setSelectedImage(image)}
      />
      <ImagePreviewer
        image={selectedImage}
        clearImage={() => setSelectedImage('')}
      />

      <div className="h-full">
        <PropertyOptions />

        <div className="px-4 md:p-0">
          <div className="mb-8 mt-4 lg:mt-6">
            <h1 className="mb-1 text-3xl font-medium lg:text-4xl">
              Cozy Urban Apartment
            </h1>
            <div className="flex items-center gap-x-2">
              <HiLocationMarker className="h-4 w-4 text-grey" />
              <span className="text-sm text-black/60">
                1621 Libby Street/Los angles, USA{' '}
              </span>
            </div>
          </div>

          <div className="mb-8 flex items-center gap-x-4">
            <span className={`${montserrat.className} text-2xl font-bold`}>
              $1,200{' '}
              <span className="text-base font-normal text-black/60">/ </span>
              <span className="text-base font-normal text-black/60">night</span>
            </span>
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

          <div className="mb-6">
            <p className="mb-4 leading-relaxed text-black/60">
              This modern urban apartment offers a comfortable and convenient
              city living experience. Enjoy breathtaking views of the city
              skyline from the large windows...{' '}
            </p>
            <SeeMoreBtn label="Read more" />
          </div>

          <div className="mb-6 gap-x-4 sm:grid sm:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-medium tracking-wide">
                Property features
              </h2>
              <ul className="list-style mb-4 list-image-[url(/images/check.png)] px-6">
                {features.slice(0, 3).map((item, i) => (
                  <li key={i}>
                    <span className="ml-2 text-sm text-black/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-medium tracking-wide">
                Property rules
              </h2>
              <ul className="list-style mb-4 list-image-[url(/images/check.png)] px-6">
                {rules.slice(0, 3).map((item, i) => (
                  <li key={i}>
                    <span className="ml-2 text-sm text-black/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <SeeMoreBtn label="Read more" className="justify-self-start" />
          </div>

          <div className="mb-4 flex gap-x-2">
            <button className="flex-grow cursor-pointer items-center justify-center rounded-full bg-black px-8 py-3 font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600">
              Reserve
            </button>
            <button className="flex w-1/4 items-center justify-center rounded-full border-2 border-grey px-6 py-3 transition-colors hover:border-black/60">
              <MdMoreHoriz />
            </button>
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

const PropertyReviews = () => {
  const [reviewsToSee, setReviewsToSee] = useState(3)

  const handleReviews = () => {
    setReviewsToSee((prevState) => {
      if (reviewsArr.length <= prevState) {
        return 3
      }
      return prevState + 3
    })
  }

  return (
    <div className="mt-6 lg:mt-8">
      <h2 className="ml-4 text-xl font-medium md:ml-0 lg:text-2xl">
        What people say about this property
      </h2>

      <Reviews reviewsArr={reviewsArr} reviewsToShow={reviewsToSee} />

      {reviewsArr.length > 3 && (
        <SeeMoreBtn
          label={
            reviewsArr.length <= reviewsToSee
              ? 'Hide all reviews'
              : 'View more reviews'
          }
          onClick={handleReviews}
          className="ml-4 md:ml-0"
        />
      )}
    </div>
  )
}

const PropertyLocation = ({ address }: { address: string }) => {
  // return <></>
  return <Map address={address} />
}

export default PropertyDetails

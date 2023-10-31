'use client'

import { ReactNode, useState } from 'react'
import { MdOutlineModeComment, MdPersonOutline } from 'react-icons/md'
import { TbResize } from 'react-icons/tb'
import {
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
  HiOutlineTag,
  HiOutlineFlag,
  HiOutlineMail,
  HiOutlineShare,
  HiOutlineX,
  HiOutlineDotsHorizontal,
} from 'react-icons/hi'
import { BiBath } from 'react-icons/bi'
import { LuBed, LuBedDouble, LuClock10, LuClock7 } from 'react-icons/lu'
import { PiFlagBold } from 'react-icons/pi'
import { HiOutlineBookmark } from 'react-icons/hi'
import { features, reviewsArr, rules } from 'utils/itemManagement/data/data'
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
  const [selected, setSelected] = useState('description')

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
        {selected && (
          <ViewMore
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores repellendus eligendi delectus ipsa totam quaerat error, in, sequi itaque illo enim assumenda fugit laudantium est sint accusamus numquam, ducimus corporis?"
            features={features}
            rules={rules}
            selected={selected}
            setSelected={setSelected}
          />
        )}
        <div className="px-4 md:p-0">
          <div className="mb-8 mt-4 lg:mt-6">
            <h1 className="mb-1 text-3xl font-medium lg:text-4xl">
              Cozy Urban Apartment
            </h1>
            <div className="flex items-center gap-x-2">
              <HiOutlineLocationMarker className="h-4 w-4 text-black/40" />
              <span className="text-sm text-black/60">
                1621 Libby Street/Los angles, USA{' '}
              </span>
            </div>
          </div>

          <div className="mb-8 flex items-center gap-x-4">
            <span className="text-2xl font-bold">
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
            <SeeMoreBtn
              label="Read more"
              onClick={() => setSelected('description')}
            />
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
              <SeeMoreBtn
                label="View more"
                className="justify-self-start"
                onClick={() => setSelected('features')}
              />
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
              <SeeMoreBtn
                label="View more"
                className="justify-self-start"
                onClick={() => setSelected('rules')}
              />
            </div>
          </div>

          <div className="mb-4 flex gap-x-2">
            <button className="flex-grow cursor-pointer items-center justify-center rounded-full bg-black px-8 py-3 font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600">
              Reserve
            </button>
            <button className="flex w-1/4 items-center justify-center rounded-full border-2 border-grey px-6 py-3 transition-colors hover:border-black/60">
              <HiOutlineDotsHorizontal />
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

        <li>
          <SpecialIcon name="save">
            <HiOutlineBookmark className="h-4 w-4 text-black/40 transition-colors group-hover:text-black" />
          </SpecialIcon>
        </li>

        <li>
          <SpecialIcon name="Share">
            <HiOutlineShare className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
          </SpecialIcon>
        </li>

        <li onClick={() => setShowMore(!showMore)}>
          {showMore ? (
            <SpecialIcon name="Close">
              <HiOutlineX className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
            </SpecialIcon>
          ) : (
            <SpecialIcon name="More">
              <HiOutlineDotsHorizontal className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
            </SpecialIcon>
          )}
        </li>
        {showMore && (
          <>
            <li>
              <SpecialIcon name="Review">
                <MdOutlineModeComment className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
              </SpecialIcon>
            </li>
            <li>
              <SpecialIcon name="Report">
                <HiOutlineFlag className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
              </SpecialIcon>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

const SpecialIcon = ({
  name,
  children,
}: {
  name: string
  children: ReactNode
}) => {
  return (
    <span className="border-gray group relative block cursor-pointer rounded-full border p-3 transition-colors hover:border-black/60">
      {children}
      <span className="absolute left-1/2 top-full mt-1 hidden -translate-x-1/2 rounded-xl  border bg-white px-4 py-2 text-sm opacity-0 transition-opacity group-hover:block group-hover:opacity-100">
        {name}
      </span>
    </span>
  )
}

const ViewMore = ({
  description,
  features,
  rules,
  selected,
  setSelected,
}: {
  description: string
  features: string[]
  rules: string[]
  selected: string
  setSelected: (selected: string) => void
}) => {
  return (
    <div className="align fixed left-0 top-0 z-50 grid min-h-full w-full items-center bg-black/20 px-4 backdrop-blur-[2px]">
      <div className="container-shadow mx-auto h-fit w-full max-w-[500px] animate-popup overflow-hidden rounded-3xl bg-white duration-1000">
        <ul className="flex items-center justify-between gap-x-4 border-b border-grey px-4 lg:px-6">
          <li className="relative py-5">
            <span
              className={`cursor-pointer font-medium ${
                selected === 'description' ? 'text-black' : 'text-black/60'
              } transition-colors hover:text-black`}
              onClick={() => setSelected('description')}
            >
              Description
            </span>
            <span
              className={`absolute bottom-0 ${
                selected === 'description' ? 'block' : 'hidden'
              } h-1.5 w-[calc(100%-8px)] translate-x-1 rounded-t-lg bg-black`}
            ></span>
          </li>
          <li className="relative py-5">
            <span
              className={`cursor-pointer font-medium ${
                selected === 'features' ? 'text-black' : 'text-black/60'
              } transition-colors hover:text-black`}
              onClick={() => setSelected('features')}
            >
              Features
            </span>
            <span
              className={`absolute bottom-0 ${
                selected === 'features' ? 'block' : 'hidden'
              } h-1.5 w-[calc(100%-8px)] translate-x-1 rounded-t-lg bg-black`}
            ></span>
          </li>
          <li className="relative py-5">
            <span
              className={`cursor-pointer font-medium ${
                selected === 'rules' ? 'text-black/100' : 'text-black/60'
              } transition-colors hover:text-black`}
              onClick={() => setSelected('rules')}
            >
              Rules
            </span>
            <span
              className={`absolute bottom-0 ${
                selected === 'rules' ? 'block' : 'hidden'
              } h-1.5 w-[calc(100%-8px)] translate-x-1 rounded-t-lg bg-black`}
            ></span>
          </li>
          <li
            className="cursor-pointer rounded-full bg-light-100 p-2 transition-colors hover:bg-grey"
            onClick={() => setSelected('')}
          >
            <HiOutlineX className="h-4 w-4" />
          </li>
        </ul>
        <div className="max-h-[500px] overflow-y-auto px-4 md:max-h-[700px] lg:px-6">
          {selected === 'description' && (
            <p className="py-6 leading-relaxed">{description}</p>
          )}

          {selected === 'features' && (
            <ul>
              {features.map((item, i) => (
                <li
                  key={i}
                  className="border-b border-grey py-4 last:border-none"
                >
                  <span className="text-sm text-black">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {selected === 'rules' && (
            <>
              <h2 className="mt-4 text-lg font-medium lg:mt-6">
                Specific rules
              </h2>
              <div className="mb-6">
                <div className="flex items-center justify-between border-b border-b-grey py-4 text-sm text-black">
                  <div className="flex items-center gap-x-4">
                    <LuClock10 className="h-4 w-4 text-black/60" />
                    <span>Quiet hours</span>
                  </div>
                  <span className="font-medium">10:00 PM - 08:00 AM</span>
                </div>
                <div className="flex items-center justify-between border-b border-b-grey py-4 text-sm text-black">
                  <div className="flex items-center gap-x-4">
                    <MdPersonOutline className="h-4 w-4 text-black/60" />
                    <span>Guest Limit</span>
                  </div>
                  <span className="font-medium">10 People</span>
                </div>
              </div>

              <h2 className="text-lg font-medium">General rules</h2>
              <ul>
                {rules.map((item, i) => (
                  <li
                    key={i}
                    className="border-b border-grey py-4 last:border-none"
                  >
                    <span className="text-sm text-black">{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
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
  return (
    <div className="mt-6 px-4  md:p-0 lg:mt-8">
      <h2 className="text-xl font-medium md:ml-0 lg:text-2xl">
        Where is this property located
      </h2>

      <div className="my-4 gap-x-8 lg:my-6 lg:grid lg:grid-cols-2">
        <div className="pt-4">
          <h2 className="mb-4 text-xl font-medium">Property location</h2>

          <p className="mb-8 leading-relaxed text-black/60">
            The details supplied are specific to the property's exact location.
            The address may be shown on the map as a precise position or as a
            close approximation.
          </p>

          <ul className="sm:grid sm:grid-cols-2 sm:gap-x-4 lg:block">
            <li className="mb-6 lg:mb-8">
              <span className="mb-1 block font-medium">Address</span>
              <div className="flex items-center gap-x-2">
                <HiOutlineLocationMarker className="h-4 w-4 text-black/40" />
                <span className="text-sm text-black/60">
                  1987 Linda Street, Portland, Pennsylvania 97205, USA
                </span>
              </div>
            </li>
            <li className="mb-6 lg:mb-8">
              <span className="mb-1 block font-medium">Country</span>
              <div className="flex items-center gap-x-2">
                <HiOutlineFlag className="h-4 w-4 text-black/40" />
                <span className="text-sm text-black/60">United State</span>
              </div>
            </li>
            <li className="mb-6 lg:mb-8">
              <span className="mb-1 block font-medium">City</span>
              <div className="flex items-center gap-x-2">
                <HiOutlineOfficeBuilding className="h-4 w-4 text-black/40" />
                <span className="text-sm text-black/60">Portland</span>
              </div>
            </li>
            <li className="mb-6 lg:mb-8">
              <span className="mb-1 block font-medium">Provenance</span>
              <div className="flex items-center gap-x-2">
                <HiOutlineTag className="h-4 w-4 text-black/40" />
                <span className="text-sm text-black/60">Pennsylvania</span>
              </div>
            </li>
            <li className="mb-6 lg:mb-0">
              <span className="mb-1 block font-medium">ZIP/Postal Code</span>
              <div className="flex items-center gap-x-2">
                <HiOutlineMail className="h-4 w-4 text-black/40" />
                <span className="text-sm text-black/60">97205</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="relative h-[600px] w-full overflow-hidden rounded-3xl">
          {/* <Map address={address} /> */}
          Map goes here
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails

import { PropertyType } from '@/types/types'
import { useState } from 'react'
import { PiCaretRightBold } from 'react-icons/pi'
import { HiLocationMarker } from 'react-icons/hi'
import { LuBath, LuBedDouble, LuBedSingle } from 'react-icons/lu'
import { TbResize } from 'react-icons/tb'
import ImageSlider from '../../custom/ImageSlider'
import ImagePreviewer from '../../custom/ImagePreviewer'
import PropertyOptions from '../custom-ui/PropertyOptions'
import ViewMore from '../custom-ui/ViewMore'
import SeeMoreBtn from '../../custom/SeeMoreBtn'
import PropertyReservation from '../containers/PropertyReservation'
import OwnerContact from '../custom-ui/OwnerContact'
import { useDisableClick } from 'hooks/useDisableClick'
import { IoStar } from 'react-icons/io5'
import { reviewsRate } from 'utils/reviewsRate'
import EssentialDetails from '../custom-ui/EssentialDetails'

const PropertyMainDetails = ({
  property,
  isSaved,
}: {
  property: PropertyType
  isSaved: boolean
}) => {
  const { disableClick } = useDisableClick()
  const [selectedImage, setSelectedImage] = useState('')
  const [selected, setSelected] = useState('')
  const [moreDetails, setMoreDetails] = useState(false)
  const selectImage = (image: string) => {
    // disable image previewer on small screens
    if (!disableClick) return
    setSelectedImage(image)
  }

  // mapping the reservations to only dates
  const propertyReservation =
    property.reservations &&
    property.reservations.map((item) => ({
      from: new Date(item.from),
      to: new Date(item.to),
    }))
  const rate = reviewsRate(property.reviews)

  return (
    <div className="items-start lg:grid lg:h-[752px] lg:grid-cols-2 lg:gap-x-6 lg:px-6">
      {/* Image previewer */}
      <div className="group relative flex w-full overflow-hidden lg:row-span-2 lg:h-full lg:rounded-3xl">
        <div className="absolute left-2 top-2 z-50 flex items-center gap-x-2 rounded-full bg-white px-3 py-2 text-xs font-medium tracking-wide">
          <IoStar />
          <span>{rate}</span>
        </div>
        <ImageSlider
          imagesArr={property.images}
          selectImage={selectImage}
          isCard={false}
        />
      </div>
      {/* this only available for larger screens */}
      <ImagePreviewer
        image={selectedImage}
        clearImage={() => setSelectedImage('')}
      />

      <div className="flex flex-col lg:h-[752px] lg:py-4">
        <PropertyOptions
          propertyId={property._id}
          isSaved={isSaved}
          propertyOwner={property.owner._id}
          profileImage={property.owner.profilePicture}
          userName={property.owner.fullName}
        />
        {selected && (
          <ViewMore
            selected={selected}
            property={property}
            toggleContainer={() => setSelected('')}
          />
        )}

        <div className="flex h-full flex-col px-4 md:px-6 lg:px-0">
          <div className="mb-8 mt-4 lg:mt-6">
            <h1 className="mb-1 text-3xl font-medium lg:text-4xl">
              {property.title}
            </h1>
            <div className="flex items-center gap-x-2">
              <HiLocationMarker className="text-neutral-800" />
              <span className="text-xs font-medium tracking-wider text-black/40">
                {property.address}
              </span>
            </div>
          </div>

          <div className="mb-8 flex items-center gap-x-4">
            <span className="font-medium ">
              {property.listingType === 'Rent' ? 'Rental ' : 'Purchase '}price
            </span>
            <div className="flex items-center gap-x-4">
              <span className="flex items-center gap-x-1 text-2xl font-bold">
                ${property.price}
                {property.listingType === 'Rent' && (
                  <>
                    <span className="text-base font-normal text-black/60">
                      /{' '}
                    </span>
                    <span className="text-base font-normal text-black/60">
                      night
                    </span>
                  </>
                )}
              </span>
            </div>
          </div>
          {/* display more details */}
          {moreDetails && (
            <EssentialDetails
              toggleContainer={() => setMoreDetails(false)}
              property={property}
            />
          )}
          <ul className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-light-200 p-4 sm:gap-x-5">
            <li className="hidden items-center gap-x-2 sm:flex">
              <LuBedDouble className="h-6 w-6 text-black/40" />
              <span className="text-xs font-medium text-black/40">
                {property.bedrooms.length} bedrooms
              </span>
            </li>

            <li className="flex items-center gap-x-2">
              <LuBedSingle className="h-6 w-6 text-black/40" />
              <span className="text-xs font-medium text-black/40">
                {property.beds.length} beds
              </span>
            </li>
            <li className="flex items-center gap-x-2">
              <LuBath className="h-6 w-6 text-black/40" />
              <span className="text-xs font-medium text-black/40">
                {property.bathrooms.length} baths
              </span>
            </li>
            <li className="flex items-center gap-x-2">
              <TbResize className="h-6 w-6 text-black/40" />
              <span className="text-xs font-medium text-black/40">
                {property.propertySpace} m²
              </span>
            </li>

            <li className="ml-auto block">
              <button
                className="cursor-pointer rounded-full bg-light-900 p-1 text-black/60 transition-colors md:p-2 lg:bg-transparent lg:text-black/40 lg:hover:bg-light-900 lg:hover:text-black/60"
                onClick={() => setMoreDetails(true)}
              >
                <PiCaretRightBold />
              </button>
            </li>
          </ul>

          <div className="mb-6">
            <p className="mb-4 leading-relaxed text-black/60">
              {property.description.slice(0, 156)}...
            </p>
            <SeeMoreBtn
              label="Read more"
              onClick={() => setSelected('description')}
            />
          </div>

          <div className="mb-8 gap-x-4 sm:grid sm:grid-cols-2">
            <div className="mb-6 sm:mb-0">
              <h2 className="mb-4 text-lg font-medium tracking-wide lg:text-xl">
                Property features
              </h2>
              <ul className="list-style mb-4 list-image-[url(/images/check.png)] px-6">
                {property.features.slice(0, 3).map((item, i) => (
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

            {property.rules.length !== 0 && (
              <div>
                <h2 className="mb-4 text-lg font-medium tracking-wide lg:text-xl">
                  Property rules
                </h2>
                <ul className="list-style mb-4 list-image-[url(/images/check.png)] px-6">
                  {property.rules.slice(0, 3).map((item, i) => (
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
            )}
          </div>
          {property.listingType === 'Rent' ? (
            <PropertyReservation
              property={property}
              arrOfDates={propertyReservation}
            />
          ) : (
            <OwnerContact user={property.owner} />
          )}
        </div>
      </div>
    </div>
  )
}

export default PropertyMainDetails

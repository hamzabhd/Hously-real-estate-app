import { PropertyType } from '@/types/types'
import { useState } from 'react'
import { BiBath } from 'react-icons/bi'
import { HiLocationMarker } from 'react-icons/hi'
import { LuBed, LuBedDouble } from 'react-icons/lu'
import { TbResize } from 'react-icons/tb'
import ImageSlider from '../../custom/ImageSlider'
import ImagePreviewer from '../../custom/ImagePreviewer'
import PropertyOptions from '../custom-ui/PropertyOptions'
import ViewMore from '../custom-ui/ViewMore'
import SeeMoreBtn from '../../custom/SeeMoreBtn'
import PropertyReservation from '../containers/PropertyReservation'
import OwnerContact from '../custom-ui/OwnerContact'

const imagesArr = [
  '/images/spain.png',
  '/images/spain.png',
  '/images/spain.png',
  '/images/spain.png',
]

const PropertyMainDetails = ({
  property,
  isSaved,
}: {
  property: PropertyType
  isSaved: boolean
}) => {
  const [selectedImage, setSelectedImage] = useState('')
  const [selected, setSelected] = useState('')

  const propertyReservation =
    property.reservations &&
    property.reservations.map((item) => ({
      from: new Date(item.from),
      to: new Date(item.to),
    }))

  return (
    <div className="items-start lg:grid lg:h-[752px] lg:grid-cols-2 lg:gap-x-6 lg:px-6">
      {/* Image previewer */}

      <ImageSlider
        imagesArr={imagesArr}
        selectImage={(image: string) => setSelectedImage(image)}
      />
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
            description={property.description}
            features={property.features}
            rules={property.rules}
            guestsLimit={property.guestsLimit}
            quietHours={property.quietHours}
            checkIn={property.checkIn}
            checkOut={property.checkOut}
            selected={selected}
            setSelected={setSelected}
          />
        )}
        <div className="flex h-full flex-col px-4 md:px-6 lg:px-0">
          <div className="mb-8 mt-4 lg:mt-6">
            <h1 className="mb-1 text-3xl font-medium lg:text-4xl">
              {property.title}
            </h1>
            <div className="flex items-center gap-x-2">
              <HiLocationMarker className="h-4 w-4 text-grey" />
              <span className="text-sm text-black/60">{property.address}</span>
            </div>
          </div>

          <div className="mb-8 flex items-center gap-x-4">
            <span className="flex items-center gap-x-1 text-2xl font-bold">
              ${property.price}
              <span className="text-base font-normal text-black/60">/ </span>
              <span className="text-base font-normal text-black/60">night</span>
            </span>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between sm:justify-normal sm:gap-x-6 lg:gap-x-10">
              <div className="flex flex-col items-start gap-y-1">
                <LuBedDouble className="h-6 w-6" />
                <span className="text-sm font-medium">
                  {property.bedrooms.length} bedrooms
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <BiBath className="h-6 w-6" />
                <span className="text-sm font-medium">
                  {property.bathrooms.length} bathrooms
                </span>
              </div>

              <div className="flex flex-col gap-y-1">
                <LuBed className="h-6 w-6" />
                <span className="text-sm font-medium">
                  {property.beds.length} beds
                </span>
              </div>

              <div className="flex flex-col gap-y-1">
                <TbResize className="h-6 w-6" />
                <span className="text-sm font-medium">
                  {property.propertySpace} m²
                </span>
              </div>
            </div>
          </div>

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
              <h2 className="mb-4 text-xl font-medium tracking-wide">
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
                <h2 className="mb-4 text-xl font-medium tracking-wide">
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

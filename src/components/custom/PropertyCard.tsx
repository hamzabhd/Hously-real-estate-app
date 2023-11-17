'use client'
import ImageSlider from './ImageSlider'
import SavePropertyButton from '../features/SavePropertyButton'
import Link from 'next/link'
import { IoStar } from 'react-icons/io5'
import { LuBath, LuBedDouble } from 'react-icons/lu'
import { HiLocationMarker } from 'react-icons/hi'
import { TbResize } from 'react-icons/tb'
import { useRouter } from 'next/navigation'
import { PropertyType } from '@/types/types'
import { reviewsRate } from 'utils/reviewsRate'
import { useLocations } from 'hooks/useLocations'
import { getCountryCode } from 'utils/getCountryCode'

const PropertyCard = ({
  property,
  isSaved,
}: {
  property: PropertyType
  isSaved: boolean
}) => {
  const { countries } = useLocations()
  const router = useRouter()
  const redirectClick = () => {
    return router.push(`/property/${property._id}`)
  }

  const longAddress = (address: string) => {
    if (address.length > 27) {
      return address.slice(0, 27) + '...'
    }
    return address
  }

  //check if the property country is too long
  const isPlural = (item: number) => {
    if (item > 1) return 's'
    return ''
  }

  const propertyCountry = /\s/g.test(property.country)
    ? getCountryCode(countries, property.country)
    : property.country

  return (
    <div className="sm:container-shadow relative sm:overflow-hidden sm:rounded-3xl sm:border-2 sm:border-white">
      <div className="group relative flex w-full cursor-pointer overflow-hidden">
        <ImageSlider
          imagesArr={property.images}
          isCard
          redirectClick={redirectClick}
        />
      </div>
      <div className="absolute right-2 top-2 flex items-center gap-x-2 rounded-full bg-white px-3 py-2 text-xs font-medium tracking-wide">
        <IoStar />
        <span>{reviewsRate(property.reviews) || 'N/A'}</span>
      </div>

      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <Link href={`/property/${property._id}`}>
            <h2 className="text-xl font-bold tracking-wide">
              {property.city}, {propertyCountry}
            </h2>
            <div className="flex items-center gap-x-2">
              <HiLocationMarker className="text-neutral-800" />
              <span className="inline-block truncate text-xs font-medium tracking-wider text-black/40">
                {longAddress(property.address)}
              </span>
            </div>
          </Link>

          <SavePropertyButton isSaved={isSaved} propertyId={property._id} />
        </div>

        <Link href={`/property/${property._id}`} className="cursor-pointer">
          <ul className="mb-4 flex gap-x-6 rounded-2xl bg-light-200 p-4 sm:gap-x-4">
            <li className="flex items-center gap-x-2">
              <LuBedDouble className="h-4 w-4 text-black/40" />
              <span className="text-xs font-medium text-black/40">
                {property.beds.length} bed{isPlural(property.beds.length)}
              </span>
            </li>
            <li className="flex items-center gap-x-2">
              <LuBath className="h-4 w-4 text-black/40" />
              <span className="text-xs font-medium text-black/40">
                {property.bathrooms.length} bath
                {isPlural(property.bathrooms.length)}
              </span>
            </li>
            <li className="flex items-center gap-x-2">
              <TbResize className="h-4 w-4 text-black/40" />
              <span className="text-xs font-medium text-black/40">
                {property.propertySpace} m²
              </span>
            </li>
          </ul>

          <div className="flex items-center justify-between">
            <span className="font-medium ">
              {property.listingType === 'Rent' ? 'Rental' : 'Purchase'} price
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
        </Link>
      </div>
    </div>
  )
}

export default PropertyCard

'use client'
import PropertyMainDetails from './PropertyMainDetails'
import PropertyReviews from './PropertyReviews'
import PropertyLocation from './PropertyLocation'
import { PropertyType } from '@/types/types'

const PropertyDetails = ({
  property,
  savedProperties,
}: {
  property: PropertyType
  savedProperties: string[]
}) => {
  return (
    <div className="lg:mt-4">
      <PropertyMainDetails
        property={property}
        savedProperties={savedProperties}
      />
      <PropertyReviews
        propertyId={property._id}
        propertyReviews={property.reviews}
      />
      <PropertyLocation {...property} />
    </div>
  )
}

export default PropertyDetails

'use client'
import PropertyMainDetails from './layouts/PropertyMainDetails'
import PropertyReviews from './layouts/PropertyReviews'
import PropertyLocation from './layouts/PropertyLocation'
import { PropertyType } from '@/types/types'

const PropertyPage = ({
  property,
  savedProperties,
}: {
  property: PropertyType
  savedProperties: string[]
}) => {
  const isIntercepted = true
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

export default PropertyPage

'use client'
import PropertyMainDetails from './layouts/PropertyMainDetails'
import PropertyReviews from './layouts/PropertyReviews'
import PropertyLocation from './layouts/PropertyLocation'
import { PropertyType } from '@/types/types'
import { isAdded } from 'utils/isAdded'

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
        isSaved={isAdded(property._id, savedProperties) || false}
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

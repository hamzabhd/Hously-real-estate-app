import React from 'react'
import PropertyCard from './PropertyCard'
import { PropertyType } from '@/types/types'
import { isAdded } from 'utils/isAdded'

const PropertiesPage = ({
  properties,
  savedProperties,
}: {
  properties: PropertyType[]
  savedProperties: string[]
}) => {
  return (
    <div className="mx-auto grid gap-4 sm:grid-cols-2 sm:p-4 md:p-6 lg:grid-cols-3 xl:grid-cols-4">
      {properties.map((property, i) => (
        <PropertyCard
          key={i}
          property={property}
          isSaved={isAdded(property._id, savedProperties)}
        />
      ))}
    </div>
  )
}

export default PropertiesPage

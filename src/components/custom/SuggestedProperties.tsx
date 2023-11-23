import PropertyCard from '../shared/PropertyCard'
import PropertiesContainer from '@/components/layouts/PropertiesContainer'
import { PropertyType } from '@/types/types'
import React from 'react'
import { isAdded } from 'utils/isAdded'

const SuggestedProperties = ({
  currentProperty,
  properties,
  savedProperties,
}: {
  currentProperty: string
  properties: PropertyType[]
  savedProperties: string[]
}) => {
  const suggestedProperties = properties
    .filter((p) => p._id !== currentProperty)
    .slice(0, 3)
  return (
    <div className="mt-6 lg:mt-8">
      <h2 className="px-4 text-xl font-medium md:ml-0 md:px-6 lg:text-2xl">
        Properties you might like
      </h2>

      <PropertiesContainer>
        {suggestedProperties.map((property, i) => (
          <PropertyCard
            key={i}
            property={property}
            isSaved={isAdded(property._id, savedProperties)}
          />
        ))}
      </PropertiesContainer>
    </div>
  )
}

export default SuggestedProperties

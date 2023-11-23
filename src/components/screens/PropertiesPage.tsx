'use client'
import PropertyCard from '../shared/PropertyCard'
import { PropertyType } from '@/types/types'
import { isAdded } from 'utils/isAdded'
import SeeMoreBtn from '../shared/SeeMoreBtn'
import { useShowMore } from 'hooks/useShowMore'

const PropertiesPage = ({
  properties,
  savedProperties,
}: {
  properties: PropertyType[]
  savedProperties: string[]
}) => {
  const itemsLength = properties.length
  const { handleItems, itemsToSee } = useShowMore(itemsLength, 10)
  return (
    <>
      <div className="mx-auto grid gap-4 sm:grid-cols-2 sm:p-4 md:p-6 lg:grid-cols-3 xl:grid-cols-4">
        {properties.slice(0, itemsToSee).map((property, i) => (
          <PropertyCard
            key={i}
            property={property}
            isSaved={isAdded(property._id, savedProperties)}
          />
        ))}
      </div>
      {itemsLength >= itemsToSee && (
        <SeeMoreBtn
          label="View more properties"
          onClick={handleItems}
          className="mx-4 md:mx-6"
        />
      )}
    </>
  )
}

export default PropertiesPage

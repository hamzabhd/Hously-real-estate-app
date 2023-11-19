import PropertyCard from '@/components/custom/PropertyCard'
import SeeMoreBtn from '@/components/custom/SeeMoreBtn'
import PropertiesContainer from '@/components/layouts/PropertiesContainer'
import { PropertyType } from '@/types/types'
import { useShowMore } from 'hooks/useShowMore'
import { isAdded } from 'utils/isAdded'

const SavedProperties = ({
  savedProperties,
}: {
  savedProperties: PropertyType[]
}) => {
  const itemsLength = savedProperties.length
  const { handleItems, itemsToSee } = useShowMore(itemsLength)

  const propertiesSaved = savedProperties.map((p) => p._id)
  return (
    <>
      <PropertiesContainer>
        {savedProperties.slice(0, itemsToSee).map((property, i) => (
          <PropertyCard
            key={i}
            property={property}
            isSaved={isAdded(property._id, propertiesSaved)}
          />
        ))}
      </PropertiesContainer>
      {itemsLength > 3 && (
        <SeeMoreBtn
          label={
            itemsLength <= itemsToSee
              ? 'Hide all properties'
              : 'View more properties'
          }
          onClick={handleItems}
          className="mx-4 md:mx-6"
        />
      )}
    </>
  )
}

export default SavedProperties

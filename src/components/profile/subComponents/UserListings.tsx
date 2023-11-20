import PropertyCard from '@/components/custom/PropertyCard'
import SeeMoreBtn from '@/components/custom/SeeMoreBtn'
import PropertiesContainer from '@/components/layouts/PropertiesContainer'
import { PropertyType } from '@/types/types'
import { useShowMore } from 'hooks/useShowMore'
import { isAdded } from 'utils/isAdded'
import EmptyStatePrompt from './EmptyStatePrompt'

const UserListings = ({
  properties,
  savedProperties,
}: {
  properties: PropertyType[]
  savedProperties: string[]
}) => {
  const itemsLength = properties.length
  const { handleItems, itemsToSee } = useShowMore(itemsLength)
  return (
    <>
      {properties.length === 0 ? (
        <EmptyStatePrompt name="create" link="/create-property" />
      ) : (
        <>
          <PropertiesContainer>
            {properties.slice(0, itemsToSee).map((property, i) => (
              <PropertyCard
                key={i}
                property={property}
                isSaved={isAdded(property._id, savedProperties)}
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
      )}
    </>
  )
}

export default UserListings

'use client'
import { PropertyType, SearchObjTypes } from '@/types/types'
import PropertiesPage from './PropertiesPage'
import { useSearchQueries } from 'hooks/useSearchQueries'
import { filterProperties } from 'utils/filterProperties'

const SearchPage = ({
  properties,
  savedProperties,
}: {
  properties: PropertyType[]
  savedProperties: string[]
}) => {
  const { searchQueries } = useSearchQueries()
  const filteredProperties = filterProperties(searchQueries, properties)

  return (
    <div>
      <PropertiesPage
        properties={filteredProperties}
        savedProperties={savedProperties}
      />
    </div>
  )
}

export default SearchPage

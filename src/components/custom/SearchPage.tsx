'use client'
import { PropertyType } from '@/types/types'
import PropertiesPage from './PropertiesPage'
import { useSearchQueries } from 'hooks/useSearchQueries'
import { filterProperties } from 'utils/filterProperties'
import { useLocations } from 'hooks/useLocations'

const SearchPage = ({
  properties,
  savedProperties,
}: {
  properties: PropertyType[]
  savedProperties: string[]
}) => {
  const { searchQueries } = useSearchQueries()
  const { countries } = useLocations()
  const filteredProperties = filterProperties(
    searchQueries,
    properties,
    countries,
  )

  return (
      <PropertiesPage
        properties={filteredProperties}
        savedProperties={savedProperties}
      />
  )
}

export default SearchPage

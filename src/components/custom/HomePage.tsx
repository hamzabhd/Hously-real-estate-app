'use client'

import { PropertyType } from '@/types/types'
import PropertiesPage from './PropertiesPage'
import { useSearchQueries } from 'hooks/useSearchQueries'
import { filterHomeProperties } from 'utils/filterProperties'

const HomePage = ({
  properties,
  savedProperties,
}: {
  properties: PropertyType[]
  savedProperties: string[]
}) => {
  const { searchQueries } = useSearchQueries()
  const { property, type } = searchQueries

  const filteredProperties = filterHomeProperties(properties, property, type)

  return (
    <PropertiesPage
      properties={filteredProperties}
      savedProperties={savedProperties}
    />
  )
}

export default HomePage

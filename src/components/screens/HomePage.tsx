'use client'

import { PropertyType } from '@/types/types'
import { useSearchQueries } from 'hooks/useSearchQueries'
import { filterHomeProperties } from 'utils/filterProperties'
import { useMemo } from 'react'
import PropertiesPage from './PropertiesPage'

const HomePage = ({
  properties,
  savedProperties,
}: {
  properties: PropertyType[]
  savedProperties: string[]
}) => {
  const { searchQueries } = useSearchQueries()
  const { property, type } = searchQueries

  const filteredProperties = useMemo(
    () => filterHomeProperties(properties, property, type),
    [properties, property, type],
  )

  return (
    <PropertiesPage
      properties={filteredProperties}
      savedProperties={savedProperties}
    />
  )
}

export default HomePage

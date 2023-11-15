import { PropertyType, SearchObjTypes } from '@/types/types'
import { regions } from './itemManagement/data/data'

export const filterProperties = (
  searchObj: SearchObjTypes,
  properties: PropertyType[],
) => {
  const { property, type, region, minPrice, maxPrice } = searchObj
  const allRegions = regions
    .map((item) => item.toLowerCase())
    .filter((item) => item !== 'anywhere')

  // Ensure that searchQueries properties are not null or undefined before using them
  const validProperty = typeof property === 'string'
  const validType = typeof type === 'string'
  const validRegion = typeof region === 'string'
  const propertyTypes = validProperty
    ? [property]
    : ['apartment', 'house', 'cabin', 'villa']
  const listingTypes = () => {
    if (validType) {
      if (type === 'buy') {
        return ['sell']
      } else {
        return [type]
      }
    }
    return ['sell', 'rent']
  }
  const regionTypes = () => {
    if (validRegion && region !== 'anywhere') {
      return [region]
    }
    return allRegions
  }
  const filteredProperties = properties.filter((p) => {
    return (
      propertyTypes.includes(p.propertyType.toLowerCase()) &&
      listingTypes().includes(p.listingType.toLowerCase()) &&
      Number(p.price) >= Number(minPrice) &&
      Number(p.price) <= Number(maxPrice)
    )
  })

  return filteredProperties
}

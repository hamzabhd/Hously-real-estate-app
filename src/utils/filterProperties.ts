import { CountryObjType, PropertyType, SearchObjTypes } from '@/types/types'
import { regions } from './itemManagement/data/data'
import { getCountryRegion } from './getCountryRegion'

export const filterProperties = (
  searchObj: SearchObjTypes,
  properties: PropertyType[],
  countries: CountryObjType[],
) => {
  const { property, type, region, min, max } = searchObj
  // get only regions
  const allRegions = regions
    .map((item) => item.toLowerCase())
    .filter((item) => item !== 'anywhere')

  // Ensure that searchQueries properties are not null or undefined before using them
  const validProperty = typeof property === 'string'
  const validType = typeof type === 'string'
  const validRegion = typeof region === 'string'

  // get either the user input or all the available properties
  const propertyTypes = validProperty
    ? [property]
    : ['apartment', 'house', 'cabin', 'villa']

  // get either the user input or all the available listings type
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

  // get either the user input or all the regions
  const regionTypes = () => {
    if (validRegion && region !== 'anywhere') {
      return [region]
    }
    return allRegions
  }

  // get the exact region based on the property country
  const countyRegion = (value: string) => getCountryRegion(countries, value)

  // responsible for filtering the properties
  const filteredProperties = properties.filter((p) => {
    return (
      propertyTypes.includes(p.propertyType.toLowerCase()) &&
      listingTypes().includes(p.listingType.toLowerCase()) &&
      regionTypes().includes(countyRegion(p.country)) &&
      Number(p.price) >= Number(min) &&
      Number(p.price) <= Number(max)
    )
  })

  return filteredProperties
}

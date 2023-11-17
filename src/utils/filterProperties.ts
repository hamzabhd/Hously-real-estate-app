import { CountryObjType, PropertyType, SearchObjTypes } from '@/types/types'
import { regions } from '../data/data'
import { getCountryRegion } from './getRegion'

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

export const filterHomeProperties = (
  properties: PropertyType[],
  property: string | null,
  type: string | null,
) => {
  const filteredProperties = properties.filter((p) => {
    // reform the type to match the property listing type
    const exactType = type && type === 'rent' ? type : 'sell'
    // return the filters conditionally
    if (property && type) {
      return (
        p.propertyType.toLowerCase() === property &&
        p.listingType.toLowerCase() === exactType
      )
    } else if (property) {
      return p.propertyType.toLowerCase() === property
    } else if (type) {
      return p.listingType.toLowerCase() === exactType
    }
    // the default is the property
    return p
  })

  return filteredProperties
}

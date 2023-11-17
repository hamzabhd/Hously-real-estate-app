import { CityObjType, CountryObjType } from '@/types/types'

export const getCountryRegion = (
  listOfCountries: CountryObjType[],
  value: string,
) => {
  const currentCountry =
    listOfCountries &&
    listOfCountries.find((c: CountryObjType) => c.countryName === value)

  if (currentCountry) return currentCountry?.continent.toLowerCase()
  return ''
}

export const getCityRegion = (
  listOfCountries: CityObjType[],
  value: string,
) => {
  const currentCountry =
    listOfCountries &&
    listOfCountries.find((c: CityObjType) => c.cityName === value)

  if (currentCountry) return currentCountry?.cityRegion
  return ''
}

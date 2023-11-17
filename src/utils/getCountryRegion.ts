import { CountryObjType } from '@/types/types'

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

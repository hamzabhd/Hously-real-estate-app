import { CountryObjType } from '@/types/types'

export const getCountryCode = (
  listOfCountries: CountryObjType[],
  value: string,
) => {
  const currentCountry =
    listOfCountries &&
    listOfCountries.find((c: CountryObjType) => c.countryName === value)

  if (currentCountry) return currentCountry?.countryCode
  return undefined
}

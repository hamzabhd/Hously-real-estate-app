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

export const reformCountryName = (country: string) => {
  const parts = country.split(' ')

  let firstLetters: string[] = []
  for (let i = 0; i < parts.length; i++) {
    const firstLetter = parts[i].slice(0, 1)
    firstLetters.push(firstLetter)
  }
  return firstLetters.join('').toUpperCase()
}

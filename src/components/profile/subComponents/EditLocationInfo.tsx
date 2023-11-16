import CustomSelectElement from '@/components/custom/CustomSelectElement'
import { CityObjType, CountryObjType, UserLocationType } from '@/types/types'
import { useLocations } from 'hooks/useLocations'
import { useEffect } from 'react'
import { getCountryCode } from 'utils/getCountryCode'

const EditLocationInfo = ({ details, setUserDetails }: UserLocationType) => {
  const { countries, cities, setSelectedCountry } = useLocations()

  // get only countries name
  const listOfCountries = countries?.map(
    (country: CountryObjType) => country.countryName,
  )
  // get only cities name
  const listOfCities = cities?.map((city: CityObjType) => city.cityName)

  // handle the country selection
  const getCountry = (value: string) => {
    const countryCode = getCountryCode(countries, value)
    if (countryCode) {
      console.log(countryCode)
      setSelectedCountry(countryCode)
      setUserDetails((prevState) => ({
        ...prevState,
        country: value,
        city: '',
      }))
    }
  }

  // handle the city selection
  const getCity = (value: string) => {
    setUserDetails((prevState) => ({ ...prevState, city: value }))
  }

  // set cities list depending on the user country
  useEffect(() => {
    if (!details.country || !countries) return
    const countryCode = getCountryCode(countries, details.country)
    if (countryCode) {
      setSelectedCountry(countryCode)
    }
  }, [countries])

  return (
    <>
      <CustomSelectElement
        label="Country"
        selectedValue={details.country}
        getValue={getCountry}
        listItems={listOfCountries}
        className="mb-4 sm:mb-0"
      />
      <CustomSelectElement
        label="City"
        selectedValue={details.city}
        getValue={getCity}
        listItems={listOfCities}
      />
    </>
  )
}

export default EditLocationInfo

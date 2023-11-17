import Container from '@/components/layouts/Container'
import CustomInput from '@/components/custom/CustomInput'
import { CityObjType, CountryObjType, LocationPropType } from '@/types/types'
import CustomSelectElement from '@/components/custom/CustomSelectElement'
import { getCountryCode } from 'utils/getCountryCode'
import { useLocations } from 'hooks/useLocations'
import { useEffect } from 'react'
import { getCityRegion } from 'utils/getRegion'
const Location = ({
  details,
  handleChange,
  setDetails,
  setErrors,
  detailsErrors,
}: LocationPropType) => {
  const { address, country, city, postalCode } = detailsErrors
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
      if (country) {
        setErrors((prevState) => ({ ...prevState, country: '' }))
      }
      setSelectedCountry(countryCode)
      setDetails((prevState) => ({
        ...prevState,
        country: value,
        city: '',
      }))
    }
  }

  // handle the city selection
  const getCity = (value: string) => {
    if (city) {
      setErrors((prevState) => ({ ...prevState, city: '' }))
    }
    const cityRegion = getCityRegion(cities, value)
    setDetails((prevState) => ({
      ...prevState,
      city: value,
      state: cityRegion,
    }))
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
    <Container title="Property address" type="normal">
      <div className="sm:grid sm:grid-cols-4  sm:gap-4 lg:gap-5">
        <CustomSelectElement
          label="Country"
          selectedValue={details.country}
          getValue={getCountry}
          listItems={listOfCountries}
          className={`sm:col-span-2 sm:my-0 ${country ? 'mb-0' : 'mb-4'}`}
          error={country}
        />
        <CustomSelectElement
          label="City"
          selectedValue={details.city}
          getValue={getCity}
          listItems={listOfCities}
          className={`sm:col-span-2 sm:my-0 ${city ? 'mb-0' : 'mb-4'}`}
          error={city}
        />
        <CustomInput
          name="address"
          value={details.address}
          handleChange={handleChange}
          type="text"
          label="Address"
          className={`sm:col-span-3 sm:my-0 ${address ? 'mb-0' : 'mb-4'}`}
          error={address}
        />

        <CustomInput
          name="postalCode"
          value={details.postalCode}
          handleChange={handleChange}
          type="text"
          label="Postal code"
          className={`sm:my-0 ${postalCode ? 'mb-0' : 'mb-4'}`}
          error={postalCode}
        />
      </div>
    </Container>
  )
}

export default Location

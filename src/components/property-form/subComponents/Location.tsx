import Container from '@/components/layouts/Container'
import CustomInput from '@/components/custom/CustomInput'
import { LocationPropType } from '@/types/types'
const Location = ({
  details,
  handleChange,
  detailsErrors,
}: LocationPropType) => {
  const { address, country, city, postalCode, state } = detailsErrors
  return (
    <Container title="Property address" type="normal">
      <div className="sm:grid sm:grid-cols-2 sm:gap-4 lg:gap-5">
        <CustomInput
          name="address"
          value={details.address}
          handleChange={handleChange}
          type="text"
          label="Address"
          className={`sm:col-span-2 sm:my-0 ${address ? 'mb-0' : 'mb-4'}`}
          error={address}
        />
        <CustomInput
          name="country"
          value={details.country}
          handleChange={handleChange}
          type="text"
          label="Country"
          className={`sm:my-0 ${country ? 'mb-0' : 'mb-4'}`}
          error={country}
        />

        <CustomInput
          name="city"
          value={details.city}
          handleChange={handleChange}
          type="text"
          label="City"
          className={`sm:my-0 ${city ? 'mb-0' : 'mb-4'}`}
          error={city}
        />

        <CustomInput
          name="postalCode"
          value={details.postalCode}
          handleChange={handleChange}
          type="text"
          label="ZIP/Postal code"
          className={`sm:my-0 ${postalCode ? 'mb-0' : 'mb-4'}`}
          error={postalCode}
        />

        <CustomInput
          name="state"
          value={details.state}
          handleChange={handleChange}
          type="text"
          label="State/Provence"
          className={`sm:my-0 ${state ? 'mb-0' : 'mb-4'}`}
          error={state}
        />
      </div>
    </Container>
  )
}

export default Location

import Container from '@/components/containers/Container'
import CustomInput from '@/components/custom/CustomInput'
import { LocationPropType } from '@/types/types'
const Location = ({
  details,
  handleChange,
  detailsErrors,
}: LocationPropType) => {
  return (
    <Container title="Property address" type="normal">
      <div className="sm:grid sm:grid-cols-2 sm:gap-4 lg:gap-5">
        <CustomInput
          name="address"
          value={details.address}
          handleChange={handleChange}
          type="text"
          label="Address"
          className="relative mb-4 sm:col-span-2 sm:my-0"
          error={detailsErrors.address}
        />
        <CustomInput
          name="country"
          value={details.country}
          handleChange={handleChange}
          type="text"
          label="Country"
          className="relative mb-4 sm:my-0"
          error={detailsErrors.country}
        />

        <CustomInput
          name="city"
          value={details.city}
          handleChange={handleChange}
          type="text"
          label="City"
          className="relative mb-4 sm:my-0"
          error={detailsErrors.city}
        />

        <CustomInput
          name="postalCode"
          value={details.postalCode}
          handleChange={handleChange}
          type="text"
          label="ZIP/Postal code"
          className="relative mb-4 sm:my-0"
          error={detailsErrors.postalCode}
        />

        <CustomInput
          name="state"
          value={details.state}
          handleChange={handleChange}
          type="text"
          label="State"
          className="relative mb-4 sm:my-0"
        />
      </div>
    </Container>
  )
}

export default Location

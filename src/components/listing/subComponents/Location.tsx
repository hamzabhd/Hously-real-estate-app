import Container from '@/components/Container'
import CustomInput from '@/components/CustomInput'
import { useGlobalContext } from 'context/GlobalProvider'

const Location = () => {
  const { details, handleChange } = useGlobalContext()

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
        />
        <CustomInput
          name="country"
          value={details.country}
          handleChange={handleChange}
          type="text"
          label="Country"
          className="relative mb-4 sm:my-0"
        />

        <CustomInput
          name="city"
          value={details.city}
          handleChange={handleChange}
          type="text"
          label="City"
          className="relative mb-4 sm:my-0"
        />

        <CustomInput
          name="state"
          value={details.state}
          handleChange={handleChange}
          type="text"
          label="State"
          className="relative mb-4 sm:my-0"
        />

        <CustomInput
          name="postalCode"
          value={details.postalCode}
          handleChange={handleChange}
          type="text"
          label="ZIP/Postal code"
          className="relative mb-4 sm:my-0"
        />
      </div>
    </Container>
  )
}

export default Location

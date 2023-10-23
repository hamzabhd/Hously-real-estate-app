import { ChangeEvent } from 'react'
import Container from '@/components/Container'
import CustomInput from '@/components/CustomInput'

const Location = () => {
  return (
    <Container title="Property address" type="normal">
      <div className="sm:grid sm:grid-cols-2 sm:gap-4 lg:gap-5">
        <CustomInput
          name="address"
          value={''}
          handleChange={(
            e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
          ) => undefined}
          type="text"
          label="Address"
          className="relative mb-4 sm:col-span-2 sm:my-0"
        />
        <CustomInput
          name="country"
          value={''}
          handleChange={(
            e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
          ) => undefined}
          type="text"
          label="Country"
          className="relative mb-4 sm:my-0"
        />

        <CustomInput
          name="city"
          value={''}
          handleChange={(
            e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
          ) => undefined}
          type="text"
          label="City"
          className="relative mb-4 sm:my-0"
        />

        <CustomInput
          name="state"
          value={''}
          handleChange={(
            e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
          ) => undefined}
          type="text"
          label="State"
          className="relative mb-4 sm:my-0"
        />

        <CustomInput
          name="postalCode"
          value={''}
          handleChange={(
            e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
          ) => undefined}
          type="text"
          label="ZIP/Postal code"
          className="relative mb-4 sm:my-0"
        />
      </div>
    </Container>
  )
}

export default Location

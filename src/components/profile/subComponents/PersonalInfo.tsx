import { ChangeEvent } from 'react'
import { UserDetails } from '@/types/types'

import CustomInput from '@/components/custom/CustomInput'

type PersonalInfoPropType = {
  details: UserDetails
  errors: UserDetails
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const PersonalInfo = ({
  details,
  errors,
  handleChange,
}: PersonalInfoPropType) => {
  return (
    <>
      <CustomInput
        name="fullName"
        value={details.fullName}
        handleChange={handleChange}
        type="text"
        label="Full name*"
        max={25}
        className="relative mb-4 md:mb-5"
        message="Feel free to enter your name using letters."
        error={errors.fullName}
      />

      <CustomInput
        name="phoneNumber"
        value={details.phoneNumber}
        handleChange={handleChange}
        type="tel"
        label="Phone number"
        className="relative mb-4 md:mb-5"
        message="Please include your country code (e.g. +1)"
        error={errors.phoneNumber}
      />

      <CustomInput
        name="country"
        value={details.country}
        handleChange={handleChange}
        type="text"
        label="Country"
        className="relative mb-4 md:mb-0"
      />

      <CustomInput
        name="city"
        value={details.city}
        handleChange={handleChange}
        type="text"
        label="City"
        className="relative mb-0"
      />
    </>
  )
}

export default PersonalInfo

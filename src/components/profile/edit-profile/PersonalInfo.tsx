import { PersonalInfoPropType } from '@/types/types'
import CustomInput from '@/components/ui/CustomInput'

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
    </>
  )
}

export default PersonalInfo

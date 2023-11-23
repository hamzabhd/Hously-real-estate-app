import CustomInput from '@/components/ui/CustomInput'
import CustomTextArea from '@/components/ui/CustomTextArea'
import { UserDetails } from '@/types/types'
import React, { ChangeEvent } from 'react'

type AdditionalInfoPropType = {
  details: UserDetails
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const AdditionalInfo = ({ details, handleChange }: AdditionalInfoPropType) => {
  return (
    <div className="mb-6 md:col-start-2 md:col-end-4 lg:pt-7">
      <CustomTextArea
        name="bio"
        value={details.bio}
        handleChange={handleChange}
        label="Biography"
        className="relative mb-4 md:mb-5"
      />

      <CustomTextArea
        name="background"
        value={details.background}
        handleChange={handleChange}
        label="Professional background"
        className="relative mb-4 md:mb-5"
      />

      <div className="mb-4 md:mb-5">
        <span className="mb-2 block font-medium text-black/60">Fun facts</span>
        <CustomInput
          name="fact1"
          value={details.fact1}
          handleChange={handleChange}
          placeholder="Tell us something funny"
          type="text"
          className="relative mb-4 md:mb-5"
        />
        <CustomInput
          name="fact2"
          value={details.fact2}
          handleChange={handleChange}
          placeholder="Tell us something funny"
          type="text"
          className="relative mb-4 md:mb-5"
        />
        <CustomInput
          name="fact3"
          value={details.fact3}
          handleChange={handleChange}
          placeholder="Tell us something funny"
          type="text"
          className="relative mb-4 md:mb-5"
        />
      </div>
      <div>
        <span className="mb-2 block font-medium text-black/60">
          Favorite destinations
        </span>
        <CustomInput
          name="destination1"
          value={details.destination1}
          handleChange={handleChange}
          placeholder="Santorini, Greece"
          type="text"
          className="relative mb-4 md:mb-5"
        />

        <CustomInput
          name="destination2"
          value={details.destination2}
          handleChange={handleChange}
          placeholder="Santorini, Greece"
          type="text"
          className="relative mb-4 md:mb-5"
        />
        <CustomInput
          name="destination3"
          value={details.destination3}
          handleChange={handleChange}
          placeholder="Santorini, Greece"
          type="text"
          className="relative mb-4 md:mb-5"
        />
      </div>
    </div>
  )
}

export default AdditionalInfo

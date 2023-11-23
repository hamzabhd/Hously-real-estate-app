import CustomInput from '@/components/ui/CustomInput'
import { UserDetails } from '@/types/types'
import React, { ChangeEvent } from 'react'

interface ContactPropType {
  details: UserDetails
  errors: UserDetails
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const ContactInfo = ({ details, errors, handleChange }: ContactPropType) => {
  return (
    <div className="mb-6 md:col-start-2 md:col-end-4 lg:pt-7">
      <span className="mb-2 block font-medium text-black/60">Social links</span>
      <CustomInput
        name="link1"
        value={details.link1}
        handleChange={handleChange}
        placeholder="https://www.facebook.com/johndoe"
        type="text"
        error={errors.link1}
        className="relative mb-4 md:mb-5"
      />
      <CustomInput
        name="link2"
        value={details.link2}
        handleChange={handleChange}
        placeholder="https://www.facebook.com/johndoe"
        type="text"
        error={errors.link2}
        className="relative mb-4 md:mb-5"
      />
      <CustomInput
        name="link3"
        value={details.link3}
        handleChange={handleChange}
        placeholder="https://www.facebook.com/johndoe"
        type="text"
        error={errors.link3}
        className="relative mb-4 md:mb-5"
      />
    </div>
  )
}

export default ContactInfo

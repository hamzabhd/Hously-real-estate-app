import { ChangeEvent } from 'react'
import { UserDetails } from '@/types/types'
import { IoClose } from 'react-icons/io5'
import UserImage from '@/components/UserImage'
import CustomInput from '@/components/custom/CustomInput'

type PersonalInfoPropType = {
  image: string
  oldImage: string
  details: UserDetails
  errors: UserDetails
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  uploadImage: (e: ChangeEvent<HTMLInputElement>) => void
  resetImage: () => void
}

const PersonalInfo = ({
  image,
  oldImage,
  details,
  errors,
  handleChange,
  uploadImage,
  resetImage,
}: PersonalInfoPropType) => {
  return (
    <div className="mb-6 sm:grid sm:grid-cols-2 sm:gap-x-4 md:col-start-2 md:col-end-4 lg:pt-7 ">
      <div className="mb-4 flex gap-x-4 sm:col-start-1 sm:col-end-3 md:mb-5">
        <UserImage
          name="Jana Lorene"
          imageUrl={image || oldImage}
          width={96}
          height={96}
        />
        <div className="flex w-full flex-col justify-center gap-y-1 rounded-2xl border border-grey p-4 text-sm">
          {!image ? (
            <>
              <div className="text-black/60">
                <label>
                  <span className="cursor-pointer font-medium text-blue-900 hover:underline">
                    Click to upload
                  </span>
                  <input
                    type="file"
                    name="profilePicture"
                    className="hidden"
                    onChange={uploadImage}
                  />
                </label>{' '}
                your image.
              </div>
              <span className="block text-black/60">
                PNG, JPG (max. 800x400px)
              </span>
            </>
          ) : (
            <div className="text-black/60">
              <span className="block">
                Your image was successfully uploaded
              </span>
              <button
                type="button"
                className="group mt-1 flex items-center gap-x-2 font-normal"
                onClick={resetImage}
              >
                <IoClose className="h-4 w-4 text-red-500" />
                <span className="text-sm font-medium text-red-500 group-hover:underline">
                  Reset image
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
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
    </div>
  )
}

export default PersonalInfo

'use client'
import { MdOutlineInfo } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import { HiOutlinePlusSm } from 'react-icons/hi'
import UserImage from '@/components/UserImage'
import Line from '@/components/Line'
import { ChangeEvent, ReactNode, useReducer, useState } from 'react'

interface UserDetails {
  username: string
  fullName: string
  country: string
  city: string
  phoneNumber: string
  email: string
  bio: string
  background: string
  fact1: string
  fact2: string
  fact3: string
  destination1: string
  destination2: string
  destination3: string
  link1: string
  link2: string
  link3: string
}

//^\+\([1-9]{1,3}\)\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}$
//pattern="https://.+"

const reformName = (name: string) => {
  const nameArr = name.split(' ')

  const firstLetterToUpperCase =
    nameArr[0].slice(0, 1).toLocaleUpperCase() +
    nameArr[0].slice(1).toLocaleLowerCase()
  const newName =
    firstLetterToUpperCase + nameArr.slice(1).join('').toLocaleLowerCase()
  return newName
}

const EditProfileForm = () => {
  const [imageToPreview, setImageToPreview] = useState('')
  const [imageData, setImageData] = useState('')
  const [userDetails, setUserDetails] = useState<UserDetails>({
    username: '',
    fullName: '',
    country: '',
    city: '',
    phoneNumber: '',
    email: '',
    bio: '',
    background: '',
    fact1: '',
    fact2: '',
    fact3: '',
    destination1: '',
    destination2: '',
    destination3: '',
    link1: '',
    link2: '',
    link3: '',
  })
  const [errorInputs, setErrorInputs] = useState<UserDetails>({
    username: '',
    fullName: '',
    country: '',
    city: '',
    phoneNumber: '',
    email: '',
    bio: '',
    background: '',
    fact1: '',
    fact2: '',
    fact3: '',
    destination1: '',
    destination2: '',
    destination3: '',
    link1: '',
    link2: '',
    link3: '',
  })

  const reformName = (name: string, replacer: string) => {
    const nameArr = name.split(' ')

    const firstLetterToUpperCase = (name: string) =>
      name.slice(0, 1).toLocaleUpperCase() + name.slice(1).toLocaleLowerCase()

    let newArr = []
    for (let i = 0; i < nameArr.length; i++) {
      newArr.push(firstLetterToUpperCase(nameArr[i]))
    }

    const newName = newArr.join(' ').replace(/\s+/g, replacer)
    return newName
  }

  const reformFullName = (name: string) => {
    const nameArr = name.split(' ')

    const firstLetterToUpperCase = (name: string) =>
      name.slice(0, 1).toLocaleUpperCase() + name.slice(1).toLocaleLowerCase()

    let newArr = []
    for (let i = 0; i < nameArr.length; i++) {
      newArr.push(firstLetterToUpperCase(nameArr[i]))
    }

    const newName = newArr.slice(0, 3).join(' ').replace(/\s+/g, ' ')
    return newName
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target

    setErrorInputs((prevState) => ({
      ...prevState,
      [name]: '',
    }))
    if (/(country|city)/.test(name)) {
      return setUserDetails((prevState) => ({
        ...prevState,
        [name]: reformName(value, ' '),
      }))
    }

    if (name === 'fullName') {
      return setUserDetails((prevState) => ({
        ...prevState,
        fullName: reformFullName(value),
      }))
    }
    return setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (/\.(jpe?g|png)/.test(e.target.files?.[0].name as string)) {
      const fileReader = new FileReader()
      fileReader.onload = (e) => {
        setImageToPreview(e.target?.result as string)
        setImageData(fileReader.result as string)
      }
      fileReader.readAsDataURL(e.target.files?.[0] as File)
      return
    }
    alert('This is not a valid image file')
  }

  return (
    <div className="mt-4 lg:mt-8">
      <form className="">
        <div className="md:grid md:grid-cols-3">
          <h2 className="mb-4 mt-2 text-lg font-bold uppercase md:my-0 md:mb-5 lg:text-xl ">
            <span className="block text-black/60">01.</span>Personal information
          </h2>
          <div className="sm:grid sm:grid-cols-2 sm:gap-x-4 md:col-start-2 md:col-end-4">
            <div className="mb-4 flex gap-x-4 sm:col-start-1 sm:col-end-3 md:mb-5">
              <UserImage
                name="Jana Lorene"
                imageUrl={imageToPreview}
                width={96}
                height={96}
              />
              <div className="flex w-full flex-col justify-center gap-y-1 rounded-2xl border border-grey p-4 text-sm">
                {!imageData ? (
                  <>
                    <div className="text-black/60">
                      <label>
                        <span className="cursor-pointer font-medium text-blue-900 hover:underline">
                          Click to upload
                        </span>
                        <input
                          type="file"
                          name="image"
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
                      onClick={() => {
                        setImageData('')
                        setImageToPreview('/images/person.jpg')
                      }}
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
              value={userDetails.fullName}
              handleChange={handleChange}
              type="text"
              label="Full name*"
              max={25}
              className="relative mb-4 md:mb-5"
              message="Please enter your full name using only letters."
            />

            <CustomInput
              name="phoneNumber"
              value={userDetails.phoneNumber}
              handleChange={handleChange}
              type="tel"
              label="Phone Number"
              className="relative mb-4 md:mb-5"
              message="Please include your country code (e.g. +1)"
            />

            <CustomInput
              name="country"
              value={userDetails.country}
              handleChange={handleChange}
              type="text"
              label="Country"
              className="relative mb-4 md:mb-5"
            />

            <CustomInput
              name="city"
              value={userDetails.city}
              handleChange={handleChange}
              type="text"
              label="City"
              className="relative mb-4 md:mb-5"
            />
            <CustomInput
              name="email"
              value={userDetails.email}
              handleChange={handleChange}
              type="email"
              label="Email address"
              className="relative mb-0 sm:col-start-1 sm:col-end-3 "
            />
          </div>
          <Line className="md:col-start-1 md:col-end-4" />
        </div>

        <div className="md:grid md:grid-cols-3">
          <h2 className="mb-4 mt-2 text-lg font-bold uppercase md:my-0 md:mb-5 lg:text-xl ">
            <span className="block text-black/60">02.</span>Additional
            information
          </h2>
          <div className="md:col-start-2 md:col-end-4">
            <CustomInput
              name="bio"
              value={userDetails.bio}
              handleChange={handleChange}
              label="Biography"
              className="relative mb-4 md:mb-5"
            />

            <CustomInput
              name="background"
              value={userDetails.background}
              handleChange={handleChange}
              label="Professional background"
              className="relative mb-4 md:mb-5"
            />

            <div className="mb-4 md:mb-5">
              <span className="mb-2 block font-medium text-black/60">
                Fun facts
              </span>
              <CustomInput
                name="fact1"
                value={userDetails.fact1}
                handleChange={handleChange}
                placeholder="Tell us something funny"
                type="text"
                className="relative mb-4 md:mb-5"
              />
              <CustomInput
                name="fact2"
                value={userDetails.fact2}
                handleChange={handleChange}
                placeholder="Tell us something funny"
                type="text"
                className="relative mb-4 md:mb-5"
              />
              <CustomInput
                name="fact3"
                value={userDetails.fact3}
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
                value={userDetails.destination1}
                handleChange={handleChange}
                placeholder="Santorini, Greece"
                type="text"
                className="relative mb-4 md:mb-5"
              />

              <CustomInput
                name="destination2"
                value={userDetails.destination2}
                handleChange={handleChange}
                placeholder="Santorini, Greece"
                type="text"
                className="relative mb-4 md:mb-5"
              />
              <CustomInput
                name="destination3"
                value={userDetails.destination3}
                handleChange={handleChange}
                placeholder="Santorini, Greece"
                type="text"
                className="relative mb-4 md:mb-5"
              />
            </div>
          </div>

          <Line className="md:col-start-1 md:col-end-4" />
        </div>

        <div className="md:grid md:grid-cols-3">
          <h2 className="mb-4 mt-2 text-xl  font-bold uppercase md:my-0 md:mb-5 ">
            <span className="block text-black/60">03.</span>Additional contact
            info
          </h2>
          <div className="md:col-start-2 md:col-end-4">
            <span className="mb-2 block font-medium text-black/60">
              Social links
            </span>
            <CustomInput
              name="link1"
              value={userDetails.link1}
              handleChange={handleChange}
              placeholder="https://www.facebook.com/johndoe"
              type="text"
              message="Please enter a valid social media link"
              error={errorInputs.link1}
              className="relative mb-4 md:mb-5"
            />
            <CustomInput
              name="link2"
              value={userDetails.link2}
              handleChange={handleChange}
              placeholder="https://www.facebook.com/johndoe"
              type="text"
              message="Please enter a valid social media link"
              error={errorInputs.link2}
              className="relative mb-4 md:mb-5"
            />
            <CustomInput
              name="link3"
              value={userDetails.link3}
              handleChange={handleChange}
              placeholder="https://www.facebook.com/johndoe"
              type="text"
              message="Please enter a valid social media link"
              error={errorInputs.link3}
              className="relative mb-4 md:mb-5"
            />
          </div>

          <Line className="md:col-start-1 md:col-end-4 lg:mb-5" />
        </div>

        <div className="mb-4 mt-auto flex gap-x-2 md:mb-5 md:ml-auto md:w-fit">
          <button className="flex w-full cursor-pointer items-center justify-center rounded-full border border-grey px-8 py-3 font-medium text-black transition-colors hover:border-black/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600">
            <span className="block">Cancel</span>
          </button>
          <button className="flex w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-3 font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600">
            <span className="block">Save</span>
          </button>
        </div>
      </form>
    </div>
  )
}

const CustomInput = ({
  name,
  value,
  className,
  handleChange,
  max,
  placeholder,
  label,
  type,
  message,
  error,
}: {
  name: string
  value: string
  className: string
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  max?: number
  placeholder?: string
  label?: string
  type?: string
  message?: string
  error?: string
}) => {
  return (
    <>
      {type ? (
        label ? (
          <div className={className}>
            <input
              type={type}
              name={name}
              id={name}
              onChange={handleChange}
              value={value}
              placeholder=" "
              maxLength={max}
              className={`peer block w-full appearance-none rounded-full border border-grey bg-transparent p-4 focus:border-black/60 focus:text-black focus:outline-none ${
                message && 'focus:pr-10'
              } ${error && 'border-red-500 pr-10 text-red-500'} ${
                type === 'tel' && 'pl-8'
              }`}
            />
            <label
              htmlFor={name}
              className={`absolute left-3 top-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-1 font-medium text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:cursor-default peer-focus:px-2 peer-focus:text-gray-600 ${
                error && 'text-red-500'
              }`}
            >
              {label}
            </label>
            {type === 'tel' && (
              <span className="absolute left-4 top-1/2 block -translate-y-1/2 font-medium text-black/40">
                +
              </span>
            )}
            {message && <InputValidator message={message} error={error} />}
          </div>
        ) : (
          <div className={className}>
            <input
              type={type}
              name={name}
              id={name}
              onChange={handleChange}
              value={value}
              placeholder={placeholder}
              className={`peer block w-full appearance-none rounded-full border border-grey bg-transparent p-4 focus:border-black/60 focus:text-black focus:outline-none ${
                message && 'focus:pr-10'
              } ${error && 'border-red-500 pr-10 text-red-500'}`}
            />
            {message && <InputValidator message={message} error={error} />}
          </div>
        )
      ) : (
        <div className={className}>
          <textarea
            name={name}
            id={name}
            value={value}
            onChange={handleChange}
            placeholder=" "
            className="peer block h-36 w-full resize-none appearance-none rounded-3xl border border-grey bg-transparent p-4 text-black focus:border-black/60 focus:outline-none focus:ring-0"
          />
          <label
            htmlFor={name}
            className="absolute left-4 top-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-1 font-medium text-gray-400 duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:cursor-default peer-focus:border-black/60 peer-focus:px-2 peer-focus:text-gray-600"
          >
            {label}
          </label>
        </div>
      )}
    </>
  )
}

const InputValidator = ({
  message,
  error,
}: {
  message: string
  error?: string
}) => {
  return (
    <div
      className={`group absolute right-4 top-1/2 -translate-y-1/2 ${
        error ? 'block' : 'hidden peer-focus:block'
      } `}
    >
      <MdOutlineInfo
        className={`h-4 w-4 cursor-pointer ${
          error ? 'text-red-500' : 'text-black/60'
        }`}
      />
      <span
        className={`absolute right-0 z-30 mt-1 hidden w-fit whitespace-nowrap rounded-full border bg-white px-4 py-1.5 text-xs font-medium group-hover:block ${
          error
            ? 'border-red-400 text-red-500'
            : 'border-black/40 text-black/60'
        } `}
      >
        {error || message}
      </span>
    </div>
  )
}

export default EditProfileForm

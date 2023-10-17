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
  facts: {
    [key: string]: string
  }
  destinations: {
    [key: string]: string
  }
  links: {
    [key: string]: string
  }
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
    facts: {
      fact1: '',
      fact2: '',
      fact3: '',
    },
    destinations: {
      destination1: '',
      destination2: '',
      destination3: '',
    },
    links: {
      link1: '',
      link2: '',
      link3: '',
    },
  })

  const reformName = (name: string) => {
    const nameArr = name.split(' ')

    const firstLetterToUpperCase =
      nameArr[0].slice(0, 1).toLocaleUpperCase() +
      nameArr[0].slice(1).toLocaleLowerCase()
    const newName =
      firstLetterToUpperCase + nameArr.slice(1).join('').toLocaleLowerCase()
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

  function validateInput(input: string) {
    if (/^[a-zA-Z]+$/.test(input)) {
      return true
    } else {
      return false
    }
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target

    if (/(username|country|city)/.test(name)) {
      return setUserDetails((prevState) => ({
        ...prevState,
        [name]: reformName(value),
      }))
    }
    if (name === 'fullName') {
      return setUserDetails((prevState) => ({
        ...prevState,
        fullName: reformFullName(value),
      }))
    }

    if (/(fact)\d?/g.test(name)) {
      return setUserDetails((prevState) => ({
        ...prevState,
        facts: {
          ...prevState.facts,
          [name]: value,
        },
      }))
    }
    if (/(destination)\d?/g.test(name)) {
      return setUserDetails((prevState) => ({
        ...prevState,
        destinations: {
          ...prevState.destinations,
          [name]: value,
        },
      }))
    }

    if (/(link)\d?/g.test(name)) {
      return setUserDetails((prevState) => ({
        ...prevState,
        links: {
          ...prevState.links,
          [name]: value,
        },
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
            <div className="relative mb-4 md:mb-5">
              <input
                type="text"
                name="username"
                id="username"
                minLength={5}
                maxLength={8}
                onChange={handleChange}
                value={userDetails.username}
                placeholder=" "
                className="peer block w-full appearance-none rounded-full border border-grey bg-transparent px-4 pb-3 pt-4 text-black focus:border-black/60 focus:outline-none focus:ring-0 invalid:[&:not(:focus)]:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:text-red-500"
                pattern="^[a-zA-Z]+$"
                required
              />
              <label
                htmlFor="username"
                className="absolute left-3 top-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-1 font-medium text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-invalid:text-red-500 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:cursor-default peer-focus:border-black/60 peer-focus:px-2 peer-focus:text-gray-600"
              >
                Username*
              </label>
              <div className="group absolute right-4 top-5 hidden peer-invalid:block">
                <MdOutlineInfo className="h-4 w-4 cursor-pointer text-red-500" />
                <span className="absolute right-0 z-30 mt-1 hidden w-fit whitespace-nowrap rounded-full border border-red-400 bg-white px-4 py-3 text-sm font-medium text-red-500 group-hover:block">
                  {userDetails.username
                    ? 'Please enter only letters'
                    : 'This field is required'}
                </span>
              </div>
              <InputValidator
                message={
                  userDetails.fullName
                    ? 'Please enter only letters'
                    : 'This field is required'
                }
              />
            </div>
            <div className="relative mb-4 md:mb-5">
              <input
                type="text"
                name="fullName"
                id="fullName"
                onChange={handleChange}
                value={userDetails.fullName}
                placeholder=" "
                className="peer block w-full appearance-none rounded-full border border-grey bg-transparent px-4 pb-3 pt-4 text-black focus:border-black/60 focus:outline-none focus:ring-0 invalid:[&:not(:focus)]:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:text-red-500"
                minLength={5}
                pattern="^[a-zA-Z\s]+$"
                required
              />
              <label
                htmlFor="fullName"
                className="absolute left-3 top-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-1 font-medium text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-invalid:text-red-500 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:cursor-default peer-focus:border-black/60 peer-focus:px-2 peer-focus:text-gray-600"
              >
                Full name*
              </label>
              <InputValidator
                message={
                  userDetails.fullName
                    ? userDetails.fullName.length < 5
                      ? 'The name should be at least 5 characters'
                      : 'Please enter only letters'
                    : 'This field is required'
                }
              />
            </div>
            <div className="relative mb-4 md:mb-5">
              <input
                type="text"
                name="country"
                id="country"
                onChange={handleChange}
                value={userDetails.country}
                placeholder=" "
                className="peer block w-full appearance-none rounded-full border border-grey bg-transparent px-4 pb-3 pt-4 text-black focus:border-black/60 focus:outline-none focus:ring-0"
              />
              <label
                htmlFor="country"
                className="absolute left-3 top-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-1 font-medium text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:cursor-default peer-focus:border-black/60 peer-focus:px-2 peer-focus:text-gray-600"
              >
                Country
              </label>
            </div>
            <div className="relative mb-4 md:mb-5">
              <input
                type="text"
                name="city"
                id="city"
                onChange={handleChange}
                value={userDetails.city}
                placeholder=" "
                className="peer block w-full appearance-none rounded-full border border-grey bg-transparent px-4 pb-3 pt-4 text-black focus:border-black/60 focus:outline-none focus:ring-0"
              />
              <label
                htmlFor="city"
                className="absolute left-3 top-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-1 font-medium text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:cursor-default peer-focus:border-black/60 peer-focus:px-2 peer-focus:text-gray-600"
              >
                City
              </label>
            </div>
            <div className="relative mb-4 sm:mb-0">
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                onChange={handleChange}
                value={userDetails.phoneNumber}
                placeholder=" "
                className="peer block w-full appearance-none rounded-full border border-grey bg-transparent px-4 pb-3 pt-4 text-black focus:border-black/60 focus:outline-none focus:ring-0 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:text-red-500"
                pattern="^\+\([1-9]{1,3}\)\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}$"
              />
              <label
                htmlFor="phoneNumber"
                className="absolute left-3 top-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-1 font-medium text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-invalid:text-red-500 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:cursor-default peer-focus:border-black/60 peer-focus:px-2 peer-focus:text-gray-600"
              >
                Phone number
              </label>
              <InputValidator message="Phone number format: +(123) xxx xxx xx" />
            </div>
            <div className="relative mb-0">
              <input
                type="email"
                name="email"
                id="email"
                value={userDetails.email}
                onChange={handleChange}
                placeholder=" "
                className="peer block w-full appearance-none rounded-full border border-grey bg-transparent px-4 pb-3 pt-4 text-black focus:border-black/60 focus:outline-none focus:ring-0 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:text-red-500"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-1 font-medium text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-invalid:text-red-500 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:cursor-default peer-focus:border-black/60 peer-focus:px-2 peer-focus:text-gray-600"
              >
                Email address
              </label>
              <InputValidator message="Please enter a valid email" />
            </div>
          </div>
          <Line className="md:col-start-1 md:col-end-4" />
        </div>

        <div className="md:grid md:grid-cols-3">
          <h2 className="mb-4 mt-2 text-lg font-bold uppercase md:my-0 md:mb-5 lg:text-xl ">
            <span className="block text-black/60">02.</span>Additional
            information
          </h2>
          <div className="md:col-start-2 md:col-end-4">
            <div className="relative mb-4 md:mb-5">
              <textarea
                name="bio"
                id="bio"
                value={userDetails.bio}
                onChange={handleChange}
                placeholder=" "
                className="peer block h-36 w-full resize-none appearance-none rounded-3xl border border-grey bg-transparent p-4 text-black focus:border-black/60 focus:outline-none focus:ring-0"
              />
              <label
                htmlFor="bio"
                className="absolute left-4 top-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-1 font-medium text-gray-400 duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:cursor-default peer-focus:border-black/60 peer-focus:px-2 peer-focus:text-gray-600"
              >
                Biography
              </label>
            </div>
            <div className="relative mb-4 md:mb-5">
              <textarea
                name="background"
                id="background"
                value={userDetails.background}
                onChange={handleChange}
                placeholder=" "
                className="peer block h-36 w-full resize-none appearance-none rounded-3xl border border-grey bg-transparent p-4 text-black focus:border-black/60 focus:outline-none focus:ring-0"
              />
              <label
                htmlFor="background"
                className="absolute left-4 top-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-1 font-medium text-gray-400 duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:cursor-default peer-focus:border-black/60 peer-focus:px-2 peer-focus:text-gray-600"
              >
                Professional background
              </label>
            </div>
            <div className="mb-4 md:mb-5">
              <span className="mb-2 block font-medium text-black/60">
                Fun facts
              </span>
              <div className="relative mb-4 md:mb-5">
                <input
                  type="text"
                  name="fact1"
                  value={userDetails.facts.fact1}
                  onChange={handleChange}
                  placeholder="Tell us something funny "
                  className="block w-full rounded-full border border-grey bg-transparent p-4 text-black placeholder:font-medium placeholder:text-gray-400 focus:border-black/60 focus:outline-none focus:ring-0"
                />
              </div>
              <div className="relative mb-4 md:mb-5">
                <input
                  type="text"
                  name="fact2"
                  value={userDetails.facts.fact2}
                  onChange={handleChange}
                  placeholder="Tell us something funny "
                  className="block w-full rounded-full border border-grey bg-transparent p-4 text-black placeholder:font-medium placeholder:text-gray-400 focus:border-black/60 focus:outline-none focus:ring-0"
                />
              </div>
              <div className="relative mb-4 md:mb-5">
                <input
                  type="text"
                  name="fact3"
                  value={userDetails.facts.fact3}
                  onChange={handleChange}
                  placeholder="Tell us something funny "
                  className="block w-full rounded-full border border-grey bg-transparent p-4 text-black placeholder:font-medium placeholder:text-gray-400 focus:border-black/60 focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <div>
              <span className="mb-2 block font-medium text-black/60">
                Favorite destinations
              </span>
              <div className="relative mb-4 md:mb-5">
                <input
                  type="text"
                  name="destination1"
                  value={userDetails.facts.destination1}
                  onChange={handleChange}
                  placeholder="Santorini, Greece"
                  className="block w-full rounded-full border border-grey bg-transparent p-4 text-black placeholder:font-medium placeholder:text-gray-400 focus:border-black/60 focus:outline-none focus:ring-0"
                />
              </div>
              <div className="relative mb-4 md:mb-5">
                <input
                  type="text"
                  name="destination2"
                  value={userDetails.facts.destination2}
                  onChange={handleChange}
                  placeholder="Santorini, Greece"
                  className="block w-full rounded-full border border-grey bg-transparent p-4 text-black placeholder:font-medium placeholder:text-gray-400 focus:border-black/60 focus:outline-none focus:ring-0"
                />
              </div>
              <div className="relative mb-4 md:mb-5">
                <input
                  type="text"
                  name="destination3"
                  value={userDetails.facts.destination3}
                  onChange={handleChange}
                  placeholder="Santorini, Greece"
                  className="block w-full rounded-full border border-grey bg-transparent p-4 text-black placeholder:font-medium placeholder:text-gray-400 focus:border-black/60 focus:outline-none focus:ring-0"
                />
              </div>
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
            <div className="relative mb-4 md:mb-5">
              <input
                type="text"
                name="link1"
                value={userDetails.facts.link1}
                onChange={handleChange}
                placeholder="Add a social link"
                className="peer block w-full appearance-none rounded-full border border-grey bg-transparent p-4 text-black placeholder:font-medium placeholder:text-gray-400 focus:border-black/60 focus:outline-none focus:ring-0 invalid:[&:not(:focus)]:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:text-red-500"
                pattern="https://.+"
              />
              <InputValidator message="Please enter a valid link" />
            </div>
            <div className="relative mb-4 md:mb-5">
              <input
                type="text"
                name="link2"
                value={userDetails.facts.link2}
                onChange={handleChange}
                placeholder="Add a social link"
                className="peer block w-full appearance-none rounded-full border border-grey bg-transparent p-4 text-black placeholder:font-medium placeholder:text-gray-400 focus:border-black/60 focus:outline-none focus:ring-0 invalid:[&:not(:focus)]:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:text-red-500"
                pattern="https://.+"
              />
              <InputValidator message="Please enter a valid link" />
            </div>
            <div className="relative mb-4 md:mb-5">
              <input
                type="text"
                name="link3"
                value={userDetails.facts.link3}
                onChange={handleChange}
                placeholder="Add a social link"
                className="peer block w-full appearance-none rounded-full border border-grey bg-transparent p-4 text-black placeholder:font-medium placeholder:text-gray-400 focus:border-black/60 focus:outline-none focus:ring-0 invalid:[&:not(:focus)]:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:text-red-500"
                pattern="https://.+"
              />
              <InputValidator message="Please enter a valid link" />
            </div>
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

const InputValidator = ({ message }: { message: string }) => {
  return (
    <div className="group absolute right-4 top-5 hidden peer-invalid:block">
      <MdOutlineInfo className="h-4 w-4 cursor-pointer text-red-500" />
      <span className="absolute right-0 z-30 mt-1 hidden w-fit whitespace-nowrap rounded-full border border-red-400 bg-white px-4 py-3 text-sm font-medium text-red-500 group-hover:block">
        {message}
      </span>
    </div>
  )
}

export default EditProfileForm

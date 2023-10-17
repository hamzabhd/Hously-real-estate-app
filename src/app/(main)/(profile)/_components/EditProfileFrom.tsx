'use client'
import { MdOutlineInfo } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import { HiOutlinePlusSm } from 'react-icons/hi'
import UserImage from '@/components/UserImage'
import Line from '@/components/Line'
import { ChangeEvent, ReactNode, useReducer, useState } from 'react'

enum ActionTypes {
  ADD_FACT = 'ADD_FACT',
  REMOVE_FACT = 'REMOVE_FACT',
  ADD_DESTINATION = 'ADD_DESTINATION',
  REMOVE_DESTINATION = 'REMOVE_DESTINATION',
  ADD_LINK = 'ADD_LINK',
  REMOVE_LINK = 'REMOVE_LINK',
}

interface AddAction {
  type: ActionTypes
  payload?: ReactNode
}

interface InitialState {
  fact: ReactNode[]
  destination: ReactNode[]
  link: ReactNode[]
}

const reducer = (state: InitialState, action: AddAction) => {
  const { type, payload } = action

  switch (type) {
    case ActionTypes.ADD_FACT:
      if (state.fact.length === 2) return state
      return { ...state, fact: [...state.fact, payload] }

    case ActionTypes.REMOVE_FACT:
      if (state.fact.length === 0) return state
      return { ...state, fact: state.fact.slice(0, -1) }

    case ActionTypes.ADD_DESTINATION:
      if (state.destination.length === 2) return state
      return { ...state, destination: [...state.destination, payload] }

    case ActionTypes.REMOVE_DESTINATION:
      if (state.destination.length === 0) return state
      return { ...state, destination: state.destination.slice(0, -1) }

    case ActionTypes.ADD_LINK:
      if (state.link.length === 2) return state
      return { ...state, link: [...state.link, payload] }

    case ActionTypes.REMOVE_LINK:
      if (state.link.length === 0) return state
      return { ...state, link: state.link.slice(0, -1) }

    default:
      return state
  }
}

const initialState: InitialState = {
  fact: [],
  destination: [],
  link: [],
}

interface UserDetails {
  username: string
  fullName: string
  country: string
  city: string
  phoneNumber: string
  email: string
  bio: string
  background: string
  facts: string[]
  destinations: string[]
  links: string[]
}

const EditProfileForm = () => {
  const [inputs, dispatch] = useReducer(reducer, initialState)
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
    facts: [],
    destinations: [],
    links: [],
  })

  const reformUserName = (name: string) => {
    const nameArr = name.split(' ')

    const firstLetterToUpperCase =
      nameArr[0].slice(0, 1).toLocaleUpperCase() +
      nameArr[0].slice(1).toLocaleLowerCase()
    const newName =
      firstLetterToUpperCase + nameArr.slice(1).join('').toLocaleLowerCase()
    if (newName.length >= 10) return newName.slice(0, 10)
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

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target

    if (name === 'username') {
      return setUserDetails((prevState) => ({
        ...prevState,
        username: reformUserName(value),
      }))
    }
    if (name === 'fullName') {
      return setUserDetails((prevState) => ({
        ...prevState,
        fullName: reformFullName(value),
      }))
    }

    if (/(fact)\d?/g.test(name)) {
      console.log(name, value)
      return setUserDetails((prevState) => ({
        ...prevState,
        facts: [...prevState.facts, value],
      }))
    }
    if (/(destination)\d?/g.test(name)) {
      return setUserDetails((prevState) => ({
        ...prevState,
        destinations: [...prevState.destinations, value],
      }))
    }
    if (/(link)\d?/g.test(name)) {
      return setUserDetails((prevState) => ({
        ...prevState,
        links: [...prevState.links, value],
      }))
    }

    return setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const factInput = (input: number) => {
    return (
      <div className="relative mb-4 md:mb-5">
        <input
          type="text"
          name={`fact-${input}`}
          id={`fact-${input}`}
          onChange={onChange}
          value={userDetails.facts[input]}
          placeholder="Tell us something funny "
          className="block w-full rounded-full border border-grey bg-transparent p-4 text-black placeholder:font-medium placeholder:text-gray-400 focus:border-black/60 focus:outline-none focus:ring-0"
        />
      </div>
    )
  }

  const destinationInput = (input: number) => {
    return (
      <div className="relative mb-4 md:mb-5">
        <input
          type="text"
          name={`destination-${input}`}
          id={`destination-${input}`}
          onChange={onChange}
          value={userDetails.destinations[input]}
          placeholder="Santorini, Greece"
          className="block w-full rounded-full border border-grey bg-transparent p-4 text-black placeholder:font-medium placeholder:text-gray-400 focus:border-black/60 focus:outline-none focus:ring-0"
        />
      </div>
    )
  }

  const linkInput = (input: number) => {
    return (
      <div className="relative mb-4 md:mb-5">
        <input
          type="text"
          name={`link-${input}`}
          id={`link-${input}`}
          onChange={onChange}
          value={userDetails.links[input]}
          placeholder="Add a social link"
          className="peer block w-full appearance-none rounded-full border border-grey bg-transparent p-4 text-black placeholder:font-medium placeholder:text-gray-400 focus:border-black/60 focus:outline-none focus:ring-0"
        />
      </div>
    )
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
                onChange={onChange}
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
                onChange={onChange}
                value={userDetails.fullName}
                placeholder=" "
                className="peer block w-full appearance-none rounded-full border border-grey bg-transparent px-4 pb-3 pt-4 text-black focus:border-black/60 focus:outline-none focus:ring-0 invalid:[&:not(:focus)]:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:text-red-500"
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
                    ? 'Please enter only letters'
                    : 'This field is required'
                }
              />
            </div>
            <div className="relative mb-4 md:mb-5">
              <input
                type="text"
                name="country"
                id="country"
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
                onChange={onChange}
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
                name="professionalBackground"
                id="professionalBack"
                placeholder=" "
                className="peer block h-36 w-full resize-none appearance-none rounded-3xl border border-grey bg-transparent p-4 text-black focus:border-black/60 focus:outline-none focus:ring-0"
              />
              <label
                htmlFor="professionalBack"
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
                  name="fact"
                  id="fact"
                  onChange={onChange}
                  value={userDetails.facts[0]}
                  placeholder="Tell us something funny "
                  className="block w-full rounded-full border border-grey bg-transparent p-4 text-black placeholder:font-medium placeholder:text-gray-400 focus:border-black/60 focus:outline-none focus:ring-0"
                />
              </div>
              {inputs.fact}
              <div className="flex gap-x-4">
                {inputs.fact.length < 2 && (
                  <button
                    type="button"
                    className="group flex items-center gap-x-2 font-normal"
                    onClick={() =>
                      dispatch({
                        type: ActionTypes.ADD_FACT,
                        payload: factInput(inputs.fact.length + 1),
                      })
                    }
                  >
                    <HiOutlinePlusSm className="h-4 w-4 text-blue-900" />
                    <span className="text-sm font-medium text-blue-900 group-hover:underline">
                      Add fact
                    </span>
                  </button>
                )}
                {inputs.fact.length > 0 && (
                  <button
                    type="button"
                    className="group flex items-center gap-x-2 font-normal"
                    onClick={() =>
                      dispatch({
                        type: ActionTypes.REMOVE_FACT,
                      })
                    }
                  >
                    <IoClose className="h-4 w-4 text-red-500" />
                    <span className="text-sm font-medium text-red-500 group-hover:underline">
                      Remove fact
                    </span>
                  </button>
                )}
              </div>
            </div>
            <div>
              <span className="mb-2 block font-medium text-black/60">
                Favorite destinations
              </span>
              <div className="relative mb-4 md:mb-5">
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Santorini, Greece"
                  className="block w-full rounded-full border border-grey bg-transparent p-4 text-black placeholder:font-medium placeholder:text-gray-400 focus:border-black/60 focus:outline-none focus:ring-0"
                />
              </div>
              {inputs.destination}

              <div className="flex gap-x-4">
                {inputs.destination.length < 2 && (
                  <button
                    type="button"
                    className="group flex items-center gap-x-2 font-normal"
                    onClick={() =>
                      dispatch({
                        type: ActionTypes.ADD_DESTINATION,
                        payload: destinationInput(
                          inputs.destination.length + 1,
                        ),
                      })
                    }
                  >
                    <HiOutlinePlusSm className="h-4 w-4 text-blue-900" />
                    <span className="text-sm font-medium text-blue-900 group-hover:underline">
                      Add destination
                    </span>
                  </button>
                )}
                {inputs.destination.length > 0 && (
                  <button
                    type="button"
                    className="group flex items-center gap-x-2 font-normal"
                    onClick={() =>
                      dispatch({
                        type: ActionTypes.REMOVE_DESTINATION,
                      })
                    }
                  >
                    <IoClose className="h-4 w-4 text-red-500" />
                    <span className="text-sm font-medium text-red-500 group-hover:underline">
                      Remove destination
                    </span>
                  </button>
                )}
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
                name="professionalBackground"
                id="professionalBack"
                placeholder="Add a social link"
                className="peer block w-full appearance-none rounded-full border border-grey bg-transparent p-4 text-black placeholder:font-medium placeholder:text-gray-400 focus:border-black/60 focus:outline-none focus:ring-0"
              />
            </div>
            {inputs.link}
            <div className="flex gap-x-4">
              {inputs.link.length < 2 && (
                <button
                  type="button"
                  className="group flex items-center gap-x-2 font-normal"
                  onClick={() =>
                    dispatch({
                      type: ActionTypes.ADD_LINK,
                      payload: linkInput(inputs.link.length + 1),
                    })
                  }
                >
                  <HiOutlinePlusSm className="h-4 w-4 text-blue-900" />
                  <span className="text-sm font-medium text-blue-900 group-hover:underline">
                    Add link
                  </span>
                </button>
              )}

              {inputs.link.length > 0 && (
                <button
                  type="button"
                  className="group flex items-center gap-x-2 font-normal"
                  onClick={() =>
                    dispatch({
                      type: ActionTypes.REMOVE_LINK,
                    })
                  }
                >
                  <IoClose className="h-4 w-4 text-red-500" />
                  <span className="text-sm font-medium text-red-500 group-hover:underline">
                    Remove link
                  </span>
                </button>
              )}
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

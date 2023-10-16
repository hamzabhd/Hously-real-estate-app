import { AiOutlinePlus } from 'react-icons/ai'
import UserImage from '@/components/UserImage'
import React from 'react'
import Line from '@/components/Line'

const EditProfile = () => {
  return (
    <div className="mx-auto max-w-[1248px] px-4">
      <EditProfileForm />
    </div>
  )
}

const EditProfileForm = () => {
  return (
    <div className="mt-4">
      <form className="">
        <div className="md:grid md:grid-cols-3">
          <h2 className="mb-4 mt-2 text-lg font-bold uppercase md:my-0 md:mb-5 lg:text-xl ">
            Personal information
          </h2>
          <div className="sm:grid sm:grid-cols-2 sm:gap-x-4 md:col-start-2 md:col-end-4">
            <div className="mb-4 flex gap-x-4 sm:col-start-1 sm:col-end-3 md:mb-5">
              <UserImage
                name="Jana Lorene"
                imageUrl="/images/person.jpg"
                width={96}
                height={96}
              />
              <div className="flex w-full flex-col justify-center gap-y-1 rounded-2xl border border-grey p-4 text-sm">
                <span className="block text-black/60">
                  <span className="cursor-pointer font-medium text-blue-900 hover:underline">
                    Click to upload
                  </span>{' '}
                  your image.
                </span>
                <span className="block text-black/60">
                  PNG, JPG (max. 800x400px)
                </span>
              </div>
            </div>
            <div className="relative mb-4 md:mb-5">
              <input
                type="text"
                name="username"
                id="username"
                placeholder=" "
                className=" peer block w-full appearance-none rounded-full border border-grey bg-transparent px-4 pb-3 pt-4 text-black focus:border-black/60 focus:outline-none focus:ring-0"
              />
              <label
                htmlFor="username"
                className="absolute left-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-1 font-medium text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:border-black/60 peer-focus:px-2 peer-focus:text-gray-600"
              >
                Username
              </label>
            </div>
            <div className="relative mb-4 md:mb-5">
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder=" "
                className=" peer block w-full appearance-none rounded-full border border-grey bg-transparent px-4 pb-3 pt-4 text-black focus:border-black/60 focus:outline-none focus:ring-0"
              />
              <label
                htmlFor="fullName"
                className="absolute left-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-1 font-medium text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:border-black/60 peer-focus:px-2 peer-focus:text-gray-600"
              >
                Full name
              </label>
            </div>
            <div className="relative mb-4 md:mb-5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" "
                className=" peer block w-full appearance-none rounded-full border border-grey bg-transparent px-4 pb-3 pt-4 text-black focus:border-black/60 focus:outline-none focus:ring-0"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-1 font-medium text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:border-black/60 peer-focus:px-2 peer-focus:text-gray-600"
              >
                Email address
              </label>
            </div>
            <div className="relative mb-4 md:mb-5">
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder=" "
                className=" peer block w-full appearance-none rounded-full border border-grey bg-transparent px-4 pb-3 pt-4 text-black focus:border-black/60 focus:outline-none focus:ring-0"
              />
              <label
                htmlFor="phoneNumber"
                className="absolute left-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-1 font-medium text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:border-black/60 peer-focus:px-2 peer-focus:text-gray-600"
              >
                Phone number
              </label>
            </div>
            <div className="relative mb-4 sm:mb-0">
              <input
                type="text"
                name="country"
                id="country"
                placeholder=" "
                className="peer block w-full appearance-none rounded-full border border-grey bg-transparent px-4 pb-3 pt-4 text-black focus:border-black/60 focus:outline-none focus:ring-0"
              />
              <label
                htmlFor="country"
                className="absolute left-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-1 font-medium text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:border-black/60 peer-focus:px-2 peer-focus:text-gray-600"
              >
                Country
              </label>
            </div>
            <div className="relative mb-0">
              <input
                type="text"
                name="city"
                id="city"
                placeholder=" "
                className="peer block w-full appearance-none rounded-full border border-grey bg-transparent px-4 pb-3 pt-4 text-black focus:border-black/60 focus:outline-none focus:ring-0"
              />
              <label
                htmlFor="city"
                className="absolute left-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-1 font-medium text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:border-black/60 peer-focus:px-2 peer-focus:text-gray-600"
              >
                City
              </label>
            </div>
          </div>
          <Line className="md:col-start-1 md:col-end-4" />
        </div>

        <div className="md:grid md:grid-cols-3">
          <h2 className="mb-4 mt-2 text-lg font-bold uppercase md:my-0 md:mb-5 lg:text-xl ">
            Additional information
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
                className="absolute left-4 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-1 font-medium text-gray-400 duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:border-black/60 peer-focus:px-2 peer-focus:text-gray-600"
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
                className="absolute left-4 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-1 font-medium text-gray-400 duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:border-black/60 peer-focus:px-2 peer-focus:text-gray-600"
              >
                Professional background
              </label>
            </div>
            <div>
              <span className="mb-2 block font-medium text-black/60">
                Fun facts
              </span>
              <div className="relative mb-4 md:mb-5">
                <input
                  type="text"
                  name="professionalBackground"
                  id="professionalBack"
                  placeholder="Something fun no one knows"
                  className="block w-full rounded-full border border-grey bg-transparent p-4 text-black placeholder:font-medium placeholder:text-gray-400 focus:border-black/60 focus:outline-none focus:ring-0"
                />
              </div>
              <button className="group flex items-center gap-x-2 font-normal">
                <AiOutlinePlus className="text-blue-900" />
                <span className="text-sm font-medium text-blue-900 group-hover:underline">
                  Add a fact
                </span>
              </button>
            </div>
          </div>

          <Line className="md:col-start-1 md:col-end-4" />
        </div>

        <div className="md:grid md:grid-cols-3">
          <h2 className="mb-4 mt-2 text-xl  font-bold uppercase md:my-0 md:mb-5 ">
            Additional contact info
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
            <button className="group flex items-center gap-x-2 font-normal">
              <AiOutlinePlus className="text-blue-900" />
              <span className="text-sm font-medium text-blue-900 group-hover:underline">
                Add a link
              </span>
            </button>
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

export default EditProfile

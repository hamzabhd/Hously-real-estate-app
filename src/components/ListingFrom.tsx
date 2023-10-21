'use client'
import { ChangeEvent } from 'react'
import CustomInput from './CustomInput'
import { HiOutlinePlus } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import Image from 'next/image'

const ListingFrom = () => {
  return (
    <div className="my-4 lg:mt-8">
      <div>
        <h2 className="mb-4 mt-2 text-lg font-bold uppercase md:my-0 md:mb-5 lg:text-xl">
          <span className="block text-black/60">01.</span>Main information
        </h2>

        {/* Property type */}
        <div>
          <span className="mb-4 block font-medium">Property type</span>
          <fieldset>
            <div className="mb-4 flex items-center px-2">
              <input
                type="radio"
                className="peer"
                name="property-type"
                value="apartment"
                id="apartment"
              />
              <label
                htmlFor="apartment"
                className="ml-4 inline-block cursor-pointer text-black/60 transition-colors hover:text-black peer-checked:font-medium peer-checked:text-black"
              >
                Apartment
              </label>
            </div>

            <div className="mb-4 flex items-center px-2">
              <input
                type="radio"
                className="peer"
                name="property-type"
                value="house"
                id="house"
              />
              <label
                htmlFor="house"
                className="ml-4 inline-block cursor-pointer text-black/60 transition-colors hover:text-black peer-checked:font-medium peer-checked:text-black"
              >
                House
              </label>
            </div>

            <div className="mb-4 flex items-center px-2">
              <input
                type="radio"
                className="peer"
                name="property-type"
                value="vila"
                id="vila"
              />
              <label
                htmlFor="vila"
                className="ml-4 inline-block cursor-pointer text-black/60 transition-colors hover:text-black peer-checked:font-medium peer-checked:text-black"
              >
                Vila
              </label>
            </div>
          </fieldset>
        </div>

        {/* Listing Type */}
        <div>
          <span className="mb-4 mt-2 block font-medium">Listing type</span>
          <fieldset>
            <div className="mb-4 flex items-center px-2">
              <input
                type="radio"
                name="listing-type"
                value="rent"
                id="rent"
                className="peer"
              />
              <label
                htmlFor="rent"
                className="ml-4 inline-block cursor-pointer text-black/60 transition-colors hover:text-black peer-checked:font-medium peer-checked:font-medium peer-checked:text-black peer-checked:text-black"
              >
                Rent
              </label>
            </div>

            <div className="mb-4 flex items-center px-2">
              <input
                type="radio"
                className="peer"
                name="listing-type"
                value="sell"
                id="sell"
              />
              <label
                htmlFor="sell"
                className="ml-4 inline-block cursor-pointer text-black/60 transition-colors hover:text-black peer-checked:font-medium peer-checked:text-black"
              >
                Sell
              </label>
            </div>
          </fieldset>
        </div>

        {/* #General information */}
        <div>
          <span className="mb-4 mt-2 block font-medium">
            General information
          </span>

          <CustomInput
            name="propertyType"
            value={''}
            handleChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => undefined}
            type="text"
            label="Title"
            max={25}
            className="relative mb-4 md:mb-5"
          />

          <CustomInput
            name="description"
            value={''}
            handleChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => undefined}
            label="Description"
            className="relative mb-4 md:mb-5"
          />
        </div>

        {/* Images */}

        <div>
          <span className="mb-4 mt-6 block font-medium">Images</span>
          <div className=" grid grid-cols-2 gap-4">
            <label className="group flex h-48 w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 border-grey transition-colors hover:border-black/60">
              <span className="rounded-full border-2 border-grey p-4 transition-colors  group-hover:border-black/40">
                <HiOutlinePlus className="h-12 w-12 text-black/40 transition-colors group-hover:text-black/60 " />
              </span>
              <span className="block text-xl font-medium text-black/60">
                Add new image
              </span>
              <input type="file" className="hidden" />
            </label>

            <div className="group relative h-48 cursor-pointer overflow-hidden rounded-3xl">
              <Image
                src="/images/person.jpg"
                alt="some image"
                fill
                className="object-cover"
              />
              <button
                type="button"
                className="group/close absolute right-2 top-2 hidden rounded-full border border-white bg-white/60 p-1 transition-colors hover:bg-white group-hover:block"
              >
                <MdOutlineClose className="h-4 w-4 text-black/40 transition-colors group-hover/close:text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <h2 className="mb-4 mt-2 text-lg font-bold uppercase md:my-0 md:mb-5 lg:text-xl ">
          <span className="block text-black/60">02.</span>Location details
        </h2>
      </div>
      <div>
        <h2 className="mb-4 mt-2 text-lg font-bold uppercase md:my-0 md:mb-5 lg:text-xl ">
          <span className="block text-black/60">03.</span>Property details
        </h2>
      </div>

      <div>
        <h2 className="mb-4 mt-2 text-lg font-bold uppercase md:my-0 md:mb-5 lg:text-xl ">
          <span className="block text-black/60">04.</span>Property rules
        </h2>
      </div>

      <div>
        <h2 className="mb-4 mt-2 text-lg font-bold uppercase md:my-0 md:mb-5 lg:text-xl ">
          <span className="block text-black/60">05.</span>Pricing
        </h2>
      </div> */}
    </div>
  )
}

export default ListingFrom

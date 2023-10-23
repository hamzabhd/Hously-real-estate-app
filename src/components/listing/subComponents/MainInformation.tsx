'use client'

import { ChangeEvent } from 'react'
import Image from 'next/image'
import Container from '@/components/Container'
import CustomRadioButton from '@/components/CustomRadioButton'
import CustomInput from '@/components/CustomInput'
import {
  MdOutlineVilla,
  MdOutlineCabin,
  MdOutlineApartment,
  MdOutlineSell,
  MdAccessTime,
  MdOutlineClose,
} from 'react-icons/md'
import { LuImagePlus } from 'react-icons/lu'
import { HiOutlineHome } from 'react-icons/hi'

const MainInformation = () => {
  return (
    <>
      {/* Property type */}
      <Container title="Property type" type="grid">
        <CustomRadioButton
          value="apartment"
          name="property-type"
          id="apartment"
        >
          <MdOutlineApartment className="h-6 w-6" />
          <span className="font-medium">Apartment</span>
        </CustomRadioButton>
        <CustomRadioButton value="house" name="property-type" id="house">
          <HiOutlineHome className="h-6 w-6" />
          <span className="font-medium">House</span>
        </CustomRadioButton>
        <CustomRadioButton value="villa" name="property-type" id="villa">
          <MdOutlineVilla className="h-6 w-6" />
          <span className="font-medium">Villa</span>
        </CustomRadioButton>
        <CustomRadioButton value="cabin" name="property-type" id="cabin">
          <MdOutlineCabin className="h-6 w-6" />
          <span className="font-medium">Cabin</span>
        </CustomRadioButton>
      </Container>
      {/* Listing Type */}
      <Container title="Listing type" type="grid">
        <CustomRadioButton value="sell" name="listing-type" id="sell">
          <MdOutlineSell className="h-6 w-6" />
          <span className="font-medium">Sell</span>
        </CustomRadioButton>

        <CustomRadioButton value="rent" name="listing-type" id="rent">
          <MdAccessTime className="h-6 w-6" />
          <span className="font-medium">Rent</span>
        </CustomRadioButton>
      </Container>
      {/* #General information */}
      <Container title="General information" type="normal">
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
      </Container>
      {/* Images */}
      <Container type="grid" title="Images">
        <label className="group flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 border-dashed border-grey p-4 transition-colors hover:border-black/60">
          <LuImagePlus className="h-8 w-8" />
          <span className="text-center font-medium text-black/60 transition group-hover:text-black">
            Click here to upload a new image
          </span>
          <input type="file" className="hidden" />
        </label>

        <div className="group relative aspect-square h-full w-full cursor-pointer overflow-hidden rounded-3xl">
          <Image
            src="/images/house.jpg"
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
      </Container>
    </>
  )
}

export default MainInformation

'use client'
import { ChangeEvent, ReactNode, useState } from 'react'
import CustomInput from './CustomInput'
import { MdOutlineClose } from 'react-icons/md'
import { HiOutlineHome } from 'react-icons/hi'
import {
  MdOutlineVilla,
  MdOutlineCabin,
  MdOutlineApartment,
  MdOutlineSell,
  MdAccessTime,
  MdSingleBed,
} from 'react-icons/md'
import { BiMinus } from 'react-icons/bi'
import { LuImagePlus } from 'react-icons/lu'
import Image from 'next/image'

const ListingFrom = () => {
  return (
    <div className="my-4 lg:mt-8">
      <MainContainer order="01" title="main information">
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
      </MainContainer>

      <MainContainer order="02" title="location details">
        <Container title="Property address" type="normal">
          <div className="sm:grid sm:grid-cols-2 sm:gap-x-4">
            <CustomInput
              name="address"
              value={''}
              handleChange={(
                e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
              ) => undefined}
              type="text"
              label="Address"
              className="relative mb-4 sm:col-span-2 md:mb-5"
            />
            <CustomInput
              name="country"
              value={''}
              handleChange={(
                e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
              ) => undefined}
              type="text"
              label="Country"
              className="relative mb-4 md:mb-5"
            />

            <CustomInput
              name="city"
              value={''}
              handleChange={(
                e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
              ) => undefined}
              type="text"
              label="City"
              className="relative mb-4 md:mb-5"
            />

            <CustomInput
              name="state"
              value={''}
              handleChange={(
                e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
              ) => undefined}
              type="text"
              label="State"
              className="relative mb-4 md:mb-5"
            />

            <CustomInput
              name="postalCode"
              value={''}
              handleChange={(
                e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
              ) => undefined}
              type="text"
              label="ZIP/Postal code"
              className="relative mb-4 md:mb-5"
            />
          </div>
        </Container>
      </MainContainer>

      <BedroomsSelection />

      {/* 
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

const MainContainer = ({
  children,
  order,
  title,
}: {
  children: ReactNode
  order: string
  title: string
}) => {
  return (
    <div className="lg:grid lg:grid-cols-3">
      <h2 className="mb-4 mt-2 text-lg font-bold uppercase lg:my-0 lg:mb-5 lg:text-xl">
        <span className="block text-black/60">{order}.</span>
        {title}
      </h2>
      <div className="lg:col-start-2 lg:col-end-4">{children}</div>
    </div>
  )
}

const Container = ({
  children,
  type,
  title,
}: {
  children: ReactNode
  type: 'grid' | 'normal'
  title?: string
}) => {
  const isGrid = type === 'grid'
  return (
    <div className="mb-6">
      {title && <span className="mb-4 block font-medium">{title}</span>}
      <div
        className={`${
          isGrid ? 'grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4' : ''
        }`}
      >
        {children}
      </div>
    </div>
  )
}

const CustomRadioButton = ({
  name,
  value,
  id,
  children,
  selected,
  handleChange,
}: {
  name: string
  value: string
  id: string
  children: ReactNode
  selected?: boolean
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div className="relative">
      <input
        type="radio"
        className="peer absolute right-4 top-4"
        name={name}
        value={value}
        onChange={handleChange}
        id={id}
        checked={selected}
      />
      <label
        htmlFor={id}
        className="transitions-colors group flex h-24 w-full cursor-pointer flex-col justify-center  gap-y-2 rounded-2xl border-2 border-grey p-4 peer-checked:border-black/60"
      >
        {children}
      </label>
    </div>
  )
}

const BedroomsSelection = () => {
  const [bedrooms, setBedrooms] = useState([{ bedroom: 1, bedroomType: '' }])
  const [selectedBedroom, setSelectedBedroom] = useState(1)

  const addBedroom = () => {
    if (!bedrooms[bedrooms.length - 1].bedroomType) return
    const bedroomToAdd = bedrooms.length + 1
    setBedrooms((prevState) => [
      ...prevState,
      { bedroom: bedroomToAdd, bedroomType: '' },
    ])
    setSelectedBedroom(bedroomToAdd)
  }

  const removeBedroom = () => {
    if (selectedBedroom <= 1) return
    setSelectedBedroom(selectedBedroom - 1)
    setBedrooms((prevState) => prevState.slice(0, -1))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const obj = { bedroom: selectedBedroom, bedroomType: value }

    setBedrooms((prevState) =>
      [
        ...prevState.filter((item) => item.bedroom !== selectedBedroom),
        obj,
      ].sort((a, b) => a.bedroom - b.bedroom),
    )
  }

  return (
    <MainContainer order="03" title="property details">
      <Container title="Bedrooms" type="grid">
        <div
          onClick={addBedroom}
          className="group flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 border-dashed border-grey p-4 transition-colors hover:border-black/60"
        >
          <MdSingleBed className="h-12 w-12" />
          <span className="text-center font-medium text-black/60 transition group-hover:text-black">
            Click to add a bedroom
          </span>
        </div>
        {bedrooms.map((bedroom, i) => (
          <div className="group relative" key={i}>
            <span
              className={`group/remove absolute right-4 top-4 z-10 hidden cursor-pointer rounded-full border border-grey p-1 text-black/60 transition-colors hover:border-black/60 ${
                selectedBedroom <= 1 ? 'hidden' : 'group-last:block'
              }`}
              onClick={removeBedroom}
            >
              <BiMinus className="h-4 w-4 text-grey transition-colors group-hover/remove:text-black" />
            </span>
            <div
              className={`${
                selectedBedroom === bedroom.bedroom
                  ? 'border-black/60'
                  : 'border-grey'
              } group relative flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 p-4 transition-colors hover:border-black/60`}
              onClick={() => setSelectedBedroom(bedroom.bedroom)}
            >
              <MdSingleBed className="h-12 w-12" />
              <span
                className={`text-center font-medium transition group-hover:text-black ${
                  selectedBedroom === bedroom.bedroom
                    ? 'text-black'
                    : 'text-black/60'
                }`}
              >
                Bedroom {bedroom.bedroom}
                <span className=" block text-sm text-black/40">
                  {bedroom.bedroomType}
                </span>
              </span>
            </div>
          </div>
        ))}
      </Container>
      <Container type="normal">
        {bedrooms
          .filter((b) => b.bedroom === selectedBedroom)
          .map((item) => (
            <div
              key={item.bedroom}
              className="flex flex-col gap-4 sm:grid sm:grid-cols-2 "
            >
              <CustomRadioButton
                value="Master bedroom"
                name={`bedroom${selectedBedroom}`}
                id="master"
                handleChange={handleChange}
                selected={
                  bedrooms[selectedBedroom - 1].bedroomType === 'Master bedroom'
                }
              >
                <span className="block font-medium">Master Bedroom</span>
                <span className="block text-sm text-black/60">
                  The largest and most luxurious bedroom in a home, often with
                  an attached bathroom.
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="Guest bedroom"
                name={`bedroom${selectedBedroom}`}
                id="guest"
                handleChange={handleChange}
                selected={
                  bedrooms[selectedBedroom - 1].bedroomType === 'Guest bedroom'
                }
              >
                <span className="block font-medium">Guest Bedroom</span>
                <span className="block text-sm text-black/60">
                  A bedroom designated for visitors and guests staying overnight
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="Children's bedroom"
                name={`bedroom${selectedBedroom}`}
                id="children"
                handleChange={handleChange}
                selected={
                  bedrooms[selectedBedroom - 1].bedroomType ===
                  "Children's bedroom"
                }
              >
                <span className="block font-medium">Children's Bedroom</span>
                <span className="block text-sm text-black/60">
                  A bedroom designed for children, often with playful decor and
                  furnishings
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="Bedroom combo"
                name={`bedroom${selectedBedroom}`}
                id="combo"
                handleChange={handleChange}
                selected={
                  bedrooms[selectedBedroom - 1].bedroomType === 'Bedroom combo'
                }
              >
                <span className="block font-medium">Bedroom Combo</span>
                <span className="block text-sm text-black/60">
                  A multi-purpose room that serves as both a bedroom and a
                  functional workspace.
                </span>
              </CustomRadioButton>
            </div>
          ))}
      </Container>
    </MainContainer>
  )
}

export default ListingFrom

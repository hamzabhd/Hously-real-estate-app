'use client'
import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'
import CustomInput from './CustomInput'
import { HiOutlineHome } from 'react-icons/hi'
import {
  MdOutlineVilla,
  MdOutlineCabin,
  MdOutlineApartment,
  MdOutlineSell,
  MdAccessTime,
  MdSingleBed,
  MdOutlineClose,
  MdOutlineAttachMoney,
} from 'react-icons/md'
import { BiMinus, BiBath } from 'react-icons/bi'
import { LuImagePlus, LuBed } from 'react-icons/lu'
import Image from 'next/image'

const ListingFrom = () => {
  const [bedrooms, setBedrooms] = useState([{ bedroom: 1, bedroomType: '' }])
  const [bathrooms, setBathrooms] = useState([
    { bathroom: 1, bathroomType: '' },
  ])
  const [beds, setBeds] = useState([{ bed: 1, bedType: '' }])

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
          <div className="sm:grid sm:grid-cols-2 sm:gap-4 lg:gap-5">
            <CustomInput
              name="address"
              value={''}
              handleChange={(
                e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
              ) => undefined}
              type="text"
              label="Address"
              className="relative mb-4 sm:col-span-2 sm:my-0"
            />
            <CustomInput
              name="country"
              value={''}
              handleChange={(
                e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
              ) => undefined}
              type="text"
              label="Country"
              className="relative mb-4 sm:my-0"
            />

            <CustomInput
              name="city"
              value={''}
              handleChange={(
                e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
              ) => undefined}
              type="text"
              label="City"
              className="relative mb-4 sm:my-0"
            />

            <CustomInput
              name="state"
              value={''}
              handleChange={(
                e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
              ) => undefined}
              type="text"
              label="State"
              className="relative mb-4 sm:my-0"
            />

            <CustomInput
              name="postalCode"
              value={''}
              handleChange={(
                e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
              ) => undefined}
              type="text"
              label="ZIP/Postal code"
              className="relative mb-4 sm:my-0"
            />
          </div>
        </Container>
      </MainContainer>

      <MainContainer order="03" title="property details">
        <BedroomsSelection bedrooms={bedrooms} setBedrooms={setBedrooms} />
        <BathroomsSelection bathrooms={bathrooms} setBathrooms={setBathrooms} />
        <BedsSelection beds={beds} setBeds={setBeds} />
      </MainContainer>

      <MainContainer order="05" title="property pricing">
        <Container title="pricing" type="normal">
          <div className="sm:grid sm:grid-cols-2 sm:gap-4 lg:gap-6">
            <CustomInput
              className="relative mb-4 sm:col-span-2 sm:my-0"
              label="Price per night"
              value=""
              name="price"
              type="text"
              handleChange={(e) => undefined}
            >
              <MdOutlineAttachMoney className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2" />
            </CustomInput>

            <CustomInput
              className="relative mb-4 sm:my-0"
              label="Cleaning fee"
              value=""
              name="cleaningFee"
              type="text"
              handleChange={(e) => undefined}
            >
              <MdOutlineAttachMoney className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2" />
            </CustomInput>

            <CustomInput
              className="relative mb-4 sm:my-0"
              label="Security fee"
              value=""
              name="securityFee"
              type="text"
              handleChange={(e) => undefined}
            >
              <MdOutlineAttachMoney className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2" />
            </CustomInput>
          </div>
        </Container>
      </MainContainer>

      {/* 
      <div>
        <h2 className="mb-4 mt-2 text-lg font-bold uppercase md:my-0 md:mb-5 lg:text-xl ">
          <span className="block text-black/60">04.</span>Property rules
        </h2>
      </div>
      */}
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
    <div className="mb-6 lg:first:pt-7">
      {title && <span className="mb-4 block font-medium lg:mb-5">{title}</span>}
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

interface BedroomsObj {
  bedroom: number
  bedroomType: string
}
type BedroomsSelectionProps = {
  bedrooms: BedroomsObj[]
  setBedrooms: Dispatch<SetStateAction<BedroomsObj[]>>
}

const BedroomsSelection = ({
  bedrooms,
  setBedrooms,
}: BedroomsSelectionProps) => {
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

    const modifiedObj = bedrooms.map((item) => {
      if (item.bedroom !== selectedBedroom) {
        return item
      } else {
        return {
          ...item,
          bedroomType: value,
        }
      }
    })
    setBedrooms(modifiedObj)
  }

  return (
    <>
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
        {bedrooms.map((b, i) => (
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
                selectedBedroom === b.bedroom
                  ? 'border-black/60'
                  : 'border-grey'
              } group relative flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 p-4 transition-colors hover:border-black/60`}
              onClick={() => setSelectedBedroom(b.bedroom)}
            >
              <MdSingleBed className="h-12 w-12" />
              <span
                className={`text-center font-medium transition group-hover:text-black ${
                  selectedBedroom === b.bedroom ? 'text-black' : 'text-black/60'
                }`}
              >
                Bedroom {b.bedroom}
                <span className=" block text-sm text-black/40">
                  {b.bedroomType}
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
                value="Master Bedroom"
                name={`bedroom${selectedBedroom}`}
                id="master"
                handleChange={handleChange}
                selected={
                  bedrooms[selectedBedroom - 1].bedroomType === 'Master Bedroom'
                }
              >
                <span className="block font-medium">Master Bedroom</span>
                <span className="block text-sm text-black/60">
                  The largest and most luxurious bedroom in a home, often with
                  an attached bathroom.
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="Guest Bedroom"
                name={`bedroom${selectedBedroom}`}
                id="guest"
                handleChange={handleChange}
                selected={
                  bedrooms[selectedBedroom - 1].bedroomType === 'Guest Bedroom'
                }
              >
                <span className="block font-medium">Guest Bedroom</span>
                <span className="block text-sm text-black/60">
                  A bedroom designated for visitors and guests staying overnight
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="Children's Bedroom"
                name={`bedroom${selectedBedroom}`}
                id="children"
                handleChange={handleChange}
                selected={
                  bedrooms[selectedBedroom - 1].bedroomType ===
                  "Children's Bedroom"
                }
              >
                <span className="block font-medium">Children's Bedroom</span>
                <span className="block text-sm text-black/60">
                  A bedroom designed for children, often with playful decor and
                  furnishings
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="Bedroom Combo"
                name={`bedroom${selectedBedroom}`}
                id="combo"
                handleChange={handleChange}
                selected={
                  bedrooms[selectedBedroom - 1].bedroomType === 'Bedroom Combo'
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
    </>
  )
}

interface BathroomsObj {
  bathroom: number
  bathroomType: string
}
type BathroomsSelectionProps = {
  bathrooms: BathroomsObj[]
  setBathrooms: Dispatch<SetStateAction<BathroomsObj[]>>
}

const BathroomsSelection = ({
  bathrooms,
  setBathrooms,
}: BathroomsSelectionProps) => {
  const [selectedBathroom, setSelectedBathroom] = useState(1)

  const addBathroom = () => {
    if (!bathrooms[bathrooms.length - 1].bathroomType) return
    const bathroomToAdd = bathrooms.length + 1
    setBathrooms((prevState) => [
      ...prevState,
      { bathroom: bathroomToAdd, bathroomType: '' },
    ])
    setSelectedBathroom(bathroomToAdd)
  }

  const removeBathroom = () => {
    if (selectedBathroom <= 1) return
    setSelectedBathroom(selectedBathroom - 1)
    setBathrooms((prevState) => prevState.slice(0, -1))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const modifiedObj = bathrooms.map((item) => {
      if (item.bathroom !== selectedBathroom) {
        return item
      } else {
        return {
          ...item,
          bathroomType: value,
        }
      }
    })

    setBathrooms(modifiedObj)
  }

  return (
    <>
      <Container title="Bathrooms" type="grid">
        <div
          onClick={addBathroom}
          className="group flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 border-dashed border-grey p-4 transition-colors hover:border-black/60"
        >
          <BiBath className="h-12 w-12" />
          <span className="text-center font-medium text-black/60 transition group-hover:text-black">
            Click to add a bathroom
          </span>
        </div>
        {bathrooms.map((b, i) => (
          <div className="group relative" key={i}>
            <span
              className={`group/remove absolute right-4 top-4 z-10 hidden cursor-pointer rounded-full border border-grey p-1 text-black/60 transition-colors hover:border-black/60 ${
                selectedBathroom <= 1 ? 'hidden' : 'group-last:block'
              }`}
              onClick={removeBathroom}
            >
              <BiMinus className="h-4 w-4 text-grey transition-colors group-hover/remove:text-black" />
            </span>
            <div
              className={`${
                selectedBathroom === b.bathroom
                  ? 'border-black/60'
                  : 'border-grey'
              } group relative flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 p-4 transition-colors hover:border-black/60`}
              onClick={() => setSelectedBathroom(b.bathroom)}
            >
              <BiBath className="h-12 w-12" />
              <span
                className={`text-center font-medium transition group-hover:text-black ${
                  selectedBathroom === b.bathroom
                    ? 'text-black'
                    : 'text-black/60'
                }`}
              >
                Bathroom {b.bathroom}
                <span className=" block text-sm text-black/40">
                  {b.bathroomType}
                </span>
              </span>
            </div>
          </div>
        ))}
      </Container>
      <Container type="normal">
        {bathrooms
          .filter((b) => b.bathroom === selectedBathroom)
          .map((item) => (
            <div
              key={item.bathroom}
              className="flex flex-col gap-4 sm:grid sm:grid-cols-2 "
            >
              <CustomRadioButton
                value="Full Bathroom"
                name={`bathroom${selectedBathroom}`}
                id="full"
                handleChange={handleChange}
                selected={
                  bathrooms[selectedBathroom - 1].bathroomType ===
                  'Full Bathroom'
                }
              >
                <span className="block font-medium">Full Bathroom</span>
                <span className="block text-sm text-black/60">
                  A complete bathroom with a toilet, sink, bathtub, and/or
                  shower
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="Half Bathroom"
                name={`bathroom${selectedBathroom}`}
                id="half"
                handleChange={handleChange}
                selected={
                  bathrooms[selectedBathroom - 1].bathroomType ===
                  'Half Bathroom'
                }
              >
                <span className="block font-medium">Half Bathroom</span>
                <span className="block text-sm text-black/60">
                  A small bathroom with a sink and toilet, but no bathing
                  facilities
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="Master Bathroom"
                name={`bathroom${selectedBathroom}`}
                id="master-bathroom"
                handleChange={handleChange}
                selected={
                  bathrooms[selectedBathroom - 1].bathroomType ===
                  'Master Bathroom'
                }
              >
                <span className="block font-medium">Master Bathroom</span>
                <span className="block text-sm text-black/60">
                  The primary bathroom connected to the master bedroom, often
                  featuring luxury amenities
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="En-suite Bathroom"
                name={`bathroom${selectedBathroom}`}
                id="en-suite"
                handleChange={handleChange}
                selected={
                  bathrooms[selectedBathroom - 1].bathroomType ===
                  'En-suite Bathroom'
                }
              >
                <span className="block font-medium">En-suite Bathroom</span>
                <span className="block text-sm text-black/60">
                  A private bathroom directly connected to and accessible from a
                  bedroom
                </span>
              </CustomRadioButton>
            </div>
          ))}
      </Container>
    </>
  )
}

interface BedsObj {
  bed: number
  bedType: string
}
type BedsSelectionProps = {
  beds: BedsObj[]
  setBeds: Dispatch<SetStateAction<BedsObj[]>>
}

const BedsSelection = ({ beds, setBeds }: BedsSelectionProps) => {
  const [selectedBed, setSelectedBed] = useState(1)

  const addBed = () => {
    if (!beds[beds.length - 1].bedType) return
    const bedToAdd = beds.length + 1
    setBeds((prevState) => [...prevState, { bed: bedToAdd, bedType: '' }])
    setSelectedBed(bedToAdd)
  }

  const removeBed = () => {
    if (selectedBed <= 1) return
    setSelectedBed(selectedBed - 1)
    setBeds((prevState) => prevState.slice(0, -1))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const modifiedObj = beds.map((item) => {
      if (item.bed !== selectedBed) {
        return item
      } else {
        return {
          ...item,
          bedType: value,
        }
      }
    })

    setBeds(modifiedObj)
  }

  return (
    <>
      <Container title="Beds" type="grid">
        <div
          onClick={addBed}
          className="group flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 border-dashed border-grey p-4 transition-colors hover:border-black/60"
        >
          <LuBed className="h-12 w-12" />
          <span className="text-center font-medium text-black/60 transition group-hover:text-black">
            Click to add a bed
          </span>
        </div>
        {beds.map((b, i) => (
          <div className="group relative" key={i}>
            <span
              className={`group/remove absolute right-4 top-4 z-10 hidden cursor-pointer rounded-full border border-grey p-1 text-black/60 transition-colors hover:border-black/60 ${
                selectedBed <= 1 ? 'hidden' : 'group-last:block'
              }`}
              onClick={removeBed}
            >
              <BiMinus className="h-4 w-4 text-grey transition-colors group-hover/remove:text-black" />
            </span>
            <div
              className={`${
                selectedBed === b.bed ? 'border-black/60' : 'border-grey'
              } group relative flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 p-4 transition-colors hover:border-black/60`}
              onClick={() => setSelectedBed(b.bed)}
            >
              <LuBed className="h-12 w-12" />
              <span
                className={`text-center font-medium transition group-hover:text-black ${
                  selectedBed === b.bed ? 'text-black' : 'text-black/60'
                }`}
              >
                Bed {b.bed}
                <span className=" block text-sm text-black/40">
                  {b.bedType}
                </span>
              </span>
            </div>
          </div>
        ))}
      </Container>
      <Container type="normal">
        {beds
          .filter((b) => b.bed === selectedBed)
          .map((item) => (
            <div
              key={item.bed}
              className="flex flex-col gap-4 sm:grid sm:grid-cols-2 "
            >
              <CustomRadioButton
                value="Queen Bed"
                name={`bed${selectedBed}`}
                id="queen"
                handleChange={handleChange}
                selected={beds[selectedBed - 1].bedType === 'Queen Bed'}
              >
                <span className="block font-medium">Queen Bed</span>
                <span className="block text-sm text-black/60">
                  Comfortable for couples, provides ample space without
                  overwhelming the room
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="King Bed"
                name={`bed${selectedBed}`}
                id="king"
                handleChange={handleChange}
                selected={beds[selectedBed - 1].bedType === 'King Bed'}
              >
                <span className="block font-medium">King Bed</span>
                <span className="block text-sm text-black/60">
                  Offers maximum sleeping area, perfect for couples who value
                  extra space
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="Twin Bed"
                name={`twin${selectedBed}`}
                id="twin"
                handleChange={handleChange}
                selected={beds[selectedBed - 1].bedType === 'Twin Bed'}
              >
                <span className="block font-medium">Twin Bed</span>
                <span className="block text-sm text-black/60">
                  Compact and commonly used in children's rooms or smaller
                  spaces
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="Double Bed"
                name={`bed${selectedBed}`}
                id="double"
                handleChange={handleChange}
                selected={beds[selectedBed - 1].bedType === 'Double Bed'}
              >
                <span className="block font-medium">Double Bed</span>
                <span className="block text-sm text-black/60">
                  Offers more space than a twin, suitable for single sleepers or
                  cozy for couples
                </span>
              </CustomRadioButton>
            </div>
          ))}
      </Container>
    </>
  )
}

export default ListingFrom

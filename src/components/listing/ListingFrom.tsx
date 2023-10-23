'use client'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { isAdded } from 'utils/isAdded'
import Line from '../Line'

import MainInformation from './subComponents/MainInformation'
import Location from './subComponents/Location'
import BedroomsSelection from './subComponents/BedroomsSelections'
import BathroomsSelection from './subComponents/BathroomsSelection'
import BedsSelection from './subComponents/BedsSelections'
import Container from '../Container'
import MainContainer from '../MainContainer'
import Rules from './subComponents/Rules'
import Pricing from './subComponents/Pricing'
import SelectionList from './subComponents/SelectionList'

const RULES = [
  'No Smoking',
  'No Pets',
  'Quiet Hours',
  'Guest Limit',
  'No Parties',
  'No Unregistered Guests',
  'No Shoes Indoors',
  'Respect Neighbors',
  'Proper Disposal of Trash',
  'Lock Doors and Windows',
  'Follow Local Laws and Regulations',
  'No Subletting',
  'Use of Amenities',
  'No Illegal Activities',
  'Keep Common Areas Tidy',
  'Notify Owner of Damage',
  'No Overnight Visitors',
  'Follow Check-Out Procedures',
  'Stick to Check-In/Out Times',
  'Use of Fireplace or Grill',
]

const FEATURES = [
  'Fully Furnished',
  'Pet Friendly',
  'Parking Available',
  'Swimming Pool',
  'Garden or Outdoor Space',
  'Balcony or Terrace',
  'Fireplace',
  'Air Conditioning',
  'Heating System',
  'Laundry Facilities',
  'Security Features (e.g., Alarm System)',
  'Accessibility Features (e.g., Elevator, Wheelchair Access)',
  'Built-in Appliances',
  'Storage Space or Walk-in Closets',
  'High-Speed Internet Availability',
  'Utilities Included (e.g., Water, Electricity)',
  'Nearby Amenities (e.g., Schools, Parks, Shopping Centers)',
  'Public Transportation Access',
  'Views (e.g., City, Water, Mountain)',
  'Natural Light Availability',
]

interface DetailsState {
  propertyType: string
  listingType: string
  title: string
  description: string
  address: string
  country: string
  city: string
  state: string
  postalCode: string
  bedrooms: { bedroom: number; bedroomType: string }[]
  bathrooms: { bathroom: number; bathroomType: string }[]
  beds: { bed: number; bedType: string }[]
  features: string[]
  rules: string[]
  guestsLimit: string
  quietHours: string
  checkIn: string
  checkOut: string
  pricePerNight: string
  cleaningFee: string
  securityFee: string
}

const ListingFrom = () => {
  const [details, setDetails] = useState<DetailsState>({
    propertyType: '',
    listingType: '',
    title: '',
    description: '',
    address: '',
    country: '',
    city: '',
    state: '',
    postalCode: '',
    bedrooms: [{ bedroom: 1, bedroomType: '' }],
    bathrooms: [{ bathroom: 1, bathroomType: '' }],
    beds: [{ bed: 1, bedType: '' }],
    features: [],
    rules: [],
    guestsLimit: '',
    quietHours: '',
    checkIn: '',
    checkOut: '',
    pricePerNight: '',
    cleaningFee: '',
    securityFee: '',
  })
  const [selectedBedroom, setSelectedBedroom] = useState(1)
  const [selectedBathroom, setSelectedBathroom] = useState(1)
  const [selectedBed, setSelectedBed] = useState(1)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    if (/bedroom/g.test(name)) {
      const modifiedBedrooms = details.bedrooms.map((item) => {
        if (item.bedroom !== selectedBedroom) {
          return item
        } else {
          return {
            ...item,
            bedroomType: value,
          }
        }
      })
      return setDetails((prevState) => ({
        ...prevState,
        bedrooms: modifiedBedrooms,
      }))
    }
    if (/bathroom/g.test(name)) {
      const modifiedBathrooms = details.bathrooms.map((item) => {
        if (item.bathroom !== selectedBathroom) {
          return item
        } else {
          return {
            ...item,
            bathroomType: value,
          }
        }
      })
      return setDetails((prevState) => ({
        ...prevState,
        bathrooms: modifiedBathrooms,
      }))
    }
    if (/bed/g.test(name)) {
      const modifiedBathrooms = details.beds.map((item) => {
        if (item.bed !== selectedBathroom) {
          return item
        } else {
          return {
            ...item,
            bedType: value,
          }
        }
      })
      return setDetails((prevState) => ({
        ...prevState,
        beds: modifiedBathrooms,
      }))
    }

    return setDetails((prevState) => ({ ...prevState, [name]: value }))
  }
  const handleFeatures = (feature: string) => {
    const alreadyExists = isAdded(feature, details.features)
    if (alreadyExists) {
      const modifiedFeatures = details.features.filter((f) => f !== feature)
      return setDetails((prevState) => ({
        ...prevState,
        features: modifiedFeatures,
      }))
    }
    const modifiedFeatures = [...details.features, feature]
    return setDetails((prevState) => ({
      ...prevState,
      features: modifiedFeatures,
    }))
  }
  const handleRules = (rule: string) => {
    const alreadyExists = isAdded(rule, details.rules)
    if (alreadyExists) {
      const modifiedRules = details.rules.filter((r) => r !== rule)
      return setDetails((prevState) => ({
        ...prevState,
        rules: modifiedRules,
      }))
    }
    const modifiedRules = [...details.rules, rule]
    return setDetails((prevState) => ({
      ...prevState,
      rules: modifiedRules,
    }))
  }

  // make the reusable function

  const addBedroom = () => {
    if (!details.bedrooms[details.bedrooms.length - 1].bedroomType) return
    const bedroomToAdd = details.bedrooms.length + 1

    const modifiedBedrooms = [
      ...details.bedrooms,
      { bedroom: bedroomToAdd, bedroomType: '' },
    ]
    setDetails((prevState) => ({
      ...prevState,
      bedrooms: modifiedBedrooms,
    }))
    setSelectedBedroom(bedroomToAdd)
  }
  const removeBedroom = () => {
    if (selectedBedroom <= 1) return
    setSelectedBedroom(selectedBedroom - 1)
    setDetails((prevState) => ({
      ...prevState,
      bedrooms: prevState.bedrooms.slice(0, -1),
    }))
  }
  const addBathroom = () => {
    if (!details.bathrooms[details.bathrooms.length - 1].bathroomType) return
    const bathroomToAdd = details.bathrooms.length + 1

    const modifiedBathrooms = [
      ...details.bathrooms,
      { bathroom: bathroomToAdd, bathroomType: '' },
    ]
    setDetails((prevState) => ({
      ...prevState,
      bathrooms: modifiedBathrooms,
    }))
    setSelectedBedroom(bathroomToAdd)
  }
  const removeBathroom = () => {
    if (selectedBathroom <= 1) return
    setSelectedBedroom(selectedBathroom - 1)
    setDetails((prevState) => ({
      ...prevState,
      bathrooms: prevState.bathrooms.slice(0, -1),
    }))
  }
  const addBed = () => {
    if (!details.beds[details.beds.length - 1].bedType) return
    const bedToAdd = details.beds.length + 1

    const modifiedBeds = [...details.beds, { bed: bedToAdd, bedType: '' }]
    setDetails((prevState) => ({
      ...prevState,
      beds: modifiedBeds,
    }))
    setSelectedBedroom(bedToAdd)
  }
  const removeBed = () => {
    if (selectedBed <= 1) return
    setSelectedBedroom(selectedBed - 1)
    setDetails((prevState) => ({
      ...prevState,
      beds: prevState.beds.slice(0, -1),
    }))
  }

  return (
    <div className="my-4 lg:mt-8">
      <MainContainer order="01" title="main information">
        <MainInformation />
      </MainContainer>

      <MainContainer order="02" title="location details">
        <Location />
      </MainContainer>

      <MainContainer order="03" title="property details">
        <BedroomsSelection
          bedrooms={details.bedrooms}
          addBedroom={addBedroom}
          removeBedroom={removeBedroom}
          handleChange={handleChange}
          selectedBedroom={selectedBedroom}
          setSelectedBedroom={setSelectedBedroom}
        />
        <BathroomsSelection
          bathrooms={details.bathrooms}
          addBathroom={addBathroom}
          removeBathroom={removeBathroom}
          handleChange={handleChange}
          selectedBathroom={selectedBathroom}
          setSelectedBathroom={setSelectedBathroom}
        />
        <BedsSelection
          beds={details.beds}
          addBed={addBed}
          removeBed={removeBed}
          handleChange={handleChange}
          selectedBed={selectedBed}
          setSelectedBed={setSelectedBed}
        />
        <Container title="Property features" type="normal">
          <SelectionList
            arr={details.features}
            arrOfItems={FEATURES}
            handleClick={handleFeatures}
          />
        </Container>
      </MainContainer>

      <MainContainer order="04" title="property rules">
        <Rules
          arr={details.rules}
          arrOfItems={RULES}
          handleClick={handleRules}
        />
      </MainContainer>

      <MainContainer order="05" title="property pricing">
        <Pricing />
      </MainContainer>

      <Buttons />
    </div>
  )
}

const Buttons = () => {
  return (
    <>
      <Line />
      <div className="mb-4 mt-auto flex gap-x-2 md:mb-5 md:ml-auto md:w-fit">
        <button className="flex w-full cursor-pointer items-center justify-center rounded-full border border-grey px-8 py-3 font-medium text-black transition-colors hover:border-black/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600">
          <span className="block">Cancel</span>
        </button>
        <button className="flex w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-3 font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600">
          <span className="block">Create</span>
        </button>
      </div>
    </>
  )
}

export default ListingFrom

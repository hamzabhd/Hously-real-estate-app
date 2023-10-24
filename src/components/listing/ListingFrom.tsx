'use client'
import Line from '../Line'
import { MdSingleBed } from 'react-icons/md'
import { BiBath } from 'react-icons/bi'
import { LuBed } from 'react-icons/lu'
import MainInformation from './subComponents/MainInformation'
import Location from './subComponents/Location'
import Container from '../Container'
import MainContainer from '../MainContainer'
import Rules from './subComponents/Rules'
import Pricing from './subComponents/Pricing'
import SelectionList from './subComponents/SelectionList'
import { ObjectKey } from '@/types/types'
import {
  features,
  bedChoices,
  bedroomChoices,
  bathroomChoices,
} from 'utils/itemManagement/data/data'
import DetailsSelection from './subComponents/DetailsSelection'
import { useGlobalContext } from 'context/GlobalProvider'

const ListingFrom = () => {
  const {
    details,
    images,
    selectedBedroom,
    selectedBathroom,
    selectedBed,
    addBathroom,
    addBed,
    addBedroom,
    removeBathroom,
    removeBed,
    removeBedroom,
    handleChange,
    setSelectedBedroom,
    setSelectedBathroom,
    setSelectedBed,
    handleFeatures,
  } = useGlobalContext()

  return (
    <div className="my-4 lg:mt-8">
      <MainContainer
        order="01"
        title="main information"
        message="Please note that all fields in the section are required."
      >
        <MainInformation />
      </MainContainer>

      <MainContainer
        order="02"
        title="location details"
        message="Please ensure you input accurate location details, including the state if applicable."
      >
        <Location />
      </MainContainer>

      <MainContainer
        order="03"
        title="property details"
        message="Please make sure to select at least one option for each item."
      >
        <DetailsSelection
          title="Bedroom"
          listItems={details.bedrooms}
          selectedItem={selectedBedroom}
          item={'bedroom' as ObjectKey}
          itemType={'bedroomType' as ObjectKey}
          choices={bedroomChoices}
          setSelectedItem={setSelectedBedroom}
          addItem={addBedroom}
          removeItem={removeBedroom}
          handleChange={handleChange}
          Icon={MdSingleBed}
        />
        <DetailsSelection
          title="Bathroom"
          listItems={details.bathrooms}
          selectedItem={selectedBathroom}
          item={'bathroom' as ObjectKey}
          itemType={'bathroomType' as ObjectKey}
          choices={bathroomChoices}
          setSelectedItem={setSelectedBathroom}
          addItem={addBathroom}
          removeItem={removeBathroom}
          handleChange={handleChange}
          Icon={BiBath}
        />
        <DetailsSelection
          title="Bed"
          listItems={details.beds}
          selectedItem={selectedBed}
          item={'bed' as ObjectKey}
          itemType={'bedType' as ObjectKey}
          choices={bedChoices}
          setSelectedItem={setSelectedBed}
          addItem={addBed}
          removeItem={removeBed}
          handleChange={handleChange}
          Icon={LuBed}
        />
        <Container title="Property features" type="normal">
          <SelectionList
            arr={details.features}
            arrOfItems={features}
            handleClick={handleFeatures}
          />
        </Container>
      </MainContainer>

      <MainContainer
        order="04"
        title="property rules"
        message="Kindly select the property rules that best align with your requirements, and feel free to provide specific rules if necessary."
      >
        <Rules />
      </MainContainer>

      <MainContainer
        order="05"
        title="property pricing"
        message="Please note that only the price field is mandatory. The other fees are optional."
      >
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

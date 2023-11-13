import CustomSelectElement from '../custom/CustomSelectElement'
import { HiLocationMarker, HiOutlineHome } from 'react-icons/hi'
import { regions } from 'utils/itemManagement/data/data'
import CustomRangeInput from '../custom/CustomRangeInput'
import { TbZoomMoney } from 'react-icons/tb'
import DetailsContainer from '../layouts/DetailsContainer'
import Container from '../layouts/Container'
import CustomRadioButton from '../custom/CustomRadioButton'
import {
  MdAccessTime,
  MdOutlineApartment,
  MdOutlineCabin,
  MdOutlineSell,
  MdOutlineVilla,
} from 'react-icons/md'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import SearchContainer from '../layouts/SearchContainer'
import Buttons from '../custom/Buttons'

const SearchInputs = ({
  activeSearch,
  toggleSearch,
}: {
  activeSearch: boolean
  toggleSearch: () => void
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const val = e.target as HTMLFormElement
    const propertyType = val.propertyType as HTMLInputElement
    const listingType = val.listingType as HTMLInputElement
    const location = val.location as HTMLInputElement

    console.log(propertyType.value)
    console.log(listingType.value)
    console.log(location.value)
  }

  return (
    <>
      {!activeSearch ? (
        <span className="font-medium tracking-wide text-black/40 transition-colors group-hover/search:text-black">
          Find a property
        </span>
      ) : (
        <SearchContainer title="Find a property" toggleContainer={toggleSearch}>
          <form
            className="flex min-h-full w-full flex-col overflow-y-auto border-4 bg-white p-4"
            onSubmit={handleSubmit}
          >
            <Container
              title="What type of property are you looking for?"
              type="grid"
            >
              <CustomRadioButton
                value="Apartment"
                name="propertyType"
                id="apartment"
              >
                <MdOutlineApartment className="h-6 w-6" />
                <span className="font-medium">Apartment</span>
              </CustomRadioButton>
              <CustomRadioButton value="House" name="propertyType" id="house">
                <HiOutlineHome className="h-6 w-6" />
                <span className="font-medium">House</span>
              </CustomRadioButton>
              <CustomRadioButton value="Villa" name="propertyType" id="villa">
                <MdOutlineVilla className="h-6 w-6" />
                <span className="font-medium">Villa</span>
              </CustomRadioButton>
              <CustomRadioButton value="Cabin" name="propertyType" id="cabin">
                <MdOutlineCabin className="h-6 w-6" />
                <span className="font-medium">Cabin</span>
              </CustomRadioButton>
            </Container>
            {/* Listing type */}
            <Container
              title="Are you looking to buy or rent a property?"
              type="grid"
            >
              <CustomRadioButton value="Rent" name="listingType" id="rent">
                <MdAccessTime className="h-6 w-6" />
                <span className="font-medium">Rent</span>
              </CustomRadioButton>
              <CustomRadioButton value="Sell" name="listingType" id="sell">
                <MdOutlineSell className="h-6 w-6" />
                <span className="font-medium">Sell</span>
              </CustomRadioButton>
            </Container>

            <span className="mb-4 block font-medium lg:mb-5">
              Where would you like your property to be located?
            </span>
            <CustomSelectElement
              Icon={HiLocationMarker}
              label="Location"
              name="location"
              listItems={regions}
            />
            <Buttons
              name="Search"
              handleCancel={toggleSearch}
              className="absolute bottom-0 left-0 z-50 w-full border-t p-4"
            />
          </form>
        </SearchContainer>
      )}
    </>
  )
}

export default SearchInputs

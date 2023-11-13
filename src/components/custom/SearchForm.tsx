import CustomSelectElement from '../custom/CustomSelectElement'
import { HiLocationMarker, HiOutlineHome } from 'react-icons/hi'
import { regions } from 'utils/itemManagement/data/data'
import {
  MdAccessTime,
  MdOutlineApartment,
  MdOutlineAttachMoney,
  MdOutlineCabin,
  MdOutlineSell,
  MdOutlineVilla,
} from 'react-icons/md'
import { ChangeEvent, FormEvent, useState } from 'react'
import CustomRangeInput from '../custom/CustomRangeInput'
import Container from '../layouts/Container'
import CustomRadioButton from '../custom/CustomRadioButton'
import Buttons from '../custom/Buttons'
import SearchContainer from '../layouts/SearchContainer'

const SearchForm = ({ toggleSearch }: { toggleSearch: () => void }) => {
  const [searchInputs, setSearchInput] = useState({
    property: '',
    type: '',
    region: '',
    range: [100, 10000],
  })
  const handleSliderChange = (value: number | number[]) => {
    setSearchInput((prevState) => ({ ...prevState, range: value as number[] }))
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSearchInput((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const handleRegion = (value: string) => {
    setSearchInput((prevState) => ({
      ...prevState,
      region: value,
    }))
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const clearAllForm = () => {
    return setSearchInput({
      property: '',
      type: '',
      region: '',
      range: [100, 10000],
    })
  }
  return (
    <SearchContainer clearAllForm={clearAllForm}>
      <form
        className="h-[calc(100%-140px)] w-full flex-col overflow-y-auto bg-white p-4 pb-6 md:relative md:flex md:h-[calc(100%-57px)] md:rounded-3xl  lg:p-6"
        onSubmit={handleSubmit}
      >
        <Container
          title="What type of property are you looking for?"
          type="grid"
          isSearch
        >
          <CustomRadioButton
            value="Apartment"
            name="property"
            id="apartment"
            handleChange={handleChange}
            selected={searchInputs.property === 'Apartment'}
          >
            <MdOutlineApartment className="h-6 w-6" />
            <span className="font-medium">Apartment</span>
          </CustomRadioButton>
          <CustomRadioButton
            value="House"
            name="property"
            id="house"
            handleChange={handleChange}
            selected={searchInputs.property === 'House'}
          >
            <HiOutlineHome className="h-6 w-6" />
            <span className="font-medium">House</span>
          </CustomRadioButton>
          <CustomRadioButton
            value="Villa"
            name="property"
            id="villa"
            handleChange={handleChange}
            selected={searchInputs.property === 'Villa'}
          >
            <MdOutlineVilla className="h-6 w-6" />
            <span className="font-medium">Villa</span>
          </CustomRadioButton>
          <CustomRadioButton
            value="Cabin"
            name="property"
            id="cabin"
            handleChange={handleChange}
            selected={searchInputs.property === 'Cabin'}
          >
            <MdOutlineCabin className="h-6 w-6" />
            <span className="font-medium">Cabin</span>
          </CustomRadioButton>
        </Container>
        {/* Listing type */}
        <Container
          title="Are you looking to buy or rent a property?"
          type="grid"
        >
          <CustomRadioButton
            value="Rent"
            name="type"
            id="rent"
            handleChange={handleChange}
            selected={searchInputs.type === 'Rent'}
          >
            <MdAccessTime className="h-6 w-6" />
            <span className="font-medium">Rent</span>
          </CustomRadioButton>
          <CustomRadioButton
            value="Buy"
            name="type"
            id="buy"
            handleChange={handleChange}
            selected={searchInputs.type === 'Buy'}
          >
            <MdOutlineSell className="h-6 w-6" />
            <span className="font-medium">Buy</span>
          </CustomRadioButton>
        </Container>

        <span className="mb-4 block font-medium lg:mb-5">
          Where would you like your property to be located?
        </span>
        <CustomSelectElement
          selectedValue={searchInputs.region}
          getValue={handleRegion}
          Icon={HiLocationMarker}
          label="Location"
          name="location"
          listItems={regions}
        />

        <span className="mb-4 mt-6 block font-medium lg:mb-5">
          What is your budget range?
        </span>
        <CustomRangeInput
          range={searchInputs.range}
          handleSliderChange={handleSliderChange}
          minMax={[100, 10000]}
          Icon={MdOutlineAttachMoney}
        />
        <Buttons
          name="Search"
          handleCancel={toggleSearch}
          className="absolute bottom-0 left-0 z-50 w-full border-t p-4"
        />
      </form>
    </SearchContainer>
  )
}

export default SearchForm

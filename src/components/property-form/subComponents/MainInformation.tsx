'use client'
import Container from '@/components/layouts/Container'
import CustomRadioButton from '@/components/custom/CustomRadioButton'
import CustomInput from '@/components/custom/CustomInput'
import {
  MdOutlineVilla,
  MdOutlineCabin,
  MdOutlineApartment,
  MdOutlineSell,
  MdAccessTime,
} from 'react-icons/md'
import { HiOutlineHome } from 'react-icons/hi'
import { MainInformationPropType } from '@/types/types'
import CustomTextArea from '@/components/custom/CustomTextArea'

const MainInformation = ({
  details,
  handleChange,
  detailsErrors,
}: MainInformationPropType) => {
  return (
    <>
      {/* Property type */}
      <Container
        title="Property type"
        type="grid"
        error={detailsErrors.propertyType}
      >
        <CustomRadioButton
          handleChange={handleChange}
          value="Apartment"
          name="propertyType"
          id="apartment"
          selected={details.propertyType === 'Apartment'}
        >
          <MdOutlineApartment className="h-6 w-6" />
          <span className="font-medium">Apartment</span>
        </CustomRadioButton>
        <CustomRadioButton
          handleChange={handleChange}
          value="House"
          name="propertyType"
          id="house"
          selected={details.propertyType === 'House'}
        >
          <HiOutlineHome className="h-6 w-6" />
          <span className="font-medium">House</span>
        </CustomRadioButton>
        <CustomRadioButton
          handleChange={handleChange}
          value="Villa"
          name="propertyType"
          id="villa"
          selected={details.propertyType === 'Villa'}
        >
          <MdOutlineVilla className="h-6 w-6" />
          <span className="font-medium">Villa</span>
        </CustomRadioButton>
        <CustomRadioButton
          handleChange={handleChange}
          value="Cabin"
          name="propertyType"
          id="cabin"
          selected={details.propertyType === 'Cabin'}
        >
          <MdOutlineCabin className="h-6 w-6" />
          <span className="font-medium">Cabin</span>
        </CustomRadioButton>
      </Container>
      {/* Listing type */}
      <Container
        title="Listing type"
        type="grid"
        error={detailsErrors.listingType}
      >
        <CustomRadioButton
          handleChange={handleChange}
          value="Rent"
          name="listingType"
          id="rent"
          selected={details.listingType === 'Rent'}
        >
          <MdAccessTime className="h-6 w-6" />
          <span className="font-medium">Rent</span>
        </CustomRadioButton>
        <CustomRadioButton
          handleChange={handleChange}
          value="Sell"
          name="listingType"
          id="sell"
          selected={details.listingType === 'Sell'}
        >
          <MdOutlineSell className="h-6 w-6" />
          <span className="font-medium">Sell</span>
        </CustomRadioButton>
      </Container>
      {/* General Information */}
      <Container title="General information" type="normal">
        <CustomInput
          name="title"
          value={details.title}
          handleChange={handleChange}
          type="text"
          label="Title"
          className="relative mb-4 md:mb-5"
          error={detailsErrors.title}
          max={20}
          letterCounter={20}
        />
        <CustomTextArea
          name="description"
          value={details.description}
          handleChange={handleChange}
          label="Description"
          className="relative mb-4 md:mb-5"
          error={detailsErrors.description}
          letterCounter={160}
        />
      </Container>
    </>
  )
}

export default MainInformation

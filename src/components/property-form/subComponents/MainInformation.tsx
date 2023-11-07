'use client'

import { Fragment } from 'react'
import Image from 'next/image'
import Container from '@/components/layouts/Container'
import CustomRadioButton from '@/components/custom/CustomRadioButton'
import CustomInput from '@/components/custom/CustomInput'
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
import { MainInformationPropType } from '@/types/types'

const MainInformation = ({
  details,
  handleChange,
  handleImage,
  removeImages,
  images,
  detailsErrors,
  isEdit,
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
      {/* Listing Type */}
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
      {/* #General information */}
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
        <CustomInput
          name="description"
          value={details.description}
          handleChange={handleChange}
          label="Description"
          className="relative mb-4 md:mb-5"
          error={detailsErrors.description}
          letterCounter={160}
        />
      </Container>
      {/* Images */}
      {!isEdit ? (
        <Container type="grid" title="Images" error={detailsErrors.images}>
          {images!.length < 4 && (
            <label className="group flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 border-dashed border-grey p-4 transition-colors hover:border-black/60">
              <LuImagePlus className="h-8 w-8" />
              <span className="text-center font-medium text-black/60 transition group-hover:text-black">
                Click here to upload a new image
              </span>
              <input type="file" className="hidden" onChange={handleImage} />
            </label>
          )}

          {images.map((image, i) => (
            <Fragment key={i}>
              <ImagePreviewer
                imgUrl={image}
                index={i}
                isEdit={isEdit}
                removeImage={removeImages}
              />
            </Fragment>
          ))}
        </Container>
      ) : (
        <Container type="grid" title="Images">
          {images.map((image, i) => (
            <Fragment key={i}>
              <ImagePreviewer
                imgUrl={image}
                index={i}
                isEdit={isEdit}
                removeImage={removeImages}
              />
            </Fragment>
          ))}
        </Container>
      )}
    </>
  )
}

const ImagePreviewer = ({
  imgUrl,
  index,
  isEdit,
  removeImage,
}: {
  imgUrl: string
  index: number
  isEdit: boolean
  removeImage: (id: number) => void
}) => {
  return (
    <div
      className={`group relative aspect-square h-full w-full overflow-hidden rounded-3xl ${
        !isEdit ? 'cursor-pointer' : ''
      }`}
    >
      <Image src={imgUrl} alt="property image" fill className="object-cover" />
      {!isEdit && (
        <button
          type="button"
          className="group/close absolute right-2 top-2 hidden rounded-full border border-white bg-white/60 p-1 transition-colors hover:bg-white group-hover:block"
          onClick={() => removeImage(index)}
        >
          <MdOutlineClose className="h-4 w-4 text-black/40 transition-colors group-hover/close:text-black" />
        </button>
      )}
    </div>
  )
}

export default MainInformation

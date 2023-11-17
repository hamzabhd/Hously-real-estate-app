'use client'
import MainInformation from './subComponents/MainInformation'
import Location from './subComponents/Location'
import Container from '@/components/layouts/Container'
import MainContainer from '@/components/layouts/MainContainer'
import Rules from './subComponents/Rules'
import Pricing from './subComponents/Pricing'
import SelectionList from './subComponents/SelectionList'
import DetailsSelection from './subComponents/DetailsSelection'
import axios from 'axios'
import Buttons from '../custom/Buttons'
import Spinner from '../loaders/Spinner'
import CustomInput from '../custom/CustomInput'
import ImagesUploader from './subComponents/ImagesUploader'
import { ListingsObj } from '@/types/types'
import { features } from 'data/data'
import { useState, ChangeEvent, FormEvent } from 'react'
import { DetailsState, DetailsStateErrors } from '@/types/types'
import { isAdded } from 'utils/isAdded'
import { validateForm } from 'utils/validateFrom'
import { listingSchema } from 'utils/validations/validations'
import { useRouter } from 'next/navigation'
import { checkAddressValidity } from 'utils/validations/checkAddressValidity'

const ListingFrom = ({
  isEdit,
  listing,
}: {
  isEdit: boolean
  listing?: ListingsObj
}) => {
  const router = useRouter()
  const [details, setDetails] = useState<DetailsState>({
    propertyType: listing?.propertyType || '',
    listingType: listing?.listingType || '',
    title: listing?.title || '',
    description: listing?.description || '',
    address: listing?.address || '',
    country: listing?.country || '',
    city: listing?.city || '',
    state: listing?.state || '',
    postalCode: listing?.postalCode || '',
    propertySpace: listing?.propertySpace || '',
    bedrooms: listing?.bedrooms || [{ bedroom: 1, bedroomType: '' }],
    bathrooms: listing?.bathrooms || [{ bathroom: 1, bathroomType: '' }],
    beds: listing?.beds || [{ bed: 1, bedType: '' }],
    features: listing?.features || [],
    rules: listing?.rules || [],
    guestsLimit: listing?.guestsLimit || '',
    quietHours: listing?.quietHours || '',
    checkIn: listing?.checkIn || '',
    checkOut: listing?.checkOut || '',
    price: listing?.price || '',
    cleaningFee: listing?.cleaningFee || '',
    securityFee: listing?.securityFee || '',
  })
  const [detailsErrors, setDetailsErrors] = useState<DetailsStateErrors>({
    propertyType: '',
    listingType: '',
    title: '',
    description: '',
    address: '',
    country: '',
    city: '',
    state: '',
    postalCode: '',
    propertySpace: '',
    bedrooms: '',
    bathrooms: '',
    beds: '',
    features: '',
    rules: '',
    guestsLimit: '',
    quietHours: '',
    checkIn: '',
    checkOut: '',
    price: '',
    cleaningFee: '',
    securityFee: '',
    images: '',
  })
  const [images, setImages] = useState<string[]>(listing?.images || [])
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setDetailsErrors((prevState) => ({
      ...prevState,
      [name]: '',
    }))

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
    setDetailsErrors((prevState) => ({
      ...prevState,
      features: '',
    }))
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

    setDetailsErrors((prevState) => ({
      ...prevState,
      rules: '',
    }))
    return setDetails((prevState) => ({
      ...prevState,
      rules: modifiedRules,
    }))
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const result = validateForm(listingSchema, { ...details, images })
    const addressResult = await checkAddressValidity(details.address)

    if (!addressResult.success) {
      const message =
        details.address === ''
          ? 'This field is required'
          : 'The property address is not valid'
      setDetailsErrors((prevState) => ({
        ...prevState,
        address: message,
      }))
    }

    if (!result.success) {
      return setDetailsErrors((prevState) => ({
        ...prevState,
        ...result.errors,
      }))
    }

    setIsLoading(true)

    if (isEdit) {
      const response = await axios.post(
        `/api/properties/edit-property/${listing?._id}`,
        {
          body: details,
          images,
        },
      )

      if (response.status === 200) {
        router.refresh()
        router.push(`/property/${response.data.id}`)
        setIsLoading(false)
      }
    } else {
      const response = await axios.post(`/api/properties/create-property`, {
        body: details,
        images,
      })

      if (response.status === 200) {
        router.refresh()
        router.push(`/property/${response.data.id}`)
        setIsLoading(false)
      }
    }
  }
  const handleCancel = () => {
    return router.back()
  }

  return (
    <>
      {isLoading && (
        <Spinner
          label={isEdit ? 'Updating listing...' : 'Creating listing...'}
        />
      )}
      <form className="my-6 lg:mt-8" onSubmit={handleSubmit}>
        <MainContainer
          order="01"
          title="main information"
          message={
            isEdit
              ? 'Please note that all fields in the section are required. and also note that images are not editable otherwise create a new listing'
              : 'Please note that all fields in the section are required.'
          }
        >
          <MainInformation
            details={details}
            detailsErrors={detailsErrors}
            handleChange={handleChange}
          />
          <ImagesUploader
            setImages={setImages}
            images={images}
            isEdit={isEdit}
            error={detailsErrors.images}
          />
        </MainContainer>

        <MainContainer
          order="02"
          title="location details"
          message="Please ensure you input accurate location details, including the state if applicable."
        >
          <Location
            details={details}
            handleChange={handleChange}
            detailsErrors={detailsErrors}
            setErrors={setDetailsErrors}
            setDetails={setDetails}
          />
        </MainContainer>

        <MainContainer
          order="03"
          title="property details"
          message="Please make sure to select at least one option for each item."
        >
          <DetailsSelection
            title="Bedroom"
            listItems={details.bedrooms}
            error={detailsErrors.bedrooms}
            setDetails={setDetails}
            setDetailsErrors={setDetailsErrors}
          />
          <DetailsSelection
            title="Bathroom"
            listItems={details.bathrooms}
            error={detailsErrors.bathrooms}
            setDetails={setDetails}
            setDetailsErrors={setDetailsErrors}
          />
          <DetailsSelection
            title="Bed"
            listItems={details.beds}
            error={detailsErrors.beds}
            setDetails={setDetails}
            setDetailsErrors={setDetailsErrors}
          />

          <Container title="Property spacing" type="normal">
            <CustomInput
              max={5}
              label="Area"
              type="text"
              className="relative"
              handleChange={handleChange}
              name="propertySpace"
              value={details.propertySpace}
              error={detailsErrors.propertySpace}
            >
              {!detailsErrors.propertySpace && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium">
                  m²
                </span>
              )}
            </CustomInput>
          </Container>

          <Container
            title="Property features"
            type="normal"
            error={detailsErrors.features}
          >
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
          <Rules
            handleChange={handleChange}
            handleRules={handleRules}
            details={details}
            detailsErrors={detailsErrors}
          />
        </MainContainer>

        <MainContainer
          order="05"
          title="property pricing"
          message="Please note that only the price field is mandatory. The other fees are optional."
        >
          <Pricing
            details={details}
            detailsErrors={detailsErrors}
            handleChange={handleChange}
          />
        </MainContainer>

        <Buttons name="Create" handleCancel={handleCancel} />
      </form>
    </>
  )
}

export default ListingFrom

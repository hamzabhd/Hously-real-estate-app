'use client'
import { MdSingleBed } from 'react-icons/md'
import { BiBath } from 'react-icons/bi'
import { LuBed } from 'react-icons/lu'
import MainInformation from './subComponents/MainInformation'
import Location from './subComponents/Location'
import Container from '@/components/containers/Container'
import MainContainer from '@/components/containers/MainContainer'
import Rules from './subComponents/Rules'
import Pricing from './subComponents/Pricing'
import SelectionList from './subComponents/SelectionList'
import { ListingsDetails, ObjectKey } from '@/types/types'
import {
  features,
  bedChoices,
  bedroomChoices,
  bathroomChoices,
} from 'utils/itemManagement/data/data'
import DetailsSelection from './subComponents/DetailsSelection'
import { useState, ChangeEvent, FormEvent } from 'react'
import { DetailsState, DetailsStateErrors } from '@/types/types'
import { isAdded } from 'utils/isAdded'
import {
  addItem,
  removeItem,
  removeImage,
} from 'utils/itemManagement/itemManagement'
import axios from 'axios'
import { validateForm } from 'utils/validateFrom'
import { listingSchema } from 'utils/validations/validations'
import Buttons from '../custom/Buttons'
import { useRouter } from 'next/navigation'
import Spinner from '../loaders/Spinner'

const ListingFrom = ({
  isEdit,
  listing,
}: {
  isEdit: boolean
  listing?: ListingsDetails
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
  const [selectedBedroom, setSelectedBedroom] = useState(1)
  const [selectedBathroom, setSelectedBathroom] = useState(1)
  const [selectedBed, setSelectedBed] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    if (/bedroom\d+/g.test(name)) {
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

      setDetailsErrors((prevState) => ({
        ...prevState,
        bedrooms: '',
      }))
      return setDetails((prevState) => ({
        ...prevState,
        bedrooms: modifiedBedrooms,
      }))
    }
    if (/bathroom\d+/g.test(name)) {
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

      setDetailsErrors((prevState) => ({
        ...prevState,
        bathrooms: '',
      }))
      return setDetails((prevState) => ({
        ...prevState,
        bathrooms: modifiedBathrooms,
      }))
    }
    if (/bed\d+/g.test(name)) {
      const modifiedBeds = details.beds.map((item) => {
        if (item.bed !== selectedBed) {
          return item
        } else {
          return {
            ...item,
            bedType: value,
          }
        }
      })

      setDetailsErrors((prevState) => ({
        ...prevState,
        beds: '',
      }))

      return setDetails((prevState) => ({
        ...prevState,
        beds: modifiedBeds,
      }))
    }
    setDetailsErrors((prevState) => ({
      ...prevState,
      [name]: '',
    }))

    return setDetails((prevState) => ({ ...prevState, [name]: value }))
  }
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (images.length >= 4) return
    if (/\.(jpe?g|png)/.test(e.target.files?.[0].name as string)) {
      const fileReader = new FileReader()
      fileReader.onload = (e) => {
        setImages((prevState) => {
          if (prevState) return [...prevState, e.target?.result as string]
          return [e.target?.result as string]
        })
      }
      fileReader.readAsDataURL(e.target.files?.[0] as File)
      return
    }
    alert('This is not a valid image file')
  }
  const removeImages = (index: number) => {
    if (images.length === 0) return
    const modifiedImages = removeImage(images, index)
    if (!modifiedImages) return
    return setImages(modifiedImages)
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
  const addBedroom = () => {
    return addItem(
      details.bedrooms,
      'bedroom' as ObjectKey,
      'bedroomType' as ObjectKey,
      'bedrooms',
      setSelectedBedroom,
      setDetails,
    )
  }
  const removeBedroom = () => {
    return removeItem(
      details.bedrooms,
      'bedrooms',
      selectedBedroom,
      setSelectedBedroom,
      setDetails,
    )
  }
  const addBathroom = () => {
    return addItem(
      details.bathrooms,
      'bathroom' as ObjectKey,
      'bathroomType' as ObjectKey,
      'bathrooms',
      setSelectedBathroom,
      setDetails,
    )
  }
  const removeBathroom = () => {
    return removeItem(
      details.bathrooms,
      'bathrooms',
      selectedBathroom,
      setSelectedBathroom,
      setDetails,
    )
  }
  const addBed = () => {
    return addItem(
      details.beds,
      'bed' as ObjectKey,
      'bedType' as ObjectKey,
      'beds',
      setSelectedBed,
      setDetails,
    )
  }
  const removeBed = () => {
    return removeItem(
      details.beds,
      'beds',
      selectedBed,
      setSelectedBed,
      setDetails,
    )
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const result = validateForm(listingSchema, { ...details, images })

      if (!result.success) {
        return setDetailsErrors((prevState) => ({
          ...prevState,
          ...result.errors,
        }))
      }
    } catch (err) {
      console.log(err)
    }

    setIsLoading(true)
    const response = await axios.post(`/api/listings/create-listing`, {
      body: details,
      images,
    })

    if (response.status === 200) {
      console.log(response.data.message)
      router.refresh()
      router.push(`/listing/${response.data.id}`)
      setIsLoading(false)
    }
  }

  return (
    <>
      {isLoading && (
        <Spinner
          label={isEdit ? 'Updating listing...' : 'Creating listing...'}
        />
      )}
      <form className="my-4 lg:mt-8" onSubmit={handleSubmit}>
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
            handleImage={handleImage}
            removeImages={removeImages}
            images={images}
            isEdit={isEdit}
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
            selectedItem={selectedBedroom}
            item={'bedroom' as ObjectKey}
            itemType={'bedroomType' as ObjectKey}
            choices={bedroomChoices}
            setSelectedItem={setSelectedBedroom}
            addItem={addBedroom}
            removeItem={removeBedroom}
            handleChange={handleChange}
            Icon={MdSingleBed}
            error={detailsErrors.bedrooms}
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
            error={detailsErrors.bathrooms}
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
            error={detailsErrors.beds}
          />
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

        <Buttons name="Create" />
      </form>
    </>
  )
}

export default ListingFrom

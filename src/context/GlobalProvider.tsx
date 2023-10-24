'use client'

import {
  ReactNode,
  createContext,
  useContext,
  ChangeEvent,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'
import { DetailsState, ObjectKey } from '@/types/types'
import {
  removeImage,
  removeItem,
  addItem,
} from 'utils/itemManagement/itemManagement'
import { isAdded } from 'utils/isAdded'
import { useSession } from 'next-auth/react'

type ContextType = {
  details: DetailsState
  images: string[]
  selectedBedroom: number
  selectedBathroom: number
  selectedBed: number
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleImage: (e: ChangeEvent<HTMLInputElement>) => void
  removeImages: (index: number) => void
  handleFeatures: (feature: string) => void
  handleRules: (rule: string) => void
  addBedroom: () => void
  addBathroom: () => void
  addBed: () => void
  removeBedroom: () => void
  removeBathroom: () => void
  removeBed: () => void
  setSelectedBedroom: Dispatch<SetStateAction<number>>
  setSelectedBathroom: Dispatch<SetStateAction<number>>
  setSelectedBed: Dispatch<SetStateAction<number>>
}

const Context = createContext<ContextType>({
  details: {
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
    price: '',
    cleaningFee: '',
    securityFee: '',
  },
  images: [],
  selectedBedroom: 1,
  selectedBathroom: 1,
  selectedBed: 1,
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    undefined,
  handleImage: (e: ChangeEvent<HTMLInputElement>) => undefined,
  removeImages: (index: number) => undefined,
  handleFeatures: (feature: string) => undefined,
  handleRules: (rule: string) => undefined,
  addBedroom: () => undefined,
  addBathroom: () => undefined,
  addBed: () => undefined,
  removeBedroom: () => undefined,
  removeBathroom: () => undefined,
  removeBed: () => undefined,
  setSelectedBedroom: () => undefined,
  setSelectedBathroom: () => undefined,
  setSelectedBed: () => undefined,
})

export const useGlobalContext = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('Context has been used outside of the context')
  }
  return context
}

const GlobalProvider = ({ children }: { children: ReactNode }) => {
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
    price: '',
    cleaningFee: '',
    securityFee: '',
  })
  const [images, setImages] = useState<string[]>([])
  const [selectedBedroom, setSelectedBedroom] = useState(1)
  const [selectedBathroom, setSelectedBathroom] = useState(1)
  const [selectedBed, setSelectedBed] = useState(1)

  const information = {
    propertyType: details.propertyType,
    listingType: details.listingType,
    title: details.title,
    description: details.description,
  }

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
      return setDetails((prevState) => ({
        ...prevState,
        beds: modifiedBeds,
      }))
    }

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

  const { data: session } = useSession()
  console.log(session)

  return (
    <Context.Provider
      value={{
        details,
        images,
        selectedBedroom,
        selectedBathroom,
        selectedBed,
        handleChange,
        handleFeatures,
        handleImage,
        removeImages,
        addBathroom,
        addBed,
        addBedroom,
        removeBathroom,
        removeBed,
        removeBedroom,
        handleRules,
        setSelectedBedroom,
        setSelectedBathroom,
        setSelectedBed,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default GlobalProvider

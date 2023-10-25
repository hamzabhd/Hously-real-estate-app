export type UserObj = {
  username: string
  fullName: string
  email: string
  profilePicture: string
  createdAt: string
  phoneNumber?: string
  country?: string
  city?: string
  bio?: string
  background?: string
  facts?: string[]
  destinations?: string[]
  links?: string[]
}
export interface UserDetails {
  fullName: string
  country: string
  city: string
  phoneNumber: string
  bio: string
  background: string
  fact1: string
  fact2: string
  fact3: string
  destination1: string
  destination2: string
  destination3: string
  link1: string
  link2: string
  link3: string
}

export type DetailsState = {
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
  price: string
  cleaningFee: string
  securityFee: string
}

export interface ListingsDetails extends DetailsState {
  images: string[]
}

export interface DetailsStateErrors
  extends Omit<
    DetailsState,
    'bedrooms' | 'bathrooms' | 'beds' | 'rules' | 'features'
  > {
  bedrooms: string
  bathrooms: string
  beds: string
  features: string
  rules: string
  images: string
}

export interface InputErrors {
  [key: string]: string | { [key: string]: string }
}
export type bedroomObj = {
  bedroom: number
  bedroomType: string
}
export type BathroomObj = {
  bathroom: number
  bathroomType: string
}
export type BedObj = {
  bed: number
  bedType: string
}
export type ObjType<Type> = {
  [Property in keyof Type]: Type[Property]
}

export type ArrType = ObjType<BedObj | bedroomObj | BathroomObj>[]

export type ObjectKey = keyof (bedroomObj | BathroomObj | BedObj)

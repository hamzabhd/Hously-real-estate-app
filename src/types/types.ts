export interface UserObj {
  username: string
  fullName: string
  email: string
  profilePicture: string
  createdAt?: string
  bio?: string
}

export interface UserDetails {
  fullName: string
  country: string
  city: string
  phoneNumber: string
  email: string
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

export interface InputErrors {
  [key: string]: string | { [key: string]: string }
}

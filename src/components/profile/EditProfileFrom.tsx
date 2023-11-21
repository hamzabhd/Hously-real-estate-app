'use client'
import { ChangeEvent, FormEvent, useState } from 'react'
import { UserDetails, UserObj } from '@/types/types'
import { useRouter } from 'next/navigation'
import { validateForm } from 'utils/validateFrom'
import { userSchema } from 'utils/validations/validations'
import MainContainer from '../layouts/MainContainer'
import PersonalInfo from './subComponents/PersonalInfo'
import AdditionalInfo from './subComponents/AdditionalInfo'
import ContactInfo from './subComponents/ContactInfo'
import Buttons from '../custom/Buttons'
import axios from 'axios'
import Spinner from '../loaders/Spinner'
import ProfileImageUploader from './subComponents/ProfileImageUploader'
import EditLocationInfo from './subComponents/EditLocationInfo'
import { notify } from 'utils/notify'

const EditProfileForm = ({ user }: { user: UserObj }) => {
  const router = useRouter()
  const [profileImage, setProfileImage] = useState('')
  const [oldImage, setOldImage] = useState(user.profilePicture || '')
  const [userDetails, setUserDetails] = useState<UserDetails>({
    fullName: user.fullName,
    country: user.country || '',
    city: user.city || '',
    phoneNumber: user.phoneNumber || '',
    bio: user.bio || '',
    background: user.background || '',
    fact1: user.facts?.[0] || '',
    fact2: user.facts?.[1] || '',
    fact3: user.facts?.[2] || '',
    destination1: user.destinations?.[0] || '',
    destination2: user.destinations?.[1] || '',
    destination3: user.destinations?.[2] || '',
    link1: user.links?.[0] || '',
    link2: user.links?.[1] || '',
    link3: user.links?.[2] || '',
  })
  const [errorInputs, setErrorInputs] = useState<UserDetails>({
    fullName: '',
    country: '',
    city: '',
    phoneNumber: '',
    bio: '',
    background: '',
    fact1: '',
    fact2: '',
    fact3: '',
    destination1: '',
    destination2: '',
    destination3: '',
    link1: '',
    link2: '',
    link3: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target

    setErrorInputs((prevState) => ({
      ...prevState,
      [name]: '',
    }))

    if (/(country|city)/.test(name)) {
      return setUserDetails((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    }

    if (name === 'phoneNumber') {
      return setUserDetails((prevState) => ({
        ...prevState,
        phoneNumber: value,
      }))
    }

    if (name === 'fullName') {
      return setUserDetails((prevState) => ({
        ...prevState,
        fullName: value,
      }))
    }

    return setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = validateForm(userSchema, userDetails)

    if (!result.success) {
      return setErrorInputs((prevState) => ({
        ...prevState,
        ...result.errors,
      }))
    }

    setIsLoading(true)
    const response = await axios.post(`/api/users/edit-user`, {
      body: userDetails,
      profileImage: profileImage || user.profilePicture,
    })

    if (response.status === 200) {
      router.refresh()
      router.push('/profile')
      setIsLoading(false)
      notify(response.data)
    } else {
      notify(response.data)
    }
  }
  const handleCancel = () => {
    return router.back()
  }

  return (
    <>
      {isLoading && <Spinner label="Updating profile..." />}
      <form className="my-6 lg:mt-8" onSubmit={handleSubmit}>
        <MainContainer
          order="01"
          title="Personal information"
          message="Please note that the name field is required."
        >
          <div className="mb-6 sm:grid sm:grid-cols-2 sm:gap-x-4 md:col-start-2 md:col-end-4 lg:pt-7">
            <ProfileImageUploader
              setProfileImage={setProfileImage}
              oldImage={oldImage}
            />
            <PersonalInfo
              details={userDetails}
              errors={errorInputs}
              handleChange={handleChange}
            />
            <EditLocationInfo
              details={userDetails}
              setUserDetails={setUserDetails}
            />
          </div>
        </MainContainer>

        <MainContainer order="02" title="Additional information">
          <AdditionalInfo handleChange={handleChange} details={userDetails} />
        </MainContainer>

        <MainContainer order="03" title="Contact information">
          <ContactInfo
            details={userDetails}
            errors={errorInputs}
            handleChange={handleChange}
          />
        </MainContainer>

        <Buttons name="Save" handleCancel={handleCancel} />
      </form>
    </>
  )
}

export default EditProfileForm

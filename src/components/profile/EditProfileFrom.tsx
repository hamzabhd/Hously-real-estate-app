'use client'
import { ChangeEvent, FormEvent, useState } from 'react'
import { UserDetails, UserObj } from '@/types/types'
import MainContainer from '../containers/MainContainer'
import PersonalInfo from './subComponents/PersonalInfo'
import AdditionalInfo from './subComponents/AdditionalInfo'
import ContactInfo from './subComponents/ContactInfo'
import Buttons from '../custom/Buttons'
import { validateForm } from 'utils/validateFrom'
import { userSchema } from 'utils/validations/validations'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Spinner from '../loaders/Spinner'

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
  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (/\.(jpe?g|png)/.test(e.target.files?.[0].name as string)) {
      const fileReader = new FileReader()
      fileReader.onload = (e) => {
        setProfileImage(e.target?.result as string)
      }
      fileReader.readAsDataURL(e.target.files?.[0] as File)
      return
    }
    alert('This is not a valid image file')
  }
  const resetImage = () => {
    setProfileImage('')
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
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
        console.log(response.data.message)
        router.refresh()
        router.push('/profile')
        setIsLoading(false)
      }
    } catch (err) {
      alert(err)
    }
  }
  const handleCancel = () => {
    return router.back()
  }
  return (
    <>
      {isLoading && <Spinner label="Updating profile..." />}
      <form className="my-4 lg:mt-8" onSubmit={handleSubmit}>
        <MainContainer
          order="01"
          title="Personal information"
          message="Please note that the name field is required."
        >
          <PersonalInfo
            details={userDetails}
            errors={errorInputs}
            image={profileImage}
            oldImage={oldImage}
            handleChange={handleChange}
            resetImage={resetImage}
            uploadImage={uploadImage}
          />
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

        <Buttons name="Save" handleCancel={handleCancel}/>
      </form>
    </>
  )
}

export default EditProfileForm

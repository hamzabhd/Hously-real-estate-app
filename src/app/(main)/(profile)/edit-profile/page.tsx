import EditProfileForm from '../_components/EditProfileFrom'
import { userSchema } from 'utils/validations/validations'
import { getUser, serverSession } from 'utils/getUser'
import User from 'models/user'
import { connectToDb } from 'utils/connectToDb'

const EditProfile = async () => {
  const user = await getUser()

  async function updateProfile(formData: FormData) {
    'use server'
    const parsedData = Object.fromEntries(formData.entries())
    try {
      const result = userSchema.safeParse(parsedData)
      if (!result.success) {
        return Promise.resolve('Something went wrong, please try again!')
      }

      const session = await serverSession()
      await connectToDb()

      if (parsedData.profilePicture) {
        // updating user profile picture logic goes here

        console.log('Profile picture found')
      }

      await User.findByIdAndUpdate(
        session?.user.id as string,
        {
          $set: {
            fullName: parsedData.fullName,
            phoneNumber: parsedData.phoneNumber,
            city: parsedData.city,
            country: parsedData.country,
            bio: parsedData.bio,
            background: parsedData.background,
            facts: [parsedData.fact1, parsedData.fact2, parsedData.fact3],
            destinations: [
              parsedData.destination1,
              parsedData.destination2,
              parsedData.destination3,
            ],
            links: [parsedData.link1, parsedData.link2, parsedData.link3],
          },
        },
        { new: true },
      )

      return Promise.resolve('Soo Good!')
    } catch (e) {
      console.log('something went wrong', e)
      return Promise.resolve('Something went wrong')
    }
  }

  return (
    <div className="mx-auto max-w-[1248px] px-4 md:px-6">
      <div className="flex h-[182px] flex-col justify-center xl:h-[238px]">
        <h1 className="mb-4 text-3xl font-bold uppercase lg:text-4xl xl:text-5xl">
          Edit profile
        </h1>
        <p className="max-w-[545px] text-sm leading-relaxed text-black/80 lg:text-base">
          Maintain accurate information and customize your experience for smooth
          transactions. Please get in touch if you need any help.
        </p>
      </div>
      <EditProfileForm updateProfile={updateProfile} user={user} />
    </div>
  )
}

export default EditProfile

import EditProfileForm from '../_components/EditProfileFrom'
import { userSchema } from 'utils/validations/validations'
import { serverSession } from 'utils/getUser'
import User from 'models/user'
import { connectToDb } from 'utils/connectToDb'
import { reformObj } from 'utils/reformObj'

const EditProfile = () => {
  async function updateProfile(formData: FormData) {
    'use server'
    const parsedData = Object.fromEntries(formData.entries())
    try {
      const result = userSchema.safeParse(parsedData)
      if (!result.success) {
        return Promise.resolve('Something went wrong, please try again!')
      }
      const objToAdd = reformObj(parsedData)
      console.log(objToAdd)

      const session = await serverSession()
      await connectToDb()
      await User.findByIdAndUpdate(
        session?.user.id as string,
        {
          $set: { objToAdd },
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
      <EditProfileForm updateProfile={updateProfile} />
    </div>
  )
}

export default EditProfile

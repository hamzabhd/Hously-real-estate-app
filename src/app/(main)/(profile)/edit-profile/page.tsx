import EditProfileForm from '@/components/profile/edit-profile/EditProfileFrom'
import { getUser } from 'utils/getUser'

const EditProfile = async () => {
  const user = await getUser()

  return (
    <div className="mx-auto max-w-[1248px] px-4 md:px-6">
      <div className="flex h-[199px] flex-col justify-center xl:h-[238px]">
        <h1 className="mb-4 text-3xl font-bold uppercase lg:text-4xl xl:text-5xl">
          Edit your profile
        </h1>
        <span className="text-sm">
          How about a quick profile tweak? Add a hobby, change your pic, or toss
          in a short bio. Let's keep it brief and uniquely you!
        </span>
      </div>
      <EditProfileForm user={user} />
    </div>
  )
}

export default EditProfile

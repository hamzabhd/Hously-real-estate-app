import { getUser } from 'utils/getUser'
import ProfileDetails from '@/components/profile/ProfileDetails'
import ProfileCard from '@/components/profile/ProfileCard'

const Profile = async () => {
  const user = await getUser()

  return (
    <div className="mx-auto max-w-[1248px] md:px-6">
      <ProfileCard user={user} />
      <ProfileDetails user={user} />
    </div>
  )
}

export default Profile

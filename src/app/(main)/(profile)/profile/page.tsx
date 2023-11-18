import { getUserProfile } from 'utils/getUser'
import ProfileDetails from '@/components/profile/ProfileDetails'
import ProfileCard from '@/components/profile/ProfileCard'

const Profile = async () => {
  const user = await getUserProfile()
  console.log(user)

  return (
    <div className="mx-auto min-h-screen max-w-[1248px]">
      <ProfileCard user={user} />
      <ProfileDetails user={user} />
    </div>
  )
}

export default Profile

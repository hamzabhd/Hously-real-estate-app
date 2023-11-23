import { getUserProfile, serverSession } from 'utils/getUser'
import UserProfile from '@/components/profile/user-profile/UserProfile'
import ProfileCard from '@/components/profile/user-profile/ProfileCard'
import { redirect } from 'next/navigation'
import { PropertyType } from '@/types/types'

const Profile = async () => {
  const currentUserId = await serverSession().then((res) => res?.user.id)
  if (!currentUserId) {
    redirect('/')
  }
  const user = await getUserProfile(currentUserId)
  const savedProperties = user.savedProperties.map((p: PropertyType) => p._id)

  return (
    <>
      <ProfileCard user={user} currentUser={currentUserId} />
      <UserProfile
        user={user}
        currentUser={currentUserId}
        savedProperties={savedProperties}
      />
    </>
  )
}

export default Profile

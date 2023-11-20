import { getUserProfile, serverSession } from 'utils/getUser'
import UserProfile from '@/components/profile/UserProfile'
import ProfileCard from '@/components/profile/ProfileCard'
import { redirect } from 'next/navigation'

const Profile = async () => {
  const currentUserId = await serverSession().then((res) => res?.user.id)
  if (!currentUserId) {
    redirect('/')
  }
  const user = await getUserProfile(currentUserId)

  return (
    <div className="mx-auto min-h-screen max-w-[1248px]">
      <ProfileCard user={user} />
      <UserProfile user={user} currentUser={currentUserId} />
    </div>
  )
}

export default Profile

import { getUser, getUserProfile, serverSession } from 'utils/getUser'
import { redirect } from 'next/navigation'
import UserProfile from '@/components/profile/user-profile/UserProfile'
import ProfileCard from '@/components/profile/user-profile/ProfileCard'

const User = async ({ params }: { params: { id: string } }) => {
  const currentUserId = (await serverSession().then(
    (res) => res?.user.id,
  )) as string
  const currentUser = await getUser()
  const user = await getUserProfile(params.id)

  if (!user) {
    redirect('/404')
  }

  if (user._id === currentUserId) {
    redirect('/profile')
  }

  const savedProperties = currentUser?.savedProperties || []

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

export default User

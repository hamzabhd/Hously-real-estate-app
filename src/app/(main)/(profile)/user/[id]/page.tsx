import { getUserProfile, serverSession } from 'utils/getUser'
import UserProfile from '@/components/profile/UserProfile'
import ProfileCard from '@/components/profile/ProfileCard'
import { redirect } from 'next/navigation'

const User = async ({ params }: { params: { id: string } }) => {
  const currentUserId = (await serverSession().then(
    (res) => res?.user.id,
  )) as string
  const user = await getUserProfile(params.id)

  if (!user) {
    redirect('/')
  }

  if (user._id === currentUserId) {
    redirect('/profile')
  }

  return (
    <div className="mx-auto min-h-screen max-w-[1248px]">
      <ProfileCard user={user} currentUser={currentUserId} />
      <UserProfile user={user} currentUser={currentUserId} />
    </div>
  )
}

export default User

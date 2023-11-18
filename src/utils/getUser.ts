import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'

export const serverSession = async () => {
  const session = await getServerSession(authOptions)
  return session
}

export const getUser = async () => {
  const session = await serverSession()

  if (!session) return null

  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/users/${session?.user.id}`,
    { cache: 'no-cache' },
  )
  return response.json()
}

export const getUserProfile = async () => {
  const id = await serverSession().then((res) => res?.user.id)

  if (!id) return null

  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/profiles/${id}`,
    { cache: 'no-cache' },
  )
  return response.json()
}

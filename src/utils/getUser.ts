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
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${session?.user.id}`,
    { cache: 'no-cache' },
  )
  return response.json()
}

export const getUserProfile = async (id: string) => {
  if (!id) return null

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/profiles/${id}`,
    { cache: 'no-cache' },
  )
  if (!response.ok) {
    return null
  }
  return response.json()
}

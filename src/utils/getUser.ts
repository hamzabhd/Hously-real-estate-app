import axios from 'axios'
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
  )
  return response.json()
}

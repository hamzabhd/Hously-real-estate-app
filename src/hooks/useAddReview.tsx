import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const useAddReview = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [addReview, setAddReview] = useState(false)
  const toggleAddReview = () => {
    if (!session) {
      return router.push('/sign-up')
    }
    setAddReview(!addReview)
  }

  return {
    toggleAddReview,
    addReview,
  }
}

import { useState } from 'react'
import { ReviewObj } from '@/types/types'

export const useReviews = (reviewObj: ReviewObj[]) => {
  const [reviewToShow, setReviewToShow] = useState<string>('')

  const reviewFound = reviewObj.find((review) => review.id === reviewToShow)

  return {
    reviewFound,
    reviewToShow,
    setReviewToShow,
  }
}

export default useReviews

import { PropertyType, ReviewObj } from '@/types/types'
import { reviewsRate } from './reviewsRate'

export const getProfileReviews = (properties: PropertyType[]) => {
  let reviewsArr: ReviewObj[] = []

  properties
    .filter((p) => p.reviews.length !== 0)
    .map((p) => p.reviews)
    .forEach((p) => reviewsArr.push(...p))

  const rating = reviewsRate(reviewsArr) || 'N/A'

  return {
    reviews: reviewsArr.length || 'N/A',
    rating,
  }
}

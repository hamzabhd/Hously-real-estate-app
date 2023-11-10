import { ReviewObj } from '@/types/types'

export const reviewsRate = (reviewsArr: ReviewObj[]) => {
  if (reviewsArr.length === 0) return 'N/A'
  const rate =
    reviewsArr
      .map((item) => item.reviewRange)
      .reduce((acc, currentVal) => acc + Number(currentVal), 0) /
    reviewsArr.length

  return rate.toFixed(2)
}

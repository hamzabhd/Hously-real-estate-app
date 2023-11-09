import { ReviewObj } from '@/types/types'

export const reviewsRate = (reviewsArr: ReviewObj[]) => {
  const rate =
    reviewsArr
      .map((item) => item.reviewRange)
      .reduce((acc, currentVal) => acc + Number(currentVal), 0) /
    reviewsArr.length

  return rate.toFixed(2)
}

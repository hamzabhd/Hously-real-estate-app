import { useState } from 'react'
import { ReviewObj } from '@/types/types'
import ReviewContainer from '../layouts/ReviewContainer'
import ReviewFound from './ReviewFound'
import ReviewCard from './ReviewCard'
import SeeMoreBtn from './SeeMoreBtn'

const Reviews = ({
  reviewsArr,
  reviewsToShow = 3,
  toggleAddReview,
}: {
  reviewsArr: ReviewObj[]
  reviewsToShow: number
  toggleAddReview?: () => void
}) => {
  const [reviewToShow, setReviewToShow] = useState<string>('')
  const reviewFound = reviewsArr.find((review) => review._id === reviewToShow)

  return (
    <>
      {reviewsArr.length === 0 ? (
        <div className="mb-6">
          <p className="mb-4 leading-relaxed text-black/60">
            This property doesn't have any reviews yet
          </p>
          <SeeMoreBtn label="Add review" onClick={toggleAddReview} />
        </div>
      ) : (
        <ReviewContainer>
          {reviewsArr.slice(0, reviewsToShow).map((review, i) => (
            <ReviewCard
              key={i}
              review={review}
              setReviewToShow={setReviewToShow}
            />
          ))}
        </ReviewContainer>
      )}
      {reviewFound && (
        <ReviewFound
          reviewFound={reviewFound}
          setReviewToShow={setReviewToShow}
        />
      )}
    </>
  )
}

export default Reviews

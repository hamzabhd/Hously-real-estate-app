import { IoIosStar } from 'react-icons/io'
import ReviewContainer from '../containers/ReviewContainer'
import ReviewFound from './ReviewFound'
import ReviewCard from './ReviewCard'
import { ReviewObj } from '@/types/types'
import { useState } from 'react'

const Reviews = ({
  reviewsArr,
  reviewsToShow = 3,
}: {
  reviewsArr: ReviewObj[]
  reviewsToShow: number
}) => {
  const [reviewToShow, setReviewToShow] = useState<string>('')
  const reviewFound = reviewsArr.find((review) => review.id === reviewToShow)
  const reviewsRate =
    reviewsArr.reduce((acc, currentVal) => acc + Number(currentVal.rating), 0) /
    reviewsArr.length

  return (
    <>
      <div className="mx-4 mb-4 mt-4 flex w-fit items-center gap-x-2 rounded-full border border-grey px-5 py-3 md:mx-0 lg:my-6">
        <IoIosStar className="h-4 w-4 text-black/60 lg:h-6 lg:w-6" />
        <span className="font-bold lg:text-lg">{reviewsRate}</span>
        <span className="font-light lg:text-lg">
          From +{reviewsArr.length} reviewers
        </span>
      </div>

      <ReviewContainer>
        {reviewsArr.slice(0, reviewsToShow).map((review) => (
          <ReviewCard
            review={review}
            key={review.id}
            setReviewToShow={setReviewToShow}
          />
        ))}
      </ReviewContainer>
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

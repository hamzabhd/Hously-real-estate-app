import React from 'react'
import { IoClose } from 'react-icons/io5'
import ReviewCard from './ReviewCard'
import { ReviewObj } from '@/types/types'
import DetailsContainer from '../containers/DetailsContainer'
import { HiOutlineX } from 'react-icons/hi'

const ReviewFound = ({
  reviewFound,
  setReviewToShow,
}: {
  reviewFound: ReviewObj
  setReviewToShow: (review: string) => void
}) => {
  return (
    <DetailsContainer>
      <div className="mb-4 flex items-center justify-between gap-x-4 border-b border-grey p-4 lg:px-6">
        <span className="cursor-pointer font-medium text-black">
          User review
        </span>

        <div
          className="cursor-pointer rounded-full bg-light-100 p-2 transition-colors hover:bg-grey"
          onClick={() => setReviewToShow('')}
        >
          <HiOutlineX className="h-4 w-4" />
        </div>
      </div>
      <ReviewCard
        review={reviewFound}
        setReviewToShow={setReviewToShow}
        showReview={true}
      />
    </DetailsContainer>
  )
}

export default ReviewFound

import React from 'react'
import { IoClose } from 'react-icons/io5'
import ReviewCard from './ReviewCard'
import { ReviewObj } from '@/types/types'
import DetailsContainer from '../../layouts/DetailsContainer'
import { HiOutlineX } from 'react-icons/hi'
import useDisableScroll from 'hooks/useDIsableScroll'

const ReviewFound = ({
  reviewFound,
  setReviewToShow,
}: {
  reviewFound: ReviewObj
  setReviewToShow: (review: string) => void
}) => {
  useDisableScroll(!!reviewFound)
  return (
    <DetailsContainer
      title="User review"
      toggleContainer={() => setReviewToShow('')}
    >
      <ReviewCard
        review={reviewFound}
        setReviewToShow={setReviewToShow}
        showReview={true}
      />
    </DetailsContainer>
  )
}

export default ReviewFound

import React from 'react'
import { IoClose } from 'react-icons/io5'
import ReviewCard from './ReviewCard'
import { ReviewObj } from '@/types/types'

const ReviewFound = ({
  reviewFound,
  setReviewToShow,
}: {
  reviewFound: ReviewObj
  setReviewToShow: (review: string) => void
}) => {
  return (
    <div className="fixed left-0 top-0 grid min-h-full w-full place-content-center bg-black/20 px-4 backdrop-blur-[2px]">
      <div className="container-shadow h-full w-full max-w-[500px] animate-popup overflow-hidden rounded-3xl bg-white duration-1000">
        <div className="m-4 flex items-center justify-between rounded-2xl bg-lightGrey p-4">
          <span className="text-xl font-bold">User review</span>
          <div
            className="group w-fit cursor-pointer rounded-lg border p-1 transition-colors hover:bg-whiteHover"
            onClick={() => setReviewToShow('')}
          >
            <IoClose className="transition-color text-xl text-black/60 transition-colors group-hover:text-black" />
          </div>
        </div>
        <ReviewCard
          review={reviewFound}
          setReviewToShow={setReviewToShow}
          showReview={true}
        />
      </div>
    </div>
  )
}

export default ReviewFound

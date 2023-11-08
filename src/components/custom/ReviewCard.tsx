import { ReactNode } from 'react'
import { IoIosStar, IoIosStarOutline, IoIosStarHalf } from 'react-icons/io'
import UserImage from './UserImage'
import { ReviewObj } from '@/types/types'
import { reformDate } from 'utils/reformDate'

const ReviewCard = ({
  review,
  showReview,
  setReviewToShow,
}: {
  review: ReviewObj
  setReviewToShow: (review: string) => void
  showReview?: boolean
}) => {
  const isMore = review.reviewContent.length >= 70
  const reformedReviewText = isMore
    ? review.reviewContent.slice(0, 70) + '...'
    : review.reviewContent

  const getRating = (rating: number) => {
    let stars: ReactNode[] = []

    for (let i = 0; i < 5; i++) {
      if (i >= rating) {
        stars.push(
          <IoIosStarOutline key={i} className="h-4 w-4 text-yellow-500" />,
        )
      } else if (i < rating && i + 1 > rating) {
        stars.push(
          <IoIosStarHalf key={i} className="h-4 w-4 text-yellow-500" />,
        )
      } else {
        stars.push(<IoIosStar key={i} className="h-4 w-4 text-yellow-500" />)
      }
    }
    return stars
  }

  return (
    <div
      className={` group relative overflow-hidden border-t border-grey py-4 last:border-b md:rounded-3xl md:border-none md:py-6 lg:px-5 ${
        showReview
          ? 'border-none px-4 pb-6 pt-0 sm:pt-0'
          : 'md:container-shadow md:px-4'
      }`}
    >
      <div className="flex items-center justify-between gap-x-2">
        <UserImage
          name={review.reviewer.fullName}
          imageUrl={review.reviewer.profilePicture}
        />
        <div className="mr-auto flex flex-col">
          <span className="block font-bold">{review.reviewer.fullName}</span>
          <span className="block text-sm text-slate-600">
            {reformDate(review.createdAt)}
          </span>
        </div>
        <div className="flex self-start">
          {getRating(Number(review.reviewRange))}
        </div>
      </div>

      <p
        className={`${
          showReview ? '' : 'mb-4'
        } mt-6 font-normal leading-relaxed ${
          !review.reviewContent ? 'text-black/40' : 'text-black/60'
        }`}
      >
        {showReview ? review.reviewContent : reformedReviewText}
        {!review.reviewContent && 'No review content was provided'}
      </p>

      {isMore && !showReview && (
        <span
          className="cursor-pointer text-sm font-medium hover:underline"
          onClick={() => setReviewToShow(review._id)}
        >
          Read more
        </span>
      )}
    </div>
  )
}

export default ReviewCard

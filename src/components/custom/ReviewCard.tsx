import { ReactNode } from 'react'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
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
  showReview?: true
}) => {
  const reformReviewText = (text: string): string => {
    const textArr = text.split(' ')

    if (textArr.length > 15) {
      return textArr.slice(0, 15).join(' ') + '...'
    }
    return text
  }

  const isMore = (text: string): boolean => {
    const textArr = text.split(' ')

    if (textArr.length > 15) {
      return true
    }
    return false
  }

  const getRating = (rating: number) => {
    let stars: ReactNode[] = []

    for (let i = 0; i < 5; i++) {
      if (i >= rating) {
        stars.push(
          <IoIosStarOutline key={i} className="h-4 w-4 text-yellow-500" />,
        )
      } else {
        stars.push(<IoIosStar key={i} className="h-4 w-4 text-yellow-500" />)
      }
    }
    return stars
  }

  return (
    <div
      className={`group relative overflow-hidden px-4 pt-6 last:mb-0 sm:rounded-3xl sm:py-6 sm:first:pt-6 lg:px-5 ${
        showReview ? 'pb-6 pt-2 sm:pt-2' : 'sm:container-shadow first:pt-0 '
      }`}
    >
      {!showReview && (
        <span className="group-first mb-6 block h-px bg-grey sm:hidden"></span>
      )}
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
        {showReview
          ? review.reviewContent
          : reformReviewText(review.reviewContent)}
        {!review.reviewContent && 'No review content was provided'}
      </p>

      {isMore(review.reviewContent) && !showReview && (
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

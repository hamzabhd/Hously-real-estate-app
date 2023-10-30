import { ReactNode } from 'react'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import UserImage from '../UserImage'

const ReviewCard = ({
  review,
  showReview,
  setReviewToShow,
}: {
  review: {
    id: string
    username: string
    userImage: string
    reviewDate: string
    review: string
    rating: string
  }
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

  const getRating = (rating: string) => {
    let stars: ReactNode[] = []

    for (let i = 0; i < 5; i++) {
      if (i >= Number(rating)) {
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
        <UserImage name={review.username} imageUrl={review.userImage} />
        <div className="mr-auto flex flex-col">
          <span className="block font-bold">{review.username}</span>
          <span className="block text-slate-600">{review.reviewDate}</span>
        </div>
        <div className="flex self-start">{getRating(review.rating)}</div>
      </div>

      <p
        className={`${
          showReview ? '' : 'mb-4'
        } mt-6 font-normal leading-relaxed text-black/60`}
      >
        {showReview ? review.review : reformReviewText(review.review)}
      </p>

      {isMore(review.review) && !showReview && (
        <span
          className="cursor-pointer text-sm font-medium hover:underline"
          onClick={() => setReviewToShow(review.id)}
        >
          Read more
        </span>
      )}
    </div>
  )
}

export default ReviewCard

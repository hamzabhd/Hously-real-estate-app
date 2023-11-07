import { useState } from 'react'
import { ReviewObj } from '@/types/types'
import { IoIosStar } from 'react-icons/io'
import ReviewContainer from '../layouts/ReviewContainer'
import ReviewFound from './ReviewFound'
import ReviewCard from './ReviewCard'
import SeeMoreBtn from './SeeMoreBtn'
import { usePathname } from 'next/navigation'

const Reviews = ({
  reviewsArr,
  reviewsToShow = 3,
  toggleAddReview,
}: {
  reviewsArr: ReviewObj[]
  reviewsToShow: number
  toggleAddReview?: () => void
}) => {
  const pathname = usePathname()

  const [reviewToShow, setReviewToShow] = useState<string>('')
  const reviewFound = reviewsArr.find((review) => review._id === reviewToShow)
  const reviewsRate =
    reviewsArr.reduce(
      (acc, currentVal) => acc + Number(currentVal.reviewRange),
      0,
    ) / reviewsArr.length

  return (
    <>
      {reviewsArr.length !== 0 ? (
        <div className="mx-4 my-4 flex w-fit items-center gap-x-2 rounded-full border border-grey px-5 py-3 md:mx-0 lg:my-6">
          <IoIosStar className="h-4 w-4 text-black/60 lg:h-6 lg:w-6" />
          <span className="font-bold lg:text-lg">{reviewsRate}</span>
          <span className="font-light lg:text-lg">
            From +{reviewsArr.length} reviewers
          </span>
        </div>
      ) : (
        <div className="my-4 px-4 md:px-0">
          <>
            {/property/g.test(pathname) ? (
              <>
                <p className="mb-4 leading-relaxed text-black/60">
                  This property doesn't have any reviews yet
                </p>
                <SeeMoreBtn label="Add review" onClick={toggleAddReview} />
              </>
            ) : (
              <p className="mb-4 leading-relaxed text-black/60">
                This profile doesn't have any reviews yet
              </p>
            )}
          </>
        </div>
      )}

      {reviewsArr.length !== 0 && (
        <ReviewContainer>
          {reviewsArr.slice(0, reviewsToShow).map((review) => (
            <ReviewCard
              review={review}
              key={review._id}
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

import { ReviewObj } from '@/types/types'
import { useAddReview } from 'hooks/useAddReview'
import { useState } from 'react'
import Reviews from '../../custom/Reviews'
import SeeMoreBtn from '../../custom/SeeMoreBtn'
import AddReview from '../features/AddReview'

const PropertyReviews = ({
  propertyId,
  propertyReviews,
}: {
  propertyId: string
  propertyReviews: ReviewObj[]
}) => {
  const [reviewsToSee, setReviewsToSee] = useState(3)
  const { addReview, toggleAddReview } = useAddReview()

  const handleReviews = () => {
    setReviewsToSee((prevState) => {
      if (propertyReviews.length <= prevState) {
        return 3
      }
      return prevState + 3
    })
  }

  return (
    <>
      {addReview && (
        <AddReview toggleAddReview={toggleAddReview} propertyId={propertyId} />
      )}
      <div className="mt-6 lg:mt-8">
        <h2 className="ml-4 text-xl font-medium md:ml-0 lg:text-2xl">
          What people say about this property
        </h2>

        {
          <Reviews
            reviewsArr={propertyReviews}
            reviewsToShow={reviewsToSee}
            toggleAddReview={toggleAddReview}
          />
        }

        {propertyReviews.length > 3 && (
          <SeeMoreBtn
            label={
              propertyReviews.length <= reviewsToSee
                ? 'Hide all reviews'
                : 'View more reviews'
            }
            onClick={handleReviews}
            className="ml-4 md:ml-0"
          />
        )}
      </div>
    </>
  )
}

export default PropertyReviews

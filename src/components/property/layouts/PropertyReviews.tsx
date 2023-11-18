import { ReviewObj } from '@/types/types'
import { useAddReview } from 'hooks/useAddReview'
import { useState } from 'react'
import Reviews from '../../custom/Reviews'
import SeeMoreBtn from '../../custom/SeeMoreBtn'
import AddReview from '../features/AddReview'
import { useShowMore } from 'hooks/useShowMore'

const PropertyReviews = ({
  propertyId,
  propertyReviews,
}: {
  propertyId: string
  propertyReviews: ReviewObj[]
}) => {
  const itemsLength = propertyReviews.length
  const { handleItems, itemsToSee } = useShowMore(itemsLength)
  const { addReview, toggleAddReview } = useAddReview()

  return (
    <>
      {addReview && (
        <AddReview toggleAddReview={toggleAddReview} propertyId={propertyId} />
      )}
      <div className="mt-6 px-4 md:px-6 lg:mt-8">
        <h2 className="mb-6 text-xl font-medium md:ml-0 lg:text-2xl">
          What people say about this property
        </h2>

        {
          <Reviews
            reviewsArr={propertyReviews}
            reviewsToShow={itemsToSee}
            toggleAddReview={toggleAddReview}
          />
        }

        {propertyReviews.length > 3 && (
          <SeeMoreBtn
            label={
              propertyReviews.length <= itemsToSee
                ? 'Hide all reviews'
                : 'View more reviews'
            }
            onClick={handleItems}
            className="md:ml-0"
          />
        )}
      </div>
    </>
  )
}

export default PropertyReviews

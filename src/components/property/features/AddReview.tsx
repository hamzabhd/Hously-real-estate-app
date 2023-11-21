import { useEffect, useState } from 'react'
import { addReview } from '@/app/actions'
import Line from '@/components/custom/Line'
import ErrorDisplay from '@/components/custom/ErrorDisplay'
import SubmitButton from '../ui/SubmitButton'
import DetailsContainer from '@/components/layouts/DetailsContainer'
import CustomRadioButton from '@/components/custom/CustomRadioButton'
import { useFormState } from 'react-dom'
import { notify } from 'utils/notify'

const AddReview = ({
  toggleAddReview,
  propertyId,
}: {
  toggleAddReview: () => void
  propertyId: string
}) => {
  const initialState = {
    message: null,
    success: null,
  }
  const [state, formAction] = useFormState(addReview, initialState)
  const [range, setRange] = useState('0.5')

  useEffect(() => {
    if (!state.success && state.status !== 'error') return
    toggleAddReview()
    notify(state)
  }, [state])

  return (
    <DetailsContainer title="Add review" toggleContainer={toggleAddReview}>
      <div className="max-h-[580px] overflow-y-scroll p-4 pb-0 lg:max-h-[760px] lg:overflow-auto lg:px-6">
        <h2 className="mb-4 text-xl font-medium">
          What do you think about this property?
        </h2>
        <p className="mb-4 leading-relaxed text-black/60 lg:mb-6">
          Share your thoughts on this property, but please remember to keep it
          respectful. Inappropriate reviews may result in account restrictions.
        </p>

        {!state.success && <ErrorDisplay error={state.message} />}
        <form
          action={(formData) => {
            formData.append('propertyId', propertyId)
            formAction(formData)
          }}
        >
          <span className="mb-4 block font-medium lg:mb-5">
            Who you might be?
          </span>
          <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <CustomRadioButton id="renter" name="reviewerType" value="Renter">
              <span className="font-medium">Already rented</span>
            </CustomRadioButton>
            <CustomRadioButton id="buyer" name="reviewerType" value="Buyer">
              <span className="font-medium">Already bought</span>
            </CustomRadioButton>
            <CustomRadioButton
              id="explorer"
              name="reviewerType"
              value="Explorer"
            >
              <span className="font-medium">Just Exploring</span>
            </CustomRadioButton>
          </div>
          <div className="mb-6">
            <span className="mb-4 block font-medium lg:mb-5">
              How would you rate this place?
            </span>
            <div className="flex items-center gap-x-4">
              <input
                type="range"
                name="reviewRange"
                step={0.5}
                min={0.5}
                max={5}
                defaultValue={0.5}
                onChange={(e) => setRange(e.target.value)}
              />
              <span className="inline-block min-w-[130px] rounded-2xl border px-4 py-2 text-center font-medium">
                {range} / 5 stars
              </span>
            </div>
          </div>

          <div>
            <span className="mb-4 block font-medium lg:mb-5">
              What would you say about this property?
            </span>
            <textarea
              className="block h-36 w-full resize-none appearance-none rounded-3xl border border-grey bg-transparent p-4 text-sm text-black focus:border-black/60 focus:outline-none focus:ring-0"
              placeholder="Share your thoughts here..."
              name="reviewContent"
            />
          </div>

          <div className="mt-12">
            <Line />
            <div className="mb-4 mt-auto flex gap-x-2 md:mb-5 md:ml-auto md:w-fit">
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-center rounded-full border border-grey px-8 py-3 font-medium text-black transition-colors hover:border-black/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
                onClick={toggleAddReview}
              >
                <span className="block">Cancel</span>
              </button>
              <SubmitButton name="Review" />
            </div>
          </div>
        </form>
      </div>
    </DetailsContainer>
  )
}

export default AddReview

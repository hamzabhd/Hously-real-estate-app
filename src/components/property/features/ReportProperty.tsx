import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { makeReport } from '@/app/actions'
import { notify } from 'utils/notify'
import DetailsContainer from '@/components/layouts/DetailsContainer'
import CustomRadioButton from '@/components/ui/CustomRadioButton'
import Line from '@/components/custom/Line'
import ErrorDisplay from '@/components/shared/ErrorDisplay'
import SubmitButton from '../shared/SubmitButton'

const ReportProperty = ({
  toggleReportProperty,
  propertyId,
}: {
  toggleReportProperty: () => void
  propertyId: string
}) => {
  const initialState = {
    success: null,
    message: null,
  }
  const [state, formAction] = useFormState(makeReport, initialState)

  useEffect(() => {
    if (!state.success && state.status !== 'error') return
    toggleReportProperty()
    notify(state)
  }, [state])

  return (
    <DetailsContainer
      title="Report property"
      toggleContainer={toggleReportProperty}
    >
      <div className="max-h-[580px] overflow-y-scroll p-4 pb-0 lg:max-h-[760px] lg:overflow-auto lg:px-6">
        <form
          action={(formData) => {
            formData.append('propertyId', propertyId)
            formAction(formData)
          }}
        >
          {!state.success && <ErrorDisplay error={state.message} />}
          <span className="mb-4 block font-medium lg:mb-5">
            What is the reason for reporting this property?
          </span>
          <div className="mb-6 flex flex-col gap-4">
            <CustomRadioButton
              id="inaccurate"
              name="reportReason"
              value="Inaccurate Listing"
            >
              <span className="block font-medium">Inaccurate Listing</span>
              <span className="block text-sm text-black/60">
                Report incorrect property details
              </span>
            </CustomRadioButton>
            <CustomRadioButton
              id="suspicious"
              name="reportReason"
              value="Suspicious Activity"
            >
              <span className="block font-medium">Suspicious Activity</span>
              <span className="block text-sm text-black/60">
                Flag potentially fraudulent behavior
              </span>
            </CustomRadioButton>
            <CustomRadioButton
              id="misleading"
              name="reportReason"
              value="Misleading Info"
            >
              <span className="block font-medium">Misleading Info</span>
              <span className="block text-sm text-black/60">
                Report deceptive property information
              </span>
            </CustomRadioButton>
            <CustomRadioButton
              id="inappropriate"
              name="reportReason"
              value="Inappropriate Content"
            >
              <span className="block font-medium">Inappropriate Content</span>
              <span className="block text-sm text-black/60">
                Flag offensive or unsuitable content
              </span>
            </CustomRadioButton>
          </div>
          <div>
            <span className="mb-4 block font-medium lg:mb-5">
              Can you provide more details about the issue?
            </span>
            <textarea
              className="block h-36 w-full resize-none appearance-none rounded-3xl border border-grey bg-transparent p-4 text-black focus:border-black/60 focus:outline-none focus:ring-0"
              placeholder="Share your thoughts here..."
              name="reportDescription"
            />
          </div>

          <div className="mt-12">
            <Line />
            <div className="mb-4 mt-auto flex gap-x-2 md:mb-5 md:ml-auto md:w-fit">
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-center rounded-full border border-grey px-8 py-3 font-medium text-black transition-colors hover:border-black/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
                onClick={toggleReportProperty}
              >
                <span className="block">Cancel</span>
              </button>
              <SubmitButton name="Report" />
            </div>
          </div>
        </form>
      </div>
    </DetailsContainer>
  )
}

export default ReportProperty

import { ReservationButtonsType } from '@/types/types'
import { HiOutlineCheck } from 'react-icons/hi'
import { MdOutlineCalendarMonth } from 'react-icons/md'
import { reformDate } from 'utils/reformDate'

const ReservationButtons = ({
  pending,
  reserve,
  availability,
  lastReservation,
  isPropertyOwner,
  toggleReserve,
  handleReservation,
  toggleAvailability,
}: ReservationButtonsType) => {
  const buttonStatus = () => {
    if (
      !lastReservation ||
      new Date().getTime() > new Date(lastReservation.to).getTime()
    ) {
      return (
        <button
          className='flex-grow items-center justify-center rounded-full bg-black px-8 py-3 font-medium text-white transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600 cursor-pointer hover:bg-neutral-800'
          onClick={toggleReserve}
        >
          {isPropertyOwner ? 'Edit property' : 'Reserve'}
        </button>
      )
    }
    return (
      <div className="flex flex-grow items-center justify-center gap-x-2 rounded-full border-2 py-[calc(0.75rem-2px)] sm:gap-x-2">
        <HiOutlineCheck className="h-4 w-4 flex-shrink-0 text-green-600" />
        <span className="text-sm text-black sm:text-base">
          Reserved on {reformDate(lastReservation.from)}
        </span>
      </div>
    )
  }

  return (
    <>
      {!reserve ? (
        buttonStatus()
      ) : (
        <button
          className="flex-grow cursor-pointer items-center justify-center rounded-full bg-black px-8 py-3 font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
          onClick={handleReservation}
        >
          Confirm{pending && 'ing...'}
        </button>
      )}
      <button
        className={`flex w-1/4 items-center justify-center rounded-full border-2 px-6 py-3 transition-colors hover:border-black/60 ${
          availability ? 'border-black/60' : ''
        }`}
        onClick={toggleAvailability}
      >
        <MdOutlineCalendarMonth />
      </button>
    </>
  )
}

export default ReservationButtons

import Calendar from '@/components/features/Calendar'
import { ReservationsType } from '@/types/types'
import { HiOutlineX } from 'react-icons/hi'

const PropertyAvailability = ({
  arrOfDates,
  toggleAvailability,
}: {
  arrOfDates: ReservationsType[]
  toggleAvailability: () => void
}) => {
  return (
    <>
      <div className="container-shadow absolute bottom-full right-0 mb-4 h-fit w-full max-w-[400px] animate-popup overflow-hidden rounded-3xl border bg-white">
        <div className="flex items-center justify-between gap-x-4 border-b border-grey p-4 lg:px-6">
          <span className="cursor-pointer font-medium text-black">
            Property availability
          </span>

          <div
            className="cursor-pointer rounded-full bg-light-100 p-2 transition-colors hover:bg-grey"
            onClick={toggleAvailability}
          >
            <HiOutlineX className="h-4 w-4" />
          </div>
        </div>
        <Calendar select={false} arrOfDates={arrOfDates} />
      </div>
    </>
  )
}

export default PropertyAvailability

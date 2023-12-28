import SeeMoreBtn from '@/components/shared/SeeMoreBtn'
import { ReservationContainerType } from '@/types/types'
import { HiOutlineX } from 'react-icons/hi'
import { PiCaretUpBold } from 'react-icons/pi'

const ReservationContainer = ({
  readThis,
  setReadThis,
  clearReservation,
  children,
}: ReservationContainerType) => {
  return (
    <div className="container-shadow absolute bottom-full right-0 mb-4 h-fit w-full animate-popup overflow-hidden rounded-3xl border bg-white sm:w-fit md:w-full lg:w-[800px]">
      <div className="relative flex items-center justify-between gap-x-2 border-b border-grey p-4 sm:gap-x-4 lg:px-6">
        <span className="flex-shrink-0 font-medium text-black">
          Reserve property
        </span>

        <SeeMoreBtn
          label="Read this"
          className="mr-auto hover:border-red-200 sm:px-4"
          textColor="text-red-500 text-xs sm:text-sm"
          onClick={() => setReadThis(!readThis)}
        />

        {readThis && (
          <div
            className="absolute left-0 top-full rounded-b-2xl border-b border-t border-grey bg-white px-4 py-2 text-sm"
            style={{ zIndex: 100 }}
          >
            <span className="mb-2 block leading-relaxed">
              Please note that confirming a reservation in this demo app
              won&apos;t lead to any actual payment. Feel free to test and make
              a reservation!
            </span>

            <button
              className="mx-auto flex rounded-full"
              onClick={() => setReadThis(false)}
            >
              <PiCaretUpBold className="h-4 w-4 text-black/60 transition-colors hover:text-black" />
            </button>
          </div>
        )}

        <div
          className="cursor-pointer rounded-full bg-light-100 p-2 transition-colors hover:bg-grey"
          onClick={clearReservation}
        >
          <HiOutlineX className="h-4 w-4" />
        </div>
      </div>
      {children}
    </div>
  )
}

export default ReservationContainer

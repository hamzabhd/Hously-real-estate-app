import { ReservationDetailsType } from '@/types/types'

const ReservationDetails = ({
  reservation,
}: {
  reservation: ReservationDetailsType
}) => {
  const { securityFee, cleaningFee, nights, price, reservationTotal } =
    reservation
  return (
    <>
      <span className="mx-auto hidden h-px w-[calc(100%-2rem)] bg-grey md:block"></span>
      <div className="flex flex-col border-t border-grey p-4 md:border-none">
        <div className="mb-4 flex items-center justify-between ">
          <span className="text-sm text-black/60 underline">Cleaning fees</span>
          <div className="flex items-center gap-x-4">
            <span>{cleaningFee || 0}$</span>
            <span>x</span>
            <span>1</span>
          </div>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm text-black/60 underline">Security fees</span>
          <div className="flex items-center gap-x-4">
            <span>{securityFee || 0}$</span>
            <span>x</span>
            <span>1</span>
          </div>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm text-black/60 underline">
            Price per night
          </span>
          <div className="flex items-center gap-x-4">
            <span>{price}$</span>
            <span>x</span>
            <span>{nights}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-black/60 underline">Hously fees</span>
          <div className="flex items-center gap-x-4">
            <span>{price}$ x 5%</span>
            <span>x</span>
            <span>{nights}</span>
          </div>
        </div>
      </div>
      <div className="relative mt-auto flex items-center justify-between p-4">
        <span className="absolute top-0 mx-auto hidden h-px w-[calc(100%-2rem)] bg-grey md:block"></span>
        <span className="text-lg font-bold">Reservation total</span>
        <span className="flex items-center gap-x-4 text-lg font-bold">
          {reservationTotal}$
        </span>
      </div>
    </>
  )
}

export default ReservationDetails

import ReservationCard from '@/components/custom/ReservationCard'
import SeeMoreBtn from '@/components/custom/SeeMoreBtn'
import { UserReservation } from '@/types/types'
import { useShowMore } from 'hooks/useShowMore'

const ReservedProperties = ({
  reservations,
}: {
  reservations: UserReservation[]
}) => {
  const { handleItems, itemsToSee } = useShowMore(reservations.length)

  return (
    <>
      <div className="my-4 gap-4 sm:grid sm:grid-cols-2 sm:px-4 lg:my-6 lg:grid-cols-3 lg:px-6">
        {reservations.slice(0, itemsToSee).map((r, i) => (
          <ReservationCard reservation={r} key={i} />
        ))}
      </div>
      {reservations.length > 3 && (
        <SeeMoreBtn
          label={
            reservations.length <= itemsToSee
              ? 'Hide all reservations'
              : 'View more reservations'
          }
          onClick={handleItems}
          className="mx-4 md:mx-6"
        />
      )}
    </>
  )
}

export default ReservedProperties

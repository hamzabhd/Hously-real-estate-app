import Image from 'next/image'
import { UserReservation } from '@/types/types'
import { HiOutlineLocationMarker, HiOutlineTag } from 'react-icons/hi'
import { reformDate } from 'utils/reformDate'
import { MdOutlinePeople } from 'react-icons/md'
import { TbDoorEnter, TbDoorExit } from 'react-icons/tb'
import Link from 'next/link'

const ReservationCard = ({ reservation }: { reservation: UserReservation }) => {
  const { property, reserver } = reservation
  const propertyImage = property.images[0]
  const isCheckedOut = new Date().getTime() > new Date(reservation.to).getTime()

  const reserverType = typeof reserver === 'string'

  return (
    <div className="sm:container-shadow relative sm:overflow-hidden sm:rounded-3xl sm:border-2 sm:border-white">
      <div className="relative aspect-[16/10] w-full flex-shrink-0 overflow-hidden">
        <Image
          src={propertyImage}
          alt="property image"
          sizes="(min-width: 640px) 300px, 100vw"
          style={{
            objectFit: 'cover',
          }}
          fill
        />
      </div>
      <div className="w-full p-4">
        <div className="mb-4">
          <div>
            <h2 className="text-xl font-bold tracking-wide">
              {property.title}
            </h2>
            {!reserverType && (
              <span className="text-sm text-black/60">
                Reserved by:{' '}
                <Link
                  href={`/user/${!reserverType && reserver._id}`}
                  className="font-medium transition-colors hover:text-black"
                >
                  {reserver.fullName}
                </Link>
              </span>
            )}
          </div>
          <ul className="my-4 mb-6 flex flex-col gap-y-2">
            <li className="flex items-center gap-x-2">
              <HiOutlineLocationMarker className="shrink-0 text-sm text-black/60" />
              <span className="truncate text-xs font-medium tracking-wider text-black/40">
                {property.address}
              </span>
            </li>
            <li className="flex items-center gap-x-2">
              <HiOutlineTag className="text-sm text-black/60" />
              <span className="inline-block truncate text-xs font-medium tracking-wider text-black/40">
                Rental price: {property.price}$
              </span>
            </li>
            <li className="flex items-center gap-x-2">
              <MdOutlinePeople className="text-sm text-black/60" />
              <span className="inline-block truncate text-xs font-medium tracking-wider text-black/40">
                Expected guests {reservation.guests}
              </span>
            </li>
            <li className="flex items-center gap-x-2">
              {!isCheckedOut ? (
                <>
                  <TbDoorEnter className="text-sm text-black/60" />
                  <span className="inline-block truncate text-xs font-medium tracking-wider text-black/40">
                    Reserved on {reformDate(reservation.from)} to{' '}
                    {reformDate(reservation.to)}
                  </span>
                </>
              ) : (
                <>
                  <TbDoorExit className="text-sm text-black/60" />
                  <span className="inline-block truncate text-xs font-medium tracking-wider text-black/40 line-through">
                    Checked out on {reformDate(reservation.to)}
                  </span>
                </>
              )}
            </li>
          </ul>
        </div>

        <Link
          href={`/property/${property._id}`}
          className="flex w-full cursor-pointer items-center justify-center rounded-full border border-grey py-3 font-medium text-black transition-colors hover:border-black/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
        >
          View property
        </Link>
      </div>
    </div>
  )
}

export default ReservationCard

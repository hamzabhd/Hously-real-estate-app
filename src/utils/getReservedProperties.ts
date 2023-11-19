import { PropertyType, UserReservation } from '@/types/types'

export const getReservedProperties = (properties: PropertyType[]) => {
  let reservationsArr: UserReservation[] = []
  properties
    .filter((p) => p.reservations.length !== 0)
    .map((p) => p.reservations)
    .forEach((r) => reservationsArr.push(...r))

  return reservationsArr
}

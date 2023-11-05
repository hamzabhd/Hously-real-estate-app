export const getReservationRange = (
  dateRanges: { from: Date; to: Date }[],
): string[] => {
  let reservationRange: string[] = []

  dateRanges.forEach(({ from, to }) => {
    let currentDate = new Date(from)
    const endDate = new Date(to)

    while (currentDate <= endDate) {
      reservationRange.push(new Date(currentDate).toISOString())
      currentDate.setDate(currentDate.getDate() + 1)
    }
  })

  return reservationRange
}

export const isReserved = (
  dateRanges: { from: Date; to: Date }[],
  calendarDay: number,
  year: number,
  month: number,
) => {
  const reservationRange = getReservationRange(dateRanges)
  const calendarDate = new Date(year, month, calendarDay).toISOString()
  const isReservedDate = reservationRange.includes(calendarDate)

  return isReservedDate
}

export const reformDate = (date: string): string => {
  const newDate = new Date(date)

  const reformed =
    newDate.getDate() +
    ' / ' +
    (newDate.getMonth() + 1) +
    ' / ' +
    newDate.getFullYear()
  return reformed
}

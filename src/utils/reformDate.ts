export const reformDate = (date: string): string => {
  const newDate = new Date(date).toString()

  const regEx = /[a-z]+\s+\d+\s\d+/gi
  const reformed = newDate.match(regEx)?.[0] as string
  return reformed
}

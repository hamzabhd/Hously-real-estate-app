export const reformLongAddress = (address: string) => {
  if (address.length > 27) {
    return address.slice(0, 27) + '...'
  }
  return address
}

export const isAdded = (item: string | number, arr: (string | number)[]) => {
  if (arr.length === 0) return false
  // return true if the arr contains the item
  return arr.includes(item)
}

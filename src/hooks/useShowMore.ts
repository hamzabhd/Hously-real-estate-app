import { useState } from 'react'

export const useShowMore = (length: number, extend?: number) => {
  const [itemsToSee, setItemsToSee] = useState(extend || 3)
  // show show more reviews
  const numberToSee = typeof extend === 'number' ? extend / 2 : extend
  const handleItems = () => {
    setItemsToSee((prevState) => {
      if (length <= prevState) {
        return extend || 3
      }
      return prevState + (numberToSee || 3)
    })
  }
  return {
    itemsToSee,
    handleItems,
  }
}

import { useState } from 'react'

export const useShowMore = (length: number) => {
  const [itemsToSee, setItemsToSee] = useState(3)
  // show show more reviews
  const handleItems = () => {
    setItemsToSee((prevState) => {
      if (length <= prevState) {
        return 3
      }
      return prevState + 3
    })
  }
  return {
    itemsToSee,
    handleItems,
  }
}

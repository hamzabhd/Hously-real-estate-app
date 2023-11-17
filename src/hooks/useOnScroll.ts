import { useEffect, useState } from 'react'

export const useOnScroll = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [prevPageHeight, setPrevPageHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentPageHeight = window.scrollY

      if (prevPageHeight > currentPageHeight) {
        setIsScrollingDown(false)
      } else {
        setIsScrollingDown(true)
      }
      setPrevPageHeight(currentPageHeight)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevPageHeight])

  return {
    isScrollingDown,
  }
}

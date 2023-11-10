import { useEffect, useState } from 'react'

// detecting large screens
export const useDisableClick = () => {
  const [disableClick, setDisableClick] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDisableClick(true)
      } else {
        setDisableClick(false)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    disableClick,
  }
}

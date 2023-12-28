import { RefObject, useEffect } from 'react'

export const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  callback: () => void,
) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [ref, callback])
}

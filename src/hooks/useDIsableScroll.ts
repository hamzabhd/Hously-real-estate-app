import { useEffect } from 'react'

const useDisableScroll = (isOpened: boolean) => {
  useEffect(() => {
    const bodyElement = document.body

    const originalOverflow = bodyElement.style.overflowY

    bodyElement.style.overflowY = isOpened ? 'hidden' : 'auto'

    return () => {
      bodyElement.style.overflowY = originalOverflow
    }
  }, [isOpened])
}
export default useDisableScroll

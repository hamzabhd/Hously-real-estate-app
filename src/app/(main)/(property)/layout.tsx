import ImageCover from '@/components/shared/ImageCover'
import { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ImageCover />
      {children}
    </>
  )
}

export default layout

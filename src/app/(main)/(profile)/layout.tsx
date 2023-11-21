import ImageCover from '@/components/custom/ImageCover'
import Image from 'next/image'
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

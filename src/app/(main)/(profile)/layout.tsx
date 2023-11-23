import ImageCover from '@/components/shared/ImageCover'
import { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ImageCover />
      <div className="mx-auto min-h-screen max-w-[1248px]">{children}</div>
    </>
  )
}

export default layout

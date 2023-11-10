import { ReactNode } from 'react'

const ReviewContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mb-4 md:mt-8 md:grid md:grid-cols-2 md:gap-4 md:px-0 lg:gap-6 xl:grid-cols-3">
      {children}
    </div>
  )
}

export default ReviewContainer

import { ReactNode } from 'react'

const Container = ({
  children,
  type,
  title,
}: {
  children: ReactNode
  type: 'grid' | 'normal'
  title?: string
}) => {
  const isGrid = type === 'grid'
  return (
    <div className="mb-6 lg:first:pt-7">
      {title && <span className="mb-4 block font-medium lg:mb-5">{title}</span>}
      <div
        className={`${
          isGrid ? 'grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4' : ''
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default Container

import { ReactNode } from 'react'
import ErrorDisplay from '../custom/ErrorDisplay'

const Container = ({
  children,
  type,
  title,
  error,
  isSearch,
}: {
  children: ReactNode
  type: 'grid' | 'normal'
  title?: string
  error?: string
  isSearch?: boolean
}) => {
  const isGrid = type === 'grid'
  return (
    <div className={`mb-6 ${!isSearch ? 'lg:first:pt-7' : ''}`}>
      {title && <span className="mb-4 block font-medium lg:mb-5">{title}</span>}
      {error && <ErrorDisplay error={error} />}
      <div
        className={`${
          isGrid ? 'grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4' : ''
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default Container

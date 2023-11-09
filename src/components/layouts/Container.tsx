import { ReactNode } from 'react'
import { MdOutlineInfo } from 'react-icons/md'

const Container = ({
  children,
  type,
  title,
  error,
}: {
  children: ReactNode
  type: 'grid' | 'normal'
  title?: string
  error?: string
}) => {
  const isGrid = type === 'grid'
  return (
    <div className="mb-6 lg:first:pt-7">
      {title && <span className="mb-4 block font-medium lg:mb-5">{title}</span>}
      {error && (
        <div className="mb-5 flex items-center gap-x-2 rounded-2xl border border-red-500 p-4 text-sm text-red-500 lg:mb-6">
          <MdOutlineInfo className="h-4 w-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
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

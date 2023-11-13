import React, { ReactNode } from 'react'
import { HiOutlineX } from 'react-icons/hi'

const SearchContainer = ({
  title,
  toggleContainer,
  children,
}: {
  title: string
  toggleContainer: () => void
  children: ReactNode
}) => {
  const searchActive = true
  //   max-w-[832px]
  return (
    <div className="fixed left-0 top-0 z-50 min-h-screen w-full bg-black/20 backdrop-blur-[2px]">
      <div className="container-shadow h-screen w-full animate-popup bg-white">
        <div className="sticky top-0 flex items-center justify-between gap-x-4 border-b border-grey p-4 lg:px-6">
          <span className="font-medium text-black">{title}</span>

          <button onClick={toggleContainer} className="text-sm underline">
            Clear all
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default SearchContainer

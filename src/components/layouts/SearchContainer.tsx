import React, { ReactNode } from 'react'

const SearchContainer = ({
  children,
  clearAllForm,
}: {
  children: ReactNode
  clearAllForm: () => void
}) => {
  const searchActive = true
  return (
    <>
      <div className="fixed left-0 top-0 z-50 min-h-screen w-full items-center md:flex md:bg-black/20 md:p-6 md:backdrop-blur-[2px]">
        <div className="container-shadow mx-auto h-screen w-full max-w-[848px] animate-popup bg-white md:h-[780px] md:rounded-3xl">
          <div className="sticky top-0 flex items-center justify-between gap-x-4 border-b border-grey p-4 lg:px-6">
            <span className="font-medium text-black">Find a property</span>

            <button onClick={clearAllForm} className="text-sm underline">
              Clear all
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

export default SearchContainer

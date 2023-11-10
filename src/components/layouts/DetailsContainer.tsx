import { ReactNode } from 'react'
import { HiOutlineX } from 'react-icons/hi'

const DetailsContainer = ({
  title,
  toggleContainer,
  children,
}: {
  title: string
  toggleContainer: () => void
  children: ReactNode
}) => {
  return (
    <div className="align fixed left-0 top-0 z-50 grid min-h-full w-full items-center bg-black/20 px-4 backdrop-blur-[2px]">
      <div className="container-shadow mx-auto h-fit w-full max-w-[500px] animate-popup overflow-hidden rounded-3xl bg-white">
        <div className="flex items-center justify-between gap-x-4 border-b border-grey p-4 lg:px-6">
          <span className="cursor-pointer font-medium text-black">{title}</span>

          <button
            className="cursor-pointer rounded-full bg-light-100 p-2 transition-colors hover:bg-grey"
            onClick={toggleContainer}
          >
            <HiOutlineX className="h-4 w-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default DetailsContainer

import { useState } from 'react'
import { IoFilter } from 'react-icons/io5'
import { PiCaretUpBold } from 'react-icons/pi'

const FilterNav = () => {
  const [isFilter, setIsFilter] = useState(false)

  const style = !isFilter
    ? {
        width: '85px',
        backgroundColor: 'transparent',
        borderRadius: '50px',
      }
    : {
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, .6)',
      }

  return (
    <div className="absolute left-0 top-full mt-px flex w-full items-center justify-center">
      <div className="px-4 py-2 transition-all duration-300" style={style}>
        {isFilter ? (
          <div className="show-items flex w-full flex-col items-center justify-center gap-x-2 md:flex-row md:justify-between">
            <div className="w-full py-2 md:w-1/4 md:py-1 ">
              <span className="mb-4 block text-xs font-medium tracking-wider text-black/60 md:hidden">
                Listing type
              </span>
              <ul className="flex items-center gap-x-2">
                <li className="flex w-full cursor-pointer justify-center rounded-full border border-grey px-4 py-3 text-sm font-medium transition-colors hover:border-black/60">
                  Rent
                </li>
                <li className="flex w-full cursor-pointer justify-center rounded-full border border-grey px-4 py-3 text-sm font-medium transition-colors hover:border-black/60">
                  Buy
                </li>
              </ul>
            </div>
            <div className="w-full py-2 pb-4 md:ml-auto md:w-1/2 md:py-1">
              <span className="mb-4 block text-xs font-medium tracking-wider text-black/60 md:hidden">
                Property type
              </span>
              <ul className="grid w-full grid-cols-2 gap-2 md:flex">
                <li className="flex w-full cursor-pointer justify-center rounded-full border border-grey px-4 py-3 text-sm font-medium transition-colors hover:border-black/60">
                  Apartment
                </li>
                <li className="flex w-full cursor-pointer justify-center rounded-full border border-grey px-4 py-3 text-sm font-medium transition-colors hover:border-black/60">
                  House
                </li>
                <li className="flex w-full cursor-pointer justify-center rounded-full border border-grey px-4 py-3 text-sm font-medium transition-colors hover:border-black/60">
                  Villa
                </li>
                <li className="flex w-full cursor-pointer justify-center rounded-full border border-grey px-4 py-3 text-sm font-medium transition-colors hover:border-black/60">
                  Cabin
                </li>
              </ul>
            </div>
            <button
              className="flex items-center gap-x-2 rounded-full bg-black px-4 py-2 transition-colors hover:bg-neutral-800"
              onClick={() => setIsFilter(false)}
            >
              <PiCaretUpBold className="text-sm text-white md:-rotate-90" />
              <span className="text-xs font-medium tracking-wide text-white">
                Hide
              </span>
            </button>
          </div>
        ) : (
          <>
            {/* main button that fires the filter nav */}
            <button
              className="show-items flex items-center justify-center gap-x-2 rounded-full bg-white/60 px-4 py-2 transition-colors hover:bg-white"
              onClick={() => setIsFilter(true)}
            >
              <IoFilter className="text-sm" />
              <span className="text-xs font-medium tracking-wide">Filter</span>
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default FilterNav

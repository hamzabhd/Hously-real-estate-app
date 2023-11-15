import { useState } from 'react'
import { IoFilter } from 'react-icons/io5'
import FilterButtons from './FilterButtons'

const FilterNav = () => {
  const [isFilter, setIsFilter] = useState(false)

  const style = !isFilter
    ? {
        width: '85px',
        borderRadius: '50px',
      }
    : {
        width: '100%',
      }

  return (
    <div className="absolute left-0 top-full mt-px flex w-full items-center justify-center">
      <div
        className={`px-4 py-2 transition-all duration-300 ${
          isFilter ? 'bg-white/60 backdrop-blur-lg ' : ''
        }`}
        style={style}
      >
        {isFilter ? (
          <FilterButtons hideFilter={() => setIsFilter(false)} />
        ) : (
          <>
            {/* main button that fires the filter nav */}
            <button
              className="show-items flex items-center justify-center gap-x-2 rounded-full bg-black/10 px-4 py-2 backdrop-blur-lg transition-colors hover:bg-black/20"
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

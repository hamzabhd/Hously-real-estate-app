import { useEffect, useRef, useState } from 'react'
import { IoFilter } from 'react-icons/io5'
import { useOnScroll } from 'hooks/useOnScroll'
import { useOutsideClick } from 'hooks/useOutsideClick'
import FilterButtons from './FilterButtons'

const FilterNav = () => {
  const { isScrollingDown } = useOnScroll()
  const [isFilter, setIsFilter] = useState(false)
  const filterRef = useRef<HTMLDivElement>(null)
  useOutsideClick(filterRef, () => setIsFilter(false))

  const style = !isFilter
    ? {
        width: '85px',
        borderRadius: '50px',
      }
    : {
        width: '100%',
      }

  const filterStyle = isScrollingDown
    ? {
        transform: 'translateY(-100%)',
        zIndex: -1111,
      }
    : {}

  useEffect(() => {
    if (isScrollingDown && isFilter) {
      setIsFilter(false)
    }
  }, [isScrollingDown, isFilter])

  return (
    <div
      className="absolute left-0 top-full -z-10 flex w-full translate-y-0 items-center justify-center transition-transform duration-300"
      ref={filterRef}
      style={filterStyle}
    >
      <div
        className={`py-2 transition-all duration-300 ${
          isFilter ? 'bg-white/60 px-4 backdrop-blur-lg ' : ''
        }`}
        style={style}
      >
        {isFilter ? (
          <FilterButtons hideFilter={() => setIsFilter(false)} />
        ) : (
          <>
            {/* main button that fires the filter nav */}
            <button
              className="show-items container-shadow flex items-center justify-center gap-x-2 rounded-full bg-white/50 px-4 py-2 backdrop-blur-lg transition-colors hover:bg-white"
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

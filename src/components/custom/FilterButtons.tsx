import { useSearchQueries } from 'hooks/useSearchQueries'
import { PiCaretUpBold } from 'react-icons/pi'

const FilterButtons = ({ hideFilter }: { hideFilter: () => void }) => {
  const { handleQueries, searchParams } = useSearchQueries()
  const property = searchParams.get('property')
  const listing = searchParams.get('type')

  const handleListing = (value: string) => {
    handleQueries(value, 'type', listing)
  }

  const handleProperty = (value: string) => {
    handleQueries(value, 'property', property)
  }

  const setClassName = (value: string, type: string | null) => {
    if (type === value) {
      return 'border-black/60'
    }
    return 'border-black/20'
  }

  return (
    <div className="show-items flex w-full flex-col items-center justify-center gap-x-2 md:flex-row md:justify-between">
      <div className="w-full py-2 md:w-1/4 md:py-1 ">
        <span className="mb-4 block text-xs font-medium tracking-wider md:hidden">
          Listing type
        </span>
        <ul className="flex items-center gap-x-2">
          <li
            className={`flex w-full cursor-pointer justify-center rounded-full border px-4 py-3 text-sm font-medium transition-colors hover:border-black/60 ${setClassName(
              'rent',
              listing,
            )}`}
            onClick={() => handleListing('rent')}
          >
            Rent
          </li>
          <li
            className={`flex w-full cursor-pointer justify-center rounded-full border px-4 py-3 text-sm font-medium transition-colors hover:border-black/60 ${setClassName(
              'buy',
              listing,
            )}`}
            onClick={() => handleListing('buy')}
          >
            Buy
          </li>
        </ul>
      </div>
      <div className="w-full py-2 pb-4 md:ml-auto md:w-1/2 md:py-1">
        <span className="mb-4 block text-xs font-medium tracking-wider md:hidden">
          Property type
        </span>
        <ul className="grid w-full grid-cols-2 gap-2 md:flex">
          <li
            className={`flex w-full cursor-pointer justify-center rounded-full border px-4 py-3 text-sm font-medium transition-colors hover:border-black/60 ${setClassName(
              'apartment',
              property,
            )}`}
            onClick={() => handleProperty('apartment')}
          >
            Apartment
          </li>
          <li
            className={`flex w-full cursor-pointer justify-center rounded-full border px-4 py-3 text-sm font-medium transition-colors hover:border-black/60 ${setClassName(
              'house',
              property,
            )}`}
            onClick={() => handleProperty('house')}
          >
            House
          </li>
          <li
            className={`flex w-full cursor-pointer justify-center rounded-full border px-4 py-3 text-sm font-medium transition-colors hover:border-black/60 ${setClassName(
              'villa',
              property,
            )}`}
            onClick={() => handleProperty('villa')}
          >
            Villa
          </li>
          <li
            className={`flex w-full cursor-pointer justify-center rounded-full border px-4 py-3 text-sm font-medium transition-colors hover:border-black/60 ${setClassName(
              'cabin',
              property,
            )}`}
            onClick={() => handleProperty('cabin')}
          >
            Cabin
          </li>
        </ul>
      </div>
      <button
        className="flex items-center gap-x-2 rounded-full bg-black px-4 py-2 transition-colors hover:bg-neutral-800"
        onClick={hideFilter}
      >
        <PiCaretUpBold className="text-sm text-white md:-rotate-90" />
        <span className="text-xs font-medium tracking-wide text-white">
          Hide
        </span>
      </button>
    </div>
  )
}

export default FilterButtons

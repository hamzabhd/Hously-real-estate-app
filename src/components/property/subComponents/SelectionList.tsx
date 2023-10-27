'use client'
import { useState } from 'react'
import { isAdded } from 'utils/isAdded'
import { BiMinus } from 'react-icons/bi'
import { FiPlus } from 'react-icons/fi'

const SelectionList = ({
  arrOfItems,
  arr,
  handleClick,
}: {
  arrOfItems: string[]
  arr: string[]
  handleClick: (item: string) => void
}) => {
  const [showMore, setShowMore] = useState(false)

  const itemsToShow = arrOfItems.slice(0, !showMore ? 10 : arrOfItems.length)

  return (
    <>
      <ul className="flex flex-wrap gap-2">
        {itemsToShow.map((item, i) => (
          <li
            key={i}
            className={`group cursor-pointer select-none rounded-full border px-4 py-2 transition-colors hover:border-black/60 ${
              isAdded(item, arr)
                ? 'border-black/60'
                : 'border-grey hover:border-black/60'
            }`}
            onClick={() => handleClick(item)}
          >
            <span
              className={`text-sm font-medium transition-colors ${
                isAdded(item, arr)
                  ? 'text-black'
                  : 'text-black/40 group-hover:text-black'
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
      {showMore ? (
        <div
          className="group mt-4 flex cursor-pointer items-center gap-x-2"
          onClick={() => setShowMore(!showMore)}
        >
          <BiMinus className="h-4 w-4 text-red-600" />
          <span className="text-sm font-medium text-red-600 group-hover:underline">
            Show less
          </span>
        </div>
      ) : (
        <div
          className="group mt-4 flex cursor-pointer items-center gap-x-2"
          onClick={() => setShowMore(!showMore)}
        >
          <FiPlus className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-600 group-hover:underline">
            Show more
          </span>
        </div>
      )}
    </>
  )
}

export default SelectionList

import { useState } from 'react'
import { CustomSelectionPropType } from '@/types/types'
import { PiCaretDownBold } from 'react-icons/pi'

const CustomSelectElement = ({
  name,
  label,
  listItems,
  selectedValue,
  getValue,
  Icon,
  error,
}: CustomSelectionPropType) => {
  const [select, setSelect] = useState(false)
  return (
    <div
      className={`relative w-full cursor-pointer appearance-none border bg-white p-4 ${
        select
          ? 'rounded-t-3xl border-b-0 border-black/60'
          : 'rounded-full border-grey'
      }`}
      onClick={() => setSelect(!select)}
    >
      {/* moving label attached to the main div */}
      <span
        className={`absolute left-4 z-10 origin-[0] transform cursor-text select-none bg-white px-1 text-sm font-medium text-black/40 duration-300 ${
          error ? 'text-red-400' : ''
        } ${
          selectedValue
            ? 'top-1 -translate-y-4 scale-75 cursor-default px-2 text-base text-gray-600 '
            : 'top-1/2 -translate-y-1/2 scale-100'
        }`}
      >
        {label}
      </span>
      <div
        className={`flex items-center gap-x-4  transition-opacity ${
          selectedValue ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Icon className="text-lg" />
        <span className="text-sm">{selectedValue || '.'}</span>
      </div>
      {/* selection list rendered dynamically  */}
      {select && (
        <ul
          className={`absolute -left-px top-full z-40 h-40 w-[calc(100%+2px)] overflow-auto rounded-b-3xl border border-t-grey bg-white p-2 ${
            select ? 'border-black/60' : 'border-grey'
          }`}
        >
          {listItems.map((item, i) => (
            <li
              key={i}
              className="flex cursor-pointer items-center gap-x-4 rounded-2xl px-2 py-3"
              onClick={() => getValue(item)}
            >
              <Icon className="text h-4 w-4" />
              <span className="text-black/60">{item}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <PiCaretDownBold
          className={`${select ? 'rotate-180' : ''} transition`}
        />
      </div>
    </div>
  )
}

export default CustomSelectElement

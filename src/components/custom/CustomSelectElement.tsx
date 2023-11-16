import { useRef, useState } from 'react'
import { CustomSelectionPropType } from '@/types/types'
import { PiCaretDownBold } from 'react-icons/pi'
import detectOutsideClick from 'utils/detectOutsideClick'

const CustomSelectElement = ({
  label,
  listItems,
  selectedValue,
  className,
  getValue,
  Icon,
  error,
}: CustomSelectionPropType) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [select, setSelect] = useState(false)
  const selectedChoice = (item: string) => {
    if (selectedValue === item) {
      return 'bg-light-500 text-black'
    }
    return 'text-black/60'
  }

  detectOutsideClick(containerRef, () => setSelect(false))

  return (
    <div
      ref={containerRef}
      className={`relative w-full cursor-pointer appearance-none border bg-white px-4 py-[calc(1rem+0.5px)] ${
        select
          ? 'rounded-t-3xl border-black/60 border-b-grey'
          : 'rounded-full border-grey'
      } ${className}`}
      onClick={() => setSelect(!select)}
    >
      {/* moving label attached to the main div */}
      <span
        className={`absolute left-4 z-10 origin-[0] transform cursor-text select-none bg-white text-sm font-medium duration-300 ${
          error ? 'text-red-400' : ''
        } ${select ? 'px-2 text-gray-600' : 'px-1 text-black/40'}
        ${
          selectedValue
            ? 'top-1 -translate-y-4 scale-75 cursor-default text-base'
            : 'top-1/2 -translate-y-1/2 scale-100'
        }`}
      >
        {label}
      </span>
      <div
        className={`flex items-center gap-x-4 transition-opacity ${
          selectedValue ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {Icon && <Icon className="text-lg" />}
        {selectedValue ? (
          <span className="text-sm">{selectedValue}</span>
        ) : (
          <span className="text-sm opacity-0">Select</span>
        )}
      </div>
      {/* selection list rendered dynamically  */}
      {select && (
        <ul
          className={`absolute -left-px top-[calc(100%+1px)] z-40 h-40 w-[calc(100%+2px)] overflow-auto rounded-b-3xl border border-t-transparent bg-white p-2 ${
            select ? 'border-black/60' : 'border-grey'
          }`}
        >
          {listItems.map((item, i) => (
            <li
              key={i}
              className={`group flex cursor-pointer items-center gap-x-4 rounded-2xl px-4 py-3 text-sm transition-colors lg:border-none lg:px-4 lg:hover:bg-light-500  ${selectedChoice(
                item,
              )}`}
              onClick={() => getValue(item)}
            >
              {Icon && <Icon className="text h-4 w-4" />}
              <span className="">{item}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <PiCaretDownBold
          className={`text-sm ${select ? 'rotate-180' : ''} transition`}
        />
      </div>
    </div>
  )
}

export default CustomSelectElement

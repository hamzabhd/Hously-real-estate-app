import { ReactNode, useState } from 'react'
import { IconType } from 'react-icons'
import { PiCaretDownBold } from 'react-icons/pi'

const SelectionContainer = ({
  children,
  selectedValue,
  Icon,
  label,
  error,
}: {
  children: ReactNode
  selectedValue: string
  Icon: IconType
  label: string
  error?: string
}) => {
  const [select, setSelect] = useState(false)

  return (
    <div
      className={`relative w-full cursor-pointer appearance-none border border-grey bg-white p-4 ${
        select ? 'rounded-t-3xl border-b-0' : 'rounded-3xl'
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
        <span className="text-sm">{selectedValue || '_'}</span>
      </div>
      {select && children}
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <PiCaretDownBold
          className={`${select ? 'rotate-180' : ''} transition`}
        />
      </div>
    </div>
  )
}

export default SelectionContainer

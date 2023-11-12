import { useState } from 'react'
import { PiCaretDownBold } from 'react-icons/pi'
import { IconType } from 'react-icons'
import SelectionContainer from '../layouts/SelectionContainer'
import { CustomSelectionPropType } from '@/types/types'

const CustomSelectElement = ({
  name,
  label,
  listItems,
  Icon,
  error,
}: CustomSelectionPropType) => {
  const [selectedValue, setSelectedValue] = useState('')
  return (
    <SelectionContainer
      Icon={Icon}
      selectedValue={selectedValue}
      label={label}
      error={error}
    >
      {/* holds the current selected value */}
      <input
        hidden
        type="text"
        name={name}
        value={selectedValue}
        placeholder=" "
      />
      {/* selection list rendered dynamically  */}
      {listItems && (
        <ul className="absolute -left-px top-full w-[calc(100%+2px)] rounded-b-3xl border border-grey bg-white p-2">
          {listItems.map((item, i) => (
            <li
              key={i}
              className="flex cursor-pointer items-center gap-x-4 rounded-2xl px-2 py-3"
              onClick={() => setSelectedValue(item)}
            >
              <Icon className="text h-4 w-4" />
              <span className="text-black/60">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </SelectionContainer>
  )
}

export default CustomSelectElement

import React, { useState } from 'react'
import SelectionContainer from '../layouts/SelectionContainer'
import { CustomRangePropType } from '@/types/types'

const CustomRangeInput = ({
  name,
  label,
  Icon,
  error,
}: CustomRangePropType) => {
  const [selectedValue, setSelectedValue] = useState('')
  return (
    <SelectionContainer
      Icon={Icon}
      selectedValue={selectedValue}
      label={label}
      error={error}
    >
      <div className="flex items-center gap-x-4">
        <input
          type="range"
          name={name}
          step={0.5}
          min={0.5}
          max={5}
          defaultValue={0.5}
          onChange={(e) => setSelectedValue(e.target.value)}
        />
        <span className="inline-block min-w-[130px] rounded-2xl border px-4 py-2 text-center font-medium">
          {selectedValue} / 5 stars
        </span>
      </div>
    </SelectionContainer>
  )
}

export default CustomRangeInput

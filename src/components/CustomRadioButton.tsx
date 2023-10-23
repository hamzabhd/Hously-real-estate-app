import { ReactNode, ChangeEvent } from 'react'
const CustomRadioButton = ({
  name,
  value,
  id,
  children,
  selected,
  handleChange,
}: {
  name: string
  value: string
  id: string
  children: ReactNode
  selected?: boolean
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div className="relative">
      <input
        type="radio"
        className="peer absolute right-4 top-4"
        name={name}
        value={value}
        onChange={handleChange}
        id={id}
        checked={selected}
      />
      <label
        htmlFor={id}
        className="transitions-colors group flex h-24 w-full cursor-pointer flex-col justify-center  gap-y-2 rounded-2xl border-2 border-grey p-4 peer-checked:border-black/60"
      >
        {children}
      </label>
    </div>
  )
}

export default CustomRadioButton

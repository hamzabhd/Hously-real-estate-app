import { ReactNode } from 'react'

const SpecialButton = ({
  children,
  name,
  hide,
  onClick,
}: {
  children: ReactNode
  name?: string
  hide?: boolean
  onClick?: () => void
}) => {
  return (
    <button
      type="button"
      className="group relative block shrink-0 cursor-pointer rounded-full border border-grey p-3 transition-colors hover:border-black/60"
      onClick={onClick}
    >
      {children}
      {name && (
        <span
          className={`absolute left-1/2 top-full mt-1 hidden -translate-x-1/2 select-none rounded-xl border bg-white px-4 py-2 text-sm ${
            name && !hide ? 'group-hover:block' : ''
          }`}
        >
          {name}
        </span>
      )}
    </button>
  )
}

export default SpecialButton

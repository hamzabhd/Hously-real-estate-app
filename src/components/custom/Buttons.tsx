import React from 'react'
import Line from './Line'

const Buttons = ({
  name,
  className,
  handleClick,
  handleCancel,
}: {
  name: string
  className?: string
  handleClick?: () => void
  handleCancel?: () => void
}) => {
  return (
    <div className={`bg-white ${className ? className : 'mb-4 mt-12'}`}>
      {!className && <Line />}
      <div className="mt-auto flex gap-x-2 md:ml-auto md:w-fit">
        <button
          type="button"
          className="flex w-full cursor-pointer items-center justify-center rounded-full border border-grey px-8 py-[calc(0.75rem-1px)] font-medium text-black transition-colors hover:border-black/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
          onClick={handleCancel}
        >
          <span className="block">Cancel</span>
        </button>
        <button
          className="flex w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-3 font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
          onClick={handleClick}
        >
          <span className="block">{name}</span>
        </button>
      </div>
    </div>
  )
}

export default Buttons

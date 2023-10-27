import React from 'react'

const SeeMoreBtn = ({
  label,
  className,
}: {
  label: string
  className?: string
}) => {
  return (
    <button
      className={`cursor-pointer items-center justify-center rounded-full border border-grey px-4 py-2 font-medium focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600 ${className}`}
    >
      <span className="block cursor-pointer text-sm text-black hover:underline">
        {label}
      </span>
    </button>
  )
}

export default SeeMoreBtn

import React from 'react'

const SeeMoreBtn = ({
  label,
  className,
  textColor,
  onClick,
}: {
  label: string
  className?: string
  textColor?: string
  onClick?: () => void
}) => {
  return (
    <button
      className={`cursor-pointer rounded-full border border-grey px-6 py-2 font-medium transition-colors hover:border-black/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600 ${className}`}
      onClick={onClick}
    >
      <span className={`block cursor-pointer text-sm text-black ${textColor}`}>
        {label}
      </span>
    </button>
  )
}

export default SeeMoreBtn

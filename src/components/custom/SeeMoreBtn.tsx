import React from 'react'

const SeeMoreBtn = ({ className }: { className: string }) => {
  return (
    <button
      className={`cursor-pointer items-center justify-center rounded-full border border-grey px-8 py-3 font-medium text-black transition-colors hover:border-black/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600 ${className}`}
    >
      <span className="block">See more</span>
    </button>
  )
}

export default SeeMoreBtn

import React from 'react'

const Line = ({ className }: { className?: string }) => {
  return (
    <span
      className={`my-4 block h-px w-full bg-black/10 md:my-8 ${className}`}
    ></span>
  )
}

export default Line

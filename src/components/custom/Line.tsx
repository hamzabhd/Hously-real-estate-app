import React from 'react'

const Line = ({ className }: { className?: string }) => {
  return (
    <span className={`mb-4 block h-px w-full bg-black/10 ${className}`}></span>
  )
}

export default Line

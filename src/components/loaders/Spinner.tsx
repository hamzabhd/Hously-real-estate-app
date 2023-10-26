import React from 'react'

const Spinner = ({ label }: { label: string }) => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-full flex-col  items-center justify-center gap-y-8 bg-white/50 backdrop-blur-[2px]">
      <div className="loader"></div>
      <span className="font-bold text-black/80">{label}</span>
    </div>
  )
}

export default Spinner

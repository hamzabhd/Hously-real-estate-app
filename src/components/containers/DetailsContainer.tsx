import { ReactNode } from 'react'

const DetailsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="align fixed left-0 top-0 z-50 grid min-h-full w-full items-center bg-black/20 px-4 backdrop-blur-[2px]">
      <div className="container-shadow mx-auto h-fit w-full max-w-[500px] animate-popup overflow-hidden rounded-3xl bg-white duration-1000">
        {children}
      </div>
    </div>
  )
}

export default DetailsContainer

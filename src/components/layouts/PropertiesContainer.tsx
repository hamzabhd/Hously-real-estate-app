import { ReactNode } from 'react'

const PropertiesContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="my-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-4 md:px-6 lg:my-6 lg:grid-cols-3">
      {children}
    </div>
  )
}

export default PropertiesContainer

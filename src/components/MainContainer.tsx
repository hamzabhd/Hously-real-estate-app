import { ReactNode } from 'react'

const MainContainer = ({
  children,
  order,
  title,
  message,
}: {
  children: ReactNode
  order: string
  title: string
  message?: string
}) => {
  return (
    <div className="lg:grid lg:grid-cols-3">
      <div className="mb-4 mt-2 lg:my-0 lg:mb-5 lg:text-xl">
        <h2 className="mb-2 text-lg font-bold uppercase lg:mb-5 lg:text-xl">
          <span className="block text-black/60">{order}.</span>
          {title}
        </h2>
        <div className="">
          <span className="block text-sm text-black/60 lg:max-w-xs">
            {message}
          </span>
        </div>
      </div>
      <div className="lg:col-start-2 lg:col-end-4">{children}</div>
    </div>
  )
}

export default MainContainer

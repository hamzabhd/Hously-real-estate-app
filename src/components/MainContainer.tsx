import { ReactNode } from 'react'
const MainContainer = ({
  children,
  order,
  title,
}: {
  children: ReactNode
  order: string
  title: string
}) => {
  return (
    <div className="lg:grid lg:grid-cols-3">
      <h2 className="mb-4 mt-2 text-lg font-bold uppercase lg:my-0 lg:mb-5 lg:text-xl">
        <span className="block text-black/60">{order}.</span>
        {title}
      </h2>
      <div className="lg:col-start-2 lg:col-end-4">{children}</div>
    </div>
  )
}

export default MainContainer

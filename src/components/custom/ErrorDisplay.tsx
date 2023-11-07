import { MdOutlineInfo } from 'react-icons/md'

const ErrorDisplay = ({
  error,
  className,
}: {
  error: string
  className?: string
}) => {
  return (
    <>
      {error && (
        <div
          className={`mb-5 flex items-center gap-x-2 rounded-2xl border border-red-500 p-4 text-sm text-red-500 lg:mb-6 ${className}`}
        >
          <MdOutlineInfo className="h-4 w-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </>
  )
}

export default ErrorDisplay

const InputValidator = ({
  message,
  error,
}: {
  message?: string
  error?: string
}) => {
  return (
    <div
      className={`group mb-2 ml-2 sm:mb-0 ${
        error ? 'block' : 'hidden peer-focus:block'
      } `}
    >
      <span
        className={`bg-white text-xs ${
          error
            ? 'border-red-400 text-red-500'
            : 'border-black/40 text-black/60'
        } `}
      >
        {error || message}
      </span>
    </div>
  )
}
export default InputValidator

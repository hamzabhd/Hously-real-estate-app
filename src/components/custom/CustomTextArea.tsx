import InputValidator from './InputValidator'
import { TextAreaPropsType } from '@/types/types'

const CustomTextArea = ({
  name,
  value,
  className,
  handleChange,
  label,
  message,
  error,
  letterCounter,
  max,
}: TextAreaPropsType) => {
  return (
    <div className={className}>
      <div className="relative">
        <textarea
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
          placeholder=" "
          maxLength={max}
          className={`peer block h-36 w-full resize-none appearance-none rounded-3xl border border-grey bg-transparent p-4 text-sm text-black focus:border-black/60 focus:outline-none focus:ring-0
            ${error && 'border-red-500 pr-10 text-red-400'}
            `}
        />
        <label
          htmlFor={name}
          className={`absolute left-4 top-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-1 text-sm font-medium text-black/40 duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:cursor-default peer-focus:px-2 peer-focus:text-base peer-focus:text-gray-600 ${
            error ? 'text-red-400' : ''
          }`}
        >
          {label}
        </label>
        {letterCounter && (!message || !error) && (
          <span className="absolute bottom-2 right-4 text-xs text-black/60">
            <span className="font-medium">{value.length || 0}</span>/
            {letterCounter}
          </span>
        )}
      </div>
      {/* handles the errors or any kind of informative messages */}
      {(message || error) && <InputValidator message={message} error={error} />}
    </div>
  )
}

export default CustomTextArea

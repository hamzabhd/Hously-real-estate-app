import { InputPropsType } from '@/types/types'
import InputValidator from './InputValidator'

const CustomInput = ({
  name,
  value,
  className,
  handleChange,
  max,
  placeholder,
  label,
  type,
  message,
  error,
  children,
  letterCounter,
}: InputPropsType) => {
  const tel = type === 'tel'
  return (
    <>
      {label ? (
        <div className={className}>
          {/* render the input with the moving label */}
          <div className="relative">
            <input
              type={type}
              name={name}
              id={name}
              onChange={handleChange}
              value={value}
              placeholder=" "
              maxLength={max}
              className={`peer block w-full appearance-none rounded-full border border-grey bg-transparent p-4 text-sm focus:border-black/60 focus:text-black focus:outline-none ${
                message && 'focus:pr-10'
              } ${error && 'border-red-500 text-red-500'} ${tel && 'pl-8'}`}
            />
            <label
              htmlFor={name}
              className={`absolute left-4 top-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-1 text-sm font-medium text-black/40 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:cursor-default peer-focus:px-2 peer-focus:text-gray-600 ${
                error ? 'text-red-400' : ''
              }`}
            >
              {label}
            </label>
            {tel && (
              <span className="absolute left-4 top-1/2 block -translate-y-1/2 font-medium text-black/40">
                +
              </span>
            )}
            {children}
            {letterCounter && (!message || !error) && (
              <span className="absolute bottom-2 right-4 text-xs text-black/60">
                <span className="font-medium">{value.length || 0}</span>/
                {letterCounter}
              </span>
            )}
          </div>
          {/* handles the errors or any kind of informative messages */}
          {(message || error) && (
            <InputValidator message={message} error={error} />
          )}
        </div>
      ) : (
        <div className={className}>
          {/* render the input without the moving label */}
          <div className="relative">
            <input
              type={type}
              name={name}
              id={name}
              onChange={handleChange}
              value={value}
              placeholder={placeholder}
              className={`peer block w-full appearance-none rounded-full border border-grey bg-transparent p-4 text-sm focus:border-black/60 focus:text-black focus:outline-none ${
                message && 'focus:pr-10'
              } ${error && 'border-red-500 pr-10 text-red-400'}`}
            />
          </div>
          {/* handles the errors or any kind of informative messages */}
          {(message || error) && (
            <InputValidator message={message} error={error} />
          )}
        </div>
      )}
    </>
  )
}

export default CustomInput

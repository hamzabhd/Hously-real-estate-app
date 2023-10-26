import { MdOutlineInfo } from 'react-icons/md'
import { ChangeEvent, ReactNode } from 'react'

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
}: {
  name: string
  value: string
  className: string
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  max?: number
  placeholder?: string
  label?: string
  type?: string
  message?: string
  error?: string
  children?: ReactNode
}) => {
  return (
    <>
      {type ? (
        label ? (
          <div className={className}>
            <input
              type={type}
              name={name}
              id={name}
              onChange={handleChange}
              value={value}
              placeholder=" "
              maxLength={max}
              className={`peer block w-full appearance-none rounded-full border border-grey bg-transparent p-4 focus:border-black/60 focus:text-black focus:outline-none ${
                message && 'focus:pr-10'
              } ${error && 'border-red-500 pr-10 text-red-500'} ${
                type === 'tel' && 'pl-8'
              }`}
            />
            <label
              htmlFor={name}
              className={`absolute left-3 top-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-1 font-medium text-black/40 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:cursor-default peer-focus:px-2 peer-focus:text-gray-600 ${
                error && 'text-red-400'
              }`}
            >
              {label}
            </label>
            {type === 'tel' && (
              <span className="absolute left-4 top-1/2 block -translate-y-1/2 font-medium text-black/40">
                +
              </span>
            )}
            {(message || error) && (
              <InputValidator message={message} error={error} />
            )}
            {children}
          </div>
        ) : (
          <div className={className}>
            <input
              type={type}
              name={name}
              id={name}
              onChange={handleChange}
              value={value}
              placeholder={placeholder}
              className={`peer block w-full appearance-none rounded-full border border-grey bg-transparent p-4 focus:border-black/60 focus:text-black focus:outline-none ${
                message && 'focus:pr-10'
              } ${error && 'border-red-500 pr-10 text-red-400'}`}
            />
            {(message || error) && (
              <InputValidator message={message} error={error} />
            )}
          </div>
        )
      ) : (
        <div className={className}>
          <textarea
            name={name}
            id={name}
            value={value}
            onChange={handleChange}
            placeholder=" "
            className={`peer block h-36 w-full resize-none appearance-none rounded-3xl border border-grey bg-transparent p-4 text-black focus:border-black/60 focus:outline-none focus:ring-0
            ${error && 'border-red-500 pr-10 text-red-400'}
            `}
          />
          <label
            htmlFor={name}
            className={`absolute left-4 top-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-1 font-medium text-gray-400 duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:cursor-default peer-focus:border-black/60 peer-focus:px-2 peer-focus:text-gray-600 ${
              error && 'text-red-400'
            }`}
          >
            {label}
          </label>
          {(message || error) && (
            <div className="absolute right-0 top-6">
              <InputValidator message={message} error={error} />
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default CustomInput

const InputValidator = ({
  message,
  error,
}: {
  message?: string
  error?: string
}) => {
  return (
    <div
      className={`group absolute right-4 top-1/2 -translate-y-1/2 ${
        error ? 'block' : 'hidden peer-focus:block'
      } `}
    >
      <MdOutlineInfo
        className={`h-4 w-4 cursor-pointer ${
          error ? 'text-red-500' : 'text-black/60'
        }`}
      />
      <span
        className={`absolute right-0 z-30 mt-1 hidden w-fit whitespace-nowrap rounded-full border bg-white px-4 py-1.5 text-xs group-hover:block ${
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

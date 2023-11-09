import { MdOutlineInfo } from 'react-icons/md'
import { ChangeEvent, ReactNode, useEffect, useRef, useState } from 'react'

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
  letterCounter?: number
}) => {
  const isValidInput = letterCounter === value.length

  return (
    <>
      {type ? (
        label ? (
          <div className={className}>
            <div className="relative">
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
              {children}
              {letterCounter && (!message || !error) && (
                <span className="absolute bottom-1 right-4 text-xs text-black/60">
                  <span className="font-medium">{value.length || 0}</span>/
                  {letterCounter}
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className={className}>
            <div className="relative">
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
            </div>
            {(message || error) && (
              <InputValidator message={message} error={error} />
            )}
          </div>
        )
      ) : (
        <div className={className}>
          <div className="relative">
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
            {letterCounter && (!message || !error) && (
              <span className="absolute bottom-1 right-4 text-xs text-black/60">
                <span className="font-medium">{value.length || 0}</span>/
                {letterCounter}
              </span>
            )}
          </div>
          {(message || error) && (
            <InputValidator message={message} error={error} />
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

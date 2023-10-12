'use client'
import { useState, useRef } from 'react'
import { montserrat } from '@/app/fonts'
import { FcGoogle } from 'react-icons/fc'
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

const Form = () => {
  const [showPassword, setShowPassword] = useState(false)
  const passRef = useRef<HTMLInputElement>(null)
  const pathname = usePathname()

  const isSignIn = /sign-in/.test(pathname)

  function togglePassword() {
    setShowPassword(!showPassword)
    passRef.current?.focus()
  }

  return (
    <form className="w-full py-8 xl:w-[386px]">
      <h2
        className={`${montserrat.className} mb-4 text-4xl font-bold md:text-5xl `}
      >
        {isSignIn ? 'Sign in' : 'Sign up'}
      </h2>
      <p className="mb-12 font-medium text-neutral-600">
        Choose your preferred {isSignIn ? 'sign in' : 'sign up'} method
      </p>

      <button
        type="button"
        className="mb-6 flex w-full flex-wrap items-center justify-center gap-x-4 rounded-full border border-grey px-8 py-3 transition-colors hover:border-black focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
        onClick={() => signIn('google')}
      >
        <FcGoogle className="h-6 w-6 flex-shrink-0" />
        <span className="font-medium text-black">
          {isSignIn ? 'Sign in' : 'Sign up'} with Google
        </span>
      </button>

      <div className="mb-6 mt-4 flex items-center justify-center gap-x-2">
        <span className=" h-[1px] w-full rounded-[1px] bg-grey"></span>
        <span className="inline-block font-medium text-neutral-600">or</span>
        <span className=" h-[1px] w-full rounded-[1px] bg-grey"></span>
      </div>

      <div className="relative mb-4">
        <input
          type="email"
          name="email"
          id="email"
          placeholder=" "
          className=" peer block w-full appearance-none rounded-lg border border-grey bg-transparent px-4 pb-3 pt-4 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0"
        />
        <label
          htmlFor="email"
          className="peer-focus:px-2s absolute left-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-1 text-sm font-medium text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:border-black peer-focus:text-gray-600"
        >
          Email
        </label>
      </div>

      <div className={`relative mb-1 block ${!isSignIn && 'mb-8'}`}>
        <input
          ref={passRef}
          type={showPassword ? 'text' : 'password'}
          name="password"
          id="password"
          placeholder=" "
          className=" peer block w-full appearance-none rounded-lg border border-grey bg-transparent px-4 pb-3 pr-10 pt-4 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0"
        />
        <label
          htmlFor="password"
          className="peer-focus:px-2s absolute left-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-1 text-sm font-medium text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:border-black peer-focus:text-gray-600"
        >
          Password
        </label>

        {showPassword ? (
          <HiOutlineEyeOff
            onClick={togglePassword}
            className="absolute right-4 top-4 h-4 w-4 cursor-pointer text-gray-600 transition-colors hover:text-black"
          />
        ) : (
          <HiOutlineEye
            onClick={togglePassword}
            className="absolute right-4 top-4 h-4 w-4 cursor-pointer text-gray-600 transition-colors hover:text-black"
          />
        )}
      </div>

      {isSignIn && (
        <span className="mb-4 ml-auto block w-fit cursor-pointer text-right text-sm font-bold hover:underline">
          Forgot password?
        </span>
      )}

      <div className="mb-8 flex items-center gap-x-4">
        {isSignIn ? (
          <>
            <input
              id="remember"
              type="checkbox"
              className="peer h-4 w-4 cursor-pointer rounded-md"
            />
            <label
              htmlFor="remember"
              className="cursor-pointer text-sm text-neutral-500 transition-colors peer-checked:text-black"
            >
              Remember me?
            </label>
          </>
        ) : (
          <>
            <input
              id="terms"
              type="checkbox"
              className="peer h-4 w-4 cursor-pointer rounded-md"
            />
            <label
              // htmlFor="terms"
              className="cursor-pointer text-sm text-neutral-500 transition-colors"
            >
              I accept and agree to the{' '}
              <span className="font-medium text-black transition-all hover:underline">
                terms and conditions.
              </span>
            </label>
          </>
        )}
      </div>

      <button className="mb-1 w-full rounded-full bg-black px-6 py-3 font-bold text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600">
        {isSignIn ? 'Sign in' : 'Sign up'}
      </button>
      <span className="text-sm text-gray-600">
        {isSignIn ? "Don't" : 'Already'} have an account?
        <Link
          href={isSignIn ? '/sign-up' : '/sign-in'}
          className="font-bold transition-colors hover:text-black"
        >
          {isSignIn ? ' Sign up' : ' Sign in'}
        </Link>
      </span>
    </form>
  )
}

export default Form

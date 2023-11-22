'use client'
import { useRef, useEffect } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { IoLogoGithub } from 'react-icons/io'
import { usePathname } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useSearchQueries } from 'hooks/useSearchQueries'
import { notify } from 'utils/notify'
import Link from 'next/link'
import ProviderAuthButton from './ProviderAuthButton'

const Form = () => {
  const { prevPage, authError } = useSearchQueries()
  const pathname = usePathname()

  const isSignIn = /sign-in/.test(pathname)

  const getLink = () => {
    if (isSignIn) {
      if (prevPage) {
        return '/sign-up?prev-page=' + prevPage.replace(/\//g, '%2F')
      }
      return 'sign-up'
    } else {
      if (prevPage) {
        return '/sign-in?prev-page=' + prevPage.replace(/\//g, '%2F')
      }
      return '/sign-in'
    }
  }

  const handAuth = (provider: string) => {
    return signIn(provider, { callbackUrl: prevPage || '/' })
  }

  useEffect(() => {
    if (!authError) return
    notify(
      {
        success: false,
        message: 'An account with this email address already exists',
      },
      'error',
    )
  }, [authError])

  return (
    <form className="w-full py-8 xl:w-[386px]">
      <h2 className="mb-4 text-4xl font-bold md:text-5xl">
        {isSignIn ? 'Sign in' : 'Sign up'}
      </h2>
      <p className="mb-12 font-medium text-neutral-600">
        Choose your preferred {isSignIn ? 'sign in' : 'sign up'} method
      </p>

      <ProviderAuthButton handleAuth={() => handAuth('google')}>
        <FcGoogle className="h-6 w-6 flex-shrink-0" />
        <span className="font-medium text-black">
          {isSignIn ? 'Sign in' : 'Sign up'} with Google
        </span>
      </ProviderAuthButton>

      <ProviderAuthButton handleAuth={() => handAuth('github')}>
        <IoLogoGithub className="h-6 w-6 flex-shrink-0" />
        <span className="font-medium text-black">
          {isSignIn ? 'Sign in' : 'Sign up'} with GitHub
        </span>
      </ProviderAuthButton>

      <div className="mb-6 mt-4 flex items-center justify-center gap-x-2">
        <span className=" h-[1px] w-full rounded-[1px] bg-grey"></span>
        <span className="inline-block font-medium text-neutral-600">or</span>
        <span className=" h-[1px] w-full rounded-[1px] bg-grey"></span>
      </div>

      <span className="text-sm text-gray-600">
        {isSignIn ? "Don't" : 'Already'} have an account?
        <Link
          href={getLink()}
          className="font-bold transition-colors hover:text-black"
        >
          {isSignIn ? ' Sign up' : ' Sign in'}
        </Link>
      </span>
    </form>
  )
}

export default Form

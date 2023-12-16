import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import UserImage from '../shared/UserImage'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { UserObj } from '@/types/types'

const NavDropDown = ({
  session,
  user,
  toggleNav,
}: {
  session: boolean
  user: UserObj
  toggleNav: () => void
}) => {
  return (
    <ul className="absolute left-0 top-full z-50 w-full border-y bg-white p-2 pb-4 lg:left-auto lg:right-4 lg:mt-2 lg:w-fit lg:rounded-3xl lg:border lg:pb-2">
      {session ? (
        <>
          <li className="lg:hidden" onClick={toggleNav}>
            <Link
              href="/create-property"
              className="block cursor-pointer items-center justify-center rounded-2xl px-4 py-2 text-black/60 transition-all hover:bg-lightGrey  hover:text-black"
            >
              <span>List your property</span>
            </Link>
          </li>
          <li onClick={toggleNav}>
            <Link
              href="/profile"
              className="block cursor-pointer items-center justify-center rounded-2xl px-4 py-2 text-black/60 transition-all hover:bg-lightGrey  hover:text-black"
            >
              <span>Profile</span>
            </Link>
          </li>
          <li
            className="block cursor-pointer items-center justify-center rounded-2xl px-4 py-2 text-black/60 transition-all hover:bg-lightGrey  hover:text-black"
            onClick={() => {
              signOut()
              toggleNav()
            }}
          >
            <span>Sign out</span>
          </li>
          <span className="mx-auto my-2 block h-[1px] w-[90%] bg-grey"></span>
          <li onClick={toggleNav}>
            <Link
              href="/profile"
              className="relative flex cursor-pointer items-center gap-x-4 rounded-3xl bg-light-500 px-4 py-4 text-black transition-all"
            >
              <UserImage name={user.fullName} imageUrl={user.profilePicture} />
              <div className="flex flex-col">
                <span className="block font-bold tracking-wide">
                  {user.fullName}
                </span>
                <span className="block text-black/60">{user.email}</span>
              </div>

              <div className="ml-auto w-fit cursor-pointer rounded-lg p-2 transition-colors hover:bg-whiteHover">
                <MdKeyboardArrowRight className="text-xl" />
              </div>
            </Link>
          </li>
        </>
      ) : (
        <li className="flex gap-x-2 lg:hidden">
          <li className="w-full" onClick={toggleNav}>
            <Link
              href="/sign-in"
              className="flex cursor-pointer items-center justify-center rounded-full border border-grey px-8 py-3 font-medium text-black transition-colors hover:border-black/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
            >
              <span className="block">Sign in</span>
            </Link>
          </li>
          <li className="w-full" onClick={toggleNav}>
            <Link
              href="/sign-up"
              className="flex cursor-pointer items-center justify-center rounded-full bg-black px-8 py-3 font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
            >
              <span className="block">Sign up</span>
            </Link>
          </li>
        </li>
      )}
    </ul>
  )
}

export default NavDropDown

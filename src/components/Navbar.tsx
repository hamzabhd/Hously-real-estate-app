'use client'
import { useState } from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'
import { montserrat } from '@/app/fonts'
import UserImage from './UserImage'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'

interface UserObj {
  username: string
  fullName: string
  email: string
  profilePicture: string
  createdAt?: string
  bio?: string
}

type NavbarPropsType = {
  user: UserObj
  session: string | undefined
}

const Navbar = ({ user, session }: NavbarPropsType) => {
  const [IsOpen, setIsOpen] = useState(false)
  const [options, setOptions] = useState(false)

  return (
    <nav
      className={`relative flex items-center justify-between gap-x-2 border-b px-4 ${
        session ? 'py-4' : 'py-3'
      }`}
    >
      <Link
        href="/"
        className="w-fit cursor-pointer select-none rounded-lg bg-white py-2 transition-colors"
      >
        <span className={`${montserrat.className} font-bold lg:text-xl`}>
          Hously.
        </span>
      </Link>

      <ul className="m-auto hidden gap-x-10 lg:flex">
        <li>
          <Link
            href="/home"
            className="block cursor-pointer text-neutral-600 transition-all hover:font-medium hover:text-black"
          >
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/listings"
            className="block cursor-pointer text-neutral-600 transition-all hover:font-medium hover:text-black"
          >
            <span>Listings</span>
          </Link>
        </li>

        <li>
          <Link
            href="about-us"
            className="block cursor-pointer text-neutral-600 transition-all hover:font-medium hover:text-black"
          >
            <span>About us</span>
          </Link>
        </li>
        <li>
          <Link
            href="contact"
            className="block cursor-pointer text-neutral-600 transition-all hover:font-medium hover:text-black"
          >
            <span>Contact</span>
          </Link>
        </li>
      </ul>

      {session && (
        <div className="group/search ml-auto w-fit cursor-pointer rounded-lg bg-white p-2 hover:border-lightGrey hover:bg-lightGrey lg:ml-0 lg:rounded-full lg:bg-lightGrey lg:px-6 lg:py-3">
          <FiSearch className="transition-color text-xl text-neutral-500 group-hover/search:text-black lg:text-2xl" />
        </div>
      )}

      {session ? (
        <>
          <span
            className="flex-0 hidden cursor-pointer rounded-full lg:flex"
            onClick={() => setOptions(!options)}
          >
            <UserImage name="JL" imageUrl={user.profilePicture} />
          </span>
          {options && (
            <ul className="absolute right-4 top-[74px] hidden rounded-3xl border border-grey bg-white p-2 lg:block">
              <li className="mt-auto block cursor-pointer items-center justify-center rounded-2xl px-4 py-2 text-neutral-600 transition-all hover:bg-lightGrey  hover:text-black">
                <span>Create listing</span>
              </li>
              <li
                className="block cursor-pointer items-center justify-center rounded-2xl px-4 py-2 text-neutral-600 transition-all hover:bg-lightGrey  hover:text-black"
                onClick={() => signOut()}
              >
                <span>Sign out</span>
              </li>
              <span className="mx-auto my-2 block h-[1px] w-[90%] bg-grey"></span>
              <li className="relative flex cursor-pointer items-center gap-x-4 rounded-3xl bg-lightGrey px-4 py-4 text-black transition-all">
                <UserImage name="JL" imageUrl={user.profilePicture} />
                <div className="flex flex-col">
                  <span className="block font-bold">{user.fullName}</span>
                  <span className="block text-neutral-600">{user.email}</span>
                </div>

                <div className="ml-auto w-fit cursor-pointer rounded-lg p-2 transition-colors hover:bg-whiteHover">
                  <MdKeyboardArrowRight className="text-xl" />
                </div>
              </li>
            </ul>
          )}
        </>
      ) : (
        <div className="hidden gap-x-2 lg:flex">
          <Link
            href="/sign-in"
            className="cursor-pointer rounded-full border border-grey px-6 py-3 font-medium text-black hover:border-black focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
          >
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className="cursor-pointer rounded-full bg-black px-6 py-3 font-medium text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
          >
            Sign up
          </Link>
        </div>
      )}

      <div
        className="w-fit cursor-pointer rounded-lg bg-white p-2 transition-colors hover:border-lightGrey hover:bg-lightGrey lg:hidden"
        onClick={() => setIsOpen(!IsOpen)}
      >
        <HiMenuAlt1 className="scale-x-[-1] text-xl" />
      </div>

      <ul
        className={`${
          !IsOpen
            ? 'hidden opacity-0 md:hidden'
            : 'absolute right-0 top-[65px] flex h-[calc(100vh-67px)] w-full flex-col gap-1 bg-white p-2 pb-3 opacity-100 transition-opacity lg:hidden'
        }`}
      >
        <li>
          <Link
            href="/home"
            className="block cursor-pointer items-center justify-center rounded-2xl px-4 py-2 text-neutral-600 transition-all hover:bg-lightGrey hover:text-black"
          >
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/listings"
            className="block cursor-pointer items-center justify-center rounded-2xl px-4 py-2 text-neutral-600 transition-all hover:bg-lightGrey hover:text-black"
          >
            <span>Listings</span>
          </Link>
        </li>

        <li>
          <Link
            href="/about-us"
            className="block cursor-pointer items-center justify-center rounded-2xl px-4 py-2 text-neutral-600 transition-all hover:bg-lightGrey hover:text-black"
          >
            <span>About us</span>
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="block cursor-pointer items-center justify-center rounded-2xl px-4 py-2 text-neutral-600 transition-all hover:bg-lightGrey hover:text-black"
          >
            <span>Contact</span>
          </Link>
        </li>

        {session ? (
          <>
            <li className="mt-auto block cursor-pointer items-center justify-center rounded-2xl px-4 py-2 text-neutral-600 transition-all hover:bg-lightGrey hover:text-black">
              <span>Create listing</span>
            </li>
            <li
              className="block cursor-pointer items-center justify-center rounded-2xl px-4 py-2 text-neutral-600 transition-all hover:bg-lightGrey hover:text-black"
              onClick={() => signOut()}
            >
              <span>Sign out</span>
            </li>
            <span className="mx-auto my-4 block h-[1px] w-[90%] bg-grey"></span>
            <li className="relative flex cursor-pointer items-center gap-x-4 rounded-3xl bg-lightGrey px-4 py-4 text-black transition-all">
              <UserImage name="JL" imageUrl={user.profilePicture} />
              <div className="flex flex-col">
                <span className="block font-bold">{user.fullName}</span>
                <span className="block text-slate-600">{user.email}</span>
              </div>

              <div className="ml-auto w-fit cursor-pointer rounded-lg p-2 transition-colors hover:bg-whiteHover">
                <MdKeyboardArrowRight className="text-xl" />
              </div>
            </li>
          </>
        ) : (
          <li className="mt-auto flex gap-x-2">
            <Link
              href="/sign-in"
              className="flex w-full cursor-pointer items-center justify-center rounded-full border border-grey px-8 py-3 font-medium text-black transition-colors hover:border-black focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
            >
              <span className="block">Sign in</span>
            </Link>
            <Link
              href="/sign-up"
              className="flex w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-3 font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
            >
              <span className="block">Sign up</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
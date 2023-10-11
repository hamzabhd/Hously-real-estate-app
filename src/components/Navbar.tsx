'use client'
import { useState } from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'
import { montserrat } from '@/app/fonts'

const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false)
  const session = false

  return (
    <nav className="relative flex items-center justify-between gap-x-2 border px-4 py-3">
      <div className=" w-fit cursor-pointer rounded-lg bg-white py-2 transition-colors">
        <span className={`${montserrat.className} font-bold`}>Hously.</span>
      </div>

      <div className="hover:border-lightGrey hover:bg-lightGrey ml-auto w-fit cursor-pointer rounded-lg bg-white p-2 transition-colors">
        <FiSearch className="text-xl" />
      </div>

      <div
        className="hover:border-lightGrey hover:bg-lightGrey w-fit cursor-pointer rounded-lg bg-white p-2 transition-colors"
        onClick={() => setIsOpen(!IsOpen)}
      >
        <HiMenuAlt1 className="scale-x-[-1] text-xl" />
      </div>

      <ul
        className={`${
          !IsOpen
            ? 'hidden opacity-0'
            : 'absolute right-0 top-[65px] flex h-[calc(100vh-67px)] w-full flex-col gap-1  border p-2 pb-3 opacity-100 transition-opacity'
        }`}
      >
        <li className="hover:bg-lightGrey block cursor-pointer items-center justify-center rounded-2xl px-4 py-2 text-slate-600 transition-all hover:font-medium hover:text-black">
          <span>Home</span>
        </li>
        <li className="hover:bg-lightGrey block cursor-pointer items-center justify-center rounded-2xl px-4 py-2 text-slate-600 transition-all hover:font-medium hover:text-black">
          <span>Listings</span>
        </li>

        <li className="hover:bg-lightGrey block cursor-pointer items-center justify-center rounded-2xl px-4 py-2 text-slate-600 transition-all hover:font-medium hover:text-black">
          <span>About us</span>
        </li>
        <li className="hover:bg-lightGrey block cursor-pointer items-center justify-center rounded-2xl px-4 py-2 text-slate-600 transition-all hover:font-medium hover:text-black">
          <span>Contact</span>
        </li>

        {session ? (
          <li className="mt-auto">
            <li className="hover:bg-lightGrey block cursor-pointer items-center justify-center rounded-2xl px-4 py-2 text-slate-600 transition-all hover:font-medium hover:text-black">
              <span>Profile</span>
            </li>
            <li className="hover:bg-lightGrey block cursor-pointer items-center justify-center rounded-2xl px-4 py-2 text-slate-600 transition-all hover:font-medium hover:text-black">
              <span>Sign out</span>
            </li>
            <span className="bg-grey mx-auto my-4 block h-[1px] w-[90%]"></span>
            <li className="bg-lightGrey relative flex cursor-pointer items-center gap-x-4 rounded-3xl px-4 py-4 text-black transition-all">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white">
                JL
              </span>

              <div className="flex flex-col">
                <span className="block font-bold">Jana Lorene</span>
                <span className="block text-slate-600">Jana@lorene.com</span>
              </div>

              <div className="hover:bg-whiteHover ml-auto w-fit cursor-pointer rounded-lg p-2 transition-colors">
                <MdKeyboardArrowRight className="text-xl" />
              </div>
            </li>
          </li>
        ) : (
          <li className="mt-auto flex gap-x-2">
            <li className="border-grey flex w-full cursor-pointer items-center justify-center rounded-full border px-8 py-3 font-medium text-black transition-colors hover:border-black">
              <span className="block">Sign in</span>
            </li>
            <li className="hover:bg-beige flex w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-3 font-medium text-white transition-colors hover:text-black">
              <span className="block">Register</span>
            </li>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar

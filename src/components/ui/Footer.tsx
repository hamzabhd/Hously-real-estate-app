import { FaXTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="mx-auto max-w-[1248px] p-4 md:p-8 md:pb-4">
      <div className="md:mb-6 md:flex md:items-center md:justify-between">
        <Link
          href="/"
          className="w-fit cursor-pointer select-none rounded-lg py-2 text-xl transition-colors"
        >
          <span className="font-bold lg:text-xl">Hously.</span>
        </Link>

        <ul className="mt-9 flex flex-col gap-y-6 md:mt-0 md:flex-row md:gap-x-8 md:gap-y-0">
          <li className="font-medium text-black/60">
            <Link
              href="/home"
              className="font-medium text-black/60 transition-colors hover:text-black"
            >
              Home
            </Link>
          </li>
          <li className="font-medium text-black/60 ">
            <Link
              href="/listings"
              className="font-medium text-black/60 transition-colors hover:text-black"
            >
              Listings
            </Link>
          </li>
          <li className="font-medium text-black/60 ">
            <Link
              href="/about-us"
              className="font-medium text-black/60 transition-colors hover:text-black"
            >
              About us
            </Link>
          </li>
          <li className="font-medium text-black/60 ">
            <Link
              href="/contacts"
              className="font-medium text-black/60 transition-colors hover:text-black"
            >
              Contacts
            </Link>
          </li>
        </ul>
        <ul className="mb-6 mt-9 flex gap-x-8 md:my-0">
          <li className="group inline-block cursor-pointer rounded-full border border-black/60 border-grey p-2 transition-colors hover:border-black">
            <FaFacebookF className="h-4 w-4 text-base text-black/60 transition-colors group-hover:text-black" />
          </li>
          <li className="group inline-block cursor-pointer rounded-full border border-black/60 border-grey p-2 transition-colors hover:border-black">
            <FaXTwitter className="h-4 w-4 text-base text-black/60 transition-colors group-hover:text-black" />
          </li>
          <li className="group inline-block cursor-pointer rounded-full border border-black/60 border-grey p-2 transition-colors hover:border-black">
            <FaLinkedinIn className="h-4 w-4 text-base text-black/60 transition-colors group-hover:text-black" />
          </li>
        </ul>
      </div>

      <span className="my-4 block h-px w-full bg-grey"></span>

      <span className="block text-center text-sm text-black/60">
        © 2023 Hously. All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer

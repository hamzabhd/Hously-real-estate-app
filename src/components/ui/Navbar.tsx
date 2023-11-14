'use client'
import { useState } from 'react'
import { HiMenuAlt1, HiOutlineX } from 'react-icons/hi'
import { UserObj } from '@/types/types'
import { FiSearch } from 'react-icons/fi'
import { IoFilter } from 'react-icons/io5'
import Link from 'next/link'
import NavDropDown from './NavDropDown'
import NavOptions from './NavOptions'
import SearchForm from '../custom/SearchForm'
import FilterNav from '../custom/FilterNav'

type NavbarPropsType = {
  user: UserObj
  session: string | undefined
}

const Navbar = ({ user, session }: NavbarPropsType) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSearch, setActiveSearch] = useState(false)

  const toggleSearch = () => {
    setActiveSearch(!activeSearch)
    setIsOpen(false)
  }

  const toggleNav = () => {
    setIsOpen(!isOpen)
    setActiveSearch(false)
  }

  return (
    <nav
      className={`sticky top-0 z-50 flex w-full items-center justify-between gap-x-2 border-b border-grey p-4 backdrop-blur-lg lg:py-3 ${
        isOpen || activeSearch ? 'bg-white' : 'bg-white/60'
      }`}
    >
      {/* App logo goes here */}
      <div className="w-[238px]">
        <Link
          href="/"
          className="cursor-pointer select-none rounded-lg py-2 transition-colors"
        >
          <span className="font-bold tracking-wide lg:text-lg">Hously.</span>
        </Link>
      </div>

      {/* button for toggling search */}
      <button
        className="hidden items-center gap-x-4 rounded-full border border-grey p-0.5 pr-6 transition-colors hover:border-black/60 lg:flex"
        onClick={toggleSearch}
      >
        <div className="rounded-full bg-black p-3 ">
          <FiSearch className="text-lg text-white " />
        </div>

        <span className="font-medium">Find a property</span>
      </button>

      {/* right options depends on the authentication state */}
      <NavOptions
        toggleNav={() => setIsOpen(!isOpen)}
        user={user}
        session={Boolean(session)}
      />

      {/* small to medium screens buttons */}
      <div className="flex cursor-pointer items-center gap-x-4 lg:hidden">
        <button onClick={toggleSearch}>
          <FiSearch className="text-xl" />
        </button>
        <button onClick={toggleNav}>
          {!isOpen ? (
            <HiMenuAlt1 className="scale-x-[-1] text-xl" />
          ) : (
            <HiOutlineX className="text-xl" />
          )}
        </button>
      </div>
      {/* nav dropdown */}
      {isOpen && <NavDropDown user={user} session={Boolean(session)} />}
      {/* search form opened */}
      {activeSearch && <SearchForm toggleSearch={toggleSearch} />}

      <FilterNav />
    </nav>
  )
}

export default Navbar

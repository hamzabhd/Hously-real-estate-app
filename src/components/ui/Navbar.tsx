'use client'
import { useState } from 'react'
import { HiMenuAlt1, HiOutlineX } from 'react-icons/hi'
import Link from 'next/link'
import { UserObj } from '@/types/types'
import NavDropDown from './NavDropDown'
import NavOptions from './NavOptions'
import { FiSearch } from 'react-icons/fi'
import FindProperty from './FindProperty'
import SearchInputs from './SearchInputs'

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
      <div className="w-[238px]">
        <Link
          href="/"
          className="cursor-pointer select-none rounded-lg py-2 transition-colors"
        >
          <span className="font-bold tracking-wide lg:text-lg">Hously.</span>
        </Link>
      </div>

      <FindProperty
        activeSearch={activeSearch}
        setActiveSearch={setActiveSearch}
      />

      <NavOptions
        toggleNav={() => setIsOpen(!isOpen)}
        user={user}
        session={Boolean(session)}
      />

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

      {activeSearch && (
        <SearchInputs activeSearch={activeSearch} toggleSearch={toggleSearch} />
      )}

      {isOpen && <NavDropDown user={user} session={Boolean(session)} />}
    </nav>
  )
}

export default Navbar

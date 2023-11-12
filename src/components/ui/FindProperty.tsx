import { Dispatch, SetStateAction, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineX } from 'react-icons/hi'
import SearchInputs from './SearchInputs'

const FindProperty = ({
  activeSearch,
  setActiveSearch,
}: {
  activeSearch: boolean
  setActiveSearch: Dispatch<SetStateAction<boolean>>
}) => {
  const toggleSearch = () => {
    if (activeSearch) return
    return setActiveSearch(true)
  }

  return (
    <div
      className={`group/search hidden cursor-pointer items-center justify-between gap-x-4 rounded-full border border-grey p-1 pl-4 transition-all hover:border-black/60 lg:flex ${
        activeSearch ? 'w-96' : 'w-80'
      }`}
      onClick={toggleSearch}
    >
      <SearchInputs activeSearch={activeSearch} />

      {!activeSearch && (
        <button className="rounded-full bg-neutral-800 p-3 transition-colors group-hover/search:bg-black">
          <FiSearch className="text-white" />
        </button>
      )}
      {activeSearch && (
        <button
          className="ml-auto rounded-full bg-neutral-800 p-3 transition-colors group-hover/search:bg-black"
          onClick={() => setActiveSearch(false)}
        >
          <HiOutlineX className="text-white" />
        </button>
      )}
    </div>
  )
}

export default FindProperty

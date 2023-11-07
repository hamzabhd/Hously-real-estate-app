import ContactCard from '@/components/custom/ContactCard'
import { UserObj } from '@/types/types'
import React, { useState } from 'react'
import { HiOutlineX } from 'react-icons/hi'

const OwnerContact = ({ user }: { user: UserObj }) => {
  const [showContact, setShowContact] = useState(false)
  const toggleContact = () => {
    setShowContact(!showContact)
  }
  return (
    <div className="relative">
      {showContact && (
        <div className="container-shadow absolute bottom-full right-0 mb-4 h-fit w-full max-w-[400px] animate-popup overflow-hidden rounded-3xl border bg-white">
          <div className="flex items-center justify-between gap-x-4 border-b border-grey p-4 lg:px-6">
            <span className="cursor-pointer font-medium text-black">
              Owner contact
            </span>

            <div
              className="cursor-pointer rounded-full bg-light-100 p-2 transition-colors hover:bg-grey"
              onClick={toggleContact}
            >
              <HiOutlineX className="h-4 w-4" />
            </div>
          </div>
          <ContactCard user={user} profile={false} />
        </div>
      )}
      <button
        className="w-full cursor-pointer items-center justify-center rounded-full bg-black py-3 font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
        onClick={toggleContact}
      >
        Owner contact
      </button>
    </div>
  )
}

export default OwnerContact

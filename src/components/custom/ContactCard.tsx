import { UserObj } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import { MdOutlineEmail, MdOutlineLocalPhone } from 'react-icons/md'
import SpecialButton from './SpecialButton'
import { HiOutlineFlag, HiOutlineMail } from 'react-icons/hi'

const ContactCard = ({
  user,
  profile,
}: {
  user: UserObj
  profile?: boolean
}) => {
  return (
    <ul
      className={`bg-white px-4 py-6 lg:col-start-3 lg:col-end-4 lg:h-fit lg:p-6 ${
        profile ? 'container-shadow rounded-3xl' : ''
      }`}
    >
      <li>
        <span className="mb-2 block font-medium text-black/60">Location</span>
        <div className="flex items-center gap-x-4">
          <SpecialButton>
            <HiOutlineFlag className="h-4 w-4 text-base text-black/60 transition-colors group-hover:text-black" />
          </SpecialButton>
          {user.country ? (
            <span className="text-sm font-medium text-black/60">
              {user.country}, {user.city}
            </span>
          ) : (
            <span className="font-medium text-black/60">
              No location specified
            </span>
          )}
        </div>
      </li>
      <li>
        <span className="mb-2 mt-6 block font-medium text-black/60">
          Phone number
        </span>
        <div className="flex items-center gap-x-4">
          <SpecialButton>
            <MdOutlineLocalPhone className="h-4 w-4 text-base text-black/60 transition-colors group-hover:text-black" />
          </SpecialButton>
          {user.phoneNumber ? (
            <span className="text-sm font-medium text-black/60">
              +{user.phoneNumber}
            </span>
          ) : (
            <span className="font-medium text-black/60">
              No phone number specified
            </span>
          )}
        </div>
      </li>
      <li>
        <span className="mb-2 mt-6 block font-medium text-black/60">
          Email address
        </span>
        <div className="flex items-center gap-x-4">
          <SpecialButton>
            <HiOutlineMail className="h-4 w-4 text-base text-black/60 transition-colors group-hover:text-black" />
          </SpecialButton>
          <span className="text-sm font-medium text-black/60">
            {user.email}
          </span>
        </div>
      </li>
    </ul>
  )
}

export default ContactCard

import { UserObj } from '@/types/types'
import { HiFlag, HiMail, HiPhone } from 'react-icons/hi'
import CopyContact from './CopyContact'

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
        <span className="mb-4 block font-medium">Location</span>
        <div className="flex items-center gap-x-4 pl-2">
          <HiFlag className="h-4 w-4 text-base text-neutral-800" />
          {user.country ? (
            <span className="text-sm font-medium text-black/60">
              {user.country}, {user.city}
            </span>
          ) : (
            <span className="text-sm font-medium text-black/60">
              No location specified
            </span>
          )}
        </div>
      </li>
      <li>
        <span className="mb-4 mt-6 block font-medium">Phone number</span>
        <div className="flex items-center gap-x-4 pl-2">
          <HiPhone className="h-4 w-4 text-base text-neutral-800" />
          {user.phoneNumber ? (
            <>
              <span className="mr-auto text-sm font-medium tracking-wider text-black/60">
                +{user.phoneNumber}
              </span>

              <CopyContact link={`+${user.phoneNumber}`} />
            </>
          ) : (
            <span className="text-sm font-medium text-black/60">
              No phone number specified
            </span>
          )}
        </div>
      </li>
      <li>
        <span className="mb-4 mt-6 block font-medium">Email address</span>
        <div className="flex items-center gap-x-4 pl-2">
          <HiMail className="h-4 w-4 text-base text-neutral-800" />
          <span className="mr-auto text-sm font-medium text-black/60">
            {user.email}
          </span>
          <CopyContact link={user.email} />
        </div>
      </li>
    </ul>
  )
}

export default ContactCard

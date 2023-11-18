const ProfileNavbar = ({
  link,
  setActiveLink,
}: {
  link: string
  setActiveLink: (val: string) => void
}) => {
  return (
    <div className="px-4 md:px-6">
      <ul className="flex items-center justify-between border-b border-b-black/40 sm:gap-x-10 md:justify-normal">
        <li className="relative py-5">
          <span
            className={`cursor-pointer font-medium ${
              link === 'listings' ? 'text-black/100' : 'text-black/60'
            } transition-colors hover:text-black`}
            onClick={() => setActiveLink('listings')}
          >
            Listings
          </span>
          <span
            className={`absolute bottom-0 ${
              link === 'listings' ? 'block' : 'hidden'
            } h-1.5 w-[calc(100%-8px)] translate-x-1 rounded-t-lg bg-black`}
          ></span>
        </li>
        <li className="relative py-5">
          <span
            className={`cursor-pointer font-medium ${
              link === 'savedProperties' ? 'text-black/100' : 'text-black/60'
            } transition-colors hover:text-black`}
            onClick={() => setActiveLink('savedProperties')}
          >
            Saved properties
          </span>
          <span
            className={`absolute bottom-0 ${
              link === 'savedProperties' ? 'block' : 'hidden'
            } h-1.5 w-[calc(100%-8px)] translate-x-1 rounded-t-lg bg-black`}
          ></span>
        </li>
        <li className="relative py-5">
          <span
            className={`cursor-pointer font-medium ${
              link === 'reservations' ? 'text-black/100' : 'text-black/60'
            } transition-colors hover:text-black`}
            onClick={() => setActiveLink('reservations')}
          >
            Reservations
          </span>
          <span
            className={`absolute bottom-0 ${
              link === 'reservations' ? 'block' : 'hidden'
            } h-1.5 w-[calc(100%-8px)] translate-x-1 rounded-t-lg bg-black`}
          ></span>
        </li>
        <li className="relative py-5">
          <span
            className={`cursor-pointer font-medium ${
              link === 'about' ? 'text-black/100' : 'text-black/60'
            } transition-colors hover:text-black`}
            onClick={() => setActiveLink('about')}
          >
            About
          </span>
          <span
            className={`absolute bottom-0 ${
              link === 'about' ? 'block' : 'hidden'
            } h-1.5 w-[calc(100%-8px)] translate-x-1 rounded-t-lg bg-black`}
          ></span>
        </li>
      </ul>
    </div>
  )
}

export default ProfileNavbar

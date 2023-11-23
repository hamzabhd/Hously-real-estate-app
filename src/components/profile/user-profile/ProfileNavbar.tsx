const ProfileNavbar = ({
  link,
  setActiveLink,
  currentUser,
}: {
  link: string
  setActiveLink: (val: string) => void
  currentUser: boolean
}) => {
  return (
    <div className="px-4 md:px-6">
      <div className="w-full overflow-x-auto overflow-y-hidden pb-px">
        <ul className="flex w-full items-center gap-x-10 border-b border-b-grey">
          <li className="relative flex-shrink-0 py-5">
            <span
              className={`cursor-pointer font-medium ${
                link === 'listings' ? 'text-black/100' : 'text-black/60'
              } transition-colors hover:text-black`}
              onClick={() => setActiveLink('listings')}
            >
              Listings
            </span>
            {link === 'listings' && <SelectedLink />}
          </li>
          {currentUser && (
            <>
              <li className="relative flex-shrink-0 py-5">
                <span
                  className={`cursor-pointer font-medium ${
                    link === 'savedProperties'
                      ? 'text-black/100'
                      : 'text-black/60'
                  } transition-colors hover:text-black`}
                  onClick={() => setActiveLink('savedProperties')}
                >
                  Saved properties
                </span>
                {link === 'savedProperties' && <SelectedLink />}
              </li>
              <li className="relative flex-shrink-0 py-5">
                <span
                  className={`cursor-pointer font-medium ${
                    link === 'reserved' ? 'text-black/100' : 'text-black/60'
                  } transition-colors hover:text-black`}
                  onClick={() => setActiveLink('reserved')}
                >
                  Reserved properties
                </span>
                {link === 'reserved' && <SelectedLink />}
              </li>
              <li className="relative flex-shrink-0 py-5">
                <span
                  className={`cursor-pointer font-medium ${
                    link === 'myReservations'
                      ? 'text-black/100'
                      : 'text-black/60'
                  } transition-colors hover:text-black`}
                  onClick={() => setActiveLink('myReservations')}
                >
                  My reservations
                </span>
                {link === 'myReservations' && <SelectedLink />}
              </li>
            </>
          )}
          <li className="relative flex-shrink-0 py-5">
            <span
              className={`cursor-pointer font-medium ${
                link === 'about' ? 'text-black/100' : 'text-black/60'
              } transition-colors hover:text-black`}
              onClick={() => setActiveLink('about')}
            >
              About
            </span>
            {link === 'about' && <SelectedLink />}
          </li>
        </ul>
      </div>
    </div>
  )
}

const SelectedLink = () => {
  return (
    <span className="absolute -bottom-px left-0 h-[2px] w-full rounded-t-lg bg-black"></span>
  )
}
export default ProfileNavbar

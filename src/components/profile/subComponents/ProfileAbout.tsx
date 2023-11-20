import ContactCard from '@/components/custom/ContactCard'
import SpecialButton from '@/components/custom/SpecialButton'
import { UserObj } from '@/types/types'
import Link from 'next/link'
import { getLinkIcon } from 'utils/getLinkIcon'

const ProfileAbout = ({ user }: { user: UserObj }) => {
  const { bio, background, facts, links, destinations } = user

  return (
    <div className="p-4 md:p-6 lg:grid lg:grid-cols-3 lg:gap-x-6">
      <div className="lg:col-start-1 lg:col-end-3">
        <h3 className="mb-4 text-lg font-medium text-black lg:mt-0 lg:text-xl">
          Biography
        </h3>
        {
          <p className="font-normal leading-relaxed text-black/60">
            {bio || "Looks like the user didn't update this section yet."}
          </p>
        }

        <h3 className="mb-4 mt-6 text-lg font-medium text-black lg:mt-8 lg:text-xl">
          Professional background
        </h3>
        <p className="font-normal leading-relaxed text-black/60">
          {background || "Looks like the user didn't update this section yet."}
        </p>

        <h3 className="mb-4 mt-6 text-lg font-medium text-black lg:mt-8 lg:text-xl">
          Fun facts
        </h3>
        {facts?.filter((item) => item).length !== 0 ? (
          <ul className="list-disc">
            {facts
              ?.filter((item) => item)
              .map((fact, i) => (
                <li className="mb-4 ml-6 last:mb-0" key={i}>
                  <span className="block pl-4  font-normal leading-relaxed text-black/60">
                    {fact}
                  </span>
                </li>
              ))}
          </ul>
        ) : (
          <p className="font-normal leading-relaxed text-black/60">
            Looks like the user didn't update this section yet.
          </p>
        )}

        <h3 className="mb-4 mt-6 text-lg font-medium text-black lg:mt-8 lg:text-xl">
          Favorite destinations
        </h3>

        {destinations?.filter((item) => item).length !== 0 ? (
          <ul className=" list-disc">
            {destinations
              ?.filter((item) => item)
              .map((destination, i) => (
                <li className="mb-4 ml-6 last:mb-0" key={i}>
                  <span className="block pl-4 font-normal leading-relaxed text-black/60">
                    {destination}
                  </span>
                </li>
              ))}
          </ul>
        ) : (
          <p className="font-normal leading-relaxed text-black/60">
            Looks like the user didn't update this section yet.
          </p>
        )}

        <h3 className="mb-4 mt-6 text-lg font-medium text-black lg:mt-8 lg:text-xl">
          Connect with me
        </h3>
        {links?.filter((item) => item).length !== 0 ? (
          <ul className="mb-6 flex gap-x-8">
            {links
              ?.filter((item) => item)
              .map((link, i) => {
                const IconLink = getLinkIcon(link)
                return (
                  <li key={i}>
                    <Link
                      href={link}
                      className="group inline-block cursor-pointer rounded-full border border-grey p-2 transition-colors hover:border-black/60"
                    >
                      <IconLink className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
                    </Link>
                  </li>
                )
              })}
          </ul>
        ) : (
          <p className="font-normal leading-relaxed text-black/60">
            Looks like the user didn't update this section yet.
          </p>
        )}
      </div>

      <div className="container-shadow h-fit overflow-hidden rounded-3xl">
        <ContactCard user={user} />
      </div>
    </div>
  )
}

export default ProfileAbout

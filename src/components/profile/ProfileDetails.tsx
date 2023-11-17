'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'
import { MdOutlineLocalPhone, MdOutlineEmail } from 'react-icons/md'
import { BsQuestionLg } from 'react-icons/bs'
import { UserObj } from '@/types/types'
import { reviewsArr } from 'utils/data/data'
import Reviews from '../custom/Reviews'
import ContactCard from '../custom/ContactCard'

const ProfileDetails = ({ user }: { user: UserObj }) => {
  const [link, setLink] = useState('reviews')

  const setActiveLink = (link: string) => {
    setLink(link)
  }

  return (
    <div className="mt-6">
      <ul className="mx-4 flex items-center justify-between border-b border-b-black/40 md:mx-0 md:justify-normal md:gap-x-10">
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
              link === 'saved-properties' ? 'text-black/100' : 'text-black/60'
            } transition-colors hover:text-black`}
            onClick={() => setActiveLink('saved-properties')}
          >
            Saved properties
          </span>
          <span
            className={`absolute bottom-0 ${
              link === 'saved-properties' ? 'block' : 'hidden'
            } h-1.5 w-[calc(100%-8px)] translate-x-1 rounded-t-lg bg-black`}
          ></span>
        </li>
        <li className="relative py-5">
          <span
            className={`cursor-pointer font-medium ${
              link === 'reviews' ? 'text-black/100' : 'text-black/60'
            } transition-colors hover:text-black`}
            onClick={() => setActiveLink('reviews')}
          >
            Reviews
          </span>
          <span
            className={`absolute bottom-0 ${
              link === 'reviews' ? 'block' : 'hidden'
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
      {link === 'about' && (
        <div className="mt-6 px-4 md:px-0 lg:mt-8 lg:grid lg:grid-cols-3 lg:gap-x-6">
          <div className="lg:col-start-1 lg:col-end-3">
            <h3 className="mb-4 mt-6 text-xl font-medium text-black lg:mt-0 lg:text-2xl">
              Biography
            </h3>
            {
              <p className="font-normal leading-relaxed text-black/60">
                {user.bio ||
                  "Looks like the user didn't update this section yet."}
              </p>
            }

            <h3 className="mb-4 mt-6 text-xl font-medium text-black lg:mt-8 lg:text-2xl">
              Professional background
            </h3>
            <p className="font-normal leading-relaxed text-black/60">
              {user.background ||
                "Looks like the user didn't update this section yet."}
            </p>

            <h3 className="mb-4 mt-6 text-xl font-medium text-black lg:mt-8 lg:text-2xl">
              Fun facts
            </h3>
            {user.facts?.filter((item) => item).length !== 0 ? (
              <ul className="list-disc">
                {user.facts
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

            <h3 className="mb-4 mt-6 text-xl font-medium text-black lg:mt-8 lg:text-2xl">
              Favorite destinations
            </h3>

            {user.destinations?.filter((item) => item).length !== 0 ? (
              <ul className=" list-disc">
                {user.destinations
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

            <h3 className="mb-4 mt-6 text-xl font-medium text-black lg:mt-8 lg:text-2xl">
              Connect with me
            </h3>
            {user.links?.filter((item) => item).length !== 0 ? (
              <ul className="mb-6 flex gap-x-8">
                {user.links
                  ?.filter((item) => item)
                  .map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link}
                        className="group inline-block cursor-pointer rounded-full border border-grey p-2 transition-colors hover:border-black/60"
                      >
                        <LinkIcon link={link} />
                      </Link>
                    </li>
                  ))}
              </ul>
            ) : (
              <p className="font-normal leading-relaxed text-black/60">
                Looks like the user didn't update this section yet.
              </p>
            )}
          </div>

          <ContactCard user={user} />
        </div>
      )}

      {/* {link === 'reviews' && (
        <Reviews reviewsArr={reviewsArr} reviewsToShow={6} />
      )} */}
    </div>
  )
}

const LinkIcon = ({ link }: { link: string }) => {
  const facebook = /facebook/g.test(link)
  const twitter = /twitter/g.test(link)
  const linkedIn = /linkedIn/g.test(link)

  if (facebook) {
    return (
      <FaFacebookF className="h-4 w-4 text-base text-black/60 transition-colors group-hover:text-black" />
    )
  }
  if (twitter) {
    return (
      <FaXTwitter className="h-4 w-4 text-base text-black/60 transition-colors group-hover:text-black" />
    )
  }
  if (linkedIn) {
    return (
      <FaLinkedinIn className="h-4 w-4 text-base text-black/60 transition-colors group-hover:text-black" />
    )
  }

  return (
    <BsQuestionLg className="h-4 w-4 text-base text-black/60 transition-colors group-hover:text-black" />
  )
}

export default ProfileDetails

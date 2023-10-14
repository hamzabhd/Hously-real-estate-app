'use client'
import { useState } from 'react'
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'
import { MdOutlineLocalPhone, MdOutlineEmail } from 'react-icons/md'
import Image from 'next/image'

const ProfileDetails = () => {
  const [link, setLink] = useState('about')

  const setActiveLink = (link: string) => {
    setLink(link)
  }

  return (
    <div className="mt-6">
      <ul className="flex items-center justify-between border-b border-b-black/40 md:justify-normal md:gap-x-10">
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
        <div className="mt-6 lg:mt-8 lg:grid lg:grid-cols-3 lg:gap-x-6">
          <div className="lg:col-start-1 lg:col-end-3">
            <h3 className="mb-4 mt-6 text-xl font-medium text-black lg:mt-0 lg:text-2xl">
              Biography
            </h3>
            <p className="font-normal leading-relaxed text-black/60">
              I'm a passionate traveler and nature enthusiast. When I'm not
              exploring new places, I enjoy hiking, photography, and trying out
              local cuisines. I've been fortunate to visit some amazing
              destinations around the world and I'm always on the lookout for my
              next adventure.
            </p>

            <h3 className="mb-4 mt-6 text-xl font-medium text-black lg:mt-8 lg:text-2xl">
              Professional background
            </h3>
            <p className="font-normal leading-relaxed text-black/60">
              With a background in environmental science, I'm particularly
              interested in sustainable travel and eco-friendly accommodations.
              I believe in leaving a positive impact on the places I visit and
              strive to promote responsible tourism.
            </p>

            <h3 className="mb-4 mt-6 text-xl font-medium text-black lg:mt-8 lg:text-2xl">
              Fun facts
            </h3>
            <ul className="list-disc">
              <li className="mb-4 ml-6 last:mb-0">
                <span className="block pl-4  font-normal leading-relaxed text-black/60">
                  I once hiked to the summit of Mount Kilimanjaro.
                </span>
              </li>
              <li className="mb-4 ml-6 last:mb-0">
                <span className="block pl-4 font-normal leading-relaxed text-black/60">
                  I'm a certified scuba diver and have explored coral reefs in
                  various oceans.
                </span>
              </li>
              <li className="mb-4 ml-6 last:mb-0">
                <span className="block pl-4 font-normal leading-relaxed text-black/60">
                  My goal is to visit every national park in the United States.
                </span>
              </li>
            </ul>

            <h3 className="mb-4 mt-6 text-xl font-medium text-black lg:mt-8 lg:text-2xl">
              Favorite destinations
            </h3>

            <ul className=" list-disc">
              <li className="mb-4 ml-6 last:mb-0">
                <span className="block pl-4 font-normal leading-relaxed text-black/60">
                  Bali, Indonesia
                </span>
              </li>
              <li className="mb-4 ml-6 last:mb-0">
                <span className="block pl-4 font-normal leading-relaxed text-black/60">
                  Banff National Park, Canada
                </span>
              </li>
              <li className="mb-4 ml-6 last:mb-0">
                <span className="block pl-4 font-normal leading-relaxed text-black/60">
                  Santorini, Greece
                </span>
              </li>
            </ul>

            <h3 className="mb-4 mt-6 text-xl font-medium text-black lg:mt-8 lg:text-2xl">
              Connect with me
            </h3>
            <ul className="mb-6 flex gap-x-8">
              <li className="group inline-block cursor-pointer rounded-full border border-black/60 border-grey p-2 transition-colors hover:border-black">
                <FaFacebookF className="h-4 w-4 text-base text-black/60 transition-colors group-hover:text-black" />
              </li>
              <li className="group inline-block cursor-pointer rounded-full border border-black/60 border-grey p-2 transition-colors hover:border-black">
                <FaXTwitter className="h-4 w-4 text-base text-black/60 transition-colors group-hover:text-black" />
              </li>
              <li className="group inline-block cursor-pointer rounded-full border border-black/60 border-grey p-2 transition-colors hover:border-black">
                <FaLinkedinIn className="h-4 w-4 text-base text-black/60 transition-colors group-hover:text-black" />
              </li>
            </ul>
          </div>

          <ul className="container-shadow rounded-3xl bg-white px-4 py-6 lg:col-start-3 lg:col-end-4 lg:h-fit lg:p-6">
            <li>
              <span className="mb-2 block font-medium text-black/60">
                Location
              </span>
              <div className="flex items-center gap-x-4">
                <span className="relative h-8 w-8 overflow-hidden rounded-full">
                  <Image
                    src="/images/spain.png"
                    alt="spain flag"
                    width={48}
                    height={48}
                    className="absolute left-0 top-0 object-cover "
                  />
                </span>
                <span className="font-medium text-black">Barcelona, Spain</span>
              </div>
            </li>
            <li>
              <span className="mb-2 mt-6 block font-medium text-black/60">
                Phone number
              </span>
              <div className="flex items-center gap-x-4">
                <span className="group inline-block cursor-pointer rounded-full border border-black/60 border-grey p-2 transition-colors hover:border-black">
                  <MdOutlineLocalPhone className="h-4 w-4 text-base text-black/60 transition-colors group-hover:text-black" />
                </span>
                <span className="font-medium text-black">+1 (xxx)-xxx-xxx</span>
              </div>
            </li>
            <li>
              <span className="mb-2 mt-6 block font-medium text-black/60">
                Email address
              </span>
              <div className="flex items-center gap-x-4">
                <span className="group inline-block cursor-pointer rounded-full border border-black/60 border-grey p-2 transition-colors hover:border-black">
                  <MdOutlineEmail className="h-4 w-4 text-base text-black/60 transition-colors group-hover:text-black" />
                </span>
                <span className="font-medium text-black">
                  janasmith@example.com
                </span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default ProfileDetails

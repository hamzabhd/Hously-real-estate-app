'use client'
import { useRouter, useSearchParams } from 'next/navigation'

const ProfileDetails = () => {
  const router = useRouter()

  const setActiveLink = (link: string) => {
    router.push(`/profile/?link=${link}`)
  }

  const searchParams = useSearchParams()
  const link = searchParams.get('link')

  return (
    <div className="mt-6">
      <ul className="md: flex items-center justify-between border-b border-b-black/40 md:justify-normal md:gap-x-10">
        <li className="relative cursor-pointer py-5">
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
        <li className="relative cursor-pointer py-5">
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
        <li className="relative cursor-pointer py-5">
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
        <li className="relative cursor-pointer py-5">
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

export default ProfileDetails

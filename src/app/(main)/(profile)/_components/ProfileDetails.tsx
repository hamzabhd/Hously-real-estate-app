'use client'
import { Fragment, ReactNode, useState, Dispatch, SetStateAction } from 'react'
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'
import { MdOutlineLocalPhone, MdOutlineEmail } from 'react-icons/md'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import Image from 'next/image'
import UserImage from '@/components/UserImage'

const DATA = [
  {
    id: '1',
    username: 'Jana Lorene',
    userImage: '/images/person.jpg',
    reviewDate: '1 year ago',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    rating: '5',
  },
  {
    id: '2',
    username: 'Jana Lorene',
    userImage: '/images/person.jpg',
    reviewDate: '1 year ago',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsum labore sunt possimus.',
    rating: '4',
  },
  {
    id: '3',
    username: 'Jana Lorene',
    userImage: '/images/person.jpg',
    reviewDate: '1 year ago',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsum labore sunt possimus commodi numquam blanditiis.',
    rating: '3',
  },
  {
    id: '4',
    username: 'Jana Lorene',
    userImage: '/images/person.jpg',
    reviewDate: '1 year ago',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsum labore sunt possimus commodi numquam blanditiis ad fugit corporis nostrum ratione dolorum aperiam, pariatur veritatis quos culpa, accusantium illo! Unde.',
    rating: '2',
  },
  {
    id: '5',
    username: 'Jana Lorene',
    userImage: '/images/person.jpg',
    reviewDate: '1 year ago',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ',
    rating: '1',
  },
]

const ProfileDetails = () => {
  const [link, setLink] = useState('reviews')
  const [reviewToShow, setReviewToShow] = useState<string>('')

  const setActiveLink = (link: string) => {
    setLink(link)
  }

  const reviewFound =
    reviewToShow && DATA.find((review) => review.id === reviewToShow)

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

      {link === 'reviews' && (
        <div className="mt-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-4 md:px-0 lg:my-8 lg:grid-cols-3 lg:gap-6">
          {DATA.map((item) => (
            <Fragment key={item.id}>
              <ReviewCard review={item} setReviewToShow={setReviewToShow} />
            </Fragment>
          ))}

          {reviewFound && (
            <div className="fixed left-0 top-0 grid min-h-full w-full place-content-center bg-black/20 px-4 backdrop-blur-[2px]">
              <div className="container-shadow animate-popup h-full w-full max-w-[500px] overflow-hidden rounded-3xl bg-white duration-1000">
                <div className="flex items-center justify-between p-4 lg:p-5">
                  <span className="text-xl font-bold">User review</span>
                  <div
                    className="group w-fit cursor-pointer rounded-lg border p-1 transition-colors hover:border-lightGrey hover:bg-lightGrey"
                    onClick={() => setReviewToShow('')}
                  >
                    <IoClose className="transition-color text-xl text-black/60 transition-colors group-hover:text-black" />
                  </div>
                </div>
                <ReviewCard
                  review={reviewFound}
                  setReviewToShow={setReviewToShow}
                  showReview={true}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const ReviewCard = ({
  review,
  showReview,
  setReviewToShow,
}: {
  review: {
    id: string
    username: string
    userImage: string
    reviewDate: string
    review: string
    rating: string
  }
  setReviewToShow: Dispatch<SetStateAction<string>>
  showReview?: true
}) => {
  const reformReviewText = (text: string): string => {
    const textArr = text.split(' ')

    if (textArr.length > 15) {
      return textArr.slice(0, 21).join(' ') + '...'
    }
    return text
  }

  const isMore = (text: string): boolean => {
    const textArr = text.split(' ')

    if (textArr.length > 15) {
      return true
    }
    return false
  }

  const getRating = (rating: string) => {
    let stars: ReactNode[] = []

    for (let i = 0; i < 5; i++) {
      if (i >= Number(rating)) {
        stars.push(
          <IoIosStarOutline key={i} className="h-4 w-4 text-black/60" />,
        )
      } else {
        stars.push(<IoIosStar key={i} className="h-4 w-4 text-black/60" />)
      }
    }
    return stars
  }

  return (
    <div
      className={`sm:container-shadow group relative overflow-hidden px-4 pt-6 last:mb-0 sm:rounded-3xl sm:py-6 sm:first:pt-6 lg:px-5 ${
        showReview ? 'container-shadow rounded-3xl py-6 ' : 'first:pt-0'
      }`}
    >
      {!showReview && (
        <span className="mb-6 block h-px bg-grey group-first:hidden sm:hidden"></span>
      )}
      <div className="flex items-center justify-between gap-x-2">
        <UserImage name={review.username} imageUrl={review.userImage} />
        <div className="mr-auto flex flex-col">
          <span className="block font-bold">{review.username}</span>
          <span className="block text-slate-600">{review.reviewDate}</span>
        </div>
        <div className="flex self-start">{getRating(review.rating)}</div>
      </div>

      <p
        className={`${
          showReview ? '' : 'mb-4'
        } mt-6 font-normal leading-relaxed text-black/60`}
      >
        {showReview ? review.review : reformReviewText(review.review)}
      </p>

      {isMore(review.review) && !showReview && (
        <span
          className="cursor-pointer text-sm font-medium hover:underline"
          onClick={() => setReviewToShow(review.id)}
        >
          Read more
        </span>
      )}
    </div>
  )
}

export default ProfileDetails

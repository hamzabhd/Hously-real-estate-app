'use client'
import { Fragment, ReactNode, useState, Dispatch, SetStateAction } from 'react'
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'
import { MdOutlineLocalPhone, MdOutlineEmail } from 'react-icons/md'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { BsQuestionLg } from 'react-icons/bs'
import Image from 'next/image'
import UserImage from '@/components/UserImage'
import { UserObj } from '@/types/types'
import Link from 'next/link'

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

const ProfileDetails = ({ user }: { user: UserObj }) => {
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
              {user.bio}
            </p>

            <h3 className="mb-4 mt-6 text-xl font-medium text-black lg:mt-8 lg:text-2xl">
              Professional background
            </h3>
            <p className="font-normal leading-relaxed text-black/60">
              {user.background}
            </p>

            <h3 className="mb-4 mt-6 text-xl font-medium text-black lg:mt-8 lg:text-2xl">
              Fun facts
            </h3>
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

            <h3 className="mb-4 mt-6 text-xl font-medium text-black lg:mt-8 lg:text-2xl">
              Favorite destinations
            </h3>

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

            <h3 className="mb-4 mt-6 text-xl font-medium text-black lg:mt-8 lg:text-2xl">
              Connect with me
            </h3>
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
                <span className="font-medium text-black">
                  {user.country}, {user.city}
                </span>
              </div>
            </li>
            <li>
              <span className="mb-2 mt-6 block font-medium text-black/60">
                Phone number
              </span>
              <div className="flex items-center gap-x-4">
                <span className="group inline-block cursor-pointer rounded-full border hover:border-black/60 border-grey p-2 transition-colors">
                  <MdOutlineLocalPhone className="h-4 w-4 text-base text-black/60 transition-colors group-hover:text-black" />
                </span>
                <span className="font-medium text-black">
                  +{user.phoneNumber}
                </span>
              </div>
            </li>
            <li>
              <span className="mb-2 mt-6 block font-medium text-black/60">
                Email address
              </span>
              <div className="flex items-center gap-x-4">
                <span className="group inline-block cursor-pointer rounded-full border border-grey p-2 transition-colors hover:border-black/60">
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
              <div className="container-shadow h-full w-full max-w-[500px] animate-popup overflow-hidden rounded-3xl bg-white duration-1000">
                <div className="m-4 flex items-center justify-between rounded-2xl bg-lightGrey p-4">
                  <span className="text-xl font-bold">User review</span>
                  <div
                    className="group w-fit cursor-pointer rounded-lg border p-1 transition-colors hover:bg-whiteHover"
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
      className={`group relative overflow-hidden px-4 pt-6 last:mb-0 sm:rounded-3xl sm:py-6 sm:first:pt-6 lg:px-5 ${
        showReview ? 'pb-6 pt-2 sm:pt-2' : 'sm:container-shadow first:pt-0 '
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

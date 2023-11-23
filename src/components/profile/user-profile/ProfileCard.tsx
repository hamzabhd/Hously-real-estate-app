'use client'

import UserImage from '../../shared/UserImage'
import Link from 'next/link'
import ShareLink from '../../shared/ShareLink'
import { UserProfileObj } from '@/types/types'
import { useState } from 'react'
import { getProfileReviews } from 'utils/getProfileReviews'

const ProfileCard = ({
  user,
  currentUser,
}: {
  user: UserProfileObj
  currentUser: string
}) => {
  const [share, setShare] = useState(false)
  const link = `${process.env.NEXT_PUBLIC_BASE_URL as string}user/${user._id}`
  const year = new Date(user.createdAt as string).getFullYear()
  const profileReviews = getProfileReviews(user.properties)
  const isCurrentUserProfile = user._id === currentUser
  return (
    <div className="mt-36 px-4 lg:mt-28 xl:mt-44">
      <div className="relative mx-auto h-[calc(6rem+4px)] w-fit rounded-full border-2 border-white drop-shadow lg:h-[calc(8rem+4px)]">
        <UserImage
          imageUrl={user.profilePicture}
          name={user.fullName}
          isProfile
        />
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="text-xl font-bold leading-3 text-black">
          {user.fullName}
        </span>
        <span className="block h-[5px] w-[5px] rounded-full bg-black"></span>
        <span className="font-medium text-black/60">@{user.username}</span>
      </div>

      <span className="mt-2 block text-center font-normal text-black/60">
        Member on hously since {year}
      </span>

      <div className="mx-auto mb-6 mt-4 flex w-[160px] items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-y-1">
          <span className="text-xs font-medium text-black/40">reviews</span>
          <span className="font-medium text-black">
            {profileReviews.reviews}
          </span>
        </div>
        {/* line */}
        <span className="inline-block h-[35px] w-[1px] bg-black/40"></span>
        {/* line */}
        <div className="flex flex-col items-center justify-center gap-y-1">
          <span className="text-xs font-medium text-black/40">Rating</span>
          <span className="font-medium text-black">
            {profileReviews.rating}
          </span>
        </div>
      </div>

      <div className="mt-auto flex w-full items-center gap-x-2 md:mx-auto md:w-2/5">
        {isCurrentUserProfile && (
          <Link
            href="/edit-profile"
            className="flex w-1/2 cursor-pointer items-center justify-center rounded-full border border-grey py-[calc(.75rem-1px)] font-medium text-black transition-colors hover:border-black/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
          >
            <span>Edit profile</span>
          </Link>
        )}
        <div
          className={`relative ${isCurrentUserProfile ? 'w-1/2' : 'w-full'}`}
        >
          {share && <ShareLink setShare={setShare} link={link} />}
          <button
            onClick={() => setShare(!share)}
            type="button"
            className="flex w-full cursor-pointer items-center justify-center rounded-full bg-black py-3 font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
          >
            <span>Share profile</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard

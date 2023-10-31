import { UserObj } from '@/types/types'
import UserImage from '../UserImage'
import { montserrat } from '@/app/fonts'
import Link from 'next/link'

const ProfileCard = ({ user }: { user: UserObj }) => {
  const year = new Date(user.createdAt as string).getFullYear()
  return (
    <div className="mt-32 px-4 xl:mt-48">
      <div className="mx-auto w-fit rounded-full border-2 border-white drop-shadow">
        <UserImage
          imageUrl={user.profilePicture}
          width={96}
          height={96}
          name={user.fullName}
        />
      </div>

      <div className="mt-2 flex items-center justify-center gap-2">
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
          <span className="font-medium text-black">150</span>
        </div>
        {/* line */}
        <span className="inline-block h-[35px] w-[1px] bg-black/40"></span>
        {/* line */}
        <div className="flex flex-col items-center justify-center gap-y-1">
          <span className="text-xs font-medium text-black/40">Rating</span>
          <span className="font-medium text-black">4.5</span>
        </div>
      </div>

      <div className="mt-auto flex gap-x-2 md:mx-auto md:w-fit">
        <Link
          href="/edit-profile"
          className="flex w-full cursor-pointer items-center justify-center rounded-full border border-grey px-8 py-3 font-medium text-black transition-colors hover:border-black/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600 md:w-auto"
        >
          <span className="block">Edit profile</span>
        </Link>
        <button
          type="button"
          className="flex w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-3 font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600 md:w-auto"
        >
          <span className="block">Share profile</span>
        </button>
      </div>
    </div>
  )
}

export default ProfileCard

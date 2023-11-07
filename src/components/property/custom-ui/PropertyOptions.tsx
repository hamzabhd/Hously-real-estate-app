import SpecialButton from '@/components/custom/SpecialButton'
import UserImage from '@/components/custom/UserImage'
import { useAddReview } from 'hooks/useAddReview'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import {
  HiOutlineDotsHorizontal,
  HiOutlineFlag,
  HiOutlineX,
} from 'react-icons/hi'
import { MdOutlineModeComment } from 'react-icons/md'
import AddReview from '../features/AddReview'
import ReportProperty from '../features/ReportProperty'
import SavePropertyButton from '@/components/features/SavePropertyButton'
import SharePropertyButton from '@/components/features/SharePropertyButton'

const PropertyOptions = ({
  userName,
  profileImage,
  propertyOwner,
  propertyId,
  isSaved,
}: {
  userName: string
  profileImage: string
  propertyOwner: string
  propertyId: string
  isSaved: boolean
}) => {
  const { data: session } = useSession()
  const router = useRouter()
  const [showMore, setShowMore] = useState(false)
  const [reportProperty, setReportProperty] = useState(false)
  const { addReview, toggleAddReview } = useAddReview()

  const toggleReportProperty = () => {
    if (!session) {
      return router.push('/sign-up')
    }
    setReportProperty(!reportProperty)
  }
  return (
    <>
      {addReview && (
        <AddReview toggleAddReview={toggleAddReview} propertyId={propertyId} />
      )}
      {reportProperty && (
        <ReportProperty
          toggleReportProperty={toggleReportProperty}
          propertyId={propertyId}
        />
      )}
      <div className="border-b p-4 md:mt-4 md:border-none md:p-0">
        <div className="flex items-center gap-2">
          <Link href={`/user/${propertyOwner}`} className="rounded-full">
            <UserImage imageUrl={profileImage} name={userName} />
          </Link>

          <SavePropertyButton propertyId={propertyId} isSaved={isSaved} />

          <SharePropertyButton propertyId={propertyId} />

          {showMore && session?.user.id !== propertyOwner && (
            <SpecialButton name="Close" onClick={() => setShowMore(!showMore)}>
              <HiOutlineX className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
            </SpecialButton>
          )}
          {!showMore && session?.user.id !== propertyOwner && (
            <SpecialButton name="More" onClick={() => setShowMore(!showMore)}>
              <HiOutlineDotsHorizontal className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
            </SpecialButton>
          )}
          {showMore && session?.user.id !== propertyOwner && (
            <>
              <SpecialButton name="Review" onClick={toggleAddReview}>
                <MdOutlineModeComment className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
              </SpecialButton>
              <SpecialButton name="Report" onClick={toggleReportProperty}>
                <HiOutlineFlag className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
              </SpecialButton>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default PropertyOptions

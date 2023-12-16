import { useSession } from 'next-auth/react'
import { TbMessageCircle } from 'react-icons/tb'
import { LuPen } from 'react-icons/lu'
import { useState } from 'react'
import { HiOutlineFlag } from 'react-icons/hi'
import { useSearchQueries } from 'hooks/useSearchQueries'
import SpecialButton from '@/components/shared/SpecialButton'
import UserImage from '@/components/shared/UserImage'
import Link from 'next/link'
import AddReview from '../features/AddReview'
import ReportProperty from '../features/ReportProperty'
import SavePropertyButton from '@/components/shared/SavePropertyButton'
import SharePropertyButton from '@/components/shared/SharePropertyButton'
import useDisableScroll from 'hooks/useDIsableScroll'

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
  const { data: session, status } = useSession()
  const { checkAuthenticatedUser } = useSearchQueries()
  const [reportProperty, setReportProperty] = useState(false)
  const [addReview, setAddReview] = useState(false)

  const toggleReportProperty = () => {
    checkAuthenticatedUser(() => {
      setReportProperty(!reportProperty)
    })
  }

  const toggleAddReview = () => {
    checkAuthenticatedUser(() => {
      setAddReview(!addReview)
    })
  }

  useDisableScroll(reportProperty)
  useDisableScroll(addReview)
  const buttons = () => {
    if (status === 'loading') {
      return <></>
    }
    if (session?.user.id === propertyOwner) {
      return (
        <>
          <Link href={`/edit-property/${propertyId}`}>
            <SpecialButton name="Edit">
              <LuPen className="h-4 w-4 text-black/40 transition-colors group-hover:text-black/60" />
            </SpecialButton>
          </Link>
          <SharePropertyButton propertyId={propertyId} />
        </>
      )
    } else {
      return (
        <>
          <SavePropertyButton propertyId={propertyId} isSaved={isSaved} />
          <SharePropertyButton propertyId={propertyId} />
          <SpecialButton name="Review" onClick={toggleAddReview}>
            <TbMessageCircle className="h-4 w-4 text-black/40 transition-colors group-hover:text-black/60" />
          </SpecialButton>
          <SpecialButton name="Report" onClick={toggleReportProperty}>
            <HiOutlineFlag className="h-4 w-4 text-black/40 transition-colors group-hover:text-black/60" />
          </SpecialButton>
        </>
      )
    }
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
      <div className="border-b p-4 md:px-6 lg:border-none lg:p-0">
        <div className="flex items-center gap-2">
          <Link
            href={`/user/${propertyOwner}`}
            className="rounded-full border border-transparent"
          >
            <UserImage imageUrl={profileImage} name={userName} />
          </Link>
          {buttons()}
        </div>
      </div>
    </>
  )
}

export default PropertyOptions

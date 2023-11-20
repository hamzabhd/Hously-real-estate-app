import SpecialButton from '@/components/custom/SpecialButton'
import UserImage from '@/components/custom/UserImage'
import { useAddReview } from 'hooks/useAddReview'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { HiOutlineFlag } from 'react-icons/hi'
import AddReview from '../features/AddReview'
import ReportProperty from '../features/ReportProperty'
import SavePropertyButton from '@/components/features/SavePropertyButton'
import SharePropertyButton from '@/components/features/SharePropertyButton'
import { TbMessageCircle } from 'react-icons/tb'
import { LuPen } from 'react-icons/lu'

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
  const router = useRouter()
  const [reportProperty, setReportProperty] = useState(false)
  const { addReview, toggleAddReview } = useAddReview()

  const toggleReportProperty = () => {
    if (!session) {
      return router.push('/sign-up')
    }
    setReportProperty(!reportProperty)
  }

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
          <Link href={`/user/${propertyOwner}`} className="rounded-full">
            <UserImage imageUrl={profileImage} name={userName} />
          </Link>
          {buttons()}
        </div>
      </div>
    </>
  )
}

export default PropertyOptions

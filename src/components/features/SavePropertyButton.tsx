import { useRouter } from 'next/navigation'
import SmallSpinner from '../loaders/SmallSpinner'
import { useSession } from 'next-auth/react'
import { useTransition } from 'react'
import { saveProperty, unSaveProperty } from '@/app/actions'
import { HiBookmark, HiOutlineBookmark } from 'react-icons/hi'
import SpecialButton from '../custom/SpecialButton'

const SavePropertyButton = ({
  propertyId,
  isSaved,
}: {
  propertyId: string
  isSaved: boolean
}) => {
  const router = useRouter()
  const { data: session } = useSession()
  const [pending, startTransition] = useTransition()
  const saveActionWithId = saveProperty.bind(null, propertyId)
  const unSaveActionWithId = unSaveProperty.bind(null, propertyId)

  const handleSave = () => {
    if (!session) {
      return router.push('/sign-up')
    }
    if (isSaved) {
      return startTransition(async () => {
        await unSaveActionWithId()
      })
    }
    return startTransition(async () => {
      await saveActionWithId()
    })
  }
  return (
    <div className="relative">
      {pending && <SmallSpinner />}
      <SpecialButton name={isSaved ? 'Saved' : 'Save'} onClick={handleSave}>
        {isSaved ? (
          <HiBookmark className="h-4 w-4 text-black/40 transition-colors group-hover:text-black" />
        ) : (
          <HiOutlineBookmark className="h-4 w-4 text-black/40 transition-colors group-hover:text-black" />
        )}
      </SpecialButton>
    </div>
  )
}

export default SavePropertyButton

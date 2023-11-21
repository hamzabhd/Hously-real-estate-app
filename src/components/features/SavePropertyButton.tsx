import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useTransition } from 'react'
import { saveProperty, unSaveProperty } from '@/app/actions'
import { HiBookmark, HiOutlineBookmark } from 'react-icons/hi'
import SmallSpinner from '../loaders/SmallSpinner'
import SpecialButton from '../custom/SpecialButton'
import { notify } from 'utils/notify'
import { useSearchQueries } from 'hooks/useSearchQueries'

const SavePropertyButton = ({
  propertyId,
  isSaved,
}: {
  propertyId: string
  isSaved: boolean
}) => {
  const { checkAuthenticatedUser } = useSearchQueries()
  const [pending, startTransition] = useTransition()
  const saveActionWithId = saveProperty.bind(null, propertyId)
  const unSaveActionWithId = unSaveProperty.bind(null, propertyId)

  const handleSave = () => {
    checkAuthenticatedUser(() => {
      if (isSaved) {
        return startTransition(async () => {
          const result = await unSaveActionWithId()
          notify(result)
        })
      }
      return startTransition(async () => {
        const result = await saveActionWithId()
        notify(result)
      })
    })
  }
  return (
    <>
      <div className="relative">
        {pending && <SmallSpinner />}
        <SpecialButton name={isSaved ? 'Saved' : 'Save'} onClick={handleSave}>
          {isSaved ? (
            <HiBookmark className="h-4 w-4 text-black/40 transition-colors group-hover:text-black/60" />
          ) : (
            <HiOutlineBookmark className="h-4 w-4 text-black/40 transition-colors group-hover:text-black/60" />
          )}
        </SpecialButton>
      </div>
    </>
  )
}

export default SavePropertyButton

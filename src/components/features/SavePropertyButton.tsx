import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useTransition } from 'react'
import { saveProperty, unSaveProperty } from '@/app/actions'
import { HiBookmark, HiOutlineBookmark } from 'react-icons/hi'
import { ToastContainer, toast } from 'react-toastify'
import SmallSpinner from '../loaders/SmallSpinner'
import SpecialButton from '../custom/SpecialButton'
import 'react-toastify/dist/ReactToastify.css'
const SavePropertyButton = ({
  propertyId,
  isSaved,
}: {
  propertyId: string
  isSaved: boolean
}) => {
  const router = useRouter()
  const { status } = useSession()
  const [pending, startTransition] = useTransition()
  const saveActionWithId = saveProperty.bind(null, propertyId)
  const unSaveActionWithId = unSaveProperty.bind(null, propertyId)

  const notify = (notifyObj: { success: boolean; message: string }) => {
    const { message, success } = notifyObj
    if (success) {
      return toast.success(message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    } else {
      return toast.error(message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
  }

  const handleSave = () => {
    if (status === 'loading') return
    if (status === 'unauthenticated') {
      return router.push('/sign-up')
    }
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
  }
  return (
    <>
      <ToastContainer />
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

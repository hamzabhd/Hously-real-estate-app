import { useState } from 'react'
import { HiOutlineShare } from 'react-icons/hi'
import SpecialButton from '../custom/SpecialButton'
import ShareLink from '../custom/ShareLink'

const SharePropertyButton = ({ propertyId }: { propertyId: string }) => {
  const [share, setShare] = useState(false)
  const link = `${process.env.NEXT_PUBLIC_BASE_URL}property/${propertyId}`
  return (
    <div className="relative">
      {share && <ShareLink setShare={setShare} link={link} />}
      <SpecialButton onClick={() => setShare(!share)} name="Share" hide={share}>
        <HiOutlineShare className="h-4 w-4 text-black/40 transition-colors group-hover:text-black/60" />
      </SpecialButton>
    </div>
  )
}

export default SharePropertyButton

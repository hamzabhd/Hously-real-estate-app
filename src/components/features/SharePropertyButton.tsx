import { useEffect, useState } from 'react'
import { HiOutlineCheck, HiOutlineLink, HiOutlineShare } from 'react-icons/hi'
import { MdWhatsapp } from 'react-icons/md'
import SpecialButton from '../custom/SpecialButton'

const SharePropertyButton = ({ propertyId }: { propertyId: string }) => {
  const [share, setShare] = useState(false)

  const [copied, setCopied] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setCopied(false)
      setShare(false)
    }, 1000)
  }, [copied])

  const copy = () => {
    navigator.clipboard.writeText(
      `http://localhost:3000/property/${propertyId}`,
    )
    setCopied(true)
  }
  return (
    <div className="relative">
      {share && (
        <div className="absolute left-0 top-full z-50 mt-2 block w-max animate-popup rounded-3xl border border-grey bg-white p-2">
          <a
            href={`https://wa.me/send?text=${encodeURIComponent(
              `http://localhost:3000/property/${propertyId}`,
            )}`}
            target="_blank"
            className="group flex cursor-pointer items-center gap-x-2 rounded-2xl px-4 py-2 hover:bg-lightGrey"
            onClick={() => setShare(false)}
          >
            <MdWhatsapp className="h-4 w-4 flex-shrink-0 text-black/60 transition-colors group-hover:text-green-600" />
            <span className="block select-none text-sm text-black/60 transition-colors group-hover:text-black">
              Share on WhatsApp
            </span>
          </a>

          <div
            className="group flex cursor-pointer items-center gap-x-2 rounded-2xl px-4 py-2 hover:bg-lightGrey"
            onClick={copy}
          >
            {copied ? (
              <HiOutlineCheck className="h-4 w-4 flex-shrink-0 text-green-600" />
            ) : (
              <HiOutlineLink className="h-4 w-4 flex-shrink-0 text-black/60 transition-colors group-hover:text-slate-600" />
            )}
            <span className="block select-none text-sm text-black/60 transition-colors group-hover:text-black">
              {copied ? 'Link copied' : 'Copy link'}
            </span>
          </div>
        </div>
      )}
      <SpecialButton onClick={() => setShare(!share)} name="Share">
        <HiOutlineShare className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
      </SpecialButton>
    </div>
  )
}

export default SharePropertyButton

import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { MdWhatsapp } from 'react-icons/md'
import { HiOutlineCheck, HiOutlineLink } from 'react-icons/hi'
import detectOutsideClick from 'utils/detectOutsideClick'

const ShareLink = ({
  link,
  setShare,
}: {
  link: string
  setShare: Dispatch<SetStateAction<boolean>>
}) => {
  const shareRef = useRef<HTMLDivElement>(null)

  const [copied, setCopied] = useState(false)
  useEffect(() => {
    if (!copied) return
    setTimeout(() => {
      setCopied(false)
      setShare(false)
    }, 1000)
  }, [copied])

  const copy = () => {
    navigator.clipboard.writeText(link)
    setCopied(true)
  }
  detectOutsideClick(shareRef, () => setShare(false))
  return (
    <div
      ref={shareRef}
      className="absolute left-0 top-full z-50 mt-2 block min-w-max w-full animate-popup rounded-3xl border border-grey bg-white p-2"
    >
      <a
        href={`https://wa.me/send?text=${encodeURIComponent(link)}`}
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
  )
}

export default ShareLink

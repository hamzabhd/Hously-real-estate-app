import { useEffect, useState } from 'react'
import { HiOutlineCheck } from 'react-icons/hi'
import { LuCopy } from 'react-icons/lu'

const CopyContact = ({ link }: { link: string }) => {
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    if (!copied) return
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }, [copied])

  const copy = () => {
    navigator.clipboard.writeText(link)
    setCopied(true)
  }
  return (
    <div className="group w-fit rounded-full" onClick={copy}>
      {copied ? (
        <HiOutlineCheck className="h-4 w-4 flex-shrink-0 cursor-pointer text-green-600" />
      ) : (
        <LuCopy className="flex-shrink-0 cursor-pointer text-sm text-black/60 transition-colors hover:text-black" />
      )}
    </div>
  )
}

export default CopyContact

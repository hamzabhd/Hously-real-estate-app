'use client'
import Link from 'next/link'
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()
  const footerClassName = /(edit|create)-(property|profile)/g.test(pathname)
    ? 'hidden'
    : 'block'
  return (
    <footer
      className={`mx-auto max-w-[1248px] p-4 md:p-8 md:pb-4 ${footerClassName}`}
    >
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="w-fit cursor-pointer select-none rounded-lg py-2 text-xl transition-colors"
        >
          <span className="font-bold lg:text-xl">Hously.</span>
        </Link>

        <ul className="flex gap-x-8 md:my-0">
          <li className="group inline-block cursor-pointer rounded-full border border-black/60 border-grey p-2 transition-colors hover:border-black">
            <FaFacebookF className="h-4 w-4 text-base text-black/60 transition-colors group-hover:text-black" />
          </li>
          <li className="group inline-block cursor-pointer rounded-full border border-black/60 border-grey p-2 transition-colors hover:border-black">
            <FaXTwitter className="h-4 w-4 text-base text-black/60 transition-colors group-hover:text-black" />
          </li>
          <li className="group inline-block cursor-pointer rounded-full border border-black/60 border-grey p-2 transition-colors hover:border-black">
            <FaLinkedinIn className="h-4 w-4 text-base text-black/60 transition-colors group-hover:text-black" />
          </li>
        </ul>
      </div>

      <span className="my-4 block h-px w-full bg-grey"></span>

      <span className="block text-center text-sm text-black/60">
        © 2023 Hously. All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer

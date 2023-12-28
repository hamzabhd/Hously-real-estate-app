'use client'
import Link from 'next/link'
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'
import { usePathname } from 'next/navigation'
import LogoImage from '../ui/LogoImage'

const Footer = () => {
  const pathname = usePathname()
  const footerClassName = /(edit|create)-(property|profile)/g.test(pathname)
    ? 'hidden'
    : 'block'
  return (
    <footer
      className={`mx-auto max-w-[1248px] p-4 md:p-8 md:pb-4 ${footerClassName}`}
    >
      <span className="my-4 block h-px w-full bg-grey"></span>

      <div className="items-center justify-between sm:flex">
        <Link
          href="/"
          className="flex cursor-pointer select-none items-center gap-x-2 rounded-lg py-2 transition-colors"
        >
          <LogoImage width={48} height={48} />
          <span className="font-bold tracking-wide lg:text-lg">Hously.</span>
        </Link>
        <span className="block text-xs text-black/60">
          © 2023 Hously. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer

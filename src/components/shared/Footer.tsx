'use client'
import Link from 'next/link'
import LogoImage from '../ui/LogoImage'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()
  const footerClassName = /(edit|create)-(property|profile)/g.test(pathname)
    ? 'hidden'
    : 'block'
  const year = new Date().getFullYear()
  return (
    <footer
      className={`mx-auto max-w-[1248px] p-4 md:p-8 md:pb-4 ${footerClassName}`}
    >
      <span className="my-4 block h-px w-full bg-grey"></span>

      <div className="items-center justify-between sm:flex">
        <Link
          href="/home"
          className="flex cursor-pointer select-none items-center gap-x-2 rounded-lg py-2 transition-colors"
        >
          <LogoImage />
          <span className="font-bold tracking-wide lg:text-lg">Hously.</span>
        </Link>
        <span className="block text-xs text-black/60">
          © {year} Hously. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer

import React, { ReactNode } from 'react'
import { IconType } from 'react-icons'

const ProviderAuthButton = ({
  handleAuth,
  children,
}: {
  handleAuth: () => void
  children: ReactNode
}) => {
  return (
    <button
      type="button"
      className="mb-4 flex w-full flex-wrap items-center justify-center gap-x-4 rounded-full border border-grey px-8 py-3 transition-colors hover:border-black/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
      onClick={handleAuth}
    >
      {children}
    </button>
  )
}

export default ProviderAuthButton

import Link from 'next/link'

const EmptyStatePrompt = ({
  name,
  link,
  message,
}: {
  name: string
  link: string
  message?: string
}) => {
  const actionLink =
    name === 'create' && !message ? 'Create a property' : 'Explore properties'
  return (
    <div className="p-4 md:p-6">
      <p className="mb-6 leading-relaxed text-black/60">
        {typeof message === 'string'
          ? message
          : `You haven't ${name}d any properties`}
      </p>
      <Link
        href={link}
        className="cursor-pointer rounded-full border border-grey px-6 py-2 font-medium transition-colors hover:border-black/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600 "
      >
        {actionLink}
      </Link>
    </div>
  )
}

export default EmptyStatePrompt

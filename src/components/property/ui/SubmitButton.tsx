// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

const SubmitButton = ({ name }: { name: string }) => {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      className={`flex w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-3 font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600 disabled:cursor-default disabled:bg-neutral-800`}
    >
      <span className="block">{pending ? name + 'ing...' : name}</span>
    </button>
  )
}

export default SubmitButton

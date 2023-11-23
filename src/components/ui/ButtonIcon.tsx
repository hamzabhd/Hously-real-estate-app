import { IconType } from 'react-icons'

const ButtonIcon = ({
  Icon,
  onClick,
}: {
  Icon: IconType
  onClick: () => void
}) => {
  return (
    <button
      type="button"
      className="disabled:bg- group rounded-full bg-light-500 p-2 transition hover:bg-light-900 disabled:cursor-default disabled:opacity-40 disabled:hover:bg-light-500"
      onClick={onClick}
    >
      <Icon className="h-4 w-4 text-black/60 transition-colors group-hover:text-black group-disabled:text-black/60" />
    </button>
  )
}

export default ButtonIcon

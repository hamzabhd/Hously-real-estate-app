import ButtonIcon from '@/components/custom/ButtonIcon'
import { ReservationGuestsType } from '@/types/types'
import { BiMinus } from 'react-icons/bi'
import { HiOutlinePlusSm } from 'react-icons/hi'

const ReservationGuests = ({
  numberOfGuests,
  reduceGuests,
  addGuests,
}: ReservationGuestsType) => {
  return (
    <div className="mb-4 flex items-center justify-between px-4">
      <span className="block">Number of guests</span>
      <div className="flex w-2/5 items-center justify-between sm:w-1/2">
        <ButtonIcon onClick={reduceGuests} Icon={BiMinus} />
        <span>{numberOfGuests}</span>
        <ButtonIcon onClick={addGuests} Icon={HiOutlinePlusSm} />
      </div>
    </div>
  )
}

export default ReservationGuests

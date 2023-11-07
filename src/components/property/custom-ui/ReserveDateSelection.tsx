import { ReserveDateSelectionType } from '@/types/types'
import { reformDate } from 'utils/reformDate'

const ReserveDateSelection = ({
  selectedSlot,
  setSelectedSlot,
  selectDate,
  error,
}: ReserveDateSelectionType) => {
  return (
    <div>
      <div className="grid gap-2 p-4 sm:grid-cols-2">
        <div>
          <span
            className={`mb-2 block ${
              selectedSlot === 'check-in' ? 'text-black' : 'text-black/60'
            } ${error && !selectDate.from ? 'text-red-500' : ''}`}
          >
            Check-in
          </span>
          <div
            className={`flex cursor-pointer items-center justify-center rounded-full p-4 text-sm ${
              selectedSlot === 'check-in'
                ? 'border-2 border-black/60'
                : 'border-2 border-grey'
            } ${
              error && !selectDate.from ? 'border-red-400 text-red-500' : ''
            }`}
            onClick={() => setSelectedSlot('check-in')}
          >
            {selectDate.from !== ''
              ? reformDate(selectDate.from)
              : 'Select a date'}
          </div>
        </div>

        <div>
          <span
            className={`mb-2 block ${
              selectedSlot === 'check-out' ? 'text-black' : 'text-black/60'
            } ${error && !selectDate.to ? 'text-red-500' : ''}`}
          >
            Check-out
          </span>
          <div
            className={`flex cursor-pointer items-center justify-center rounded-full p-4 text-sm ${
              selectedSlot === 'check-out'
                ? 'border-2 border-black/60'
                : 'border-2 border-grey'
            } ${error && !selectDate.to ? 'border-red-400 text-red-500' : ''}`}
            onClick={() => setSelectedSlot('check-out')}
          >
            {selectDate.to !== '' ? reformDate(selectDate.to) : 'Select a date'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReserveDateSelection

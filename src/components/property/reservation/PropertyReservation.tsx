import { makeReservation } from '@/app/actions'
import { PropertyType, UserObj } from '@/types/types'
import { useSession } from 'next-auth/react'
import { useState, useTransition } from 'react'
import { getReservationRange } from 'utils/isReserved'
import { reservationSchema } from 'utils/validations/validations'
import { useSearchQueries } from 'hooks/useSearchQueries'
import { notify } from 'utils/notify'
import Calendar from '@/components/shared/Calendar'
import ReservationButtons from './ReservationButtons'
import ReservationContainer from './ReservationContainer'
import ReservationDetails from './ReservationDetails'
import PropertyAvailability from '../prompts/PropertyAvailability'
import ReserveDateSelection from './ReserveDateSelection'
import ReservationGuests from './ReservationGuests'

const PropertyReservation = ({ property }: { property: PropertyType }) => {
  const { checkAuthenticatedUser } = useSearchQueries()
  const { data: session } = useSession()
  const [availability, setAvailability] = useState(false)
  const [reserve, setReserve] = useState(false)
  const [numberOfGuests, setNumberOfGuests] = useState(1)
  const [readThis, setReadThis] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState('check-in')
  const [selectDate, setSelectDate] = useState({
    from: '',
    to: '',
  })
  const [error, setError] = useState('')
  const [pending, startTransition] = useTransition()

  const isPropertyOwner = session?.user.id === (property.owner as UserObj)._id

  const clearReservation = () => {
    setReserve(false)
    setSelectDate({ from: '', to: '' })
    setSelectedSlot('check-in')
    setReadThis(false)
    setNumberOfGuests(1)
    setError('')
  }
  const reservationsMade = property.reservations.filter(
    (item) => item.reserver === session?.user.id,
  )
  const lastReservation = reservationsMade[reservationsMade.length - 1]

  const makeReservationAction = makeReservation.bind(
    null,
    property._id,
    selectDate.from,
    selectDate.to,
    numberOfGuests,
  )
  const handleReservation = () => {
    const result = reservationSchema.safeParse({
      ...selectDate,
      numberOfGuests,
    })
    if (!result.success) {
      return setError('Please provide the necessary information')
    }

    startTransition(async () => {
      const result = await makeReservationAction()
      console.log(result)
      if (result.success || result.status === 'error') {
        clearReservation()
        notify(result)
      }
    })
  }
  const getNightsRange = (from: string, to: string) => {
    const userDate = [
      {
        from: new Date(from),
        to: new Date(to),
      },
    ]
    const userReservation = getReservationRange(userDate)

    return userReservation
  }
  const getUserSelection = (day: number, month: number, year: number) => {
    const newDate = new Date(year, month, day).toISOString()
    const reservationsMade = arrOfDates && getReservationRange(arrOfDates)
    setError('')
    setSelectDate((prevState) => {
      if (selectedSlot === 'check-in') {
        setSelectedSlot('check-out')
        if (prevState.to < newDate) {
          return {
            from: newDate,
            to: '',
          }
        } else {
          return {
            ...prevState,
            from: newDate,
          }
        }
      } else {
        if (prevState.from > newDate) {
          return prevState
        } else {
          return {
            ...prevState,
            to: newDate,
          }
        }
      }
    })

    setSelectDate((prevState) => {
      const userReservation = getNightsRange(prevState.from, prevState.to)
      for (let i = 0; i < userReservation.length; i++) {
        if (reservationsMade?.includes(userReservation[i])) {
          return {
            from: newDate,
            to: '',
          }
        }
      }
      return prevState
    })
  }
  const addGuests = () => {
    const guests = Number(property.guestsLimit) || 10
    setNumberOfGuests((prevState) => {
      if (prevState >= guests) return guests
      return prevState + 1
    })
  }
  const reduceGuests = () => {
    setNumberOfGuests((prevState) => {
      if (prevState <= 1) return 1
      return prevState - 1
    })
  }
  // check the user status before any reservations
  const toggleReserve = () => {
    checkAuthenticatedUser(() => {
      if (isPropertyOwner) {
        return
      }
      setReserve(true)
      setAvailability(false)
    })
  }
  const toggleAvailability = () => {
    setAvailability(!availability)
    setReserve(false)
  }
  // mapping the reservations to only dates
  const arrOfDates =
    property.reservations &&
    property.reservations.map((item) => ({
      from: new Date(item.from),
      to: new Date(item.to),
    }))

  // get the number of nights are selected
  const nights = getNightsRange(selectDate.from, selectDate.to).length || 0
  const reservationTotal =
    nights === 0
      ? 0
      : Number(property.cleaningFee) +
        Number(property.securityFee) +
        Number(property.price) * nights +
        Number(property.price) * nights * 0.05

  const reservationObj = {
    price: property.price,
    cleaningFee: property.cleaningFee,
    securityFee: property.securityFee,
    nights,
    reservationTotal,
  }

  return (
    <div className="z-100 relative mt-auto flex gap-x-2">
      {availability && (
        <PropertyAvailability
          arrOfDates={arrOfDates}
          toggleAvailability={toggleAvailability}
        />
      )}
      {reserve && (
        <ReservationContainer
          clearReservation={clearReservation}
          readThis={readThis}
          setReadThis={setReadThis}
        >
          <div className="max-h-[550px] overflow-auto md:flex md:overflow-hidden">
            <Calendar
              select={true}
              arrOfDates={arrOfDates}
              getUserSelection={getUserSelection}
              selectDate={selectDate}
            />

            <div className="flex flex-shrink-0 flex-col border-t border-grey md:flex-grow md:border-hidden">
              <ReserveDateSelection
                selectDate={selectDate}
                selectedSlot={selectedSlot}
                setSelectedSlot={setSelectedSlot}
                error={error}
              />
              <ReservationGuests
                addGuests={addGuests}
                reduceGuests={reduceGuests}
                numberOfGuests={numberOfGuests}
              />
              <ReservationDetails reservation={reservationObj} />
            </div>
          </div>
        </ReservationContainer>
      )}
      <ReservationButtons
        pending={pending}
        reserve={reserve}
        availability={availability}
        lastReservation={lastReservation}
        isPropertyOwner={isPropertyOwner}
        toggleReserve={toggleReserve}
        handleReservation={handleReservation}
        toggleAvailability={toggleAvailability}
      />
    </div>
  )
}

export default PropertyReservation

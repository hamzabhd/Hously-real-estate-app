'use client'
import { useState, useEffect } from 'react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

function Calendar() {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const DAYS_OF_THE_WEEK = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  const MONTHS = [
    'January',
    'February',
    'Mars',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const today = new Date()
  const [date, setDate] = useState(today)
  const [day, setDay] = useState(date.getDate())
  const [month, setMonth] = useState(date.getMonth())
  const [year, setYear] = useState(date.getFullYear())
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date))

  useEffect(() => {
    setDay(date.getDate())
    setMonth(date.getMonth())
    setYear(date.getFullYear())
    setStartDay(getStartDayOfMonth(date))
  }, [date])

  function getStartDayOfMonth(date: Date) {
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    return startDate === 0 ? 7 : startDate
  }

  function isLeapYear(year: number) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  }

  const days = isLeapYear(year) ? DAYS_LEAP : DAYS

  const [selectedSlot, setSelectedSlot] = useState('check-in')
  const [selectDate, setSelectDate] = useState({
    from: '',
    to: '',
  })

  const arrOfDates = [
    {
      from: new Date(2023, 10, 15),
      to: new Date(2023, 10, 17),
    },

    {
      from: new Date(2023, 10, 23),
      to: new Date(2023, 10, 24),
    },

    {
      from: new Date(2023, 11, 15),
      to: new Date(2023, 11, 18),
    },
  ]

  const getReservationRange = (
    dateRanges: { from: Date; to: Date }[],
  ): string[] => {
    let reservationRange: string[] = []

    dateRanges.forEach(({ from, to }) => {
      let currentDate = new Date(from)
      const endDate = new Date(to)

      while (currentDate <= endDate) {
        reservationRange.push(new Date(currentDate).toISOString())
        currentDate.setDate(currentDate.getDate() + 1)
      }
    })

    return reservationRange
  }

  const isReserved = (
    dateRanges: { from: Date; to: Date }[],
    calendarDay: number,
    year: number,
    month: number,
  ) => {
    const reservationRange = getReservationRange(dateRanges)
    const calendarDate = new Date(year, month, calendarDay).toISOString()
    const isReservedDate = reservationRange.includes(calendarDate)

    return isReservedDate
  }

  const getUserSelection = (day: number) => {
    const newDate = new Date(year, month, day).toISOString()
    const reservationsMade = getReservationRange(arrOfDates)
    setSelectDate((prevState) => {
      if (selectedSlot === 'check-in') {
        setSelectedSlot('check-out')
        if (prevState.to < newDate) {
          console.log('1')
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
      const userDate = [
        {
          from: new Date(prevState.from),
          to: new Date(prevState.to),
        },
      ]
      const userReservation = getReservationRange(userDate)
      for (let i = 0; i < userReservation.length; i++) {
        if (reservationsMade.includes(userReservation[i])) {
          return {
            from: newDate,
            to: '',
          }
        }
      }
      return prevState
    })
  }

  const calendarDays = Array(days[month] + (startDay - 1))
    .fill(null)
    .map((_, index) => {
      const d = index - (startDay - 2)
      const newDate = new Date(year, month, d).toISOString()
      const reservedDate = isReserved(arrOfDates, d, year, month)
      const first = isReserved(arrOfDates, d - 1, year, month)
      const last = isReserved(arrOfDates, d + 1, year, month)
      const userDate = [
        {
          from: new Date(selectDate.from),
          to: new Date(selectDate.to),
        },
      ]
      const isSelected =
        selectDate.from && selectDate.to && isReserved(userDate, d, year, month)
      const selectStart = isReserved(userDate, d - 1, year, month)
      const selectEnd = isReserved(userDate, d + 1, year, month)

      const selectionClassName = () => {
        if (!selectStart) {
          if (!selectEnd) {
            return 'rounded-full bg-black text-white'
          }
          return 'rounded-l-full bg-black text-white'
        }
        if (!selectEnd) {
          return 'rounded-r-full bg-black text-white'
        } else {
          return ''
        }
      }
      if (selectDate.from === newDate) {
        return (
          <span
            key={index}
            className={`flex aspect-square select-none items-center justify-center bg-neutral-800 text-sm font-medium text-white empty:invisible
        ${selectionClassName()}`}
            onClick={() => {
              getUserSelection(d)
            }}
          >
            {d > 0 ? d : ''}
          </span>
        )
      } else if (isSelected) {
        return (
          <span
            key={index}
            className={`flex aspect-square select-none items-center justify-center bg-neutral-800 text-sm font-medium text-white empty:invisible
            ${selectionClassName()}`}
            onClick={() => {
              getUserSelection(d)
            }}
          >
            {d > 0 ? d : ''}
          </span>
        )
      }

      const getClassName = () => {
        if (!first) {
          return 'rounded-l-full bg-light-500 text-black/40'
        }
        if (!last) {
          return 'rounded-r-full bg-light-500 text-black/40'
        }
      }
      if (reservedDate) {
        return (
          <span
            key={index}
            className={`flex aspect-square select-none items-center justify-center bg-light-500 text-sm font-medium text-black/40 empty:invisible
        ${getClassName()}`}
          >
            {d > 0 ? d : ''}
          </span>
        )
      }
      return (
        <span
          key={index}
          className={`flex aspect-square cursor-pointer select-none items-center justify-center rounded-full text-sm font-medium transition-colors empty:invisible hover:bg-black hover:text-white`}
          onClick={() => {
            getUserSelection(d)
          }}
        >
          {d > 0 ? d : ''}
        </span>
      )
    })

  return (
    <div className="rounded-3xl border border-grey sm:max-w-[400px]">
      <div
        className={`m-4 mb-0 mt-4 cursor-pointer rounded-3xl p-4 ${
          selectedSlot === 'check-in' ? 'border-2 border-black/60' : 'border'
        }`}
        onClick={() => setSelectedSlot('check-in')}
      >
        {selectDate.from !== ''
          ? new Date(selectDate.from).toDateString()
          : 'Check in'}
      </div>
      <div
        className={`m-4 mb-0 mt-4 cursor-pointer rounded-3xl p-4 ${
          selectedSlot === 'check-out' ? 'border-2 border-black/60' : 'border'
        }`}
        onClick={() => setSelectedSlot('check-out')}
      >
        {selectDate.to !== ''
          ? new Date(selectDate.to).toDateString()
          : 'Check out'}
      </div>

      <div className="flex items-center justify-between border-b p-4 ">
        <button
          type="button"
          className="group rounded-full bg-black/10 p-2 transition hover:bg-black/20"
          onClick={() => setDate(new Date(year, month - 1, day))}
        >
          <PiCaretLeftBold className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
        </button>
        <div>
          <span className="font-bold ">{MONTHS[month]}</span>
          <span className="text-sm text-black/60"> - {year}</span>
        </div>
        <button
          type="button"
          className="group rounded-full bg-black/10 p-2 transition hover:bg-black/20"
          onClick={() => setDate(new Date(year, month + 1, day))}
        >
          <PiCaretRightBold className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
        </button>
      </div>
      <div className="flex flex-col p-4">
        <div className="mb-2 grid grid-cols-7">
          {DAYS_OF_THE_WEEK.map((d, i) => {
            const isWeekend = i === 6 || i === 5
            return (
              <span
                key={d}
                className={`group relative inline-block cursor-pointer text-center text-xs font-medium ${
                  isWeekend ? 'text-black/40' : 'text-black'
                }`}
              >
                {d.slice(0, 1)}
                <span className="absolute left-1/2 top-full mt-1 hidden -translate-x-1/2 select-none rounded-xl border bg-white px-4 py-2 text-sm text-black group-hover:block">
                  {d}
                </span>
              </span>
            )
          })}
        </div>
        <div className="grid grid-cols-7 gap-y-1">{calendarDays}</div>
      </div>
    </div>
  )
}

export default Calendar

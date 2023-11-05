'use client'
import { useState, useEffect } from 'react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import { getReservationRange, isReserved } from 'utils/isReserved'

function Calendar({
  select = false,
  arrOfDates,
  selectDate,
  getUserSelection,
}: {
  select: boolean
  arrOfDates: { from: Date; to: Date }[]
  selectDate?: {
    from: string
    to: string
  }
  getUserSelection?: (day: number, month: number, year: number) => void
}) {
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

  const calendarDays = Array(days[month] + (startDay - 1))
    .fill(null)
    .map((_, index) => {
      const d = index - (startDay - 2)
      const newDate = new Date(year, month, d).toISOString()
      const reservedDate = isReserved(arrOfDates, d, year, month)
      const first = isReserved(arrOfDates, d - 1, year, month)
      const last = isReserved(arrOfDates, d + 1, year, month)
      const userDate = selectDate && [
        {
          from: new Date(selectDate.from),
          to: new Date(selectDate.to),
        },
      ]
      const isSelected = userDate && isReserved(userDate, d, year, month)
      const selectStart = userDate && isReserved(userDate, d - 1, year, month)
      const selectEnd = userDate && isReserved(userDate, d + 1, year, month)

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
      if (selectDate?.from === newDate && select) {
        return (
          <span
            key={index}
            className={`flex aspect-square select-none items-center justify-center bg-neutral-800 text-sm font-medium text-white empty:invisible
        ${selectionClassName()}`}
            onClick={() => {
              getUserSelection?.(d, month, year)
            }}
          >
            {d > 0 ? d : ''}
          </span>
        )
      } else if (isSelected && select) {
        return (
          <span
            key={index}
            className={`flex aspect-square select-none items-center justify-center bg-neutral-800 text-sm font-medium text-white empty:invisible
            ${selectionClassName()}`}
            onClick={() => {
              getUserSelection?.(d, month, year)
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
            getUserSelection?.(d, month, year)
          }}
        >
          {d > 0 ? d : ''}
        </span>
      )
    })

  return (
    <div className="max-w-400 w-full border-grey bg-white sm:w-[400px]">
      <div className="flex items-center justify-between p-4 ">
        <button
          type="button"
          className="disabled:bg- group rounded-full bg-light-500 p-2 transition hover:bg-light-900 disabled:cursor-default disabled:opacity-40 disabled:hover:bg-light-500"
          onClick={() => setDate(new Date(year, month - 1, day))}
          disabled={month === new Date().getMonth()}
        >
          <PiCaretLeftBold className="h-4 w-4 text-black/60 transition-colors group-hover:text-black group-disabled:text-black/60" />
        </button>
        <div>
          <span className="font-medium">{MONTHS[month]}</span>
          <span className="text-sm text-black/60"> - {year}</span>
        </div>
        <button
          type="button"
          className="disabled:bg- group rounded-full bg-light-500 p-2 transition hover:bg-light-900 disabled:cursor-default disabled:opacity-40 disabled:hover:bg-light-500"
          onClick={() => setDate(new Date(year, month + 1, day))}
        >
          <PiCaretRightBold className="h-4 w-4 text-black/60 transition-colors group-hover:text-black group-disabled:text-black/60" />
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

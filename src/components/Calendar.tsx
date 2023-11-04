'use client'
import { useState, useEffect } from 'react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import { isAdded } from 'utils/isAdded'

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

  const [selectDate, setSelectDate] = useState({
    checkIn: '',
    checkOut: '',
  })

  const getUserSelection = (day: string) => {
    setSelectDate((prevState) => {
      if (!selectDate.checkIn) {
        return { ...prevState, checkIn: day }
      }
      return { ...prevState, checkOut: day }
    })
  }

  const checkIn = new Date(2023, 10, 10)
  const checkOut = new Date(2023, 10, 20)

  const getRange = (start: number, end: number) => {
    let range: number[] = []

    for (let i = start; i <= end; i++) {
      range.push(i)
    }

    return range
  }
  const calendarDays = Array(days[month] + (startDay - 1))
    .fill(null)
    .map((_, index) => {
      const d = index - (startDay - 2)
      const range = getRange(checkIn.getDate(), checkOut.getDate())
      const isReserved = isAdded(d, range)
      const first = range[0] === d
      const last = range[range.length - 1] === d

      const getClassName = () => {
        if (isReserved) {
          if (first) {
            return 'rounded-l-full bg-light-500 text-black/40'
          }

          if (last) {
            return 'rounded-r-full bg-light-500 text-black/40'
          }

          return 'bg-light-500 text-black/40'
        } else {
          return 'rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer'
        }
      }
      return (
        <span
          key={index}
          //   isToday={d === today.getDate()}
          //   isSelected={d === day}
          className={`flex aspect-square select-none items-center justify-center text-sm font-medium empty:invisible
          ${getClassName()}`}
          onClick={() => {setDate(new Date(year, month, d)); getUserSelection(d.toString()) }}
        >
          {d > 0 ? d : ''}
        </span>
      )
    })

  return (
    <div className="rounded-3xl border border-grey sm:max-w-[400px]">
      <div>{selectDate.checkIn}</div>
      <div>{selectDate.checkOut}</div>

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

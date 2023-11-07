'use client'

import { ReactNode, useEffect, useState, useTransition } from 'react'
import {
  MdOutlineCalendarMonth,
  MdOutlineInfo,
  MdOutlineModeComment,
  MdPeopleOutline,
  MdPersonOutline,
  MdWhatsapp,
} from 'react-icons/md'
import { TbMoonStars, TbResize } from 'react-icons/tb'
import {
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
  HiOutlineTag,
  HiOutlineFlag,
  HiOutlineMail,
  HiOutlineShare,
  HiOutlineX,
  HiOutlineDotsHorizontal,
  HiBookmark,
  HiOutlineLink,
  HiOutlineCheck,
} from 'react-icons/hi'
import { BiBath } from 'react-icons/bi'
import { LuBed, LuBedDouble } from 'react-icons/lu'
import { HiOutlineBookmark } from 'react-icons/hi'
import UserImage from '../custom/UserImage'
import ImageSlider from '../custom/ImageSlider'
import ImagePreviewer from '../custom/ImagePreviewer'
import SeeMoreBtn from '../custom/SeeMoreBtn'
import Reviews from '../custom/Reviews'
import Map from '../custom/Map'
import CustomRadioButton from '../custom/CustomRadioButton'
import { useRouter } from 'next/navigation'
import DetailsContainer from '../containers/DetailsContainer'
import {
  addReview,
  makeReport,
  makeReservation,
  saveProperty,
  unSaveProperty,
} from '@/app/actions'
// @ts-ignore
import { experimental_useFormState as useFormState } from 'react-dom'
// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import Line from '../custom/Line'
import {
  PropertyLocationType,
  PropertyType,
  ReservationsType,
  ReviewObj,
} from '@/types/types'
import { useSession } from 'next-auth/react'
import { isAdded } from 'utils/isAdded'
import SmallSpinner from '../loaders/SmallSpinner'
import Calendar from '../Calendar'
import { getReservationRange } from 'utils/isReserved'
import ButtonIcon from '../custom/ButtonIcon'
import { BiMinus } from 'react-icons/bi'
import { HiOutlinePlusSm } from 'react-icons/hi'
import { PiCaretUpBold } from 'react-icons/pi'
import Link from 'next/link'
import { ReservationType } from '@/types/types'
import { useAddReview } from 'hooks/useAddReview'
import { reformDate } from 'utils/reformDate'
import { TbDoorEnter, TbDoorExit } from 'react-icons/tb'
import { reservationSchema } from 'utils/validations/validations'

const imagesArr = [
  '/images/spain.png',
  '/images/spain.png',
  '/images/spain.png',
  '/images/spain.png',
]

const PropertyDetails = ({
  property,
  savedProperties,
}: {
  property: PropertyType
  savedProperties: string[]
}) => {
  const isIntercepted = true

  return (
    // px-4 md:px-6
    <div className="lg:mt-4">
      <MainDetails
        property={property}
        isSaved={isAdded(property._id, savedProperties)}
      />
      <PropertyReviews
        propertyId={property._id}
        propertyReviews={property.reviews}
      />
      <PropertyLocation {...property} />
    </div>
  )
}

const MainDetails = ({
  property,
  isSaved,
}: {
  property: PropertyType
  isSaved: boolean
}) => {
  const [selectedImage, setSelectedImage] = useState('')
  const [selected, setSelected] = useState('')

  const propertyReservation =
    property.reservations &&
    property.reservations.map((item) => ({
      from: new Date(item.from),
      to: new Date(item.to),
    }))

  return (
    <div className="items-start lg:grid lg:h-[736px] lg:grid-cols-2 lg:gap-x-8">
      {/* Image previewer */}
      <ImageSlider
        imagesArr={imagesArr}
        selectImage={(image: string) => setSelectedImage(image)}
      />
      <ImagePreviewer
        image={selectedImage}
        clearImage={() => setSelectedImage('')}
      />

      <div className="h-full">
        <PropertyOptions
          propertyId={property._id}
          isSaved={isSaved}
          propertyOwner={property.owner._id}
          profileImage={property.owner.profilePicture}
          userName={property.owner.fullName}
        />
        {selected && (
          <ViewMore
            description={property.description}
            features={property.features}
            rules={property.rules}
            guestsLimit={property.guestsLimit}
            quietHours={property.quietHours}
            checkIn={property.checkIn}
            checkOut={property.checkOut}
            selected={selected}
            setSelected={setSelected}
          />
        )}
        <div className="px-4">
          <div className="mb-8 mt-4 lg:mt-6">
            <h1 className="mb-1 text-3xl font-medium lg:text-4xl">
              {property.title}
            </h1>
            <div className="flex items-center gap-x-2">
              <HiOutlineLocationMarker className="h-4 w-4 text-black/40" />
              <span className="text-sm text-black/60">{property.address}</span>
            </div>
          </div>

          <div className="mb-8 flex items-center gap-x-4">
            <span className="text-2xl font-bold">
              ${property.price}
              <span className="text-base font-normal text-black/60">/ </span>
              <span className="text-base font-normal text-black/60">night</span>
            </span>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between sm:justify-normal sm:gap-x-6 lg:gap-x-10">
              <div className="flex flex-col items-start gap-y-1">
                <LuBedDouble className="h-6 w-6" />
                <span className="text-sm font-medium">
                  {property.bedrooms.length} bedrooms
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <BiBath className="h-6 w-6" />
                <span className="text-sm font-medium">
                  {property.bathrooms.length} bathrooms
                </span>
              </div>

              <div className="flex flex-col gap-y-1">
                <LuBed className="h-6 w-6" />
                <span className="text-sm font-medium">
                  {property.beds.length} beds
                </span>
              </div>

              <div className="flex flex-col gap-y-1">
                <TbResize className="h-6 w-6" />
                <span className="text-sm font-medium">1,200 Ft²</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <p className="mb-4 leading-relaxed text-black/60">
              {property.description.slice(0, 156)}...
            </p>
            <SeeMoreBtn
              label="Read more"
              onClick={() => setSelected('description')}
            />
          </div>

          <div className="mb-6 gap-x-4 sm:grid sm:grid-cols-2">
            <div className="mb-4 sm:mb-0">
              <h2 className="mb-4 text-xl font-medium tracking-wide">
                Property features
              </h2>
              <ul className="list-style mb-4 list-image-[url(/images/check.png)] px-6">
                {property.features.slice(0, 3).map((item, i) => (
                  <li key={i}>
                    <span className="ml-2 text-sm text-black/60">{item}</span>
                  </li>
                ))}
              </ul>
              <SeeMoreBtn
                label="View more"
                className="justify-self-start"
                onClick={() => setSelected('features')}
              />
            </div>

            <div>
              <h2 className="mb-4 text-xl font-medium tracking-wide">
                Property rules
              </h2>
              <ul className="list-style mb-4 list-image-[url(/images/check.png)] px-6">
                {property.rules.slice(0, 3).map((item, i) => (
                  <li key={i}>
                    <span className="ml-2 text-sm text-black/60">{item}</span>
                  </li>
                ))}
              </ul>
              <SeeMoreBtn
                label="View more"
                className="justify-self-start"
                onClick={() => setSelected('rules')}
              />
            </div>
          </div>
          <PropertyReservation
            guestsLimit={Number(property.guestsLimit)}
            pricePerNight={property.price}
            cleaningFee={property.cleaningFee}
            securityFee={property.securityFee}
            propertyId={property._id}
            arrOfDates={propertyReservation}
            propertyReservations={property.reservations}
          />
        </div>
      </div>
    </div>
  )
}

const PropertyReservation = ({
  guestsLimit,
  pricePerNight,
  securityFee,
  cleaningFee,
  propertyId,
  propertyReservations,
  arrOfDates,
}: ReservationType) => {
  const router = useRouter()
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

  const clearReservation = () => {
    setReserve(false)
    setSelectDate({ from: '', to: '' })
    setSelectedSlot('check-in')
    setReadThis(false)
    setNumberOfGuests(1)
  }
  const alreadyReserved = propertyReservations.find(
    (item) => item.reserver === session?.user.id,
  )

  const makeReservationAction = makeReservation.bind(null, propertyId)
  const handleReservation = (from: string, to: string, guests: number) => {
    const result = reservationSchema.safeParse({ from, to, guests })
    if (!result.success) {
      return setError('Please provide the necessary information')
    }

    startTransition(async () => {
      const result = await makeReservationAction(from, to, guests)
      if (result.success) {
        clearReservation()
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
    setNumberOfGuests((prevState) => {
      if (prevState >= guestsLimit) return guestsLimit
      return prevState + 1
    })
  }

  const reduceGuests = () => {
    setNumberOfGuests((prevState) => {
      if (prevState <= 1) return 1
      return prevState - 1
    })
  }

  const toggleReserve = () => {
    if (!session) {
      return router.push('/sign-up')
    }
    setReserve(true)
    setAvailability(false)
  }
  const nights = getNightsRange(selectDate.from, selectDate.to).length || 0
  const reservationTotal =
    Number(pricePerNight) * nights + Number(pricePerNight) * nights * 0.05

  return (
    <div className="z-100 relative mb-4 flex gap-x-2">
      {availability && (
        <div className="container-shadow absolute bottom-full right-0 mb-4 h-fit w-full animate-popup overflow-hidden rounded-3xl border bg-white duration-1000 sm:w-fit">
          <div className="flex items-center justify-between gap-x-4 border-b border-grey p-4 lg:px-6">
            <span className="cursor-pointer font-medium text-black">
              Property availability
            </span>

            <div
              className="cursor-pointer rounded-full bg-light-100 p-2 transition-colors hover:bg-grey"
              onClick={() => setAvailability(false)}
            >
              <HiOutlineX className="h-4 w-4" />
            </div>
          </div>
          <Calendar select={false} arrOfDates={arrOfDates} />
        </div>
      )}
      {reserve && (
        <div className="container-shadow absolute bottom-full right-0 mb-4 h-fit w-full animate-popup overflow-hidden rounded-3xl border bg-white sm:w-fit md:w-full lg:w-[800px]">
          <div className="relative flex items-center justify-between gap-x-2 border-b border-grey p-4 sm:gap-x-4 lg:px-6">
            <span className="flex-shrink-0 font-medium text-black">
              Reserve property
            </span>

            <SeeMoreBtn
              label="Read this"
              className="mr-auto hover:border-red-200 sm:px-4"
              textColor="text-red-500 text-xs sm:text-sm"
              onClick={() => setReadThis(!readThis)}
            />

            {readThis && (
              <div
                className="absolute left-0 top-full rounded-b-2xl border-b border-t border-grey bg-white px-4 py-2 text-sm"
                style={{ zIndex: 100 }}
              >
                <span className="mb-2 block leading-relaxed">
                  Please note that confirming a reservation in this demo app
                  won't lead to any actual payment. Feel free to test and make a
                  reservation!
                </span>

                <button
                  className="mx-auto flex rounded-full"
                  onClick={() => setReadThis(false)}
                >
                  <PiCaretUpBold className="h-4 w-4 text-black/60 transition-colors hover:text-black" />
                </button>
              </div>
            )}

            <div
              className="cursor-pointer rounded-full bg-light-100 p-2 transition-colors hover:bg-grey"
              onClick={clearReservation}
            >
              <HiOutlineX className="h-4 w-4" />
            </div>
          </div>
          <div className="max-h-[550px] overflow-auto md:flex md:overflow-hidden">
            <Calendar
              select={true}
              arrOfDates={arrOfDates}
              getUserSelection={getUserSelection}
              selectDate={selectDate}
            />

            <div className="flex flex-shrink-0 flex-col border-t border-grey md:flex-grow md:border-hidden">
              <div>
                {error && (
                  <div className="px-4">
                    <ErrorContainer error={error} className="mt-4 lg:m-0" />
                  </div>
                )}

                <div className="grid gap-2 p-4 sm:grid-cols-2">
                  <div>
                    <span
                      className={`mb-2 block ${
                        selectedSlot === 'check-in'
                          ? 'text-black'
                          : 'text-black/60'
                      }`}
                    >
                      Check-in
                    </span>
                    <div
                      className={`flex cursor-pointer items-center justify-center rounded-full p-4 text-sm ${
                        selectedSlot === 'check-in'
                          ? 'border-2 border-black/60'
                          : 'border-2 border-grey'
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
                        selectedSlot === 'check-out'
                          ? 'text-black'
                          : 'text-black/60'
                      }`}
                    >
                      Check-out
                    </span>
                    <div
                      className={`flex cursor-pointer items-center justify-center rounded-full p-4 text-sm ${
                        selectedSlot === 'check-out'
                          ? 'border-2 border-black/60'
                          : 'border-2 border-grey'
                      }`}
                      onClick={() => setSelectedSlot('check-out')}
                    >
                      {selectDate.to !== ''
                        ? reformDate(selectDate.to)
                        : 'Select a date'}
                    </div>
                  </div>
                </div>
              </div>
              {/* rest of the info goes here */}
              <div className="mb-4 flex items-center justify-between px-4">
                <span className="block">Number of guests</span>
                <div className="flex w-2/5 items-center justify-between sm:w-1/2">
                  <ButtonIcon onClick={reduceGuests} Icon={BiMinus} />
                  <span>{numberOfGuests}</span>
                  <ButtonIcon onClick={addGuests} Icon={HiOutlinePlusSm} />
                </div>
              </div>
              <span className="mx-auto hidden h-px w-[calc(100%-2rem)] bg-grey md:block"></span>
              <div className="flex flex-col border-t border-grey p-4 md:border-none">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-black/60 underline">
                    Price per night
                  </span>
                  <div className="flex items-center gap-x-4">
                    <span>{pricePerNight}$</span>
                    <span>x</span>
                    <span>{nights}</span>
                  </div>
                </div>
                <div className="mb-4 flex items-center justify-between ">
                  <span className="text-sm text-black/60 underline">
                    Cleaning fees
                  </span>
                  <div className="flex items-center gap-x-4">
                    <span>{cleaningFee || 0}$</span>
                    <span>x</span>
                    <span>1</span>
                  </div>
                </div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-black/60 underline">
                    Security fees
                  </span>
                  <div className="flex items-center gap-x-4">
                    <span>{securityFee || 0}$</span>
                    <span>x</span>
                    <span>1</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-black/60 underline">
                    Hously fees
                  </span>
                  <div className="flex items-center gap-x-4">
                    <span>{pricePerNight}$ x 5%</span>
                    <span>x</span>
                    <span>{nights}</span>
                  </div>
                </div>
              </div>
              <div className="relative mt-auto flex items-center justify-between p-4">
                <span className="absolute top-0 mx-auto hidden h-px w-[calc(100%-2rem)] bg-grey md:block"></span>
                <span className="text-lg font-bold">Reservation total</span>
                <span className="flex items-center gap-x-4 text-lg font-bold">
                  {reservationTotal}$
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {!reserve ? (
        !alreadyReserved ? (
          <button
            className="flex-grow cursor-pointer items-center justify-center rounded-full bg-black px-8 py-3 font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
            onClick={toggleReserve}
          >
            Reserve
          </button>
        ) : (
          <div className="flex flex-grow items-center justify-center gap-x-2 rounded-full border-2 border-grey py-3 sm:gap-x-2">
            <HiOutlineCheck className="h-4 w-4 flex-shrink-0 text-green-600" />
            <span className=" text-black/60 sm:text-base">
              Reserved on {reformDate(alreadyReserved.from)}
            </span>
          </div>
        )
      ) : (
        <button
          className="flex-grow cursor-pointer items-center justify-center rounded-full bg-black px-8 py-3 font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
          onClick={() =>
            handleReservation(selectDate.from, selectDate.to, numberOfGuests)
          }
        >
          Confirm{pending && 'ing...'}
        </button>
      )}
      <button
        className={`flex w-1/4 items-center justify-center rounded-full border-2 px-6 py-3 transition-colors hover:border-black/60 ${
          availability ? 'border-black/60' : 'border-grey'
        }`}
        onClick={() => {
          setAvailability(!availability)
          setReserve(false)
        }}
      >
        <MdOutlineCalendarMonth />
      </button>
    </div>
  )
}

const PropertyOptions = ({
  userName,
  profileImage,
  propertyOwner,
  propertyId,
  isSaved,
}: {
  userName: string
  profileImage: string
  propertyOwner: string
  propertyId: string
  isSaved: boolean
}) => {
  const { data: session } = useSession()
  const router = useRouter()
  const [showMore, setShowMore] = useState(false)
  const [reportProperty, setReportProperty] = useState(false)
  const { addReview, toggleAddReview } = useAddReview()

  const toggleReportProperty = () => {
    if (!session) {
      return router.push('/sign-up')
    }
    setReportProperty(!reportProperty)
  }
  return (
    <>
      {addReview && (
        <AddReview toggleAddReview={toggleAddReview} propertyId={propertyId} />
      )}
      {reportProperty && (
        <ReportProperty
          toggleReportProperty={toggleReportProperty}
          propertyId={propertyId}
        />
      )}
      <div className="border-b p-4 md:mt-4 md:border-none md:p-0">
        <div className="flex items-center gap-2">
          <Link href={`/user/${'some id goes here'}`} className="rounded-full">
            <UserImage imageUrl={profileImage} name={userName} />
          </Link>

          <SavePropertyButton propertyId={propertyId} isSaved={isSaved} />

          <SharePropertyButton propertyId={propertyId} />

          {showMore && session?.user.id !== propertyOwner && (
            <SpecialButton name="Close" onClick={() => setShowMore(!showMore)}>
              <HiOutlineX className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
            </SpecialButton>
          )}
          {!showMore && session?.user.id !== propertyOwner && (
            <SpecialButton name="More" onClick={() => setShowMore(!showMore)}>
              <HiOutlineDotsHorizontal className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
            </SpecialButton>
          )}
          {showMore && session?.user.id !== propertyOwner && (
            <>
              <SpecialButton name="Review" onClick={toggleAddReview}>
                <MdOutlineModeComment className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
              </SpecialButton>
              <SpecialButton name="Report" onClick={toggleReportProperty}>
                <HiOutlineFlag className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
              </SpecialButton>
            </>
          )}
        </div>
      </div>
    </>
  )
}

const SpecialButton = ({
  name,
  children,
  onClick,
}: {
  name: string
  children: ReactNode
  onClick?: () => void
}) => {
  return (
    <button
      type="button"
      className="border-gray group relative block cursor-pointer rounded-full border p-3 transition-colors hover:border-black/60"
      onClick={onClick}
    >
      {children}
      {
        <span
          className={`absolute left-1/2 top-full mt-1 hidden -translate-x-1/2 select-none rounded-xl border bg-white px-4 py-2 text-sm ${
            name ? 'group-hover:block' : ''
          }`}
        >
          {name}
        </span>
      }
    </button>
  )
}

const SavePropertyButton = ({
  propertyId,
  isSaved,
}: {
  propertyId: string
  isSaved: boolean
}) => {
  const router = useRouter()
  const { data: session } = useSession()
  const [pending, startTransition] = useTransition()
  const saveActionWithId = saveProperty.bind(null, propertyId)
  const unSaveActionWithId = unSaveProperty.bind(null, propertyId)

  const handleSave = () => {
    if (!session) {
      return router.push('/sign-up')
    }
    if (isSaved) {
      return startTransition(async () => {
        await unSaveActionWithId()
      })
    }
    return startTransition(async () => {
      await saveActionWithId()
    })
  }
  return (
    <div className="relative">
      {pending && <SmallSpinner />}
      <SpecialButton name={isSaved ? 'Saved' : 'Save'} onClick={handleSave}>
        {isSaved ? (
          <HiBookmark className="h-4 w-4 text-black/40 transition-colors group-hover:text-black" />
        ) : (
          <HiOutlineBookmark className="h-4 w-4 text-black/40 transition-colors group-hover:text-black" />
        )}
      </SpecialButton>
    </div>
  )
}

const SharePropertyButton = ({ propertyId }: { propertyId: string }) => {
  const [share, setShare] = useState(false)

  const [copied, setCopied] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setCopied(false)
      setShare(false)
    }, 1000)
  }, [copied])

  const copy = () => {
    navigator.clipboard.writeText(
      `http://localhost:3000/property/${propertyId}`,
    )
    setCopied(true)
  }
  return (
    <div className="relative">
      {share && (
        <div className="absolute left-0 top-full z-50 mt-2 block w-max animate-popup rounded-3xl border border-grey bg-white p-2">
          <a
            href={`https://wa.me/send?text=${encodeURIComponent(
              `http://localhost:3000/property/${propertyId}`,
            )}`}
            target="_blank"
            className="group flex cursor-pointer items-center gap-x-2 rounded-2xl px-4 py-2 hover:bg-lightGrey"
            onClick={() => setShare(false)}
          >
            <MdWhatsapp className="h-4 w-4 flex-shrink-0 text-black/60 transition-colors group-hover:text-green-600" />
            <span className="block select-none text-sm text-black/60 transition-colors group-hover:text-black">
              Share on WhatsApp
            </span>
          </a>

          <div
            className="group flex cursor-pointer items-center gap-x-2 rounded-2xl px-4 py-2 hover:bg-lightGrey"
            onClick={copy}
          >
            {copied ? (
              <HiOutlineCheck className="h-4 w-4 flex-shrink-0 text-green-600" />
            ) : (
              <HiOutlineLink className="h-4 w-4 flex-shrink-0 text-black/60 transition-colors group-hover:text-slate-600" />
            )}
            <span className="block select-none text-sm text-black/60 transition-colors group-hover:text-black">
              {copied ? 'Link copied' : 'Copy link'}
            </span>
          </div>
        </div>
      )}
      <SpecialButton onClick={() => setShare(!share)} name="">
        <HiOutlineShare className="h-4 w-4 text-black/60 transition-colors group-hover:text-black" />
      </SpecialButton>
    </div>
  )
}

const ViewMore = ({
  description,
  features,
  rules,
  guestsLimit,
  quietHours,
  checkIn,
  checkOut,
  selected,
  setSelected,
}: {
  description: string
  features: string[]
  rules: string[]
  guestsLimit: string
  quietHours: string
  checkIn: string
  checkOut: string
  selected: string
  setSelected: (selected: string) => void
}) => {
  return (
    <DetailsContainer>
      <ul className="flex items-center justify-between gap-x-4 border-b border-grey px-4 lg:px-6">
        <li className="relative py-5">
          <span
            className={`cursor-pointer font-medium ${
              selected === 'description' ? 'text-black' : 'text-black/60'
            } transition-colors hover:text-black`}
            onClick={() => setSelected('description')}
          >
            Description
          </span>
          <span
            className={`absolute bottom-0 ${
              selected === 'description' ? 'block' : 'hidden'
            } h-1.5 w-[calc(100%-8px)] translate-x-1 rounded-t-lg bg-black`}
          ></span>
        </li>
        <li className="relative py-5">
          <span
            className={`cursor-pointer font-medium ${
              selected === 'features' ? 'text-black' : 'text-black/60'
            } transition-colors hover:text-black`}
            onClick={() => setSelected('features')}
          >
            Features
          </span>
          <span
            className={`absolute bottom-0 ${
              selected === 'features' ? 'block' : 'hidden'
            } h-1.5 w-[calc(100%-8px)] translate-x-1 rounded-t-lg bg-black`}
          ></span>
        </li>
        <li className="relative py-5">
          <span
            className={`cursor-pointer font-medium ${
              selected === 'rules' ? 'text-black/100' : 'text-black/60'
            } transition-colors hover:text-black`}
            onClick={() => setSelected('rules')}
          >
            Rules
          </span>
          <span
            className={`absolute bottom-0 ${
              selected === 'rules' ? 'block' : 'hidden'
            } h-1.5 w-[calc(100%-8px)] translate-x-1 rounded-t-lg bg-black`}
          ></span>
        </li>
        <li
          className="cursor-pointer rounded-full bg-light-100 p-2 transition-colors hover:bg-grey"
          onClick={() => setSelected('')}
        >
          <HiOutlineX className="h-4 w-4" />
        </li>
      </ul>
      <div className="max-h-[500px] overflow-y-auto px-4 md:max-h-[700px] lg:px-6">
        {selected === 'description' && (
          <p className="py-6 leading-relaxed">{description}</p>
        )}

        {selected === 'features' && (
          <ul>
            {features.map((item, i) => (
              <li
                key={i}
                className="border-b border-grey py-4 last:border-none"
              >
                <span className="text-sm text-black">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {selected === 'rules' && (
          <>
            <h2 className="mt-4 text-lg font-medium lg:mt-6">Specific rules</h2>
            <div className="mb-6">
              <div className="flex items-center justify-between border-b border-b-grey py-4 text-sm text-black">
                <div className="flex items-center gap-x-4">
                  <TbMoonStars className="h-4 w-4 text-black/60" />
                  <span>Quiet hours</span>
                </div>
                <span className="font-medium">{quietHours}</span>
              </div>
              <div className="flex items-center justify-between border-b border-b-grey py-4 text-sm text-black">
                <div className="flex items-center gap-x-4">
                  <MdPeopleOutline className="h-4 w-4 text-black/60" />
                  <span>Guest Limit</span>
                </div>
                <span className="font-medium">
                  {guestsLimit} {guestsLimit === '1' ? 'Person' : 'People'}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-b-grey py-4 text-sm text-black">
                <div className="flex items-center gap-x-4">
                  <TbDoorEnter className="h-4 w-4 text-black/60" />
                  <span>Check-in</span>
                </div>
                <span className="font-medium">{checkIn}</span>
              </div>
              <div className="flex items-center justify-between border-b border-b-grey py-4 text-sm text-black">
                <div className="flex items-center gap-x-4">
                  <TbDoorExit className="h-4 w-4 text-black/60" />
                  <span>Check-out</span>
                </div>
                <span className="font-medium">{checkOut}</span>
              </div>
            </div>

            <h2 className="text-lg font-medium">General rules</h2>
            <ul>
              {rules.map((item, i) => (
                <li
                  key={i}
                  className="border-b border-grey py-4 last:border-none"
                >
                  <span className="text-sm text-black">{item}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </DetailsContainer>
  )
}

const PropertyReviews = ({
  propertyId,
  propertyReviews,
}: {
  propertyId: string
  propertyReviews: ReviewObj[]
}) => {
  const [reviewsToSee, setReviewsToSee] = useState(3)
  const { addReview, toggleAddReview } = useAddReview()

  const handleReviews = () => {
    setReviewsToSee((prevState) => {
      if (propertyReviews.length <= prevState) {
        return 3
      }
      return prevState + 3
    })
  }

  return (
    <>
      {addReview && (
        <AddReview toggleAddReview={toggleAddReview} propertyId={propertyId} />
      )}
      <div className="mt-6 lg:mt-8">
        <h2 className="ml-4 text-xl font-medium md:ml-0 lg:text-2xl">
          What people say about this property
        </h2>

        {
          <Reviews
            reviewsArr={propertyReviews}
            reviewsToShow={reviewsToSee}
            toggleAddReview={toggleAddReview}
          />
        }

        {propertyReviews.length > 3 && (
          <SeeMoreBtn
            label={
              propertyReviews.length <= reviewsToSee
                ? 'Hide all reviews'
                : 'View more reviews'
            }
            onClick={handleReviews}
            className="ml-4 md:ml-0"
          />
        )}
      </div>
    </>
  )
}

const PropertyLocation = ({
  address,
  country,
  city,
  state,
  postalCode,
}: PropertyLocationType) => {
  return (
    <div className="mt-6 px-4 md:p-0 lg:mt-8">
      <h2 className="text-xl font-medium md:ml-0 lg:text-2xl">
        Where is this property located
      </h2>

      <div className="my-4 gap-x-8 lg:my-6 lg:grid lg:grid-cols-2">
        <div className="pt-2">
          <h2 className="mb-4 text-xl font-medium">Property location</h2>

          <p className="mb-6 leading-relaxed text-black/60 lg:mb-8">
            The details supplied are specific to the property's exact location.
            The address may be shown on the map as a precise position or as a
            close approximation.
          </p>

          <ul className="sm:grid sm:grid-cols-2 sm:gap-x-4 lg:block">
            <li className="mb-6 lg:mb-8">
              <span className="mb-1 block font-medium">Address</span>
              <div className="flex items-center gap-x-2">
                <HiOutlineLocationMarker className="h-4 w-4 text-black/40" />
                <span className="text-sm text-black/60">{address}</span>
              </div>
            </li>
            <li className="mb-6 lg:mb-8">
              <span className="mb-1 block font-medium">Country</span>
              <div className="flex items-center gap-x-2">
                <HiOutlineFlag className="h-4 w-4 text-black/40" />
                <span className="text-sm text-black/60">{country}</span>
              </div>
            </li>
            <li className="mb-6 lg:mb-8">
              <span className="mb-1 block font-medium">City</span>
              <div className="flex items-center gap-x-2">
                <HiOutlineOfficeBuilding className="h-4 w-4 text-black/40" />
                <span className="text-sm text-black/60">{city}</span>
              </div>
            </li>
            <li className="mb-6 lg:mb-8">
              <span className="mb-1 block font-medium">Provenance</span>
              <div className="flex items-center gap-x-2">
                <HiOutlineTag className="h-4 w-4 text-black/40" />
                <span className="text-sm text-black/60">{state}</span>
              </div>
            </li>
            <li className="mb-6 lg:mb-0">
              <span className="mb-1 block font-medium">ZIP/Postal Code</span>
              <div className="flex items-center gap-x-2">
                <HiOutlineMail className="h-4 w-4 text-black/40" />
                <span className="text-sm text-black/60">{postalCode}</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="relative h-[600px] w-full overflow-hidden rounded-3xl">
          {/* <Map address={address} /> */}
        </div>
      </div>
    </div>
  )
}

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

const AddReview = ({
  toggleAddReview,
  propertyId,
}: {
  toggleAddReview: () => void
  propertyId: string
}) => {
  const initialState = {
    message: null,
    success: null,
  }
  const [state, formAction] = useFormState(addReview, initialState)
  const [range, setRange] = useState('0.5')

  useEffect(() => {
    if (!state.success) return
    toggleAddReview()
  }, [state])

  return (
    <DetailsContainer>
      <div className="flex items-center justify-between gap-x-4 border-b border-grey p-4 lg:px-6">
        <span className="cursor-pointer font-medium text-black">
          Add Review
        </span>

        <div
          className="cursor-pointer rounded-full bg-light-100 p-2 transition-colors hover:bg-grey"
          onClick={toggleAddReview}
        >
          <HiOutlineX className="h-4 w-4" />
        </div>
      </div>
      <div className="max-h-[580px] overflow-y-scroll p-4 pb-0 lg:max-h-[760px] lg:overflow-auto lg:px-6">
        <h2 className="mb-4 text-xl font-medium">
          What do you think about this property?
        </h2>
        <p className="mb-4 leading-relaxed text-black/60 lg:mb-6">
          Share your thoughts on this property, but please remember to keep it
          respectful. Inappropriate reviews may result in account restrictions.
        </p>

        <form
          action={async (formData) => {
            formData.append('propertyId', propertyId)
            await formAction(formData)
          }}
        >
          <span className="mb-4 block font-medium lg:mb-5">
            Who you might be?
          </span>
          {!state.success && <ErrorContainer error={state.message} />}
          <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <CustomRadioButton id="renter" name="reviewerType" value="Renter">
              <span className="font-medium">Already rented</span>
            </CustomRadioButton>
            <CustomRadioButton id="buyer" name="reviewerType" value="Buyer">
              <span className="font-medium">Already bought</span>
            </CustomRadioButton>
            <CustomRadioButton
              id="explorer"
              name="reviewerType"
              value="Explorer"
            >
              <span className="font-medium">Just Exploring</span>
            </CustomRadioButton>
          </div>
          <div className="mb-6">
            <span className="mb-4 block font-medium lg:mb-5">
              How would you rate this place?
            </span>
            <div className="flex items-center gap-x-4">
              <input
                type="range"
                name="reviewRange"
                step={0.5}
                min={0.5}
                max={5}
                defaultValue={0.5}
                onChange={(e) => setRange(e.target.value)}
              />
              <span className="inline-block min-w-[130px] rounded-2xl border px-4 py-2 text-center font-medium">
                {range} / 5 stars
              </span>
            </div>
          </div>

          <div>
            <span className="mb-4 block font-medium lg:mb-5">
              What would you say about this property?
            </span>
            <textarea
              className="block h-36 w-full resize-none appearance-none rounded-3xl border border-grey bg-transparent p-4 text-black focus:border-black/60 focus:outline-none focus:ring-0"
              placeholder="Share your thoughts here..."
              name="reviewContent"
            />
          </div>

          <div className="mt-12">
            <Line />
            <div className="mb-4 mt-auto flex gap-x-2 md:mb-5 md:ml-auto md:w-fit">
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-center rounded-full border border-grey px-8 py-3 font-medium text-black transition-colors hover:border-black/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
                onClick={toggleAddReview}
              >
                <span className="block">Cancel</span>
              </button>
              <SubmitButton name="Review" />
            </div>
          </div>
        </form>
      </div>
    </DetailsContainer>
  )
}

const ReportProperty = ({
  toggleReportProperty,
  propertyId,
}: {
  toggleReportProperty: () => void
  propertyId: string
}) => {
  const initialState = {
    success: null,
    message: null,
  }
  const [state, formAction] = useFormState(makeReport, initialState)

  useEffect(() => {
    if (!state.success) return
    toggleReportProperty()
  }, [state])

  return (
    <DetailsContainer>
      <div className="flex items-center justify-between gap-x-4 border-b border-grey p-4 lg:px-6">
        <span className="cursor-pointer font-medium text-black">
          Report Property
        </span>

        <div
          className="cursor-pointer rounded-full bg-light-100 p-2 transition-colors hover:bg-grey"
          onClick={toggleReportProperty}
        >
          <HiOutlineX className="h-4 w-4" />
        </div>
      </div>
      <div className="max-h-[580px] overflow-y-scroll p-4 pb-0 lg:max-h-[760px] lg:overflow-auto lg:px-6">
        <form
          action={async (formData) => {
            formData.append('propertyId', propertyId)
            await formAction(formData)
          }}
        >
          <span className="mb-4 block font-medium lg:mb-5">
            What is the reason for reporting this property?
          </span>
          {!state.success && <ErrorContainer error={state.message} />}
          <div className="mb-6 flex flex-col gap-4">
            <CustomRadioButton
              id="inaccurate"
              name="reportReason"
              value="Inaccurate Listing"
            >
              <span className="block font-medium">Inaccurate Listing</span>
              <span className="block text-sm text-black/60">
                Report incorrect property details
              </span>
            </CustomRadioButton>
            <CustomRadioButton
              id="suspicious"
              name="reportReason"
              value="Suspicious Activity"
            >
              <span className="block font-medium">Suspicious Activity</span>
              <span className="block text-sm text-black/60">
                Flag potentially fraudulent behavior
              </span>
            </CustomRadioButton>
            <CustomRadioButton
              id="misleading"
              name="reportReason"
              value="Misleading Info"
            >
              <span className="block font-medium">Misleading Info</span>
              <span className="block text-sm text-black/60">
                Report deceptive property information
              </span>
            </CustomRadioButton>
            <CustomRadioButton
              id="inappropriate"
              name="reportReason"
              value="Inappropriate Content"
            >
              <span className="block font-medium">Inappropriate Content</span>
              <span className="block text-sm text-black/60">
                Flag offensive or unsuitable content
              </span>
            </CustomRadioButton>
          </div>
          <div>
            <span className="mb-4 block font-medium lg:mb-5">
              Can you provide more details about the issue?
            </span>
            <textarea
              className="block h-36 w-full resize-none appearance-none rounded-3xl border border-grey bg-transparent p-4 text-black focus:border-black/60 focus:outline-none focus:ring-0"
              placeholder="Share your thoughts here..."
              name="reportDescription"
            />
          </div>

          <div className="mt-12">
            <Line />
            <div className="mb-4 mt-auto flex gap-x-2 md:mb-5 md:ml-auto md:w-fit">
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-center rounded-full border border-grey px-8 py-3 font-medium text-black transition-colors hover:border-black/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-600"
                onClick={toggleReportProperty}
              >
                <span className="block">Cancel</span>
              </button>
              <SubmitButton name="Report" />
            </div>
          </div>
        </form>
      </div>
    </DetailsContainer>
  )
}

const ErrorContainer = ({
  error,
  className,
}: {
  error: string
  className?: string
}) => {
  return (
    <>
      {error && (
        <div
          className={`mb-5 flex items-center gap-x-2 rounded-2xl border border-red-500 p-4 text-sm text-red-500 lg:mb-6 ${className}`}
        >
          <MdOutlineInfo className="h-4 w-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </>
  )
}

export default PropertyDetails

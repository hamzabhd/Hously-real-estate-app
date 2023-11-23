'use client'
import { useState } from 'react'
import { UserProfileObj } from '@/types/types'
import { getReservedProperties } from 'utils/getReservedProperties'
import ProfileNavbar from './ProfileNavbar'
import ProfileAbout from '../layouts/ProfileAbout'
import SavedProperties from '../layouts/SavedProperties'
import UserListings from '../layouts/UserListings'
import UserReservations from '../layouts/UserReservations'
import ReservedProperties from '../layouts/ReservedProperties'

const UserProfile = ({
  user,
  currentUser,
}: {
  user: UserProfileObj
  currentUser: string
}) => {
  const currentUserProfile = user._id === currentUser
  const [link, setLink] = useState('listings')

  const setActiveLink = (link: string) => {
    setLink(link)
  }
  const savedProperties = user.savedProperties.map((p) => p._id)
  let reservationsArr = getReservedProperties(user.properties)

  const message =
    user._id !== currentUser
      ? "This user haven't created any properties"
      : undefined

  return (
    <div className="mt-6 min-h-screen">
      <ProfileNavbar
        link={link}
        setActiveLink={setActiveLink}
        currentUser={currentUserProfile}
      />
      {link === 'listings' && (
        <UserListings
          properties={user.properties}
          savedProperties={savedProperties}
          message={message}
        />
      )}
      {link === 'savedProperties' && currentUserProfile && (
        <SavedProperties savedProperties={user.savedProperties} />
      )}
      {link === 'reserved' && currentUserProfile && (
        <ReservedProperties reservations={reservationsArr} />
      )}
      {link === 'myReservations' && currentUserProfile && (
        <UserReservations reservations={user.reservations} />
      )}
      {link === 'about' && (
        <ProfileAbout user={user} currentUser={currentUser} />
      )}
    </div>
  )
}

export default UserProfile

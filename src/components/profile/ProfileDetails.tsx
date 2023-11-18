'use client'
import { useState } from 'react'
import { UserProfileObj } from '@/types/types'
import ProfileNavbar from './subComponents/ProfileNavbar'
import ProfileAbout from './subComponents/ProfileAbout'
import SavedProperties from './subComponents/SavedProperties'
import ProfileListings from './subComponents/ProfileListings'

const ProfileDetails = ({ user }: { user: UserProfileObj }) => {
  const [link, setLink] = useState('listings')

  const setActiveLink = (link: string) => {
    setLink(link)
  }
  const savedProperties = user.savedProperties.map((p) => p._id)
  return (
    <div className="mt-6 min-h-screen">
      <ProfileNavbar link={link} setActiveLink={setActiveLink} />
      {link === 'about' && <ProfileAbout user={user} />}
      {link === 'savedProperties' && (
        <SavedProperties savedProperties={user.savedProperties} />
      )}
      {link === 'listings' && (
        <ProfileListings
          properties={user.properties}
          savedProperties={savedProperties}
        />
      )}
    </div>
  )
}

export default ProfileDetails

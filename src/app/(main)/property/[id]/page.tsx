import PropertyDetails from '@/components/property/PropertyDetails'
import React from 'react'
import { getProperty } from 'utils/getProperties'
import { getUser } from 'utils/getUser'

const PropertyPage = async ({ params }: { params: { id: string } }) => {
  const property = await getProperty(params.id)
  const currentUser = await getUser()

  return (
    <div className="mx-auto max-w-[1248px]">
      <PropertyDetails
        property={property}
        savedProperties={currentUser.savedProperties}
      />
    </div>
  )
}

export default PropertyPage

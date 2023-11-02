import PropertyDetails from '@/components/property/PropertyDetails'
import React from 'react'
import { getProperty } from 'utils/getProperties'

const PropertyPage = async ({ params }: { params: { id: string } }) => {
  const property = await getProperty(params.id)

  return (
    <div className="mx-auto max-w-[1248px]">
      <PropertyDetails property={property} />
    </div>
  )
}

export default PropertyPage

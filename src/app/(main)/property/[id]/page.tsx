import PropertyDetails from '@/components/property/PropertyDetails'
import React from 'react'

const PropertyPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="mx-auto max-w-[1248px]">
      <PropertyDetails />
    </div>
  )
}

export default PropertyPage

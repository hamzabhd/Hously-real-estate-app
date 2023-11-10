import React, { Fragment } from 'react'
import PropertyCard from './PropertyCard'
import { PropertyType } from '@/types/types'

const PropertiesPage = ({ properties }: { properties: PropertyType[] }) => {
  return (
    <div className="mx-auto grid max-w-[1600px] gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {properties.map((property, i) => (
        <Fragment key={i}>
          <PropertyCard property={property} />
        </Fragment>
      ))}
    </div>
  )
}

export default PropertiesPage

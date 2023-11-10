import DetailsContainer from '@/components/layouts/DetailsContainer'
import React from 'react'
import { TbResize } from 'react-icons/tb'
import ListDetails from './ListDetails'
import { PropertyType } from '@/types/types'

const EssentialDetails = ({
  toggleContainer,
  property,
}: {
  toggleContainer: () => void
  property: PropertyType
}) => {
  return (
    <DetailsContainer
      title="Property details"
      toggleContainer={toggleContainer}
    >
      <div className="max-h-[580px] overflow-y-scroll p-4 pb-0 lg:max-h-[760px] lg:overflow-auto lg:px-6">
        <div className="mb-4">
          <h2 className="text-lg font-medium">Spacing</h2>
          <div className="flex items-center justify-between pt-4 text-sm text-black">
            <div className="flex items-center gap-x-4">
              <TbResize className="h-4 w-4 text-black/60" />
              <span>Property area</span>
            </div>
            <span className="font-medium">{property.propertySpace} m²</span>
          </div>
        </div>
        <ListDetails property={property} type="Bedroom" />
        <ListDetails property={property} type="Bed" />
        <ListDetails property={property} type="Bathroom" />
      </div>
    </DetailsContainer>
  )
}

export default EssentialDetails

import { PropertyLocationType } from '@/types/types'
import {
  HiOutlineFlag,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineOfficeBuilding,
  HiOutlineTag,
} from 'react-icons/hi'
import Map from '../../custom/Map'

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
          <Map address={address} />
        </div>
      </div>
    </div>
  )
}

export default PropertyLocation

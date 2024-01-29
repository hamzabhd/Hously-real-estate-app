import { PropertyLocationType } from '@/types/types'
import {
  HiFlag,
  HiLocationMarker,
  HiMail,
  HiOfficeBuilding,
  HiTag,
} from 'react-icons/hi'

const PropertyLocation = ({
  address,
  country,
  city,
  state,
  postalCode,
}: PropertyLocationType) => {
  return (
    <div className="mt-6 px-4 md:px-6 lg:mt-8">
      <h2 className="text-xl font-medium md:ml-0 lg:text-2xl">
        Where is this property located
      </h2>

      <div className="my-4 gap-x-8">
        <div className="pt-2 lg:pt-4">
          <h2 className="mb-4 text-lg font-medium tracking-wide lg:text-xl">
            Property location
          </h2>

          <p className="mb-6 leading-relaxed text-black/60 lg:mb-8">
            The details supplied are specific to the property&apos;s exact
            location. Please note that the map is not available in this demo
            app.
          </p>
          <ul className="sm:grid sm:grid-cols-2 sm:gap-x-4 lg:grid lg:grid-cols-2">
            <li className="mb-6 lg:mb-8">
              <span className="mb-1 block font-medium">Address</span>
              <div className="flex items-center gap-x-2">
                <HiLocationMarker className="text-neutral-800" />
                <span className="text-sm font-medium tracking-wider text-black/40">
                  {address}
                </span>
              </div>
            </li>
            <li className="mb-6 lg:mb-8">
              <span className="mb-1 block font-medium">Country</span>
              <div className="flex items-center gap-x-2">
                <HiFlag className="text-neutral-800" />
                <span className="text-sm font-medium tracking-wider text-black/40">
                  {country}
                </span>
              </div>
            </li>
            <li className="mb-6 lg:mb-8">
              <span className="mb-1 block font-medium">City</span>
              <div className="flex items-center gap-x-2">
                <HiOfficeBuilding className="text-neutral-800" />
                <span className="text-sm font-medium tracking-wider text-black/40">
                  {city}
                </span>
              </div>
            </li>
            <li className="mb-6 lg:mb-8">
              <span className="mb-1 block font-medium">Provenance</span>
              <div className="flex items-center gap-x-2">
                <HiTag className="text-neutral-800" />
                <span className="text-sm font-medium tracking-wider text-black/40">
                  {state}
                </span>
              </div>
            </li>
            <li className="mb-6 lg:mb-0">
              <span className="mb-1 block font-medium">ZIP/Postal Code</span>
              <div className="flex items-center gap-x-2">
                <HiMail className="text-neutral-800" />
                <span className="text-sm font-medium tracking-wider text-black/40">
                  {postalCode}
                </span>
              </div>
            </li>
          </ul>
        </div>
        {/* render the map depending on the address provided */}
        {/* <div className="relative h-[500px] w-full overflow-hidden rounded-3xl border-2 lg:h-[600px] ">
          <Map address={address} />
        </div> */}
      </div>
    </div>
  )
}

export default PropertyLocation

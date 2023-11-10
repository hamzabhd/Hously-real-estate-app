import { useState } from 'react'
import { ChoiceKeys, ObjectKey, PropertyType } from '@/types/types'
import { getRightChoice } from 'utils/itemManagement/itemManagement'
import { LuBath, LuBedDouble, LuBedSingle } from 'react-icons/lu'
import { PiCaretDownBold } from 'react-icons/pi'

const ListDetails = ({
  property,
  type,
}: {
  property: PropertyType
  type: string
}) => {
  const Icon =
    type === 'Bedroom' ? LuBedDouble : type === 'Bed' ? LuBedSingle : LuBath
  const name = type.toLocaleLowerCase()
  const indexType = name + 's'
  const [extend, setExtend] = useState(false)

  // render the details dynamically based on the type provided
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between border-b border-grey py-4">
        <h2 className="text-lg font-medium">{type}s</h2>
        {/* toggle the details container */}
        <button className="" onClick={() => setExtend(!extend)}>
          <PiCaretDownBold
            className={`${extend ? ' rotate-180 ' : 'rotate-0'} transition-all`}
          />
        </button>
      </div>
      {extend && (
        <ul>
          {/* index the detail dynamically */}
          {property[indexType as ChoiceKeys].map((b, i) => {
            {
              /* get more details based on the current index */
            }
            const rightChoice = getRightChoice(
              name as ObjectKey,
              b[(name + 'Type') as ObjectKey],
            )
            return (
              <li
                className="flex flex-col gap-y-2 border-b  px-2 py-4 text-sm text-black last:border-none last:pb-0"
                key={i}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-4">
                    <Icon className="h-4 w-4 text-black/60" />
                    <span>
                      {type} {b[name as ObjectKey]}
                    </span>
                  </div>
                  <span className="font-medium">
                    {b[(name + 'Type') as ObjectKey]}
                  </span>
                </div>

                <p className="leading-relaxed text-black/60">
                  {rightChoice.desc}.
                </p>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default ListDetails

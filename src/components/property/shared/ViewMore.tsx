import DetailsContainer from '@/components/layouts/DetailsContainer'
import { PropertyType } from '@/types/types'
import { MdPeopleOutline } from 'react-icons/md'
import { TbDoorEnter, TbDoorExit, TbMoonStars } from 'react-icons/tb'

const ViewMore = ({
  selected,
  property,
  toggleContainer,
}: {
  selected: string
  property: PropertyType
  toggleContainer: () => void
}) => {
  const {
    description,
    rules,
    features,
    quietHours,
    checkIn,
    checkOut,
    guestsLimit,
  } = property
  return (
    <DetailsContainer
      title={`Property ${selected}`}
      toggleContainer={toggleContainer}
    >
      <div className="max-h-[500px] overflow-y-auto px-4 md:max-h-[700px] lg:px-6">
        {selected === 'description' && (
          <p className="py-6 leading-relaxed">{description}</p>
        )}

        {selected === 'features' && (
          <ul>
            {features.map((item, i) => (
              <li
                key={i}
                className="border-b border-grey py-4 last:border-none"
              >
                <span className="text-sm text-black">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {selected === 'rules' && (
          <>
            <h2 className="mt-4 text-lg font-medium lg:mt-6">Specific rules</h2>
            <div className="mb-6">
              {quietHours && (
                <div className="flex items-center justify-between border-b border-b-grey py-4 text-sm text-black">
                  <div className="flex items-center gap-x-4">
                    <TbMoonStars className="h-4 w-4 text-black/60" />
                    <span>Quiet hours</span>
                  </div>
                  <span className="font-medium">{quietHours}</span>
                </div>
              )}
              {guestsLimit && (
                <div className="flex items-center justify-between border-b border-b-grey py-4 text-sm text-black">
                  <div className="flex items-center gap-x-4">
                    <MdPeopleOutline className="h-4 w-4 text-black/60" />
                    <span>Guest Limit</span>
                  </div>
                  <span className="font-medium">
                    {guestsLimit} {guestsLimit === '1' ? 'Person' : 'People'}
                  </span>
                </div>
              )}
              {checkIn && (
                <div className="flex items-center justify-between border-b border-b-grey py-4 text-sm text-black">
                  <div className="flex items-center gap-x-4">
                    <TbDoorEnter className="h-4 w-4 text-black/60" />
                    <span>Check-in</span>
                  </div>
                  <span className="font-medium">{checkIn}</span>
                </div>
              )}
              {checkOut && (
                <div className="flex items-center justify-between border-b border-b-grey py-4 text-sm text-black">
                  <div className="flex items-center gap-x-4">
                    <TbDoorExit className="h-4 w-4 text-black/60" />
                    <span>Check-out</span>
                  </div>
                  <span className="font-medium">{checkOut}</span>
                </div>
              )}
            </div>

            <h2 className="text-lg font-medium">General rules</h2>
            <ul>
              {rules.map((item, i) => (
                <li
                  key={i}
                  className="border-b border-grey py-4 last:border-none"
                >
                  <span className="text-sm text-black">{item}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </DetailsContainer>
  )
}

export default ViewMore

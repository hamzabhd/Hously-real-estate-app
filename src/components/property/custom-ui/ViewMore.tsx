import DetailsContainer from '@/components/layouts/DetailsContainer'
import { HiOutlineX } from 'react-icons/hi'
import { MdPeopleOutline } from 'react-icons/md'
import { TbDoorEnter, TbDoorExit, TbMoonStars } from 'react-icons/tb'

const ViewMore = ({
  description,
  features,
  rules,
  guestsLimit,
  quietHours,
  checkIn,
  checkOut,
  selected,
  setSelected,
}: {
  description: string
  features: string[]
  rules: string[]
  guestsLimit: string
  quietHours: string
  checkIn: string
  checkOut: string
  selected: string
  setSelected: (selected: string) => void
}) => {
  return (
    <DetailsContainer>
      <ul className="flex items-center justify-between gap-x-4 border-b border-grey px-4 lg:px-6">
        <li className="relative py-5">
          <span
            className={`cursor-pointer font-medium ${
              selected === 'description' ? 'text-black' : 'text-black/60'
            } transition-colors hover:text-black`}
            onClick={() => setSelected('description')}
          >
            Description
          </span>
          <span
            className={`absolute bottom-0 ${
              selected === 'description' ? 'block' : 'hidden'
            } h-1.5 w-[calc(100%-8px)] translate-x-1 rounded-t-lg bg-black`}
          ></span>
        </li>
        <li className="relative py-5">
          <span
            className={`cursor-pointer font-medium ${
              selected === 'features' ? 'text-black' : 'text-black/60'
            } transition-colors hover:text-black`}
            onClick={() => setSelected('features')}
          >
            Features
          </span>
          <span
            className={`absolute bottom-0 ${
              selected === 'features' ? 'block' : 'hidden'
            } h-1.5 w-[calc(100%-8px)] translate-x-1 rounded-t-lg bg-black`}
          ></span>
        </li>
        <li className="relative py-5">
          <span
            className={`cursor-pointer font-medium ${
              selected === 'rules' ? 'text-black/100' : 'text-black/60'
            } transition-colors hover:text-black`}
            onClick={() => setSelected('rules')}
          >
            Rules
          </span>
          <span
            className={`absolute bottom-0 ${
              selected === 'rules' ? 'block' : 'hidden'
            } h-1.5 w-[calc(100%-8px)] translate-x-1 rounded-t-lg bg-black`}
          ></span>
        </li>
        <li
          className="cursor-pointer rounded-full bg-light-100 p-2 transition-colors hover:bg-grey"
          onClick={() => setSelected('')}
        >
          <HiOutlineX className="h-4 w-4" />
        </li>
      </ul>
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
              <div className="flex items-center justify-between border-b border-b-grey py-4 text-sm text-black">
                <div className="flex items-center gap-x-4">
                  <TbMoonStars className="h-4 w-4 text-black/60" />
                  <span>Quiet hours</span>
                </div>
                <span className="font-medium">{quietHours}</span>
              </div>
              <div className="flex items-center justify-between border-b border-b-grey py-4 text-sm text-black">
                <div className="flex items-center gap-x-4">
                  <MdPeopleOutline className="h-4 w-4 text-black/60" />
                  <span>Guest Limit</span>
                </div>
                <span className="font-medium">
                  {guestsLimit} {guestsLimit === '1' ? 'Person' : 'People'}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-b-grey py-4 text-sm text-black">
                <div className="flex items-center gap-x-4">
                  <TbDoorEnter className="h-4 w-4 text-black/60" />
                  <span>Check-in</span>
                </div>
                <span className="font-medium">{checkIn}</span>
              </div>
              <div className="flex items-center justify-between border-b border-b-grey py-4 text-sm text-black">
                <div className="flex items-center gap-x-4">
                  <TbDoorExit className="h-4 w-4 text-black/60" />
                  <span>Check-out</span>
                </div>
                <span className="font-medium">{checkOut}</span>
              </div>
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

'use client'
import { Dispatch, SetStateAction, ChangeEvent } from 'react'
import { MdSingleBed } from 'react-icons/md'
import { BiMinus } from 'react-icons/bi'
import CustomRadioButton from '@/components/CustomRadioButton'
import Container from '@/components/Container'

interface BedroomsObj {
  bedroom: number
  bedroomType: string
}
type BedroomsSelectionProps = {
  bedrooms: BedroomsObj[]
  selectedBedroom: number
  setSelectedBedroom: Dispatch<SetStateAction<number>>
  addBedroom: () => void
  removeBedroom: () => void
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const BedroomsSelection = ({
  bedrooms,
  selectedBedroom,
  setSelectedBedroom,
  addBedroom,
  removeBedroom,
  handleChange,
}: BedroomsSelectionProps) => {
  return (
    <>
      <Container title="Bedrooms" type="grid">
        <div
          onClick={addBedroom}
          className="group flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 border-dashed border-grey p-4 transition-colors hover:border-black/60"
        >
          <MdSingleBed className="h-12 w-12" />
          <span className="text-center font-medium text-black/60 transition group-hover:text-black">
            Click to add a bedroom
          </span>
        </div>
        {bedrooms.map((b, i) => (
          <div className="group relative" key={i}>
            <span
              className={`group/remove absolute right-4 top-4 z-10 hidden cursor-pointer rounded-full border border-grey p-1 text-black/60 transition-colors hover:border-black/60 ${
                selectedBedroom <= 1 ? 'hidden' : 'group-last:block'
              }`}
              onClick={removeBedroom}
            >
              <BiMinus className="h-4 w-4 text-grey transition-colors group-hover/remove:text-black" />
            </span>
            <div
              className={`${
                selectedBedroom === b.bedroom
                  ? 'border-black/60'
                  : 'border-grey'
              } group relative flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 p-4 transition-colors hover:border-black/60`}
              onClick={() => setSelectedBedroom(b.bedroom)}
            >
              <MdSingleBed className="h-12 w-12" />
              <span
                className={`text-center font-medium transition group-hover:text-black ${
                  selectedBedroom === b.bedroom ? 'text-black' : 'text-black/60'
                }`}
              >
                Bedroom {b.bedroom}
                <span className=" block text-sm text-black/40">
                  {b.bedroomType}
                </span>
              </span>
            </div>
          </div>
        ))}
      </Container>
      <Container type="normal">
        {bedrooms
          .filter((b) => b.bedroom === selectedBedroom)
          .map((item) => (
            <div
              key={item.bedroom}
              className="flex flex-col gap-4 sm:grid sm:grid-cols-2 "
            >
              <CustomRadioButton
                value="Master Bedroom"
                name={`bedroom${selectedBedroom}`}
                id="master"
                handleChange={handleChange}
                selected={
                  bedrooms[selectedBedroom - 1].bedroomType === 'Master Bedroom'
                }
              >
                <span className="block font-medium">Master Bedroom</span>
                <span className="block text-sm text-black/60">
                  The largest and most luxurious bedroom in a home, often with
                  an attached bathroom.
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="Guest Bedroom"
                name={`bedroom${selectedBedroom}`}
                id="guest"
                handleChange={handleChange}
                selected={
                  bedrooms[selectedBedroom - 1].bedroomType === 'Guest Bedroom'
                }
              >
                <span className="block font-medium">Guest Bedroom</span>
                <span className="block text-sm text-black/60">
                  A bedroom designated for visitors and guests staying overnight
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="Children's Bedroom"
                name={`bedroom${selectedBedroom}`}
                id="children"
                handleChange={handleChange}
                selected={
                  bedrooms[selectedBedroom - 1].bedroomType ===
                  "Children's Bedroom"
                }
              >
                <span className="block font-medium">Children's Bedroom</span>
                <span className="block text-sm text-black/60">
                  A bedroom designed for children, often with playful decor and
                  furnishings
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="Bedroom Combo"
                name={`bedroom${selectedBedroom}`}
                id="combo"
                handleChange={handleChange}
                selected={
                  bedrooms[selectedBedroom - 1].bedroomType === 'Bedroom Combo'
                }
              >
                <span className="block font-medium">Bedroom Combo</span>
                <span className="block text-sm text-black/60">
                  A multi-purpose room that serves as both a bedroom and a
                  functional workspace.
                </span>
              </CustomRadioButton>
            </div>
          ))}
      </Container>
    </>
  )
}

export default BedroomsSelection

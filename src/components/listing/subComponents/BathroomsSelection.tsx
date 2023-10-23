'use client'
import { Dispatch, SetStateAction, useState, ChangeEvent } from 'react'
import { BiMinus, BiBath } from 'react-icons/bi'
import CustomRadioButton from '@/components/CustomRadioButton'
import Container from '@/components/Container'

interface BathroomsObj {
  bathroom: number
  bathroomType: string
}
type BathroomsSelectionProps = {
  bathrooms: BathroomsObj[]
  selectedBathroom: number
  setSelectedBathroom: Dispatch<SetStateAction<number>>
  addBathroom: () => void
  removeBathroom: () => void
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const BathroomsSelection = ({
  bathrooms,
  selectedBathroom,
  setSelectedBathroom,
  addBathroom,
  removeBathroom,
  handleChange,
}: BathroomsSelectionProps) => {
  return (
    <>
      <Container title="Bathrooms" type="grid">
        <div
          onClick={addBathroom}
          className="group flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 border-dashed border-grey p-4 transition-colors hover:border-black/60"
        >
          <BiBath className="h-12 w-12" />
          <span className="text-center font-medium text-black/60 transition group-hover:text-black">
            Click to add a bathroom
          </span>
        </div>
        {bathrooms.map((b, i) => (
          <div className="group relative" key={i}>
            <span
              className={`group/remove absolute right-4 top-4 z-10 hidden cursor-pointer rounded-full border border-grey p-1 text-black/60 transition-colors hover:border-black/60 ${
                selectedBathroom <= 1 ? 'hidden' : 'group-last:block'
              }`}
              onClick={removeBathroom}
            >
              <BiMinus className="h-4 w-4 text-grey transition-colors group-hover/remove:text-black" />
            </span>
            <div
              className={`${
                selectedBathroom === b.bathroom
                  ? 'border-black/60'
                  : 'border-grey'
              } group relative flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 p-4 transition-colors hover:border-black/60`}
              onClick={() => setSelectedBathroom(b.bathroom)}
            >
              <BiBath className="h-12 w-12" />
              <span
                className={`text-center font-medium transition group-hover:text-black ${
                  selectedBathroom === b.bathroom
                    ? 'text-black'
                    : 'text-black/60'
                }`}
              >
                Bathroom {b.bathroom}
                <span className=" block text-sm text-black/40">
                  {b.bathroomType}
                </span>
              </span>
            </div>
          </div>
        ))}
      </Container>
      <Container type="normal">
        {bathrooms
          .filter((b) => b.bathroom === selectedBathroom)
          .map((item) => (
            <div
              key={item.bathroom}
              className="flex flex-col gap-4 sm:grid sm:grid-cols-2 "
            >
              <CustomRadioButton
                value="Full Bathroom"
                name={`bathroom${selectedBathroom}`}
                id="full"
                handleChange={handleChange}
                selected={
                  bathrooms[selectedBathroom - 1].bathroomType ===
                  'Full Bathroom'
                }
              >
                <span className="block font-medium">Full Bathroom</span>
                <span className="block text-sm text-black/60">
                  A complete bathroom with a toilet, sink, bathtub, and/or
                  shower
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="Half Bathroom"
                name={`bathroom${selectedBathroom}`}
                id="half"
                handleChange={handleChange}
                selected={
                  bathrooms[selectedBathroom - 1].bathroomType ===
                  'Half Bathroom'
                }
              >
                <span className="block font-medium">Half Bathroom</span>
                <span className="block text-sm text-black/60">
                  A small bathroom with a sink and toilet, but no bathing
                  facilities
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="Master Bathroom"
                name={`bathroom${selectedBathroom}`}
                id="master-bathroom"
                handleChange={handleChange}
                selected={
                  bathrooms[selectedBathroom - 1].bathroomType ===
                  'Master Bathroom'
                }
              >
                <span className="block font-medium">Master Bathroom</span>
                <span className="block text-sm text-black/60">
                  The primary bathroom connected to the master bedroom, often
                  featuring luxury amenities
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="En-suite Bathroom"
                name={`bathroom${selectedBathroom}`}
                id="en-suite"
                handleChange={handleChange}
                selected={
                  bathrooms[selectedBathroom - 1].bathroomType ===
                  'En-suite Bathroom'
                }
              >
                <span className="block font-medium">En-suite Bathroom</span>
                <span className="block text-sm text-black/60">
                  A private bathroom directly connected to and accessible from a
                  bedroom
                </span>
              </CustomRadioButton>
            </div>
          ))}
      </Container>
    </>
  )
}

export default BathroomsSelection

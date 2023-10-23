'use client'
import { Dispatch, SetStateAction, useState, ChangeEvent } from 'react'
import { LuBed } from 'react-icons/lu'
import { BiMinus } from 'react-icons/bi'
import CustomRadioButton from '@/components/CustomRadioButton'
import Container from '@/components/Container'

interface BedsObj {
  bed: number
  bedType: string
}
type BedsSelectionProps = {
  beds: BedsObj[]
  selectedBed: number
  setSelectedBed: Dispatch<SetStateAction<number>>
  addBed: () => void
  removeBed: () => void
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const BedsSelection = ({
  beds,
  selectedBed,
  setSelectedBed,
  addBed,
  removeBed,
  handleChange,
}: BedsSelectionProps) => {
  return (
    <>
      <Container title="Beds" type="grid">
        <div
          onClick={addBed}
          className="group flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 border-dashed border-grey p-4 transition-colors hover:border-black/60"
        >
          <LuBed className="h-12 w-12" />
          <span className="text-center font-medium text-black/60 transition group-hover:text-black">
            Click to add a bed
          </span>
        </div>
        {beds.map((b, i) => (
          <div className="group relative" key={i}>
            <span
              className={`group/remove absolute right-4 top-4 z-10 hidden cursor-pointer rounded-full border border-grey p-1 text-black/60 transition-colors hover:border-black/60 ${
                selectedBed <= 1 ? 'hidden' : 'group-last:block'
              }`}
              onClick={removeBed}
            >
              <BiMinus className="h-4 w-4 text-grey transition-colors group-hover/remove:text-black" />
            </span>
            <div
              className={`${
                selectedBed === b.bed ? 'border-black/60' : 'border-grey'
              } group relative flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 p-4 transition-colors hover:border-black/60`}
              onClick={() => setSelectedBed(b.bed)}
            >
              <LuBed className="h-12 w-12" />
              <span
                className={`text-center font-medium transition group-hover:text-black ${
                  selectedBed === b.bed ? 'text-black' : 'text-black/60'
                }`}
              >
                Bed {b.bed}
                <span className=" block text-sm text-black/40">
                  {b.bedType}
                </span>
              </span>
            </div>
          </div>
        ))}
      </Container>
      <Container type="normal">
        {beds
          .filter((b) => b.bed === selectedBed)
          .map((item) => (
            <div
              key={item.bed}
              className="flex flex-col gap-4 sm:grid sm:grid-cols-2 "
            >
              <CustomRadioButton
                value="Queen Bed"
                name={`bed${selectedBed}`}
                id="queen"
                handleChange={handleChange}
                selected={beds[selectedBed - 1].bedType === 'Queen Bed'}
              >
                <span className="block font-medium">Queen Bed</span>
                <span className="block text-sm text-black/60">
                  Comfortable for couples, provides ample space without
                  overwhelming the room
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="King Bed"
                name={`bed${selectedBed}`}
                id="king"
                handleChange={handleChange}
                selected={beds[selectedBed - 1].bedType === 'King Bed'}
              >
                <span className="block font-medium">King Bed</span>
                <span className="block text-sm text-black/60">
                  Offers maximum sleeping area, perfect for couples who value
                  extra space
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="Twin Bed"
                name={`twin${selectedBed}`}
                id="twin"
                handleChange={handleChange}
                selected={beds[selectedBed - 1].bedType === 'Twin Bed'}
              >
                <span className="block font-medium">Twin Bed</span>
                <span className="block text-sm text-black/60">
                  Compact and commonly used in children's rooms or smaller
                  spaces
                </span>
              </CustomRadioButton>

              <CustomRadioButton
                value="Double Bed"
                name={`bed${selectedBed}`}
                id="double"
                handleChange={handleChange}
                selected={beds[selectedBed - 1].bedType === 'Double Bed'}
              >
                <span className="block font-medium">Double Bed</span>
                <span className="block text-sm text-black/60">
                  Offers more space than a twin, suitable for single sleepers or
                  cozy for couples
                </span>
              </CustomRadioButton>
            </div>
          ))}
      </Container>
    </>
  )
}

export default BedsSelection

'use client'
import { Dispatch, SetStateAction, ChangeEvent, Fragment } from 'react'
import { BiMinus } from 'react-icons/bi'
import CustomRadioButton from '@/components/custom/CustomRadioButton'
import Container from '@/components/layouts/Container'
import { ArrType, ObjectKey } from '@/types/types'
import { IconType } from 'react-icons'

type ChoicesType = {
  id: string
  choice: string
  desc: string
}[]

type DetailsSelectionProps = {
  title: string
  listItems: ArrType
  selectedItem: number
  item: ObjectKey
  itemType: ObjectKey
  choices: ChoicesType
  setSelectedItem: Dispatch<SetStateAction<number>>
  addItem: () => void
  removeItem: () => void
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  Icon: IconType
  error?: string
}

const DetailsSelection = ({
  title,
  listItems,
  selectedItem,
  item,
  itemType,
  choices,
  setSelectedItem,
  addItem,
  removeItem,
  handleChange,
  Icon,
  error,
}: DetailsSelectionProps) => {
  return (
    <>
      <Container title={title + 's'} type="grid" error={error}>
        <div
          onClick={addItem}
          className="group flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 border-dashed border-grey p-4 transition-colors hover:border-black/60"
        >
          <Icon className="h-12 w-12" />
          <span className="text-center font-medium text-black/60 transition group-hover:text-black">
            Click to add a {item}
          </span>
        </div>
        {listItems.map((b, i) => (
          <div className="group relative" key={i}>
            <span
              className={`group/remove absolute right-4 top-4 z-10 hidden cursor-pointer rounded-full border border-grey p-1 text-black/60 transition-colors hover:border-black/60 ${
                selectedItem <= 1 ? 'hidden' : 'group-last:block'
              }`}
              onClick={removeItem}
            >
              <BiMinus className="h-4 w-4 text-grey transition-colors group-hover/remove:text-black" />
            </span>
            <div
              className={`${
                selectedItem === b[item] ? 'border-black/60' : 'border-grey'
              } group relative flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 p-4 transition-colors hover:border-black/60`}
              onClick={() => setSelectedItem(b[item])}
            >
              <Icon className="h-12 w-12" />
              <span
                className={`text-center font-medium transition group-hover:text-black ${
                  selectedItem === b[item] ? 'text-black' : 'text-black/60'
                }`}
              >
                {title} {b[item]}
                <span className=" block text-sm text-black/40">
                  {b[itemType]}
                </span>
              </span>
            </div>
          </div>
        ))}
      </Container>
      <Container type="normal">
        {listItems
          .filter((b) => b[item] === selectedItem)
          .map((current, i) => (
            <div key={i} className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
              {choices.map((el) => (
                <Fragment key={el.id}>
                  <CustomRadioButton
                    value={el.choice}
                    name={`${item}${selectedItem}`}
                    id={el.id}
                    handleChange={handleChange}
                    selected={
                      listItems[selectedItem - 1][itemType] === el.choice
                    }
                  >
                    <span className="block font-medium">{el.choice}</span>
                    <span className="block text-sm text-black/60">
                      {el.desc}
                    </span>
                  </CustomRadioButton>
                </Fragment>
              ))}
            </div>
          ))}
      </Container>
    </>
  )
}

export default DetailsSelection

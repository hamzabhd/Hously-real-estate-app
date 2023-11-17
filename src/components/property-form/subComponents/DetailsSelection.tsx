'use client'
import { ChangeEvent, Fragment, useState } from 'react'
import { BiMinus } from 'react-icons/bi'
import Container from '@/components/layouts/Container'
import { choices } from 'data/data'
import { addItem, removeItem } from 'utils/itemManagement/itemManagement'
import { LuBedSingle, LuBedDouble, LuBath } from 'react-icons/lu'
import CustomRadioButton from '@/components/custom/CustomRadioButton'
import { ChoicesType, DetailsSelectionProps, ObjectKey } from '@/types/types'

const DetailsSelection = ({
  title,
  listItems,
  setDetails,
  setDetailsErrors,
  error,
}: DetailsSelectionProps) => {
  const alwaysLast = listItems.indexOf(listItems[listItems.length - 1]) + 1
  const [selectedItem, setSelectedItem] = useState(alwaysLast || 1)
  const item = title.toLocaleLowerCase()
  const Icon =
    item === 'bedroom'
      ? LuBedDouble
      : item === 'bathroom'
      ? LuBath
      : LuBedSingle

  const itemIndex = item as ObjectKey
  const regEx = new RegExp(item + 'd*', 'g')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log(selectedItem)
    if (regEx.test(name)) {
      const modifiedItem = listItems.map((currentItem) => {
        if (currentItem[itemIndex] !== selectedItem) {
          return currentItem
        } else {
          return {
            ...currentItem,
            [item + 'Type']: value,
          }
        }
      })

      setDetailsErrors((prevState) => ({
        ...prevState,
        [item + 's']: '',
      }))
      return setDetails((prevState) => ({
        ...prevState,
        [item + 's']: modifiedItem,
      }))
    }

    return setDetails((prevState) => ({ ...prevState, [name]: value }))
  }
  const addCurrentItem = () =>
    addItem(
      listItems,
      itemIndex,
      (item + 'Type') as ObjectKey,
      item + 's',
      setSelectedItem,
      setDetails,
    )
  const removeCurrentItem = () => {
    return removeItem(
      listItems,
      item + 's',
      selectedItem,
      setSelectedItem,
      setDetails,
    )
  }

  return (
    <>
      <Container title={title + 's'} type="grid" error={error}>
        <div
          onClick={addCurrentItem}
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
              onClick={removeCurrentItem}
            >
              <BiMinus className="h-4 w-4 text-grey transition-colors group-hover/remove:text-black" />
            </span>
            <div
              className={`${
                selectedItem === b[itemIndex]
                  ? 'border-black/60'
                  : 'border-grey'
              } group relative flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 p-4 transition-colors hover:border-black/60`}
              onClick={() => setSelectedItem(b[itemIndex])}
            >
              <Icon className="h-12 w-12" />
              <span
                className={`text-center font-medium transition group-hover:text-black ${
                  selectedItem === b[itemIndex] ? 'text-black' : 'text-black/60'
                }`}
              >
                {title} {b[itemIndex]}
                <span className=" block text-sm text-black/40">
                  {b[(item + 'Type') as ObjectKey]}
                </span>
              </span>
            </div>
          </div>
        ))}
      </Container>
      <Container type="normal">
        {listItems
          .filter((b) => b[itemIndex] === selectedItem)
          .map((_, i) => (
            <div key={i} className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
              {(choices[itemIndex] as ChoicesType).map((el) => (
                <Fragment key={el.id}>
                  <CustomRadioButton
                    value={el.choice}
                    name={`${item}${selectedItem}`}
                    id={el.id}
                    handleChange={handleChange}
                    selected={
                      listItems[selectedItem - 1][
                        (item + 'Type') as ObjectKey
                      ] === el.choice
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

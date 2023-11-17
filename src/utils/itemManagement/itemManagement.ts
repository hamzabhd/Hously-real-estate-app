import {
  DetailsState,
  ArrType,
  ObjectKey,
  ChoicesType,
  ChoiceType,
} from '@/types/types'
import { Dispatch, SetStateAction } from 'react'
import { choices } from '../../data/data'

export const addItem = (
  listItems: ArrType,
  item: ObjectKey,
  itemType: ObjectKey,
  currentSlot: string,
  setSelectedItem: (value: SetStateAction<number>) => void,
  setDetails: Dispatch<SetStateAction<DetailsState>>,
) => {
  if (!listItems[listItems.length - 1][itemType]) return
  const itemToAdd = listItems.length + 1

  const modifiedItem = [...listItems, { [item]: itemToAdd, [itemType]: '' }]

  setDetails((prevState) => ({
    ...prevState,
    [currentSlot]: modifiedItem,
  }))

  setSelectedItem(itemToAdd)
}
export const removeItem = (
  listItems: ArrType,
  currentSlot: string,
  selectedItem: number,
  setSelectedItem: (value: SetStateAction<number>) => void,
  setDetails: Dispatch<SetStateAction<DetailsState>>,
) => {
  if (selectedItem <= 1) return
  const modifiedItem = listItems.slice(0, -1)
  setSelectedItem(selectedItem - 1)
  setDetails((prevState) => ({
    ...prevState,
    [currentSlot]: modifiedItem,
  }))
}

export const removeImage = (arr: string[], index: number) => {
  if (arr.length === 0) return
  return arr.filter((item, i) => i !== index)
}

export const getRightChoice = (type: string, choice: string) => {
  const rightChoice = (choices[type as ObjectKey] as ChoicesType).filter(
    (item) => item.choice.toLocaleLowerCase() === choice.toLocaleLowerCase(),
  )[0]
  return rightChoice
}

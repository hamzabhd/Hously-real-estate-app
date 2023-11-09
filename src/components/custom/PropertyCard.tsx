'use client'
import React from 'react'
import ImageSlider from './ImageSlider'
import { LuBath, LuBedDouble } from 'react-icons/lu'
import { HiLocationMarker } from 'react-icons/hi'
import { TbResize } from 'react-icons/tb'
import SavePropertyButton from '../features/SavePropertyButton'
import { IoStar } from 'react-icons/io5'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { PropertyType } from '@/types/types'

const imagesArr = [
  '/images/1.webp',
  '/images/spain.png',
  '/images/person.jpg',
  '/images/spain.png',
]
// { property }: { property: PropertyType }
const PropertyCard = () => {
  const router = useRouter()
  const redirectClick = () => {
    return router.push('/property/someId')
  }

  return (
    <div className="sm:container-shadow relative sm:overflow-hidden sm:rounded-3xl sm:border-2 sm:border-white">
      <div className="group relative flex w-full cursor-pointer overflow-hidden">
        <ImageSlider
          imagesArr={imagesArr}
          isCard
          redirectClick={redirectClick}
        />
      </div>
      <div className="absolute right-2 top-2 flex items-center gap-x-2 rounded-full bg-white px-3 py-2 text-xs font-medium tracking-wide">
        <IoStar />
        <span>4.5</span>
      </div>

      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <Link href="/property/someId">
            <h2 className="text-xl font-bold tracking-wide">Rome, Italy</h2>
            <div className="flex items-center gap-x-2">
              <HiLocationMarker className="text-neutral-800" />
              <span className="text-xs font-medium tracking-wider text-black/40">
                1244, some real address goes here
              </span>
            </div>
          </Link>

          <SavePropertyButton isSaved={false} propertyId="1232" />
        </div>

        <Link href="/property/someId" className="cursor-pointer">
          <ul className="mb-4 flex gap-x-6 rounded-2xl bg-light-200 p-4 sm:gap-x-4">
            <li className="flex items-center gap-x-2">
              <LuBedDouble className="h-4 w-4 text-black/40" />
              <span className="text-xs font-medium text-black/40">2 beds</span>
            </li>
            <li className="flex items-center gap-x-2">
              <LuBath className="h-4 w-4 text-black/40" />
              <span className="text-xs font-medium text-black/40">2 baths</span>
            </li>
            <li className="flex items-center gap-x-2">
              <TbResize className="h-4 w-4 text-black/40" />
              <span className="text-xs font-medium text-black/40">200 m²</span>
            </li>
          </ul>

          <div className="flex items-center justify-between">
            <span className="font-medium ">Rental price</span>
            <div className="flex items-center gap-x-4">
              <span className="flex items-center gap-x-1 text-2xl font-bold">
                $120
                <span className="text-base font-normal text-black/60">/ </span>
                <span className="text-base font-normal text-black/60">
                  night
                </span>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default PropertyCard

'use client'
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'
import { useEffect, useState } from 'react'
import { checkAddressValidity } from 'utils/validations/checkAddressValidity'
import SmallSpinner from '../loaders/SmallSpinner'

interface MapPropsType {
  address: string
}

const Map = ({ address }: MapPropsType) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  })

  const [coordinates, setCoordinates] = useState({
    lat: 0,
    lng: 0,
  })

  useEffect(() => {
    if (!isLoaded) return
    checkAddressValidity(address).then((res) => {
      setCoordinates({
        lat: res.coordinates?.lat,
        lng: res.coordinates?.lng,
      })
    })
  }, [isLoaded, address])

  if (!isLoaded) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-light-500">
        <SmallSpinner />
      </div>
    )
  }

  return (
    <>
      <GoogleMap
        mapTypeId="roadmap"
        zoom={10}
        center={coordinates}
        mapContainerClassName="map-container"
        options={{ mapId: process.env.NEXT_PUBLIC_MAP_ID }}
      >
        <MarkerF position={coordinates} icon="/images/icon.png" />
      </GoogleMap>
    </>
  )
}

export default Map

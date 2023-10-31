'use client'
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import { useEffect, useState } from 'react'

interface MapPropsType {
  address: string
}

const Map = ({ address }: MapPropsType) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    // mapIds: ['2f5bd5d1f59e0ae4'],
  })

  const [coordinates, setCoordinates] = useState({
    lat: 35.7594651,
    lng: -5.833954299999999,
  })

  useEffect(() => {
    if (!isLoaded) return
    console.log('I am running now!')
    const geocoder = new google.maps.Geocoder()
    geocoder.geocode({ address: address }, function (results, status) {
      if (status == 'OK' && results) {
        setCoordinates({
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        })
      } else {
        alert('Geocode was not successful for the following reason: ' + status)
      }
    })
  }, [isLoaded, address])

  if (!isLoaded) {
    return <span>Loading...</span>
  }
  return (
    <>
      <GoogleMap
        zoom={10}
        center={coordinates}
        mapContainerClassName="map-container"
      >
        <Marker position={coordinates} />
      </GoogleMap>
    </>
  )
}

export default Map

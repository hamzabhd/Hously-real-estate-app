export const checkAddressValidity = async (propertyAddress: string) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        propertyAddress,
      )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    )
    const data = await response.json()

    if (data.status === 'OK') {
      return {
        success: true,
        coordinates: {
          lat: data.results[0].geometry.location.lat,
          lng: data.results[0].geometry.location.lng,
        },
      }
    } else {
      return {
        success: false,
        message: 'The property address is not valid',
      }
    }
  } catch (error) {
    return {
      success: false,
      message: 'Checking the property address went wrong try again',
    }
  }
}

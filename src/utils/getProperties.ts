export const getProperties = async () => {
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/properties`, {
      cache: 'no-cache',
    })
    return response.json()
  } catch (e) {
    console.log(e)
  }
}

export const getProperty = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/properties/${id}`,
      { cache: 'no-cache' },
    )
    return response.json()
  } catch (e) {
    console.log(e)
  }
}

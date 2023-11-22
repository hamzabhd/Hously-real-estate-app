export const getProperties = async () => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/properties`, {
    cache: 'no-cache',
  })

  if (!response.ok) {
    return null
  }

  return response.json()
}

export const getProperty = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/properties/${id}`,
    { cache: 'no-cache' },
  )
  if (!response.ok) {
    return null
  }
  return response.json()
}

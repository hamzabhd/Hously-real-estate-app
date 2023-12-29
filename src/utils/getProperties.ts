export const getProperties = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/properties`,
    {
      cache: 'no-store',
    },
  )

  if (!response.ok) {
    return null
  }

  return response.json()
}

export const getProperty = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/properties/${id}`,
    { cache: 'no-store' },
  )
  if (!response.ok) {
    return null
  }
  return response.json()
}

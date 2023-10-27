import axios from 'axios'

export const getProperties = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXTAUTH_URL}/api/properties`,
    )
    return response.data
  } catch (e) {
    console.log(e)
  }
}

export const getProperty = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXTAUTH_URL}/api/properties/${id}`,
    )
    return response.data
  } catch (e) {
    console.log(e)
  }
}

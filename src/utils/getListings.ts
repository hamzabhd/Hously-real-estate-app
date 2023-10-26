import axios from 'axios'

export const getListings = async () => {
  try {
    const response = await axios.get(`${process.env.NEXTAUTH_URL}/api/listings`)
    return response.data
  } catch (e) {
    console.log(e)
  }
}

export const getListing = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXTAUTH_URL}/api/listings/${id}`,
    )
    return response.data
  } catch (e) {
    console.log(e)
  }
}

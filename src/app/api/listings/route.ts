import Property from 'models/property'
import { NextResponse } from 'next/server'
import { connectToDb } from 'utils/connectToDb'

export const GET = async () => {
  try {
    await connectToDb()
    const data = await Property.find({})
    return NextResponse.json(data)
  } catch (e) {
    throw new Error('Getting data failed')
  }
}

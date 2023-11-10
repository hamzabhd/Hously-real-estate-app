import Property from 'models/property'
import Review from 'models/review'
import { NextResponse } from 'next/server'
import { connectToDb } from 'utils/connectToDb'

export const GET = async () => {
  try {
    await connectToDb()
    const data = await Property.find({}).populate({
      path: 'reviews',
      model: Review,
    })
    return NextResponse.json(data)
  } catch (e) {
    throw new Error('Getting data failed')
  }
}

import Property from 'models/property'
import Review from 'models/review'
import User from 'models/user'
import { NextRequest, NextResponse } from 'next/server'
import { connectToDb } from 'utils/connectToDb'

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  try {
    await connectToDb()
    const data = await Property.findById(params.id)
      .populate('owner')
      .populate({
        path: 'reviews',
        model: Review,
        populate: {
          path: 'reviewer',
          model: User,
        },
      })

    console.log(data)
    return NextResponse.json(data)
  } catch (e) {
    throw new Error('Getting data failed')
  }
}

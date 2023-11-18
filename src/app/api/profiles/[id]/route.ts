import Property from 'models/property'
import Reservation from 'models/reservation'
import Review from 'models/review'
import User from 'models/user'
import { NextResponse } from 'next/server'
import { connectToDb } from 'utils/connectToDb'

export const GET = async (
  req: Request,
  { params }: { params: { id: string } },
) => {
  try {
    await connectToDb()
    const data = await User.findById(params.id)
      .populate({
        path: 'savedProperties',
        model: Property,
        populate: {
          path: 'reviews',
          model: Review,
        },
      })
      .populate({
        path: 'reservations',
        populate: 'property',
        model: Reservation,
      })
      .populate({
        path: 'properties',
        populate: [
          {
            path: 'reservations',
            model: Reservation,
          },
          {
            path: 'reviews',
            model: Review,
          },
        ],
      })

    return NextResponse.json(data)
  } catch (e) {
    console.log(e)
    throw new Error('Getting saved properties failed')
  }
}

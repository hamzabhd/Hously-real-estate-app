import { NextResponse } from 'next/server'

export const GET = async (
  req: Request,
  { params }: { params: { id: string } },
) => {
  try {
    await connectToDb()
    const user = await User.findById(params.id)
      .populate({
        path: 'savedProperties',
        model: Property,
      })
      .populate({
        path: 'reservations',
        populate: 'property',
        model: Property,
      })

    const properties = await Property.find({ owner: params.id })

    const data = {
      ...user,
      userProperties: properties,
    }

    console.log(data)

    return NextResponse.json(user)
  } catch (e) {
    console.log(e)
    throw new Error('Getting saved properties failed')
  }
}

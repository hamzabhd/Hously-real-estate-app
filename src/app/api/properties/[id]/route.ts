import Property from 'models/property'
import { NextRequest, NextResponse } from 'next/server'
import { connectToDb } from 'utils/connectToDb'

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  try {
    await connectToDb()
    const data = await Property.findById(params.id).populate('owner')
    return NextResponse.json(data)
  } catch (e) {
    throw new Error('Getting data failed')
  }
}

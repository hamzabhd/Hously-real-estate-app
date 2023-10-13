import { NextResponse } from 'next/server'
import { connectToDb } from 'utils/connectToDb'
import User from 'models/user'

export const GET = async (
  req: Request,
  { params }: { params: { id: string } },
) => {
  try {
    await connectToDb()
    const result = await User.findById(params.id)

    return NextResponse.json(result)
  } catch (err) {
    throw new Error('Getting users from database failed')
  }
}

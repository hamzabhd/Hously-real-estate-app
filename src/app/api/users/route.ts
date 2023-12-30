import { NextResponse } from 'next/server'
import { connectToDb } from 'utils/connectToDb'
import User from 'models/user'

export const dynamic = 'force-dynamic'

export const GET = async () => {
  try {
    await connectToDb()
    const users = await User.find({})

    return NextResponse.json(users)
  } catch (err) {
    throw new Error('Getting users from database failed')
  }
}

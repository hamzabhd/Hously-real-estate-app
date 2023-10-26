import { NextRequest, NextResponse } from 'next/server'
import { listingSchema } from 'utils/validations/validations'
import { connectToDb } from 'utils/connectToDb'
import Property from 'models/property'

export const POST = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  const { body, images } = await req.json()
  try {
    const result = listingSchema.safeParse({ ...body, images })

    if (!result.success) {
      return NextResponse.json({ message: 'Please provide some valid inputs' })
    }

    await connectToDb()

    const property = await Property.findByIdAndUpdate(
      params.id,
      {
        $set: { ...body },
      },
      { new: true },
    )

    return NextResponse.json({
      success: true,
      message: 'Your property has been successfully updated!',
      id: property._id,
    })
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: 'Fail to updated property',
    })
  }
}

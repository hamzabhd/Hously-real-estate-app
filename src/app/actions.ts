'use server'

import Property from 'models/property'
import Report from 'models/report'
import Review from 'models/review'
import User from 'models/user'
import { revalidatePath } from 'next/cache'
import { connectToDb } from 'utils/connectToDb'
import { serverSession } from 'utils/getUser'
import { z } from 'zod'

export const addReview = async (prevState: any, formData: FormData) => {
  const propertyId = formData.get('propertyId')
  const reviewerType = formData.get('reviewerType')
  const reviewRange = formData.get('reviewRange')
  const reviewContent = formData.get('reviewContent')

  const schema = z.string().min(1)
  const result = schema.safeParse(reviewerType)

  if (!result.success) {
    return { success: false, message: 'Please provide who you might be' }
  }

  try {
    const userId = await serverSession().then((res) => res?.user.id)
    await connectToDb()
    const review = await Review.create({
      reviewer: userId,
      reviewerType,
      reviewRange,
      reviewContent: reviewContent || '',
    })

    await Property.findByIdAndUpdate(
      propertyId,
      {
        $addToSet: { reviews: review._id },
      },
      { new: true },
    )

    revalidatePath('/')
    return { success: true, message: 'Review was sent successfully' }
  } catch (e) {
    return { success: false, message: 'Something went wrong' }
  }
}

export const makeReport = async (prevState: any, formData: FormData) => {
  const propertyId = formData.get('propertyId')
  const reportReason = formData.get('reportReason')
  const reportDescription = formData.get('reportDescription')

  const schema = z.string().min(1)
  const result = schema.safeParse(reportReason)

  if (!result.success) {
    return { success: false, message: 'Please provide a reason for the report' }
  }

  try {
    const userId = await serverSession().then((res) => res?.user.id)
    await connectToDb()

    await Report.create({
      property: propertyId,
      reporter: userId,
      reportReason,
      reportDescription: reportDescription || '',
    })

    revalidatePath('/')
    return { success: true, message: 'Report was sent successfully' }
  } catch (e) {
    return { success: false, message: 'Something went wrong' }
  }
}

export const saveProperty = async (propertyId: string) => {
  try {
    const userId = await serverSession().then((res) => res?.user.id)
    await connectToDb()

    await User.findByIdAndUpdate(
      userId,
      {
        $addToSet: { savedProperties: propertyId },
      },
      { new: true },
    )

    return { success: true, message: 'Property was saved successfully' }
  } catch (e) {
    return { success: false, message: 'Saving property failed' }
  }
}

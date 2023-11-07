'use server'

import Property from 'models/property'
import Report from 'models/report'
import Reservation from 'models/reservation'
import Review from 'models/review'
import User from 'models/user'
import { revalidatePath } from 'next/cache'
import { connectToDb } from 'utils/connectToDb'
import { serverSession } from 'utils/getUser'
import { reservationSchema } from 'utils/validations/validations'
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

  const userId = await serverSession().then((res) => res?.user.id)
  if (!userId)
    return {
      success: false,
      message: 'Current user is not authenticated',
    }
  try {
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

  const userId = await serverSession().then((res) => res?.user.id)
  if (!userId)
    return {
      success: false,
      message: 'Current user is not authenticated',
    }
  try {
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
  const userId = await serverSession().then((res) => res?.user.id)
  if (!userId)
    return {
      success: false,
      message: 'Current user is not authenticated',
    }
  try {
    await connectToDb()

    await User.findByIdAndUpdate(
      userId,
      {
        $addToSet: { savedProperties: propertyId },
      },
      { new: true },
    )
    revalidatePath('/property/[id]', 'page')
    return { success: true, message: 'Property was saved successfully' }
  } catch (e) {
    return { success: false, message: 'Saving property failed' }
  }
}
export const unSaveProperty = async (propertyId: string) => {
  const userId = await serverSession().then((res) => res?.user.id)
  if (!userId)
    return {
      success: false,
      message: 'Current user is not authenticated',
    }
  try {
    if (!userId)
      return {
        success: false,
        message: 'Current user is not authenticated',
      }
    await connectToDb()

    await User.findByIdAndUpdate(
      userId,
      {
        $pull: { savedProperties: propertyId },
      },
      { new: true },
    )
    revalidatePath('/(main)/property/[id]', 'page')
    return { success: true, message: 'Property was unsaved successfully' }
  } catch (e) {
    return { success: false, message: 'Saving property failed' }
  }
}
export const makeReservation = async (
  propertyId: string,
  from: string,
  to: string,
  guests: number,
) => {
  const userId = await serverSession().then((res) => res?.user.id)
  if (!userId)
    return {
      success: false,
      message: 'Current user is not authenticated',
    }

  const result = reservationSchema.safeParse({ from, to, guests })
  if (!result.success) {
    return {
      success: false,
      message: 'Missing dates of the reservation',
    }
  }
  try {
    await connectToDb()
    const user = await User.findById(userId)
    if (user.reservations.includes(propertyId)) {
      return {
        success: false,
        message: 'You already reserver this property',
      }
    }
    const reservation = await Reservation.create({
      reserver: userId,
      from,
      to,
      guests,
    })
    await Property.findByIdAndUpdate(
      propertyId,
      {
        $addToSet: { reservations: reservation._id },
      },
      { new: true },
    )
    await User.findByIdAndUpdate(
      userId,
      {
        $addToSet: { reservations: reservation._id },
      },
      { new: true },
    )
    revalidatePath('/(main)/property/[id]', 'page')
    return { success: true, message: 'Property was reserved successfully' }
  } catch (e) {
    return { success: false, message: 'Reserving property failed' }
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { connectToDb } from 'utils/connectToDb'
import User from 'models/user'
import { getUser, serverSession } from 'utils/getUser'
import { userSchema } from 'utils/validations/validations'
import {
  destroyOldProfileImage,
  getPublicId,
  uploadProfileImage,
} from 'utils/cloudinary'
import { revalidatePath } from 'next/cache'

export const POST = async (req: NextRequest) => {
  const { body, profileImage } = await req.json()
  const userId = await serverSession().then((user) => user?.user.id)
  if (!userId) {
    return {
      success: false,
      message: 'User is not authenticated',
    }
  }

  const user = await getUser()
  const result = userSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json({
      success: false,
      message: 'Please enter some valid inputs',
    })
  }

  // everything within this block is handling the profile image
  if (profileImage !== user.profilePicture) {
    console.log('image does not match profile')
    if (/res.cloudinary.com/g.test(user.profilePicture)) {
      // Destroying old profile picture logic goes here
      const publicId = getPublicId(user.profilePicture)
      try {
        if (publicId) {
          await destroyOldProfileImage(publicId)
        }
      } catch (e) {
        return NextResponse.json({
          success: false,
          message: 'Something went wrong',
        })
      }
    }
    try {
      const secure_url = await uploadProfileImage(profileImage, user._id)
      await connectToDb()
      await User.findByIdAndUpdate(
        userId,
        {
          $set: {
            profilePicture: secure_url,
          },
        },
        { new: true },
      )
    } catch (e) {
      return NextResponse.json({
        success: false,
        message: 'Something went wrong',
      })
    }
  }

  // everything within this block is handling the user information
  try {
    await connectToDb()
    await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          fullName: body.fullName,
          phoneNumber: body.phoneNumber,
          city: body.city,
          country: body.country,
          bio: body.bio,
          background: body.background,
          facts: [body.fact1, body.fact2, body.fact3],
          destinations: [
            body.destination1,
            body.destination2,
            body.destination3,
          ],
          links: [body.link1, body.link2, body.link3],
        },
      },
      { new: true },
    )
    revalidatePath('/')
    return NextResponse.json({
      success: true,
      message: 'Your profile has been successfully updated',
    })
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: 'Updating profile went wrong',
    })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { connectToDb } from 'utils/connectToDb'
import User from 'models/user'
import { getUser, serverSession } from 'utils/getUser'
import { userSchema } from 'utils/validations/validations'
import {
  uploadImage,
  destroyOldProfileImage,
  getPublicId,
} from 'utils/cloudinary'

export const POST = async (req: NextRequest) => {
  const { body, profileImage } = await req.json()
  const userId = await serverSession().then((user) => user?.user.id)
  const user = await getUser()
  const result = userSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json({
      success: false,
      message: 'Please enter some valid inputs',
    })
  }

  if (profileImage !== user.profilePicture) {
    console.log('image does not match profile')
    if (/res.cloudinary.com/g.test(user.profilePicture)) {
      // Destroying old profile picture logic goes here
      console.log('Destroying old profile picture')
      const publicId = getPublicId(user.profilePicture)
      try {
        if (publicId) {
          await destroyOldProfileImage(publicId)
        }
      } catch (e) {
        throw new Error('Something went wrong during the image change')
      }
    }
    try {
      const secure_url = await uploadImage(profileImage, 'profiles')
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
      console.log('image uploaded successfully', secure_url)
    } catch (e) {
      throw new Error('Something went wrong during the image change')
    }
  }

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
    console.log('user updated successfully')
  } catch (e) {
    throw new Error('Updating user profile failed: ' + e)
  }
  return NextResponse.json({
    success: true,
    message: 'User was successfully updated',
  })
}
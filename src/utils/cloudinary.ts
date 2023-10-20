import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  secure: true,
})

export const uploadProfileImage = async (imagePath: string) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    folder: 'hously_app/profiles',
  }

  try {
    const result = await cloudinary.uploader.upload(imagePath, options)
    console.log(result)
    return result.secure_url
  } catch (e) {
    console.error(e)
  }
}

export const destroyOldProfileImage = async (public_id: string) => {
  try {
    await cloudinary.uploader.destroy(public_id)
  } catch (e) {
    console.error(e)
  }
}

export const getPublicId = (url: string) => {
  const regEx = /[a-z]+\_\w+\/[a-z]+\/\w+/g
  const publicId = url.match(regEx)

  return publicId?.[0]
}

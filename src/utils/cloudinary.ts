import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  secure: true,
})

export const uploadProfileImage = async (imagePath: string, id: string) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    folder: 'hously_app/profiles/' + id,
    width: 1000,
    crop: 'scale',
    quality: 'auto',
  }

  try {
    const result = await cloudinary.uploader.upload(imagePath, options)
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

export const uploadImage = async (imagePath: string, folder: string) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    folder: 'hously_app/' + folder,
    quality: 'auto',
  }

  try {
    const result = await cloudinary.uploader.upload(imagePath, options)
    return result.secure_url
  } catch (e) {
    console.error(e)
  }
}

export const getPublicId = (url: string) => {
  const regEx = /[a-z]+\_\w+\/[a-z]+\/\w+\/\w+/g
  const publicId = url.match(regEx)

  return publicId?.[0]
}

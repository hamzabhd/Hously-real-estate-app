import UserImage from '@/components/custom/UserImage'
import { ProfileImageUploadType } from '@/types/types'
import { ChangeEvent, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { LuImagePlus } from 'react-icons/lu'

const ProfileImageUploader = ({
  oldImage,
  setProfileImage,
}: ProfileImageUploadType) => {
  const [image, setImage] = useState('')
  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    // accepts only images format
    if (/\.(jpe?g|png|webp|avif)/.test(e.target.files?.[0]?.name as string)) {
      // read image as Blob avoiding any lack of performance
      const newImage = URL.createObjectURL(e.target.files![0])
      setImage(newImage)

      // get image ready to upload
      const fileReader = new FileReader()
      fileReader.onload = (e) => {
        setProfileImage(e.target?.result as string)
      }
      fileReader.readAsDataURL(e.target.files?.[0] as File)
      return
    }
    alert('This is not a valid image file')
  }
  const resetImage = () => {
    setImage('')
    setProfileImage('')
  }
  return (
    <div className="mb-4 flex gap-x-4 sm:col-start-1 sm:col-end-3 md:mb-5">
      <UserImage
        name="Jana Lorene"
        imageUrl={image || oldImage}
        width={96}
        height={96}
      />
      <div
        className={`group flex w-full flex-col items-center justify-center gap-y-4 overflow-hidden rounded-3xl border-2 border-grey transition-colors ${
          image ? 'border' : 'border-dashed hover:border-black/60'
        }`}
      >
        {!image ? (
          <>
            <label className="flex h-full w-full cursor-pointer items-center gap-x-4 p-4">
              <LuImagePlus className="h-8 w-8 flex-shrink-0" />
              <span className="text-sm text-black/60 transition group-hover:text-black md:text-base">
                Click here to upload an image
              </span>
              <input type="file" className="hidden" onChange={uploadImage} />
            </label>
          </>
        ) : (
          <div className="w-full p-4 text-black/60">
            <span className="block text-sm">
              Your image was successfully uploaded
            </span>
            <button
              type="button"
              className="group/reset mt-1 flex items-center gap-x-2 font-normal"
              onClick={resetImage}
            >
              <IoClose className="text-sm text-red-500" />
              <span className="text-sm font-medium text-red-500 group-hover/reset:underline md:text-base">
                Reset image
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileImageUploader

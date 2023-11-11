import Container from '@/components/layouts/Container'
import React, { ChangeEvent, Fragment, useState } from 'react'
import ImageController from './ImageController'
import { LuImagePlus } from 'react-icons/lu'
import { ImagesUploaderType } from '@/types/types'
import { removeImage } from 'utils/itemManagement/itemManagement'

const ImagesUploader = ({
  error,
  isEdit,
  images,
  setImages,
}: ImagesUploaderType) => {
  const [imageToPreview, setImagesToPreview] = useState<string[]>([])
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    // restrict empty files or more than limit
    if (images.length >= 4 || e.target.files?.length === 0) return
    // accepts only images format
    if (/\.(jpe?g|png|webp|avif)/.test(e.target.files?.[0]?.name as string)) {
      // read image as Blob avoiding any lack of performance
      const newImage = URL.createObjectURL(e.target.files![0])
      setImagesToPreview((prevState) => [...prevState, newImage!])
      const fileReader = new FileReader()
      fileReader.onload = (e) => {
        // prepare an array of images to upload
        setImages((prevState) => {
          if (prevState) return [...prevState, e.target?.result as string]
          return [e.target?.result as string]
        })
      }
      fileReader.readAsDataURL(e.target.files?.[0] as File)
      return
    }
    alert('This is not a valid image file')
  }
  const removeImages = (index: number) => {
    // remove image from images to preview and images to upload
    if (images.length === 0 || imageToPreview.length === 0) return
    const modifiedImages = removeImage(images, index)
    const modifiedImagesToPreview = removeImage(imageToPreview, index)
    if (!modifiedImages || !modifiedImagesToPreview) return
    setImages(modifiedImages)
    setImagesToPreview(modifiedImagesToPreview)
  }
  return (
    <>
      {!isEdit ? (
        <Container type="grid" title="Images" error={error}>
          {imageToPreview!.length < 4 && (
            <label className="group flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 border-dashed border-grey p-4 transition-colors hover:border-black/60">
              <LuImagePlus className="h-8 w-8" />
              <span className="text-center font-medium text-black/60 transition group-hover:text-black">
                Click here to upload a new image
              </span>
              <input type="file" className="hidden" onChange={handleImage} />
            </label>
          )}

          {imageToPreview.map((image, i) => (
            <Fragment key={i}>
              <ImageController
                imgUrl={image}
                index={i}
                isEdit={isEdit}
                removeImage={removeImages}
              />
            </Fragment>
          ))}
        </Container>
      ) : (
        <Container type="grid" title="Images">
          {imageToPreview.map((image, i) => (
            <Fragment key={i}>
              <ImageController
                imgUrl={image}
                index={i}
                isEdit={isEdit}
                removeImage={removeImages}
              />
            </Fragment>
          ))}
        </Container>
      )}
    </>
  )
}

export default ImagesUploader

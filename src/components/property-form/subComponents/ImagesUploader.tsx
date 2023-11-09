import Container from '@/components/layouts/Container'
import React, { ChangeEvent, Fragment } from 'react'
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
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (images.length >= 4) return
    if (/\.(jpe?g|png)/.test(e.target.files?.[0].name as string)) {
      const fileReader = new FileReader()
      fileReader.onload = (e) => {
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
    if (images.length === 0) return
    const modifiedImages = removeImage(images, index)
    if (!modifiedImages) return
    return setImages(modifiedImages)
  }

  return (
    <>
      {!isEdit ? (
        <Container type="grid" title="Images" error={error}>
          {images!.length < 4 && (
            <label className="group flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-3xl border-2 border-dashed border-grey p-4 transition-colors hover:border-black/60">
              <LuImagePlus className="h-8 w-8" />
              <span className="text-center font-medium text-black/60 transition group-hover:text-black">
                Click here to upload a new image
              </span>
              <input type="file" className="hidden" onChange={handleImage} />
            </label>
          )}

          {images.map((image, i) => (
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
          {images.map((image, i) => (
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

import ListingForm from '@/components/property/property-form/ListingForm'
import { getProperty } from 'utils/getProperties'

const EditProperty = async ({ params }: { params: { id: string } }) => {
  const listing = await getProperty(params.id)
  return (
    <div className="mx-auto max-w-[1248px] px-4 md:px-6">
      <div className="flex h-[199px] flex-col justify-center xl:h-[238px]">
        <h1 className="mb-4 text-3xl font-bold uppercase lg:text-4xl xl:text-5xl">
          Edit your property
        </h1>
        <span className="text-sm">
          Ready for a property glow-up? Edit your property details—tweak the
          description, update the images, or add a fresh vibe. Let's keep it
          snappy and make your property shine!
        </span>
      </div>

      <ListingForm isEdit={true} listing={listing} />
    </div>
  )
}

export default EditProperty

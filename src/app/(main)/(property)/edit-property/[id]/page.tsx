import ListingFrom from '@/components/property/ListingFrom'
import { getProperty } from 'utils/getProperties'

const EditProperty = async ({ params }: { params: { id: string } }) => {
  const listing = await getProperty(params.id)
  // 653a99e7157df98909647f18
  return (
    <div className="mx-auto max-w-[1248px] px-4 md:px-6">
      <div className="flex h-[182px] flex-col justify-center xl:h-[238px]">
        <h1 className="mb-4 text-3xl font-bold  uppercase lg:text-4xl xl:text-5xl">
          Edit your listing
        </h1>
      </div>

      <ListingFrom isEdit={true} listing={listing} />
    </div>
  )
}

export default EditProperty

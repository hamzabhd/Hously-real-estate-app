import ListingFrom from '@/components/property-form/ListingFrom'

const CreateListing = async () => {
  return (
    <div className="mx-auto max-w-[1248px] px-4 md:px-6">
      <div className="flex h-[199px] flex-col justify-center xl:h-[238px]">
        <h1 className="mb-4 text-3xl font-bold uppercase lg:text-4xl xl:text-5xl">
          Create new property
        </h1>
        <span className="text-sm">
          Time for a property creation party! Add a new property, give it a
          catchy name, maybe a cool description, and voila! Let's make it quick
          and uniquely yours!
        </span>
      </div>

      <ListingFrom isEdit={false} />
    </div>
  )
}

export default CreateListing

import ListingFrom from '@/components/ListingFrom'

const CreateListing = () => {
  return (
    <div className="mx-auto max-w-[1248px] px-4 md:px-6">
      <div className="flex h-[182px] flex-col justify-center xl:h-[238px]">
        <h1 className="mb-4 text-3xl font-bold uppercase lg:text-4xl xl:text-5xl">
          Create new listing
        </h1>
        <p className="max-w-[545px] text-sm leading-relaxed text-black/80 lg:text-base">
          Introduce your property to potential buyers or renters by providing
          detailed information about the title, description, amenities, and
          more. Let's start by listing your amazing assets!
        </p>
      </div>

      <ListingFrom />
    </div>
  )
}

export default CreateListing

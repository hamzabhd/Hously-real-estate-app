import SuggestedProperties from '@/components/custom/SuggestedProperties'
import PropertyDetails from '@/components/property/PropertyDetails'
import { redirect } from 'next/navigation'
import { getProperties, getProperty } from 'utils/getProperties'
import { getUser } from 'utils/getUser'

const PropertyPage = async ({ params }: { params: { id: string } }) => {
  const property = await getProperty(params.id)
  const properties = await getProperties()
  const currentUser = await getUser()

  if (!property) {
    redirect('/404')
  }

  return (
    <div className="mx-auto min-h-screen max-w-[1248px]">
      <PropertyDetails
        property={property}
        savedProperties={currentUser?.savedProperties}
      />
      <SuggestedProperties
        currentProperty={property._id}
        properties={properties}
        savedProperties={currentUser?.savedProperties}
      />
    </div>
  )
}

export default PropertyPage

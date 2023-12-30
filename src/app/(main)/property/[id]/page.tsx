import SuggestedProperties from '@/components/custom/SuggestedProperties'
import PropertyDetails from '@/components/property/layouts/PropertyDetails'
import { redirect } from 'next/navigation'
import { getProperties, getProperty } from 'utils/getProperties'
import { getUser } from 'utils/getUser'

const PropertyPage = async ({ params }: { params: { id: string } }) => {
  const property = await getProperty(params.id)

  if (!property) {
    redirect('/404')
  }

  const propertiesData = getProperties()
  const currentUserData = getUser()
  const [properties, currentUser] = await Promise.all([
    propertiesData,
    currentUserData,
  ])

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

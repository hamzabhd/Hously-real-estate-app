import PropertiesPage from '@/components/custom/PropertiesPage'
import { getProperties } from 'utils/getProperties'
import { getUser } from 'utils/getUser'

const Home = async () => {
  const properties = await getProperties()
  const currentUser = await getUser()

  return (
    <div className="min-h-screen">
      <PropertiesPage
        properties={properties}
        savedProperties={currentUser.savedProperties}
      />
    </div>
  )
}

export default Home

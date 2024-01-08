import HomePage from '@/components/screens/HomePage'
import { getProperties } from 'utils/getProperties'
import { getUser } from 'utils/getUser'

const Home = async () => {
  const propertiesData = getProperties()
  const currentUserData = getUser()
  const [properties, currentUser] = await Promise.all([
    propertiesData,
    currentUserData,
  ])

  return (
    <div className="mx-auto min-h-screen max-w-[1600px]">
      <HomePage
        properties={properties}
        savedProperties={currentUser?.savedProperties}
      />
    </div>
  )
}

export default Home

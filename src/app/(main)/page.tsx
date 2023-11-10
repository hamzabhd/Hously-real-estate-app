import PropertiesPage from '@/components/custom/PropertiesPage'
import { getProperties } from 'utils/getProperties'

const Home = async () => {
  const properties = await getProperties()

  return (
    <div className="min-h-screen">
      <PropertiesPage properties={properties} />
    </div>
  )
}

export default Home

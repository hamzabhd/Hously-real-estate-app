import SearchPage from '@/components/search/SearchPage' 
import { getProperties } from 'utils/getProperties'
import { getUser } from 'utils/getUser'

const Search = async () => {
  const properties = await getProperties()
  const currentUser = await getUser()

  return (
    <div className="mx-auto min-h-screen max-w-[1600px]">
      <SearchPage
        properties={properties}
        savedProperties={currentUser?.savedProperties}
      />
    </div>
  )
}

export default Search

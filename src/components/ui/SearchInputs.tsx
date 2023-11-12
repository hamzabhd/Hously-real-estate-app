import CustomSelectElement from '../custom/CustomSelectElement'
import { HiLocationMarker } from 'react-icons/hi'
import { regions } from 'utils/itemManagement/data/data'
import CustomRangeInput from '../custom/CustomRangeInput'
import { TbZoomMoney } from 'react-icons/tb'

const SearchInputs = ({ activeSearch }: { activeSearch: boolean }) => {
  return (
    <>
      {!activeSearch ? (
        <span className="font-medium tracking-wide text-black/40 transition-colors group-hover/search:text-black">
          Find a property
        </span>
      ) : (
        <form className="absolute left-0 top-full w-full border-t bg-white p-2 pb-4">
          <CustomSelectElement
            Icon={HiLocationMarker}
            listItems={regions}
            name="region"
            label="Region"
          />
          <CustomRangeInput
            name="min-price"
            label="Min. price"
            Icon={TbZoomMoney}
          />
        </form>
      )}
    </>
  )
}

export default SearchInputs

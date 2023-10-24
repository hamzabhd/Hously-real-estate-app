import Container from '@/components/Container'
import SelectionList from './SelectionList'
import CustomInput from '@/components/CustomInput'
import { useGlobalContext } from 'context/GlobalProvider'
import { rules } from 'utils/itemManagement/data/data'

const Rules = () => {
  const { handleRules, details, handleChange } = useGlobalContext()
  return (
    <>
      <Container title="General rules" type="normal">
        <SelectionList
          arr={details.rules}
          arrOfItems={rules}
          handleClick={handleRules}
        />
      </Container>

      <Container title="Specific rules" type="normal">
        <div className="sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          <CustomInput
            className="relative mb-4 sm:my-0"
            label="Guests limit"
            value={details.guestsLimit}
            name="guestsLimit"
            type="text"
            handleChange={handleChange}
          />

          <CustomInput
            className="relative mb-4 sm:my-0"
            label="Quiet hours"
            value={details.quietHours}
            name="quietHours"
            type="text"
            handleChange={handleChange}
          />

          <CustomInput
            className="relative mb-4 sm:my-0"
            label="Check-in"
            value={details.checkIn}
            name="checkIn"
            type="text"
            handleChange={handleChange}
          />

          <CustomInput
            className="relative mb-4 sm:my-0"
            label="Check-out"
            value={details.checkOut}
            name="checkOut"
            type="text"
            handleChange={handleChange}
          />
        </div>
      </Container>
    </>
  )
}

export default Rules

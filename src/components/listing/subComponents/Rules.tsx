import Container from '@/components/Container'
import SelectionList from './SelectionList'
import CustomInput from '@/components/CustomInput'

const Rules = ({
  arrOfItems,
  arr,
  handleClick,
}: {
  arrOfItems: string[]
  arr: string[]
  handleClick: (item: string) => void
}) => {
  return (
    <>
      <Container title="General rules" type="normal">
        <SelectionList
          arr={arr}
          arrOfItems={arrOfItems}
          handleClick={handleClick}
        />
      </Container>

      <Container title="Specific rules" type="normal">
        <div className="sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          <CustomInput
            className="relative mb-4 sm:my-0"
            label="Guests limit"
            value=""
            name="guestsLimit"
            type="text"
            handleChange={(e) => undefined}
          />

          <CustomInput
            className="relative mb-4 sm:my-0"
            label="Quiet hours"
            value=""
            name="quietHours"
            type="text"
            handleChange={(e) => undefined}
          />

          <CustomInput
            className="relative mb-4 sm:my-0"
            label="Check-in"
            value=""
            name="checkIn"
            type="text"
            handleChange={(e) => undefined}
          />

          <CustomInput
            className="relative mb-4 sm:my-0"
            label="Check-out"
            value=""
            name="checkOut"
            type="text"
            handleChange={(e) => undefined}
          />
        </div>
      </Container>
    </>
  )
}

export default Rules

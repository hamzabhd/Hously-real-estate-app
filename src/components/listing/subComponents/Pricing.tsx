import { MdOutlineAttachMoney } from 'react-icons/md'
import Container from '@/components/Container'
import CustomInput from '@/components/CustomInput'

const Pricing = () => {
  return (
    <Container title="Pricing" type="normal">
      <div className="sm:grid sm:grid-cols-2 sm:gap-4 lg:gap-6">
        <CustomInput
          className="relative mb-4 sm:col-span-2 sm:my-0"
          label="Price per night"
          value=""
          name="price"
          type="text"
          handleChange={(e) => undefined}
        >
          <MdOutlineAttachMoney className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2" />
        </CustomInput>

        <CustomInput
          className="relative mb-4 sm:my-0"
          label="Cleaning fee"
          value=""
          name="cleaningFee"
          type="text"
          handleChange={(e) => undefined}
        >
          <MdOutlineAttachMoney className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2" />
        </CustomInput>

        <CustomInput
          className="relative mb-4 sm:my-0"
          label="Security fee"
          value=""
          name="securityFee"
          type="text"
          handleChange={(e) => undefined}
        >
          <MdOutlineAttachMoney className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2" />
        </CustomInput>
      </div>
    </Container>
  )
}

export default Pricing

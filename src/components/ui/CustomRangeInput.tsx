import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { IconType } from 'react-icons'

const CustomRangeInput = ({
  range,
  minMax,
  handleSliderChange,
  Icon,
}: {
  range: number[]
  minMax: number[]
  handleSliderChange: (value: number | number[]) => void
  Icon: IconType
}) => {
  return (
    <>
      <div className="mb-4 flex gap-x-2">
        <div className="grey relative flex w-full select-none items-center gap-x-4 rounded-full border border-grey p-4 text-sm ">
          <span className="text-black/60">min.</span>
          <span className="text-sm font-medium">{range[0]}</span>
          <Icon className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2" />
        </div>
        <div className="grey relative flex w-full select-none items-center gap-x-4 rounded-full border border-grey p-4 text-sm ">
          <span className="text-black/60">max.</span>
          <span className="text-sm font-medium">{range[1]}</span>
          <Icon className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2" />
        </div>
      </div>
      <div className="px-4">
        <Slider
          min={minMax[0]}
          max={minMax[1]}
          range
          value={range}
          onChange={handleSliderChange}
          className="custom-slider"
          step={10}
        />
      </div>
    </>
  )
}

export default CustomRangeInput

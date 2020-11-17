import React from 'react'
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'
import { SliderProps } from 'rc-slider/lib/Slider'
const sliderStyle = {
  trackStyle: {
    backgroundColor: '#5d4c09',
    height: 12,
    marginTop: -5,
  },
  handleStyle: {
    borderColor: '#5d4c09',
    height: 20,
    width: 20,
    marginTop: -9,
    boxShadow: '0 0 5px black',
  },
  dotStyle: {
    display: 'none',
    // height: 13,
    // width: 13,
    // backgroundColor: '#fbb62e',
    // borderColor: '#5d4c09',
    // marginBottom: -1.5,
    // marginLeft: -3,
  },
  railStyle: {
    backgroundColor: '#e6e3da',
    marginTop: -5,
    height: 10,
  },
}
export type SettingsSliderProps = SliderProps
const SettingsSlider = ({ ...rest }: SettingsSliderProps) => {
  return <Slider {...rest} {...sliderStyle} />
}

const freqMarks: any = { 0: 'Cont.' }

for (let i = 60 * 2; i <= 60 * 12; i += 60 * 2) {
  freqMarks[i] = `${i / 60}hr`
}
export const durationSlider = ({
  min = 0,
  max = 30,
  step = 5,
  labelStep = 5,
  ...rest
}: SettingsSliderProps & { labelStep?: number }) => {
  const durationMarks: any = { 0: 'Off' }
  for (let i = min + labelStep; i <= max; i += labelStep) {
    durationMarks[i] = `${i}min`
  }
  return (
    <SettingsSlider {...{ min, max, step }} marks={durationMarks} {...rest} />
  )
}

export const freqSlider = ({ ...rest }: SettingsSliderProps) => (
  <SettingsSlider min={0} max={12 * 60} step={10} marks={freqMarks} {...rest} />
)
export default SettingsSlider

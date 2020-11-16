import React from 'react'
import SettingsSlider, { SettingsSliderProps } from '.'

const percentageRange = () => {
  const mark: any = {}
  for (let i = 0; i <= 100; i += 20) {
    mark[i] = `${i}%`
  }
  return mark
}

const percentageMark = percentageRange()
const PercentSlider = ({ ...rest }: SettingsSliderProps) => {
  return (
    <SettingsSlider
      min={0}
      max={100}
      step={5}
      marks={percentageMark}
      {...rest}
    />
  )
}

export default PercentSlider

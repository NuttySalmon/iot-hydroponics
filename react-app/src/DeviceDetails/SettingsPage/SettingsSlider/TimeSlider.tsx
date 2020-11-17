import React from 'react'
import SettingsSlider, { SettingsSliderProps } from '.'
import { convertToTimeStr } from '../../../common/util'

const timeRange = () => {
  const mark: any = {}
  for (let i = 0; i <= 23; i += 3) {
    mark[i] = convertToTimeStr(i, true)
  }
  mark[23] = '11pm'
  return mark
}

const timeMark = timeRange()
const TimeSlider = ({ ...rest }: SettingsSliderProps) => {
  return (
    <SettingsSlider
      min={0}
      max={23}
      marks={timeMark}
      included={false}
      {...rest}
    />
  )
}

export default TimeSlider

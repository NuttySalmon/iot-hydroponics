import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { RefactorActionInfo } from 'typescript'
import { SettingsSliderProps } from '.'
import { DeviceSettings } from '../../DeviceInfo'
import style from '../scss/deviceDetails.module.scss'
type SliderUnit = {
  name: string
  newSettings: any
  field: string
  unit?: string
  slider: React.FC<SettingsSliderProps>
  handleChange: (field: string, value: number) => void
  valueFormat?: (value: number) => string | number
  lg?: number
  labelStep?: number
}
const SliderUnit = ({
  name,
  newSettings,
  field,
  unit,
  valueFormat,
  slider: C,
  handleChange,
  lg = 12,
  ...rest
}: SliderUnit & SettingsSliderProps) => {
  const displayVal = newSettings[field] || 0
  return (
    <Col xs={12} lg={lg} className={style.sliderUnit}>
      <h3> {name} </h3>
      <h4>
        {`${valueFormat ? valueFormat(displayVal) : displayVal}${unit || ''}`}
      </h4>
      <C
        value={newSettings[field]}
        // defaultValue={newSettings[field] || 0}
        onChange={(value) => {
          handleChange(field, value)
        }}
        {...rest}
      />
    </Col>
  )
}

export default SliderUnit

import React from 'react'
import { Col } from 'react-bootstrap'
import { SettingsSliderProps } from './SettingsSlider'
import style from './scss/settingsPage.module.scss'
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
      <div className={style.title}> {name} </div>
      <h5>
        {`${valueFormat ? valueFormat(displayVal) : displayVal}${unit || ''}`}
      </h5>
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

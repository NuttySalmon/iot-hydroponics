import React from 'react'
import { Container } from 'react-bootstrap'
import { DeviceSettings } from '../DeviceInfo'
import DataBlock from './DataBlock'
import style from './scss/deviceDetails.module.scss'

function convertToTimeStr(hr: number | null): string {
  if (hr === null) return '-'
  if (hr === 0) return '12 am'
  if (hr < 11) return `${hr} am`
  return `${hr - 12} pm`
}

const SettingsDisplay = ({
  red,
  green,
  blue,
  ledOnTime,
  ledOffTime,
  fanInterval,
}: DeviceSettings) => {
  return (
    <Container fluid className={style.dataBox}>
      <DataBlock title="Red LED" data={red} unit="%" />
      <DataBlock title="Green LED" data={green} unit="%" />
      <DataBlock title="Blue LED" data={blue} unit="%" />
      <DataBlock title="LED on" data={convertToTimeStr(ledOnTime)} />
      <DataBlock title="LED off" data={convertToTimeStr(ledOffTime)} />
      <DataBlock title="Fan interval" data={fanInterval} unit=" min" />
    </Container>
  )
}
export default SettingsDisplay

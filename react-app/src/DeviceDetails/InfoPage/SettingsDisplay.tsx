import React from 'react'
import { Container } from 'react-bootstrap'
import { DeviceSettings } from '../../Dashboard/DeviceInfo'
import { convertToTimeStr, getHourMinFromDuration } from '../../common/util'
import DataBlock from './DataBlock'
import style from './scss/infoPage.module.scss'
const defaultSettingsDisplay = {
  red: null,
  green: null,
  blue: null,
  ledOnTime: null,
  ledOffTime: null,
  fanDuration: null,
  fanInterval: null,
  floodFreq: null,
  floodDuration: null,
}
type SettingsDisplayProps = {
  settings: DeviceSettings | null
}
const SettingsDisplay = ({ settings }: SettingsDisplayProps) => {
  const {
    red,
    green,
    blue,
    ledOnTime,
    ledOffTime,
    fanDuration,
    fanInterval,
    floodFreq,
    floodDuration,
  } = settings || defaultSettingsDisplay
  return (
    <>
      <Container fluid className={style.dataBox}>
        <DataBlock title="Red LED" data={red} unit="%" />
        <DataBlock title="Green LED" data={green} unit="%" />
        <DataBlock title="Blue LED" data={blue} unit="%" />
        <DataBlock title="LED on" data={convertToTimeStr(ledOnTime)} />
        <DataBlock title="LED off" data={convertToTimeStr(ledOffTime)} />
      </Container>
      <Container fluid className={style.dataBox}>
        <DataBlock
          title="Flood Frequency"
          data={getHourMinFromDuration(floodFreq)}
        />
        <DataBlock title="Flood duration" data={floodDuration} unit=" min" />
        <DataBlock title="Fan interval" data={fanInterval} unit=" min" />
        <DataBlock title="Fan duration" data={fanDuration} unit=" min" />
      </Container>
    </>
  )
}
export default SettingsDisplay

import React from 'react'
import { Container } from 'react-bootstrap'
import { DeviceData } from '../DeviceInfo'
import DataBlock from './DataBlock'
import style from './scss/deviceDetails.module.scss'

type DataDisplayProp = Omit<DeviceData, 'status, isOnline, lastUpdatedSince'>
function getOnOff(
  val: boolean | null,
  trueVal = 'On',
  falseVal = 'Off'
): string | null {
  return val === null ? null : val ? trueVal : falseVal
}
const DataDisplay = ({
  temp,
  hum,
  ledOn,
  fanOn,
  pumpOn,
  valveClose,
}: DataDisplayProp) => {
  return (
    <Container fluid className={style.dataBox}>
      <DataBlock title="Temperature" data={temp} unit="&#730;C" />
      <DataBlock title="Humidity" data={hum} unit="%" />
      <DataBlock title="LED" data={getOnOff(ledOn)} />
      <DataBlock title="Pump" data={getOnOff(pumpOn)} />
      <DataBlock title="Valve" data={getOnOff(valveClose, 'Close', 'Open')} />
      <DataBlock title="Fan" data={getOnOff(fanOn)} />
    </Container>
  )
}
export default DataDisplay

import React from 'react'
import { Container } from 'react-bootstrap'
import { DeviceData } from '../../DeviceInfo'
import DataBlock from './DataBlock'
import style from './scss/infoPage.module.scss'
const defaultDataDisplay = {
  temp: null,
  hum: null,
  ledOn: null,
  fanOn: null,
  pumpOn: null,
  valveClose: null,
}
type DataDisplayProp = Omit<
  DeviceData,
  'status, isOnline, lastUpdatedSince'
> | null
function getOnOff(
  val: boolean | null,
  trueVal = 'On',
  falseVal = 'Off'
): string {
  if (val === null) return '-'
  return val ? trueVal : falseVal
}
const DataDisplay = ({ data }: { data: DataDisplayProp }) => {
  const { temp, hum, ledOn, fanOn, pumpOn, valveClose } =
    data || defaultDataDisplay

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

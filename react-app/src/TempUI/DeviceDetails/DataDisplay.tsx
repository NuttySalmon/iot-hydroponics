import React from 'react'
import { Container } from 'react-bootstrap'
import { DeviceData } from '../DeviceInfo'
import DataBlock from './DataBlock'
import style from './scss/deviceDetails.module.scss'


type DataDisplayProp = Omit<DeviceData, 'status, isOnline, lastUpdatedSince'>
const DataDisplay = ({ temp, hum, pumpOn, valveClosed }: DataDisplayProp) => {
  return (
    <Container fluid className={style.dataBox}>
      <DataBlock title="Temperature" data={temp} unit="&#730;C" />
      <DataBlock title="Humidity" data={hum} unit="%" />
      <DataBlock title="Temperature" data={temp} />
      <DataBlock title="Temperature" data={temp} />
    </Container>
  )
}
export default DataDisplay

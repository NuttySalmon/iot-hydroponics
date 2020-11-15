import React from 'react'
import { Container } from 'react-bootstrap'
import style from './deviceDetails.module.scss'

export type displayData = {
  temp: string | number
  hum: string | number
  lastUpdatedSince: string
  status: string
  isOnline: boolean
}

type DataDisplayProp = Omit<displayData, 'status, isOnline, lastUpdatedSince'>
const DataDisplay = ({ temp, hum }: displayData) => {
  return (
    <Container className={style.dataBox}>
      {temp} {hum}
    </Container>
  )
}
export default DataDisplay

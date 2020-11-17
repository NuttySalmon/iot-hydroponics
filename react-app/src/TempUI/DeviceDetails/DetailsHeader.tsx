import React from 'react'
import { Row } from 'react-bootstrap'
import { DeviceData } from '../DeviceInfo'
import style from './scss/deviceDetails.module.scss'

type DetailsHeaderProps = {
  data?: DeviceData | null
  id: string
  name: string
}

const DetailsHeader = ({ id, name, data }: DetailsHeaderProps) => {
  return (
    <div>
      <Row className={style.lastUpdatedSince}>
        {
          // get last updated text. display loading if null
          data
            ? `Last updated ${data.lastUpdatedSince}`
            : 'Waiting to be connected.'
        }
      </Row>
      <Row>
        <h1 id={style.name}>{name}</h1>
      </Row>
      <Row>Device id: {id}</Row>
    </div>
  )
}

export default DetailsHeader

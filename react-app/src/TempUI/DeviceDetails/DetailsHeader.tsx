import React from 'react'
import { Row } from 'react-bootstrap'
import { DeviceInfo } from '../DeviceInfo'
import style from './scss/deviceDetails.module.scss'

const DetailsHeader = ({ deviceDetails }: { deviceDetails: DeviceInfo }) => {
  const { data, id, name } = deviceDetails
  return (
    <div>
      <Row className={style.lastUpdatedSince}>
        {
          // get last updated text. display loading if null
          data.lastUpdatedSince
            ? `Last updated ${data.lastUpdatedSince}`
            : 'Loading...'
        }
      </Row>
      <Row>
        <h1>{name}</h1>
      </Row>
      <Row>Device id: {id}</Row>
    </div>
  )
}

export default DetailsHeader

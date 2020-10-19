import React from 'react'
import { Row, Col } from 'react-bootstrap'
type DeviceCardProps = {
  name: string
  currentData: {
    updatedAt: string
    hum: string
    temp: string
    valveOpen: boolean
  }
}

function DeviceCard({ name, currentData }: DeviceCardProps) {
  return (
    <Row>
      <Col>
        <p> {name} </p>
        <p> {currentData?.updatedAt}</p>
        <p> {currentData?.hum}</p>
        <p> {currentData?.temp}</p>
        {/* <p>Draining: {currentData?.valveOpen}</p> */}
      </Col>
    </Row>
  )
}

export default DeviceCard

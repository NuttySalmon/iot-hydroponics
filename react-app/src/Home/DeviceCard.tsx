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
  updatedAt: string
}

function DeviceCard({ name, currentData, updatedAt }: DeviceCardProps) {

  const data = currentData
  const hum = currentData?.hum
  console.log("hello")
  console.log(data, hum)

  return (
    <Row>
      <Col>
        <p> {name} </p>
        <p> {updatedAt}</p>
        <p> {currentData?.hum}</p>
        <p> {currentData?.temp}</p>
        {/* <p>Draining: {currentData?.valveOpen}</p> */}
      </Col>
    </Row>
  )
}

export default DeviceCard

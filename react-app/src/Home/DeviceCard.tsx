import React from 'react'
import { Row, Col } from 'react-bootstrap'
type DeviceCardProps = {
  name: string
  id: string
  currentData: {
    updatedAt: string
    hum: string
    temp: string
    valveOpen: boolean
  }
  updatedAt: string
}

function DeviceCard({ name, id, currentData, updatedAt }: DeviceCardProps) {
  const data = currentData
  const hum = currentData?.hum
  console.log(data, hum)

  return (
    <Row>
      <Col>
        <p> {name} </p>
        <p> {id} </p>
        <p> {updatedAt}</p>
        <p> {currentData?.hum}</p>
        <p> {currentData?.temp}</p>
      </Col>
    </Row>
  )
}

export default DeviceCard

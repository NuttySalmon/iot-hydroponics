import React from 'react'
import { Card, CardProps } from 'react-bootstrap'
type DevCardProps = {
  name: string
  temp: number
  hum: number
} & CardProps
const DevCard = ({ name, temp, hum, ...rest }: DevCardProps) => {
  return (
    <Card {...rest}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <ul>
            <li>Temp: {temp}</li>
            <li>Hum: {hum}</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default DevCard

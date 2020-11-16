import React from 'react'
import { Card, CardProps, Col, Image, Row } from 'react-bootstrap'
import infoIcon from '../img/info.svg'
import humIcon from '../img/water.svg'
import tempIcon from '../img/thermometer.svg'
import style from './scss/devCard.module.scss'
import { Circle } from '../../common/components/SvgIcons'
import devicePic from '../img/lettuce.png'
import { DeviceInfo } from '../DeviceInfo'
import { getStatus } from '../util'

type DevCardProps = DeviceInfo & CardProps
const DevCard = ({ name, data, ...rest }: DevCardProps) => {
  const {
    temp,
    hum,
    valveClosed,
    pumpOn,
    lastUpdated,
    lastUpdatedSince,
    isOnline,
  } = data
  const onlineIndicatorClass = () =>
    `${style.onlineIndicator} ${isOnline ? style.online : style.offline}`
  return (
    <Card {...rest}>
      <Card.Img height="150px" variant="top" src={devicePic} />
      <Card.Body>
        <Card.Title className={style.cardName}>{name}</Card.Title>
        <Card.Text>
          <Row className={style.lastUpdated}>
            <Col className={style.lastUpdatedText}>
              Last updated {lastUpdatedSince}
            </Col>
            <Col xs={1} className={style.onlineIndicator}>
              <Circle className={onlineIndicatorClass()} />
            </Col>
          </Row>
          <Row>
            <Col xs={1}>
              <Image src={tempIcon} className={style.icon} />
            </Col>
            <Col> {temp}°F</Col>
            <Col xs={1}>
              <Image src={humIcon} className={style.icon} />
            </Col>
            <Col> {hum}%</Col>
          </Row>
          <Row className="mt-2">
            <Col xs={1}>
              <Image src={infoIcon} className={style.icon} />
            </Col>
            <Col>{getStatus(valveClosed, pumpOn)}</Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default DevCard

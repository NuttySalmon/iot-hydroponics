import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link, useRouteMatch } from 'react-router-dom'
import moment from 'moment'
import DevCard from './DevCard'
import style from './home.module.scss'
import { DeviceInfo } from './DeviceInfo'

type HomeProps = {
  deviceInfos: Array<DeviceInfo>
  greetings: string
}
const Home = ({ deviceInfos, greetings }: HomeProps) => {
  const match = useRouteMatch()
  const cards = deviceInfos.map((deviceInfo) => (
    <Link
      to={`${match.url}/plant/${deviceInfo.id}`}
      className={style.devCardLink}
    >
      <DevCard
        name={deviceInfo.name}
        {...deviceInfo.data}
        className={style.devCard}
      />
    </Link>
  ))

  return (
    <Container className="mt-4">
      <Row className={style.headerRow}>
        <Col sm={12} md="auto">
          <h2> {greetings} Mark!</h2>
        </Col>
        <Col className={style.addDevice}>
          <Link to="/dashboard/add">
            <Button variant="long-sm"> Add device</Button>
          </Link>
        </Col>
      </Row>
      <div className={style.devCardParent}>{cards}</div>
    </Container>
  )
}

export default Home

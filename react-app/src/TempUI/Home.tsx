import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link, useRouteMatch } from 'react-router-dom'
import moment from 'moment'
import DevCard from './DevCard'
import style from './home.module.scss'
import { DeviceInfo } from './DeviceInfo'

const Home = ({ deviceInfos }: { deviceInfos: Array<DeviceInfo> }) => {
  const match = useRouteMatch()
  const getCards = () => {
    deviceInfos.map((deviceInfo) => (
      <Link
        to={`${match.url}/plant/${deviceInfo.id}`}
        className={style.devCardLink}
      >
        <DevCard name={deviceInfo.name} {...deviceInfo.data} isOnline={true} />
      </Link>
    ))
  }
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2 className="mb-5"> Good Morning, Mark!</h2>
        </Col>
        <Col style={{ maxWidth: 'fit-content' }}>
          <Link to="/dashboard/add">
            <Button variant="long-sm"> Add device</Button>
          </Link>
        </Col>
      </Row>
      <div className={style.devCardParent}>
        {deviceInfos.map((deviceInfo) => (
          <Link
            to={`${match.url}/plant/${deviceInfo.id}`}
            className={style.devCardLink}
          >
            <DevCard
              name={deviceInfo.name}
              {...deviceInfo.data}
              isOnline={true}
              className={style.devCard}
            />
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default Home

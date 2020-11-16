import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Link, useRouteMatch } from 'react-router-dom'
import DevCard from './DevCard'
import style from './scss/home.module.scss'
import { DeviceInfo } from '../DeviceInfo'
import HeaderBody from '../../common/components/HeaderBody'

type HomeProps = {
  deviceInfos: Array<DeviceInfo>
  greetings: string
}
const Home = ({ deviceInfos, greetings }: HomeProps) => {
  const match = useRouteMatch()
  const cards = deviceInfos.map((deviceInfo) => (
    <DevCard deviceInfo={deviceInfo} currRoute={match.url} />
  ))

  const addDeviceButton = (
    <Link to="/dashboard/add">
      <Button variant="long-sm"> Add device</Button>
    </Link>
  )

  const header = (
    <Row className="justify-content-center">
      <h2>{`${greetings} Mark!`}</h2>
    </Row>
  )
  return (
    <HeaderBody header={header} button={addDeviceButton}>
      <Container className={style.devCardParent}>{cards}</Container>
    </HeaderBody>
  )
}

export default Home

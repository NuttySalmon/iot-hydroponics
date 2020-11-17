import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Link, useRouteMatch } from 'react-router-dom'
import DevCard from './DevCard'
import style from './scss/home.module.scss'
import { DeviceInfo } from '../DeviceInfo'
import HeaderBody from '../../common/components/HeaderBody'
import Loading from '../../common/components/Loading'

type HomeProps = {
  deviceInfos: Array<DeviceInfo>
  greetings: string
  ready: boolean
}
const Home = ({ deviceInfos, greetings, ready }: HomeProps) => {
  const match = useRouteMatch()
  const cards = deviceInfos.map((deviceInfo) => (
    <DevCard
      deviceInfo={deviceInfo}
      key={deviceInfo.id}
      currRoute={match.url}
    />
  ))

  const addDeviceButton = (
    <Link to="/dashboard/add">
      <Button variant="long-sm">
        &#65291;&nbsp;&nbsp;&nbsp;Add device
      </Button>
    </Link>
  )

  const header = (
    <Row className="justify-content-center">
      <h2>{`${greetings} Mark!`}</h2>
    </Row>
  )

  return (
    <HeaderBody header={header} button={addDeviceButton}>
      {ready ? (
        <Container className={style.devCardParent}>{cards}</Container>
      ) : (
        <Loading />
      )}
    </HeaderBody>
  )
}

export default Home

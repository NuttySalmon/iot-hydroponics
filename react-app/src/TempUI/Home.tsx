import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useRouteMatch } from 'react-router-dom'
import DevCard from './DevCard'
import style from './home.module.scss'
import { DeviceInfo } from './DeviceInfo'
import HeaderBody from '../common/components/HeaderBody'

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

  const addDeviceButton = (
    <Link to="/dashboard/add">
      <Button variant="long-sm"> Add device</Button>
    </Link>
  )
  return (
    <HeaderBody header={`${greetings} Mark!`} button={addDeviceButton}>
      <div className={style.devCardParent}>{cards}</div>
    </HeaderBody>
  )
}

export default Home

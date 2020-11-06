import React, { useEffect, useState } from 'react'
import { Button, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import HeaderBody from '../common/components/HeaderBody'
import { DeviceInfo } from './DeviceInfo'
import style from './deviceDetails.module.scss'
import DataDisplay, { displayData } from './DataDisplay'

const DeviceDetails = ({ deviceInfos }: { deviceInfos: Array<DeviceInfo> }) => {
  const { deviceId } = useParams()
  const [id, setId] = useState('Loading...')
  const [name, setName] = useState('Loading...')
  const [data, setData] = useState<displayData>({
    temp: '-',
    hum: '-',
    lastUpdatedSince: 'Loading last updated time...',
    status: 'Getting data...',
    isOnline: false,
  })
  const header = (
    <div>
      <Row className={style.lastUpdatedSince}>
        {data.lastUpdatedSince
          ? `Last updated ${data.lastUpdatedSince}`
          : 'Loading...'}
      </Row>
      <Row>
        <h2>{name}</h2>
      </Row>
      <Row>Device id: {id}</Row>
    </div>
  )

  useEffect(() => {
    deviceInfos.forEach((deviceInfo: DeviceInfo) => {
      if (deviceInfo.id === deviceId) {
        setId(deviceInfo.id)
        setName(deviceInfo.name)
        const { data } = deviceInfo
        if (data) {
          setData(data)
        }
      }
    })
  }, [deviceInfos, deviceId])
  const button = <Button variant="long-sm-white">Device Settings</Button>
  return (
    <HeaderBody header={header} button={button}>
      <DataDisplay {...data} />
    </HeaderBody>
  )
}

export default DeviceDetails

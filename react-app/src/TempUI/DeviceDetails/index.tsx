import React, { useEffect, useState } from 'react'
import { Button, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import HeaderBody from '../../common/components/HeaderBody'
import { DeviceData, DeviceInfo } from '../DeviceInfo'
import style from './scss/deviceDetails.module.scss'
import DataDisplay from './DataDisplay'
import './scss/DeviceDetailsBg.scss'

const DeviceDetails = ({ deviceInfos }: { deviceInfos: Array<DeviceInfo> }) => {
  const { deviceId } = useParams()
  const [id, setId] = useState('Loading...')
  const [name, setName] = useState('Loading...')
  const [data, setData] = useState<DeviceData>({
    temp: null,
    hum: null,
    lastUpdatedSince: null,
    lastUpdated: null,
    isOnline: false,
    pumpOn: null,
    valveClosed: null,
  })

  useEffect(() => {
    deviceInfos.forEach((deviceInfo: DeviceInfo) => {
      if (deviceInfo.id === deviceId) {
        setId(deviceInfo.id)
        setName(deviceInfo.name)
        const infoData = deviceInfo.data
        if (infoData) {
          setData(infoData)
        }
      }
    })
  }, [deviceInfos, deviceId])

  const header = (
    <div>
      <Row className={style.lastUpdatedSince}>
        {data.lastUpdatedSince
          ? `Last updated ${data.lastUpdatedSince}`
          : 'Loading...'}
      </Row>
      <Row>
        <h1>{name}</h1>
      </Row>
      <Row>Device id: {id}</Row>
    </div>
  )
  const button = <Button variant="long-sm-white">Device Settings</Button>
  return (
    <div className={style.devicePage}>
      <HeaderBody header={header} button={button}>
        <h3>Status report</h3>
        <DataDisplay {...data} />
      </HeaderBody>
    </div>
  )
}

export default DeviceDetails

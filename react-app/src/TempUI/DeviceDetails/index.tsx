import React, { useEffect, useState } from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import HeaderBody from '../../common/components/HeaderBody'
import { DeviceInfo } from '../DeviceInfo'
import style from './scss/deviceDetails.module.scss'
import DataDisplay from './DataDisplay'
import SettingsDisplay from './SettingsDisplay'
import { Gear } from '../../common/components/SvgIcons'

const DeviceDetails = ({ deviceInfos }: { deviceInfos: Array<DeviceInfo> }) => {
  const { deviceId } = useParams()
  const [device, setDevice] = useState<DeviceInfo>({
    id: deviceId,
    name: 'Loading',
    data: {
      temp: null,
      hum: null,
      lastUpdated: null,
      isOnline: false,
      lastUpdatedSince: null,
      pumpOn: null,
      valveClose: null,
      ledOn: null,
      fanOn: null,
    },

    settings: {
      red: null,
      green: null,
      blue: null,
      ledOnTime: null,
      ledOffTime: null,
      fanInterval: null,
    },
  })
  useEffect(() => {
    deviceInfos.forEach((deviceInfo: DeviceInfo) => {
      if (deviceInfo.id === deviceId) {
        setDevice(deviceInfo)
      }
    })
  }, [deviceInfos, deviceId])

  const { data, settings } = device
  const header = (
    <div>
      <Row className={style.lastUpdatedSince}>
        {data.lastUpdatedSince
          ? `Last updated ${data.lastUpdatedSince}`
          : 'Loading...'}
      </Row>
      <Row>
        <h1>{device.name}</h1>
      </Row>
      <Row>Device id: {device.id}</Row>
    </div>
  )
  const button = (
    <Button variant="long-sm-white">
      <div className="d-inline-flex">
        <Gear className={style.gear} />
        <div> Settings</div>
      </div>
    </Button>
  )
  return (
    <div className={style.detailsPage}>
      <HeaderBody header={header} button={button}>
        <h3 className={style.sectionTitle}>Status report</h3>
        <DataDisplay {...data} />
        <h3 className={style.sectionTitle}>Current settings</h3>
        <SettingsDisplay {...settings} />
      </HeaderBody>
    </div>
  )
}

export default DeviceDetails

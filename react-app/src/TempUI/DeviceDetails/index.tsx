import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderBody from '../../common/components/HeaderBody'
import { DeviceInfo } from '../DeviceInfo'
import style from './scss/deviceDetails.module.scss'
import Details from './Details'
import { emptyDeviceInfo } from '../util'
import SettingsToggleButton from './SettingsToggleButton'
import DetailsHeader from './DetailsHeader'

const DeviceDetails = ({ deviceInfos }: { deviceInfos: Array<DeviceInfo> }) => {
  const { deviceId } = useParams()
  // for toggling between settings and data page
  const [displaySettings, setDisplaySettings] = useState(false)
  // init values with null
  const [device, setDevice] = useState<DeviceInfo>(emptyDeviceInfo(deviceId))
  useEffect(() => {
    deviceInfos.forEach((deviceInfo: DeviceInfo) => {
      if (deviceInfo.id === deviceId) {
        setDevice(deviceInfo)
      }
    })
  }, [deviceInfos, deviceId])

  const header = <DetailsHeader deviceDetails={device} />
  const button = (
    <SettingsToggleButton {...{ displaySettings, setDisplaySettings }} />
  )
  return (
    <div className={style.detailsPage}>
      <HeaderBody header={header} button={button}>
        <Details deviceDetails={device} />
      </HeaderBody>
    </div>
  )
}

export default DeviceDetails

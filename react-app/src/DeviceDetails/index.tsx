import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderBody from '../common/components/HeaderBody'
import { DeviceInfo } from '../Dashboard/DeviceInfo'
import style from './scss/deviceDetails.module.scss'
import InfoPage from './InfoPage'
import SettingsToggleButton from './SettingsToggleButton'
import DetailsHeader from './DetailsHeader'
import SettingsPage from './SettingsPage'

const DeviceDetails = ({ deviceInfos }: { deviceInfos: Array<DeviceInfo> }) => {
  const { deviceId } = useParams() as any
  // for toggling between settings and data page
  const [displaySettings, setDisplaySettings] = useState(false)
  // init values with null
  const [device, setDevice] = useState<DeviceInfo>({
    id: deviceId,
    name: 'Loading...',
    settings: null,
    data: null,
  })
  useEffect(() => {
    deviceInfos.forEach((deviceInfo: DeviceInfo) => {
      if (deviceInfo.id === deviceId) {
        setDevice(deviceInfo)
      }
    })
  }, [deviceInfos, deviceId])

  const header = <DetailsHeader {...device} />
  const button = (
    <SettingsToggleButton {...{ displaySettings, setDisplaySettings }} />
  )
  return (
    <div className={style.detailsPage}>
      <HeaderBody header={header} button={button} back>
        {displaySettings ? (
          <SettingsPage
            {...device}
            setDisplaySettings={setDisplaySettings}
            deviceId={deviceId}
          />
        ) : (
          <InfoPage {...device} />
        )}
      </HeaderBody>
    </div>
  )
}

export default DeviceDetails

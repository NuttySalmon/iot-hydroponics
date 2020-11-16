import React from 'react'
import { DeviceInfo } from '../DeviceInfo'
import DataDisplay from './InfoPage/DataDisplay'
import style from './scss/deviceDetails.module.scss'
import SettingsDisplay from './InfoPage/SettingsDisplay'
const Info = ({ deviceDetails }: { deviceDetails: DeviceInfo }) => {
  const { data, settings } = deviceDetails
  return (
    <>
      <h3 className={style.sectionTitle}>Status report</h3>
      <DataDisplay {...data} />
      <h3 className={style.sectionTitle}>Current settings</h3>
      <SettingsDisplay {...settings} />
    </>
  )
}

export default Info

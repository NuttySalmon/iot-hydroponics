import React from 'react'
import { DeviceData, DeviceSettings } from '../../DeviceInfo'
import DataDisplay from './DataDisplay'
import style from './scss/infoPage.module.scss'
import SettingsDisplay from './SettingsDisplay'
type InfoPageProps = {
  data: DeviceData | null
  settings: DeviceSettings | null
}
const InfoPage = ({ data, settings }: InfoPageProps) => {
  return (
    <>
      <h3 className={style.sectionTitle}>Status report</h3>
      <DataDisplay data={data} />
      <h3 className={style.sectionTitle}>
        Current settings{' '}
        {settings ? null : <span style={{ color: 'grey' }}>(not set)</span>}
      </h3>
      <SettingsDisplay settings={settings} />
    </>
  )
}

export default InfoPage

import React from 'react'
import { Button } from 'react-bootstrap'
import { GearIcon, GraphIcon } from '../common/components/SvgIcons'
import style from './scss/deviceDetails.module.scss'

type SettingsToggleButtonProps = {
  displaySettings: boolean
  setDisplaySettings: (callback: (prev: boolean) => boolean) => void
}
const SettingsToggleButton = ({
  displaySettings,
  setDisplaySettings,
}: SettingsToggleButtonProps) => {
  const toggleDisplaySettings = () => {
    setDisplaySettings((prev) => !prev)
  }
  return (
    <Button variant="long-sm-white" onClick={toggleDisplaySettings}>
      <div className="d-inline-flex">
        {displaySettings ? (
          <GraphIcon className={style.buttonIcon} />
        ) : (
          <GearIcon className={style.buttonIcon} />
        )}
        <div>{displaySettings ? 'Show info' : 'Set behaviour'}</div>
      </div>
    </Button>
  )
}

export default SettingsToggleButton

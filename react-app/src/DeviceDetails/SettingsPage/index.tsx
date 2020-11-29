import React, { useState } from 'react'
import { Auth, PubSub } from 'aws-amplify'
import { Button, Container, Row } from 'react-bootstrap'
import { DeviceSettings } from '../../Dashboard/DeviceInfo'
import style from './scss/settingsPage.module.scss'
import { convertToTimeStr, calcDur } from '../../common/util'
import PercentSlider from './SettingsSlider/PercentSlider'
import SliderUnit from './SliderUnit'
import TimeSlider from './SettingsSlider/TimeSlider'
import { durationSlider, freqSlider } from './SettingsSlider'

const defaultSettings = {
  red: 0,
  green: 0,
  blue: 0,
  ledOnTime: 0,
  ledOffTime: 0,
  fanInterval: 0,
  fanDuration: 0,
  floodFreq: 0,
  floodDuration: 0,
}

// this is from AWS tutorial
Auth.currentCredentials().then((info: any) => {
  const cognitoIdentityId = info.identityId
  console.log(cognitoIdentityId)
})

/**
 * Handle Setting with Submit and Reset Buttons
 * @param {React.SyntheticEvent} event - onSubmit form event
 */

function formatMinuteDisplay(value: number) {
  return value ? `${value} min` : 'Off'
}

function formatMinuteEveryDisplay(value: number) {
  return value ? `Every ${value} min` : 'Continuous'
}

type SettingsPageProps = {
  settings: DeviceSettings | null
  setDisplaySettings: (value: boolean) => void
}
const SettingsPage = ({ settings, setDisplaySettings }: SettingsPageProps) => {
  const [newSettings, setNewSettings] = useState<DeviceSettings>(
    settings || defaultSettings
  )
  const handleChange = (field: string, value: number) => {
    setNewSettings((prev) => {
      const tempSettings = {
        ...prev,
        [field]: value,
      }
      return tempSettings
    })
  }
  const { red, green, blue, floodFreq, floodDuration } = newSettings
  const colorValid = red !== null && blue !== null && green !== null
  const floodValid = floodFreq && floodDuration
  const getColor = () => {
    if (colorValid)
      return `rgb(${(red! / 100) * 255}, ${(green! / 100) * 255}, ${
        (blue! / 100) * 255
      })`
    return '#FFFFFF'
  }
  const getFloodTimes = () => {
    if (floodValid) return Math.floor(1440 / (floodFreq! + floodDuration!))
    return '-'
  }
  // publish to settings topic
  const pub = async () => {
    try {
      // All of these were initialized in the settings function as 0, called by button
      await PubSub.publish('iothydroponics/device/abc/settings', {
        floodFreq: newSettings.floodFreq,
        floodDuration: newSettings.floodDuration,
        ledOffTime: newSettings.ledOffTime,
        fanDuration: newSettings.fanDuration,
        fanInterval: newSettings.fanDuration,
        red: newSettings.red,
        green: newSettings.green,
        blue: newSettings.blue,
      })
    } catch (error) {
      console.warn(error)
    }
  }

  const handleSubmit = async (event: React.SyntheticEvent) => {
    try {
      pub()
      setDisplaySettings(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container className="pb-5">
      <Container className={style.settingsSection}>
        <Row>
          <SliderUnit
            name="Red LED"
            field="red"
            slider={PercentSlider}
            unit="%"
            lg={4}
            {...{ handleChange, newSettings }}
          />
          <SliderUnit
            name="Green LED"
            field="green"
            slider={PercentSlider}
            unit="%"
            lg={4}
            {...{ handleChange, newSettings }}
          />
          <SliderUnit
            name="Blue LED"
            field="blue"
            slider={PercentSlider}
            unit="%"
            lg={4}
            {...{ handleChange, newSettings }}
          />
        </Row>
        <Row className={style.sliderUnit}>
          LED color preview
          <div
            style={{
              backgroundColor: getColor(),
            }}
            className={style.colorPreview}
          />
        </Row>
      </Container>
      <Container className={style.settingsSection}>
        <Row>
          <SliderUnit
            name="LED on time"
            field="ledOnTime"
            slider={TimeSlider}
            valueFormat={convertToTimeStr}
            lg={6}
            {...{ handleChange, newSettings }}
          />
          <SliderUnit
            name="LED off time"
            field="ledOffTime"
            slider={TimeSlider}
            valueFormat={convertToTimeStr}
            lg={6}
            {...{ handleChange, newSettings }}
          />
        </Row>

        <Row className={style.sliderUnit}>
          <p>
            LED will be turned on for{' '}
            <b>{`${calcDur(
              newSettings.ledOnTime || 0,
              newSettings.ledOffTime || 0
            )} hours`}</b>{' '}
            per day
          </p>
        </Row>
      </Container>
      <Container className={style.settingsSection}>
        <Row>
          <SliderUnit
            name="Flood frequency"
            field="floodFreq"
            slider={freqSlider}
            valueFormat={formatMinuteEveryDisplay}
            step={15}
            lg={6}
            {...{ handleChange, newSettings }}
          />
          <SliderUnit
            name="Flood duration"
            field="floodDuration"
            slider={durationSlider}
            step={1}
            labelStep={5}
            max={30}
            valueFormat={formatMinuteDisplay}
            lg={6}
            {...{ handleChange, newSettings }}
          />
        </Row>

        <Row className={style.sliderUnit}>
          <p>Set to flood about {getFloodTimes()} times per day</p>
        </Row>
      </Container>

      <Container className={style.settingsSection}>
        <Row>
          <SliderUnit
            name="Fan interval"
            field="fanInterval"
            slider={freqSlider}
            valueFormat={formatMinuteEveryDisplay}
            lg={6}
            {...{ handleChange, newSettings }}
          />
          <SliderUnit
            name="Fan on duration"
            field="fanDuration"
            slider={durationSlider}
            valueFormat={formatMinuteDisplay}
            step={2}
            lg={6}
            {...{ handleChange, newSettings }}
          />
        </Row>
      </Container>
      <Container className="text-center">
        <Button variant="long" onClick={handleSubmit}>
          Send to device
        </Button>
      </Container>
    </Container>
  )
}

export default SettingsPage

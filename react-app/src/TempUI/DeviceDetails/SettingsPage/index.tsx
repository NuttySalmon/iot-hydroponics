import React, { useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { DeviceSettings } from '../../DeviceInfo'
import style from './scss/settingsPage.module.scss'
import { convertToTimeStr, calcDur } from '../../util'
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

function formatMinuteDisplay(value: number) {
  return value ? `${value} min` : 'Off'
}

function formatMinuteEveryDisplay(value: number) {
  return value ? `Every ${value} min` : 'Continuous'
}

type SettingsPageProps = {
  settings: DeviceSettings | null
}
const SettingsPage = ({ settings }: SettingsPageProps) => {
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
      <Button variant="long">Submit new settings </Button>
    </Container>
  )
}

export default SettingsPage

import React, { useEffect, useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { API, Auth, PubSub, graphqlOperation, formRow } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api'
import RangeSlider from 'react-bootstrap-range-slider'
import { ICredentials } from '@aws-amplify/core'
import { getDevice } from '../graphql/queries'
import { GetDeviceQuery } from '../API'
import 'bootstrap/dist/css/bootstrap.css'

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css'

type DeviceSettingsType = {
  FanDuration: number
  LEDOffTime: string
  LEDOnTime: string
  blue: number
  createdAt: string
  floodFrequency: number
  green: number
  id: string
  owner: string
  red: number
  updatedAt: string
  waterLevel: number
} | null
// time turn off 0-23
// time turn on 0-23
function Settings() {
  const [fanvalue, setFanValue] = useState(0)
  const [freqvalue, setFreqvalue] = useState(0)
  const [onvalue, setLEDONvalue] = useState(0)
  const [offvalue, setLEDOFFvalue] = useState(0)
  const [red, setREDvalue] = useState(0)
  const [green, setGREENvalue] = useState(0)
  const [blue, setBLUEvalue] = useState(0)

  const [deviceSettings, setDeviceSettings] = useState<DeviceSettingsType>(null)

  const fetchUser = async () => {
    try {
      const result = (await API.graphql(
        graphqlOperation(getDevice, {
          id: '637', // manually change this
        })
      )) as GraphQLResult<GetDeviceQuery>
      console.log('Displaying settings')
      console.log(result.data?.getDevice?.currentSetting!)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUser()
    sub()
  }, [])

  const sub = () => {
    PubSub.subscribe('topic').subscribe({
      next: (data) => console.log('Message received', data),
      error: (error) => console.error(error),
      complete: () => console.log('Done'),
    })
  }
  const pub = async () => {
    try {
      await PubSub.publish('topic', {
        fan: fanvalue,
        freq: freqvalue,
        lighton: onvalue,
        lightoff: offvalue,
        redlevel: red,
        greenlevel: green,
        bluelevel: blue,
      })
      console.log('publish work')
    } catch (error) {
      console.warn(error)
      console.log('testing')
    }
  }

  Auth.currentCredentials().then((info: ICredentials) => {
    const cognitoIdentityId = info.identityId
    console.log(cognitoIdentityId)
  })
  /**
   * Handle Setting with Submit and Reset Buttons
   * @param {React.SyntheticEvent} event - onSubmit form event
   */
  const handleSettings = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    try {
      pub()

      // console.log('Displaying settings')
      // console.log(result.data?.getDevice?.currentSetting!)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Form action="#" onSubmit={handleSettings} className="setting-form">
      <Col xs="2">
        <Form.Label>Fan Duration</Form.Label>
        <RangeSlider
          min={1}
          max={24}
          value={fanvalue}
          onChange={(changeEvent) =>
            setFanValue(changeEvent.target.valueAsNumber)
          }
        />
      </Col>
      <Col xs="2">
        <Form.Label>Flood Frequency</Form.Label>
        <RangeSlider
          min={0}
          max={12}
          value={freqvalue}
          onChange={(changeEvent) =>
            setFreqvalue(changeEvent.target.valueAsNumber)
          }
        />
      </Col>
      <Col xs="2">
        <Form.Label>Light On Duration</Form.Label>
        <RangeSlider
          min={0}
          max={23}
          value={onvalue}
          onChange={(changeEvent) =>
            setLEDONvalue(changeEvent.target.valueAsNumber)
          }
        />
      </Col>
      <Col xs="2">
        <Form.Label>Light Off Duration</Form.Label>
        <RangeSlider
          min={0}
          max={23}
          value={offvalue}
          onChange={(changeEvent) =>
            setLEDOFFvalue(changeEvent.target.valueAsNumber)
          }
        />
      </Col>
      <Col xs="2">
        <Form.Label>Red LED Intensity</Form.Label>
        <RangeSlider
          min={0}
          max={100}
          value={red}
          onChange={(changeEvent) =>
            setREDvalue(changeEvent.target.valueAsNumber)
          }
        />
      </Col>
      <Col xs="2">
        <Form.Label>Green LED Intensity</Form.Label>
        <RangeSlider
          min={0}
          max={100}
          value={green}
          onChange={(changeEvent) =>
            setGREENvalue(changeEvent.target.valueAsNumber)
          }
        />
      </Col>
      <Col xs="2">
        <Form.Label>Blue LED Intensity</Form.Label>
        <RangeSlider
          min={0}
          max={100}
          value={blue}
          onChange={(changeEvent) =>
            setBLUEvalue(changeEvent.target.valueAsNumber)
          }
        />
      </Col>
      <Form.Row>
        <Col>
          <Button variant="short" type="submit">
            Save
          </Button>
        </Col>
        <Col>
          <Button variant="short" type="submit">
            Reset
          </Button>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default Settings

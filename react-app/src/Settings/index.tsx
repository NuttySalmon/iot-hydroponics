import React, { useEffect, useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { API, Auth, PubSub, graphqlOperation } from 'aws-amplify'
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

function Settings() {
  const [fanvalue, setFanValue] = useState(0)
  const [freqvalue, setFreqvalue] = useState(0)
  const [lightvalue, setLEDvalue] = useState(0)
  const [deviceSettings, setDeviceSettings] = useState<DeviceSettingsType>(null)
  const fetchUser = async () => {
    try {
      const result = (await API.graphql(
        graphqlOperation(getDevice, {
          id: '1', // manually change this
        })
      )) as GraphQLResult<GetDeviceQuery>
      // const devices = userData.
      console.log(result.data?.getDevice?.currentSetting!)
      // save settings here (if no data is here, set the data's value to 0 or nothing)
    } catch (error) {
      console.log(error)
    }
  }

  // const Hey = () => {
  // const [value, setValue] = useState(0)
  //   return (
  //     <RangeSlider
  //       value={value}
  //       onChange={changeEvent => setValue(changeEvent.target.valueAsNumber)}
  //     />
  //   );
  // };
  useEffect(() => {
    fetchUser()
    sub()
    pub()
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
      await PubSub.publish('topic', { msg: 'New message 2:22PM' })
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

  return (
    <Form>
      <Col xs="2">
        <Form.Label>Fan Duration</Form.Label>
        <RangeSlider
          min={1}
          max={100}
          value={fanvalue}
          onChange={(changeEvent) => setFanValue(changeEvent.target.valueAsNumber)}
        />
      </Col>
      <Col xs="2">
        <Form.Label>Flood Frequency</Form.Label>
        <RangeSlider
          min={1}
          max={100}
          value={freqvalue}
          onChange={(changeEvent) => setFreqvalue(changeEvent.target.valueAsNumber)}
        />
      </Col>
      <Col xs="2">
        <Form.Label>LED Duration</Form.Label>
        <RangeSlider
          min={1}
          max={100}
          value={lightvalue}
          onChange={(changeEvent) => setLEDvalue(changeEvent.target.valueAsNumber)}
        />
      </Col>
      <Col>
        <Button variant="short" type="submit">
          Register
        </Button>
      </Col>
    </Form>
  )
}

export default Settings

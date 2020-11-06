import React, { useEffect, useState } from 'react'
import { API, Auth, PubSub, graphqlOperation } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api'
import { ICredentials } from '@aws-amplify/core'
import { getDevice } from '../graphql/queries'
import { GetDeviceQuery } from '../API'

// error with these as well, specifically the close statement in these functions for subscriptions
// PubSub.subscribe('myTopic').subscribe({
//   next: data => console.log('Message received', data),
//   error: error => console.error(error),
//   // close: () => console.log('Done'),
// });

// const sub1 = PubSub.subscribe('myTopic').subscribe({
//   next: data => console.log('Message received', data),
//   error: error => console.error(error),
//  //  close: () => console.log('Done'),
// });
// sub1.unsubscribe();

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
  // fetchUser()
  useEffect(() => {
    fetchUser()
    sub()
    pub()
  }, [])

  const sub = () => {
    PubSub.subscribe('myTopic/1').subscribe({
      next: (data) => console.log('Message received', data),
      error: (error) => console.error(error),
      complete: () => console.log('Done'),
    })
  }
  const pub = async () => {
    try {
      await PubSub.publish('myTopic/1', { msg: 'testing123!' })
    } catch (error) {
      console.warn(error)
      console.log('testing')
    }
  }

  Auth.currentCredentials().then((info: ICredentials) => {
    const cognitoIdentityId = info.identityId
    console.log(cognitoIdentityId)
  })

  return (
    <div>
      <p>Testing:</p>
    </div>
  )
}

export default Settings

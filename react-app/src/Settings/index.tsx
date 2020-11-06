import React, { useEffect, useState } from 'react'
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub'
import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers'
import { ICredentials } from '@aws-amplify/core'
import { userByCognitoId, getDevice } from '../graphql/queries'
import { UserByCognitoIdQuery, GetDeviceQuery } from '../API'

Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: 'us-west-2',
    aws_pubsub_endpoint: 'a1778zndtxlcj-ats.iot.us-west-2.amazonaws.com',
  })
)

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
      console.log('hello')
      console.log(result.data?.getDevice?.currentSetting!)
      // save settings here (if no data is here, set the data's value to 0 or nothing)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    // fetchUser()
    pub()
  }, [])

  const pub = async () => {
    try {
      console.log('test1')
      const result = await PubSub.publish('myTopic', { msg: 'testing123!' })
      console.log(result)
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

import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api'
import { userByCognitoId, getDevice } from '../graphql/queries'
import { UserByCognitoIdQuery, GetDeviceQuery } from '../API'

// need a use case function
/*
FanDuration: 10
LEDOffTime: "01:01:00.001-08:00"
LEDOnTime: "01:01:00.001-08:00"
blue: 10
createdAt: "2020-10-19T19:09:51.462Z"
floodFrequency: 10
green: 10
id: "6019425d-1176-41c3-8c59-4b271b7568a9"
owner: "d13d5864-54db-48ce-b5f1-c18c4977df88"
red: 10
updatedAt: "2020-10-19T19:09:51.462Z"
waterLevel: 10
*/
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
}



function Settings() {
  const [deviceSettings, setDeviceSettings] = useState<any>(null)
  const fetchUser = async () => {
    const result = (await API.graphql(
      graphqlOperation(getDevice, {
        id: '012345',
      })
    )) as GraphQLResult<GetDeviceQuery>
    // const devices = userData.
    console.log(result.data?.getDevice?.currentSetting)
// save settings here


  }
  useEffect(() => {
    fetchUser()
  }, [])

  return <div>
    <p>
      On time:
    </p>
     </div>
}

export default Settings

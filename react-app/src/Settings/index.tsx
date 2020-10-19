import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api'
import { userByCognitoId, getDevice } from '../graphql/queries'
import { UserByCognitoIdQuery, GetDeviceQuery } from '../API'

// need a use case function

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
  }
  useEffect(() => {
    fetchUser()
  }, [])

  return <div> </div>
}

export default Settings

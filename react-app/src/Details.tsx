import React, {useEffect} from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { getDevice } from './graphql/queries'
import { GraphQLResult } from '@aws-amplify/api'
import { GetDeviceQuery } from './API'

// add in fake settings and data for testing
// how to add aws time

const Details = () => {
  const getDetails = async () => {
    const grabDevice = await API.graphql(graphqlOperation(getDevice, {id: '123'})) as GraphQLResult<GetDeviceQuery>
    console.log("Device Data: " + grabDevice.data?.getDevice?.currentData)
    console.log("Settings Data: " + grabDevice.data?.getDevice?.currentSetting)
  }
  useEffect(() => {
    getDetails()
  }, [])

  return <h1>Hello World</h1>
}

export default Details

import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import Observable from 'zen-observable'
import { GraphQLResult } from '@aws-amplify/api'
import * as subscriptions from '../graphql/subscriptions'
import DeviceCard from './DeviceCard'
import { userByCognitoId } from '../graphql/queries'
import { UserByCognitoIdQuery } from '../API'

type userDataType = {
  __typename: string
  id: string
  owner: string
  devices: {
    __typename: string
    items: Array<any> | null
  } | null
  createdAt: string
  updatedAt: string
} | null

function Home() {
  const [userData, setUserData] = useState<userDataType>(null)

  const fetchUser = async () => {
    try {
      const result = (await API.graphql(
        graphqlOperation(userByCognitoId, {
          owner: '5d9e2347-dd9d-4bcf-9731-6c084d5d0f0f',
        })
      )) as GraphQLResult<UserByCognitoIdQuery>
      const userList = result.data?.userByCognitoID?.items!
      if (userList) {
        setUserData(userList[0])
      }
    } catch (error) {
      console.log(error)
    }
  }

  const subscribeData = async () => {
    try {
      const subscriber = await API.graphql(
        graphqlOperation(subscriptions.onUpdateDevice, {
          owner: '5d9e2347-dd9d-4bcf-9731-6c084d5d0f0f',
        })
      )
      if (subscriber instanceof Observable) {
        subscriber.subscribe({
          next: (deviceData) => {
            console.log(deviceData.value.data.onUpdateDevice)
            if (deviceData.value.errors) console.warn(deviceData.value.errors)
          },
          error: (error) => {
            console.warn(error)
          },
        })
      }
    } catch (error) {
      console.log(error)
    }
    // ).subscribe({
    //     next: (subData: any) => console.log(subData)
    // });

    // const devices = userData.
  }

  useEffect(() => {
    fetchUser()
    subscribeData()
  }, [])

  const listDevices = () => {
    if (userData) {
      return userData?.devices?.items!.map((device, index) => (
        <DeviceCard {...device} key={device.id ? device.id : index} />
      ))
    }
    return null
  }
  return (
    <div>
      <p> Test from Home </p>
      {listDevices()}
    </div>
  )
}

export default Home

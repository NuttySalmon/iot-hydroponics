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
          owner: '990be0c7-7c8b-4556-82f2-63fb9c73ed1e',
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
  // TODO: create subscription for device create
  // TODO: setup type for device data to replace any
  const updateDevice = (newDeviceData: any) => {
    console.log('This is the new device data')
    console.log(newDeviceData)
    setUserData(
      (prev: userDataType): userDataType => {
        // add update device if device data is already fetched

        if (prev?.devices!.items) {
          const updatedUserData: userDataType = { ...prev } // duplicate original state

          Object.assign(updatedUserData, prev)
          // find device by id and update with new data
          const updatedDevices = prev.devices.items?.map((device) => {
            // console.log("new")
            // console.log(newDeviceData.value.data.onUpdateDevice.id)
            // console.log("old")
            // console.log(device.id)

            if (newDeviceData.value.data.onUpdateDevice.id === device.id) {
              //Where current issue lies
              console.log('hi')
              return newDeviceData.value.data.onUpdateDevice
            }
            return device
          })
          updatedUserData.devices!.items = updatedDevices
          return updatedUserData
        }
        // return previous if device data is not fetched
        return prev
      }
    )
  }

  const subscribeData = async () => {
    try {
      const subscriber = await API.graphql(
        graphqlOperation(subscriptions.onUpdateDevice, {
          owner: '990be0c7-7c8b-4556-82f2-63fb9c73ed1e',
        })
      )
      if (subscriber instanceof Observable) {
        subscriber.subscribe({
          next: (deviceData) => {
            console.log(deviceData.value.data.onUpdateDevice)
            if (deviceData.value.errors) console.warn(deviceData.value.errors)
            else {
              updateDevice(deviceData)
            }
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
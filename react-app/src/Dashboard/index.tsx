/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react'
import { API, Auth } from 'aws-amplify'
import Navi from '../Navi'
import AddDevice from '../AddDevice'
import { Route, Switch, useHistory } from 'react-router-dom'
import Home from '../Home'
import { userDataType } from './UserData'
import { userByCognitoId } from '../graphql/queries'
import { graphqlOperation, GraphQLResult } from '@aws-amplify/api'
import { onUpdateDevice } from '../graphql/subscriptions'
import Observable from 'zen-observable'
import { UserByCognitoIdQuery } from '../API'

const Dashboard = () => {
  const [userData, setUserData] = useState<userDataType>(null)
  let history = useHistory()

  const fetchUser = async (userId: string) => {
    try {
      const result = (await API.graphql(
        graphqlOperation(userByCognitoId, {
          owner: userId,
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
            if (newDeviceData.value.data.onUpdateDevice.id === device.id) {
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

  const subscribeData = async (userId: string) => {
    try {
      const subscriber = await API.graphql(
        graphqlOperation(onUpdateDevice, {
          owner: userId,
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
  }

  function userNotLoggedIn() {
    history.push('/login')
  }

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log('Current user ID!')
        console.log(user.username)
        const userId = user.username
        subscribeData(userId)
        fetchUser(userId)
      })
      .catch(() => {
        console.log('dashboard no user')
        userNotLoggedIn()
      })
  }, [])

  return (
    <div>
      <Navi />
      <Route exact path="/dashboard/">
        <Home userData={userData} />
      </Route>
      <Route path="/dashboard/add">
        <AddDevice />
      </Route>
    </div>
  )
}

export default Dashboard

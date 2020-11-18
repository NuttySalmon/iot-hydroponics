import React, { useEffect, useState } from 'react'
import { Route, useHistory, useRouteMatch } from 'react-router-dom'
import { API, Auth } from 'aws-amplify'
import Observable from 'zen-observable'
import { graphqlOperation, GraphQLResult } from '@aws-amplify/api'
import { userByCognitoId } from '../graphql/queries'
import Home from '../Home'
import Navi from '../Navi'
import AddDevice from '../AddDevice'
import { onUpdateDevice } from '../graphql/subscriptions'
import { UserByCognitoIdQuery } from '../API'
import DeviceDetails from '../DeviceDetails'
import { makeDeviceInfoFromQuery } from '../common/util'
import {
  GraphQLUserDataType,
  OnUpdateDeviceType,
  UserDataType,
} from './UserData'
import { DeviceInfo } from './DeviceInfo'

const calcGreetings = () => {
  const now = new Date()
  const hrs = now.getHours()
  if (hrs < 12) return 'Good morning'
  if (hrs <= 17) return 'Good afternoon'
  if (hrs <= 24) return 'Good evening'
  return 'Hello'
}

const Dashboard = () => {
  const [userData, setUserData] = useState<UserDataType>({
    userId: '',
    devices: [],
    createdAt: '',
    updatedAt: '',
  })
  const [ready, setReady] = useState(false)
  const history = useHistory()
  // const setDeviceDataFromQuery
  const setUserDataFromQuery = (data: GraphQLUserDataType) => {
    const devices = data.devices.items.map(makeDeviceInfoFromQuery)
    const newUserData: UserDataType = {
      userId: data.owner || '',
      devices,
      createdAt: data?.createdAt || '',
      updatedAt: data?.updatedAt || '',
    }
    setUserData(newUserData)
    return newUserData
  }
  const fetchUser = async (userId: string) => {
    try {
      const result = (await API.graphql(
        graphqlOperation(userByCognitoId, {
          owner: userId,
        })
      )) as GraphQLResult<UserByCognitoIdQuery>
      const userList = result.data?.userByCognitoID?.items

      // if user found
      if (userList && userList[0]) {
        const temp = setUserDataFromQuery(userList[0])
        console.log(temp)
        // setUserDataFromQuery
      }
    } catch (error) {
      console.warn(error)
    } finally {
      // indicate page ready and remove loading
      setReady(true)
    }
  }

  const updateDeviceOnSub = (newDeviceData: OnUpdateDeviceType) => {
    console.log(newDeviceData)
    setUserData(
      (prev: UserDataType): UserDataType => {
        // add update device if device data is already fetched
        const updatedUserData: UserDataType = { ...prev } // duplicate original state
        Object.assign(updatedUserData, prev)
        // find device by id and update with new data
        const updatedDevices = prev.devices.map((device: DeviceInfo) => {
          if (newDeviceData.id === device.id) {
            return makeDeviceInfoFromQuery(newDeviceData) 
          }
          return device
        })
        updatedUserData.devices = updatedDevices
        return updatedUserData
      }
    )
  }

  /** Subscription  */
  const subscribeData = async (userId: string) => {
    try {
      const subscriber = await API.graphql(
        graphqlOperation(onUpdateDevice, {
          owner: userId,
        })
      )
      if (subscriber instanceof Observable) {
        // subscribe
        subscriber.subscribe({
          next: ({ value }) => {
            if (value.errors) console.warn(value.errors)
            else updateDeviceOnSub(value.data.onUpdateDevice)
          },
          error: (error) => {
            console.warn(error)
          },
        })
      }
    } catch (error) {
      console.warn(error)
    }
  }

  function userNotLoggedIn() {
    history.push('/logout')
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

  const match = useRouteMatch()
  const [greetings, setGreetings] = useState('Hello')
  useEffect(() => {
    setGreetings(calcGreetings())
    console.log('Dashboard')
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user)
      })
      .catch(() => {
        console.log('dashboard no user')
      })
  }, [])

  return (
    <div className="dashboard">
      <Navi />
      <Route exact path={match.url}>
        <Home
          deviceInfos={userData.devices}
          ready={ready}
          greetings={greetings}
        />
      </Route>
      <Route path={`${match.url}/add`}>
        <AddDevice />
      </Route>
      <Route path={`${match.url}/plant/:deviceId`}>
        <DeviceDetails deviceInfos={userData.devices} />
      </Route>
    </div>
  )
}

export default Dashboard

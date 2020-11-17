import React, { useEffect, useState } from 'react'
import { API, Auth } from 'aws-amplify'
import Navi from '../Navi'
import AddDevice from '../AddDevice'
import { Route, useHistory, useRouteMatch } from 'react-router-dom'
import Home from '../TempUI/Home'
import { userByCognitoId } from '../graphql/queries'
import { graphqlOperation, GraphQLResult } from '@aws-amplify/api'
import { onUpdateDevice } from '../graphql/subscriptions'
import Observable from 'zen-observable'
import { UserByCognitoIdQuery } from '../API'
import DeviceDetails from '../TempUI/DeviceDetails'
import { DeviceInfo } from '../TempUI/DeviceInfo'
import moment from 'moment'
import { calcIsOnline, lastUpdatedSinceText } from '../TempUI/util'
import { userDataType } from './UserData'

let fakeData: Array<DeviceInfo> = []
const makeFakeData = () => {
  fakeData = []
  for (let i = 0; i < 6; i += 1) {
    const fakeLastUpdated = moment(new Date())
      .subtract(Math.floor(Math.random() * 3000), 'seconds')
      .toDate()

    fakeData.push({
      name: 'Lettuce',
      id: i.toString(),
      data: {
        temp: 25,
        hum: 30,
        pumpOn: fakeBool(),
        valveClose: fakeBool(),
        ledOn: fakeBool(),
        fanOn: fakeBool(),
        lastUpdated: fakeLastUpdated,
        lastUpdatedSince: lastUpdatedSinceText(fakeLastUpdated),
        isOnline: calcIsOnline(fakeLastUpdated),
      },
      settings: {
        red: 80,
        green: 20,
        blue: 80,
        ledOnTime: fakeHour(),
        ledOffTime: fakeHour(),
        fanInterval: 20,
        fanDuration: 30,
        floodFreq: 300,
        floodDuration: 20,
      },
    })
  }
}

function fakeBool(): boolean {
  return Math.random() > 0.5
}

function fakeHour(): number {
  return Math.floor(Math.random() * 23)
}

const calcGreetings = () => {
  const now = new Date()
  const hrs = now.getHours()
  if (hrs < 12) return 'Good morning'
  if (hrs <= 17) return 'Good afternoon'
  if (hrs <= 24) return 'Good evening'
  return 'Hello'
}

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
  makeFakeData()
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
        <Home deviceInfos={fakeData} greetings={greetings} />
      </Route>
      <Route path={`${match.url}/add`}>
        <AddDevice />
      </Route>
      <Route path={`${match.url}/plant/:deviceId`}>
        <DeviceDetails deviceInfos={fakeData} />
      </Route>
    </div>
  )
}

export default Dashboard

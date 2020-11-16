/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'
import { Route, useRouteMatch } from 'react-router-dom'
import moment from 'moment'
import Navi from './Navi'
import AddDevice from './AddDevice'
import Home from './TempUI/Home'
import DeviceDetails from './TempUI/DeviceDetails'
import { DeviceInfo } from './TempUI/DeviceInfo'
import { calcIsOnline, lastUpdatedSinceText } from './TempUI/util'

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
    })
  }
}

function fakeBool(): boolean {
  return Math.random() > 0.5
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

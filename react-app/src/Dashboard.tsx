/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { Route, useRouteMatch } from 'react-router-dom'
import Navi from './Navi'
import AddDevice from './AddDevice'
import Home from './TempUI/Home'
import Device from './TempUI/Device'

const Dashboard = () => {
  const match = useRouteMatch()
  useEffect(() => {
    console.log('Dashboard')
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user)
      })
      .catch(() => {
        console.log('dashboard no user')
      })
  })
  return (
    <div>
      <Navi />
      <Route exact path={match.url}>
        <Home />
      </Route>
      <Route path={`${match.url}/add`}>
        <AddDevice />
      </Route>
      <Route path={`${match.url}/plant/:deviceId`}>
        <Device />
      </Route>
    </div>
  )
}

export default Dashboard

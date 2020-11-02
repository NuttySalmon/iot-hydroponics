/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import { Auth } from 'aws-amplify'
import Navi from './Navi'
import AddDevice from './AddDevice'
import { Route, Switch } from 'react-router-dom'
import Home from './TempUI/Home'

const Dashboard = () => {
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
      <Route exact path="/dashboard/">
        <Home />
      </Route>
      <Route path="/dashboard/add">
        <AddDevice />
      </Route>
    </div>
  )
}

export default Dashboard

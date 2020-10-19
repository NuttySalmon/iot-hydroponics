/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import { Auth } from 'aws-amplify'
import Navi from './Navi'
import AddDevice from './AddDevice'
import Home from './Home'

const Dashboard = () => {
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user)
      })
      .catch(() => {
        console.log('dashboard no user')
      })
  })
  return <div>
  <Navi />
  <AddDevice/>
  <Home/>
  </div>
}

export default Dashboard

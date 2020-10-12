/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import { Auth } from 'aws-amplify'
import Navi from './Navi'

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
  return <Navi />
}

export default Dashboard

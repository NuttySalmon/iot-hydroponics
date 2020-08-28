import React, { useState, useContext } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { Hub } from 'aws-amplify'
import { HubCallback } from '@aws-amplify/core/lib/Hub'
import Login from '../Login'
import SignUp from '../SignUp'
import Logout from '../Logout'
import AuthRoute from './AuthRoute'
import AuthRouteContain from './AuthRouteContain'
import UserContext from './UserContext'

type UserAuthProps = {
  // path to redirefct if logged in
  loggedInPath: string
}

// Auth components
const UserAuth = ({ loggedInPath }: UserAuthProps) => {
  const { changeLoggedIn } = useContext(UserContext)
  const history = useHistory()
  const AuthListener: HubCallback = (data) => {
    switch (data.payload.event) {
      case 'signIn':
        changeLoggedIn(true)
        console.log('user signed in') // [ERROR] My-Logger - user signed in
        history.push('/dashboard')
        break
      case 'signUp':
        changeLoggedIn(false)
        console.log('user signed up')
        break
      case 'signOut':
        changeLoggedIn(false)
        console.log('user signed out')
        history.push('./login')
        break
      case 'signIn_failure':
        changeLoggedIn(false)
        console.log('user sign in failed')
        break
      case 'configured':
        console.log('the Auth module is configured')
    }
  }
  Hub.listen('auth', AuthListener)
  return (
    <AuthRouteContain {...{ loggedInPath }}>
      <AuthRoute path="/signup" render={SignUp} />
      <AuthRoute path="/login" render={Login} />
      <Route path="/logout">
        <Logout />
      </Route>
    </AuthRouteContain>
  )
}

export default UserAuth

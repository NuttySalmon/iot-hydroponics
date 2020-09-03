import React, { useState, useEffect } from 'react'
import { Hub, Auth } from 'aws-amplify'
import { HubCallback } from '@aws-amplify/core/lib/Hub'
import { Route, useHistory } from 'react-router-dom'
import Login from '../AuthPages/Login'
import SignUp from '../AuthPages/SignUp'
import Logout from '../AuthPages/Logout'
import AuthRoute from './AuthRoute'
import AuthRouteContain from './AuthRouteContain'
import ProtectedRoute from './ProtectedRoute'

type UserAuthProps = {
  // path to redirefct if logged in
  loggedInPath: string
  children: React.ReactElement<any>
}

// Auth components
const UserAuth = ({ loggedInPath, children }: UserAuthProps) => {
  const [loggedIn, changeLoggedIn] = useState(false)
  const history = useHistory()
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        changeLoggedIn(Boolean(user))
      })
      .catch(() => {
        console.log('User not found')
      })
  })
  const AuthListener: HubCallback = (data) => {
    switch (data.payload.event) {
      case 'signIn':
        changeLoggedIn(true)
        console.log('user signed in') // [ERROR] My-Logger - user signed in
        break
      case 'signUp':
        changeLoggedIn(false)
        console.log('user signed up')
        break
      case 'signOut':
        changeLoggedIn(false)
        console.log('user signed out')
        // history.push('./login')
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
    <AuthRouteContain {...{ loggedInPath, loggedIn }}>
      <AuthRoute path="/signup" render={SignUp} />
      <AuthRoute path="/login" render={Login} />
      <ProtectedRoute path="/logout" notLoggedInPath="/login" render={Logout} />
      {children}
    </AuthRouteContain>
  )
}

export default UserAuth

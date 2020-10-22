import React, { useState, useEffect } from 'react'
import { Hub, Auth } from 'aws-amplify'
import { HubCallback } from '@aws-amplify/core/lib/Hub'
import { Route } from 'react-router-dom'
import Login from '../AuthPages/Login'
import SignUp from '../AuthPages/SignUp'
import Logout from '../AuthPages/Logout'
import { AuthPageRoute } from './RouteRedirect'
import AuthRouteContain from './AuthRouteContain'

type UserAuthProps = {
  // path to redirefct if logged in
  loggedInPath: string
  children: React.ReactElement<any>
}

// Auth components
const UserAuth = ({ loggedInPath, children }: UserAuthProps) => {
  const [loggedIn, changeLoggedIn] = useState(false)
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
    <AuthRouteContain {...{ loggedIn }}>
      <AuthPageRoute path="/signup" component={SignUp} to="/dashboard" />
      <AuthPageRoute path="/login" component={Login} to="/dashboard" />
      <Route path="/logout">
        <Logout />
      </Route>
      {children}
    </AuthRouteContain>
  )
}

export default UserAuth

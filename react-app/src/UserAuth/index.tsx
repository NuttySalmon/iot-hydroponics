import React, { useState, useEffect } from 'react'
import { Hub, Auth } from 'aws-amplify'
import { HubCallback } from '@aws-amplify/core/lib/Hub'
import { Route } from 'react-router-dom'
import Login from '../AuthPages/Login'
import SignUp from '../AuthPages/SignUp'
import Logout from '../AuthPages/Logout'
import { AuthPageRoute } from './RouteRedirect'
import AuthRouteContain from './AuthRouteContain'
import Loading from '../common/components/Loading'

type UserAuthProps = {
  // path to redirefct if logged in
  loggedInPath: string
  children: React.ReactElement<any>
}

// Auth components
const UserAuth = ({ loggedInPath, children }: UserAuthProps) => {
  const [ready, setReady] = useState(false)
  const [loggedIn, changeLoggedIn] = useState(false)
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
  useEffect(() => {
    Hub.listen('auth', AuthListener)
    Auth.currentAuthenticatedUser()
      .then((user) => {
        changeLoggedIn(Boolean(user))
      })
      .catch(() => {
        changeLoggedIn(false)
        console.log('User not found')
      })
    setReady(true)
  }, [])
  return (() => {
    if (ready)
      return (
        <AuthRouteContain loggedIn={loggedIn}>
          {children}
          <AuthPageRoute path="/signup" component={SignUp} to={loggedInPath} />
          <AuthPageRoute path="/login" component={Login} to={loggedInPath} />
          <Route path="/logout">
            <Logout />
          </Route>
        </AuthRouteContain>
      )
    return (
      <h3 className="text-center">
        <Loading />
      </h3>
    )
  })()
}

export default UserAuth

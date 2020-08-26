import React, { useState } from 'react'
import { useLocation, Link, Route, Redirect } from 'react-router-dom'
import Login from '../Login'
import SignUp from '../SignUp'
import Logout from '../Logout'
import AuthRoute from './AuthRoute'
import AuthRouteContain from './AuthRouteContain'

type UserAuthProps = {
  // path to redirefct if logged in
  loggedInPath: string
}

// Auth components
const UserAuth = ({ loggedInPath }: UserAuthProps) => {
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

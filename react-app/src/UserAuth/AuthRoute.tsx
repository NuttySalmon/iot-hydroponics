/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthChildRouteProps } from './AuthRouteContain'

export type AuthRouteProps = {
  /** Path to redirect if logged in */
  loggedInPath?: string
} & AuthChildRouteProps

/**
 * Route for rendering auth related components.
 * User will be redirected if already logged in.
 */
const AuthRoute = ({
  path,
  loggedInPath = '/dashboard',
  render: C,
  loggedIn,
}: AuthRouteProps) => {
  return (
    <Route
      path={path}
      // redirecting logic
      render={() => (loggedIn ? <Redirect to={loggedInPath} /> : <C />)}
    />
  )
}

export default AuthRoute

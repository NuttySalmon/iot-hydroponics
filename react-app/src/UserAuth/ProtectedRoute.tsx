import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthChildRouteProps } from './AuthRouteContain'

type ProtectedRouteProps = {
  /** Path to redirect if not logged in */
  notLoggedInPath: string
} & AuthChildRouteProps

/**
 * Handle route of component and only allow access if logged in
 * User will be redirected if not logged in
 */
const ProtectedRoute = ({
  path,
  notLoggedInPath,
  render: C,
  loggedIn,
}: ProtectedRouteProps) => {
  return (
    <Route
      path={path}
      // redirecting logic
      render={() => (loggedIn ? <C /> : <Redirect to={notLoggedInPath} />)}
    />
  )
}

export default ProtectedRoute

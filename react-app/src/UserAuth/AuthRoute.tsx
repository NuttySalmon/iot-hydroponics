/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserContext from './UserContext'

export type AuthRouteProps = {
  /** Path of route */
  path: string
  /** Path to redirect if logged in */
  loggedInPath?: string
  /** Component to be rendered for the path */
  render: React.FC
}

/**
 * Route for rendering auth related components.
 * User will be redirected if already logged in.
 */
const AuthRoute = ({
  path,
  loggedInPath = '/user/dashboard',
  render: C,
}: AuthRouteProps) => {
  const { loggedIn } = useContext(UserContext)
  return (
    <Route
      path={path}
      // redirecting logic
      render={() => (loggedIn ? <Redirect to={loggedInPath} /> : <C />)}
    />
  )
}

export default AuthRoute

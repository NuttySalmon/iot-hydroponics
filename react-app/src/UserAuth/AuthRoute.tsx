/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Route, RouteProps, Redirect } from 'react-router-dom'
import PageStates from './PageStates'

export type AuthRouteProps = {
  path: string
  changePage?: React.Dispatch<React.SetStateAction<PageStates>>
  // matchState: PageStates
  // loggedInState?: PageStates
  loggedInPath?: string
  // pageState?: PageStates
  render: React.FC
} // render: React.FC<AuthComponent>

// TODO: CHANGE THIS
const loggedIn = false
/** Authentication related routes. Responsible for updating page state when url accessed */
const AuthRoute = ({
  path,
  // changePage,
  // matchState = PageStates.DASHBOARD,
  loggedInPath = '/user/dashboard',
  // loggedInState = PageStates.DASHBOARD,
  render: C,
}: AuthRouteProps) => (
  <Route
    path={path}
    render={() => {
      // if (changePage) changePage(loggedIn ? loggedInState : matchState)
      if (loggedIn) return <Redirect to={loggedInPath} />
      return <C />
    }}
  />
)

export default AuthRoute

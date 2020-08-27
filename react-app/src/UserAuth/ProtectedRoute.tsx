import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserContext from './UserContext'

type ProtectedRouteProps = {
  /** Path for route */
  path: string
  /** Path to redirect if not logged in */
  notLoggedInPath: string
  /** Component to render if logged in */
  render: React.FC
}

/**
 * Handle route of component and only allow access if logged in
 * User will be redirected if not logged in
 */
const ProtectedRoute = ({
  path,
  notLoggedInPath,
  render: C,
}: ProtectedRouteProps) => {
  const { loggedIn } = useContext(UserContext)
  return (
    <Route
      path={path}
      // redirecting logic
      render={() => (loggedIn ? <C /> : <Redirect to={notLoggedInPath} />)}
    />
  )
}

export default ProtectedRoute

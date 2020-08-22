import React, { useState, useContext } from 'react'
import { Authenticator, SignOut } from 'aws-amplify-react'
import { useRouteMatch, Route, Redirect } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import { IAuthenticatorProps } from 'aws-amplify-react/lib-esm/Auth/Authenticator'
import Login from '../Login'
import SignUp from '../SignUp'
import RouteProtected from './RouteProtected'
import Dashboard from '../Dashboard'
import ControlledDisplay from './ControlledDisplay'
import history from '../history'
import { UserContext } from '../App'
import Landing from '../Landing'
import Logout from '../Logout/Logout'

const authRoot = ''
const pageRedirectIndex: { [key: string]: string } = {
  signIn: `${authRoot}/login`,
  signedIn: 'dashboard',
  verifyContact: `${authRoot}/signup`,
  signUp: `${authRoot}/signup`,
}

const pageRedirectLoggedIn: { [key: string]: string } = {
  greetings: `/dashboard`,
  signedIn: `/dashboard`,
  signUp: `/dashboard`,
}

const User = () => {
  const currPath = useRouteMatch().path
  const userContext = useContext(UserContext)
  // TODO: figure out why triggered twice

  const handleAuthStateChange = (state: string) => {
    console.log(`State: ${state}`)
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log('SUCCESS')
        console.log(user)
        const path = pageRedirectLoggedIn[state]
        if (path) history.push(path)
      })
      .catch((e) => {
        const path = pageRedirectIndex[state]
        if (path) history.push(path)
        userContext.changeUser(null)
        console.log('Error caught checking user state change:')
        console.log(e)
      })
  }
  /** For debugging  */
  const AlwaysOn = ({
    authState,
    onStateChange,
    authData,
  }: IAuthenticatorProps) => {
    const userContext = useContext(UserContext)
    const states = [
      'greetings',
      'signIn',
      'signUp',
      'signOut',
      'verifyContact',
      'ForgotPassword',
    ]
    return (
      <div>
        <div>I am always here to show current auth state: {authState}</div>
        {states.map((state) => (
          <button
            key={state}
            onClick={onStateChange ? () => onStateChange(state) : undefined}
          >
            {state}
          </button>
        ))}
        <div>{JSON.stringify(userContext.user)}</div>
      </div>
    )
  }
  /**
   * Generate route to trigger auth state changes
   * @param {string} path - Path for route
   * @param {string} state - State to be triggered
   */
  const authRoute = (path: string, state: string) => (
    <Route
      path={`${currPath}/${path}`}
      render={() => {
        handleAuthStateChange(state)
        return undefined
      }}
    />
  )

  return (
    <>
      {authRoute('', 'greetings')}
      {authRoute('logout', 'signOut')}
      {authRoute('login', 'signIn')}
      {authRoute('signup', 'signUp')}
      {authRoute('logout', 'signOut')}

      <Authenticator
        hideDefault
        onStateChange={handleAuthStateChange}
        authState="greetings"
      >
        <ControlledDisplay matchState="signIn" render={Login} />
        <ControlledDisplay matchState="signUp" render={SignUp} />
        <ControlledDisplay matchState="signOut" render={Logout} />
        <AlwaysOn />
        <ControlledDisplay matchState="greetings" render={Landing} />
      </Authenticator>
    </>
  )
}

export default User

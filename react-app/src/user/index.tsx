/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React, { useState, useContext } from 'react'
import { Authenticator } from 'aws-amplify-react'
import {
  useRouteMatch,
  Route,
  Redirect,
  useHistory,
  Link,
} from 'react-router-dom'
import { IAuthenticatorProps } from 'aws-amplify-react/lib-esm/Auth/Authenticator'
import AuthRoute from './AuthRoute'
import { PagesEnum, authStatePathMap, pagePaths } from './pageStates'
import UserContext from './UserContext'
import Logout from '../Logout/Logout'
import Login from '../Login'
import SignUp from '../SignUp'
import AuthRouteContain from './AuthRouteContain'
import Dashboard from '../Dashboard'

/** For debugging  */
const AlwaysOn = ({ authState, authData }: IAuthenticatorProps) => {
  const userContext = useContext(UserContext)
  return (
    <div>
      <div>I am always here to show current auth state: {authState}</div>
      <ul>
        {Object.keys(pagePaths).map((key) => (
          <li key={key}>
            <Link to={pagePaths[key]}>{key}</Link>
          </li>
        ))}
      </ul>
      <div>{JSON.stringify(userContext.user)}</div>
    </div>
  )
}
const User = () => {
  // get current path match
  const currPath = useRouteMatch().path
  const userContext = useContext(UserContext) // for updating user in App
  const history = useHistory() // for redirection
  const [currPage, changeCurrPage] = useState(PagesEnum.LANDING) // keep track of current page

  // TODO: figure out why triggered twice
  /** Function passed to Authenticator onStateChange. Pass in state to change auth state. */
  const handleAuthStateChange = (state: string, user?: any) => {
    console.log(`State: ${state}`)

    // save user info if logged in
    if (state === 'signedIn') {
      userContext.changeUser(user)
    } else userContext.changeUser(null)

    // redirect if state found in map
    const path: string = authStatePathMap[state]
    if (path) history.push(path)
  }

  return (
    <>
      <Authenticator
        hideDefault
        onStateChange={handleAuthStateChange}
        authState="signIn"
      >
        <AuthRouteContain pageState={currPage} changeCurrPage={changeCurrPage}>
          <AuthRoute
            path={pagePaths[PagesEnum.LOGIN]}
            matchState={PagesEnum.LOGIN}
            render={Login}
          />
          <AuthRoute
            path={pagePaths[PagesEnum.SIGNUP]}
            matchState={PagesEnum.SIGNUP}
            render={SignUp}
          />
          <AuthRoute
            path={pagePaths[PagesEnum.LOGOUT]}
            matchState={PagesEnum.LOGOUT}
            render={Logout}
          />

          <Route path="/user/dashboard" render={Dashboard} />
        </AuthRouteContain>
        <p>Current page: {currPage}</p>
        <AlwaysOn onStateChange={handleAuthStateChange} />
      </Authenticator>
      <Route exact path={`${currPath}`}>
        <Redirect to={pagePaths[PagesEnum.DASHBOARD]} />
      </Route>
    </>
  )
}

export default User

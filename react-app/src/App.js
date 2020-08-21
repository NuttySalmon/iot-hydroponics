import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login'
import Landing from './Landing'
import SignUp from './SignUp'
import UISample from './common/UISample'
import './common/scss/base/base.scss'

import Logout from './Logout/Logout'
import Dashboard from './Dashboard'

import { Authenticator } from 'aws-amplify-react'

const AlwaysOn = (props) => {
  return (
    <div>
      <div>I am always here to show current auth state: {props.authState}</div>
    </div>
  )
}

const App = () => (
  // TODO: create forget passoword page
    <Router>
      <Switch>
        <Route path="/sample">
          <UISample />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/forget-password">
          <h1>Contact us to reset your password.</h1>
        </Route>

        <Route path="/logout">
          <Logout />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
)

export default App

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Landing'
import UISample from './common/UISample'
import './common/scss/base/base.scss'
import UserAuth from './UserAuth'
import Dashboard from './Dashboard'
import ProtectedRoute from './UserAuth/ProtectedRoute'
import UserContext from './UserAuth/UserContext'
import { Auth } from 'aws-amplify'

const App = () => {
  const [loggedIn, changeLoggedIn] = useState(false)
  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      changeLoggedIn(Boolean(user))
    })
  })
  return (
    <UserContext.Provider value={{ loggedIn, changeLoggedIn }}>
      <Router>
        <Switch>
          <Route path="/sample" render={UISample} />
          <ProtectedRoute
            path="/dashboard"
            render={Dashboard}
            notLoggedInPath="/login"
          />
          <Route exact path="/">
            <Landing />
          </Route>
          <UserAuth loggedInPath="/dashboard" />
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}

export default App

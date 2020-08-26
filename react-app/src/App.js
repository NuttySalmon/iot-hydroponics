import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Landing'
import UISample from './common/UISample'
import './common/scss/base/base.scss'
import UserAuth from './UserAuth'
import Dashboard from './Dashboard'
import ProtectedRoute from './UserAuth/ProtectedRoute'
import UserContext from './UserAuth/UserContext'

const App = () => {
  const [loggedIn, changeLoggedIn] = useState(false)
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

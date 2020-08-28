import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Landing'
import UISample from './common/UISample'
import './common/scss/base/base.scss'
import UserAuth from './UserAuth'
import Dashboard from './Dashboard'
import ProtectedRoute from './UserAuth/ProtectedRoute'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/sample" render={UISample} />
        <Route exact path="/">
          <Landing />
        </Route>
        <UserAuth loggedInPath="/dashboard">
          <ProtectedRoute
            path="/dashboard"
            render={Dashboard}
            notLoggedInPath="/login"
          />
        </UserAuth>
      </Switch>
    </Router>
  )
}

export default App

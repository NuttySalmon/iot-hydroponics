import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Landing'
import UISample from './common/UISample'
import './common/scss/base/base.scss'
import UserAuth from './UserAuth'
import Dashboard from './Dashboard'

const App = () => {
  // TODO: create forget passoword page
  return (
    <Router>
      <Switch>
        <Route path="/sample" render={UISample} />
        <Route exact path="/" render={Landing} />
        <Route path="/user">
          <UserAuth />
        </Route>
        <Route path="/dashboard" render={Dashboard} />
      </Switch>
    </Router>
  )
}

export default App

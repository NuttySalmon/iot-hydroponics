import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Landing'
import UISample from './common/UISample'
import './common/scss/base/base.scss'
import User from './user'
import UserContext from './user/UserContext'

const App = () => {
  const [user, changeUser] = useState(null)
  // TODO: create forget passoword page
  return (
    <UserContext.Provider value={{ user, changeUser }}>
      <Router>
        <Switch>
          <Route path="/sample">
            <UISample />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}

export default App

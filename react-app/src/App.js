import React, { useState, useContext, createContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login'
import Landing from './Landing'
import SignUp from './SignUp'
import UISample from './common/UISample'
import './common/scss/base/base.scss'
import Logout from './Logout/Logout'
import Dashboard from './Dashboard'
import User from './user'
import RouteProtected from './user/RouteProtected'

const AlwaysOn = (props) => {
  return (
    <div>
      <div>I am always here to show current auth state: {props.authState}</div>
    </div>
  )
}

export const UserContext = createContext({
  user: null,
  changeUser: (dummy) => {
    console.log('ContextError')
  },
})

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
          {/* <Route path="/login">
          <Login />
        </Route> */}
          {/* <Route path="/signup">
        <SignUp />
      </Route> */}
         

          

          <Route path="/">
            <User />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}

export default App

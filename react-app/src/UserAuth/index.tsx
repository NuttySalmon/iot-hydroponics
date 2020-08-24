import React, { useState } from 'react'
import { useLocation, Link, Route, Redirect } from 'react-router-dom'
import Login from '../Login'
import SignUp from '../SignUp'
import Dashboard from '../Dashboard'
import Logout from '../Logout'
import AuthRoute from './AuthRoute'
import AuthRouteContain from './AuthRouteContain'

const UserAuth = () => {
  //   const [pageState, changePage] = useState(PageStates.SIGNUP)
  const currPath = '/user'
  return (
    <>
      <AuthRouteContain
        loggedInPath="/dashboard"
        // loggedInState={PageStates.DASHBOARD}
        // {...{ changePage }}
      >
        <AuthRoute
          path={`${currPath}/signup`}
          //   matchState={PageStates.SIGNUP}
          render={SignUp}
        />
        <AuthRoute
          path={`${currPath}/login`}
          //   matchState={PageStates.LOGIN}
          render={Login}
        />
        <Route path={`${currPath}/logout`} render={Logout} />
        <Route exact path={`${currPath}`}>
          <Redirect to={`${currPath}/login`} />
        </Route>
      </AuthRouteContain>
      {/* {pageSwitch()} */}
      <Link to="/user/signup">SignUp</Link>
      <Link to="/user/login">Login</Link>
      <Link to="/user/logout">Logout</Link>
    </>
  )
}

export default UserAuth

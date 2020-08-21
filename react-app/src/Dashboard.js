/* eslint-disable react/jsx-props-no-spreading */
// import { Authenticator } from 'aws-amplify-react'
import React from 'react'
import { Authenticator } from 'aws-amplify-react'
import { Auth } from 'aws-amplify'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
} from 'react-router-dom'

import Login from './Login'
import SignUp from './SignUp'

// const Auth = () => {

// }

// const AlwaysOn = (props) => {
//   return (
//     <div>
//       <div>I am always here to show current auth state: {props.authState}</div>
//     </div>
//   )
// }
function handleAuthStateChange(state) {
  console.log(`STATE: ${state}`)
  Auth.currentAuthenticatedUser()
    .then((data) => {
      console.log('SUCCESS')
      console.log(data)
    })
    .catch((e) => {
      console.log(e)
    })
}
const ProtectedRoute = ({
  onStateChange,
  render: C,
  componentProps,
  ...other
}) => {
  const newRender = () => <C {...{ onStateChange }} {...componentProps} />
  return <Route {...other} render={newRender} />
}

const Dashboard = ({ location }) => {
  const currPath = useRouteMatch().path
  return (
    <>
      <Authenticator hideDefault onStateChange={handleAuthStateChange}>
        <ProtectedRoute path={`${currPath}/login`} render={Login} />
        <ProtectedRoute path={`${currPath}/signup`} render={SignUp} />
      </Authenticator>

      <Route exact path={currPath}>
        auth
      </Route>
    </>
  )
}

export default Dashboard

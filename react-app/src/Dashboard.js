// import { Authenticator } from 'aws-amplify-react'
import React from 'react'
import {
  Authenticator,
  SignIn,
  SignUp,
  ConfirmSignUp,
  Greetings,
} from 'aws-amplify-react'
import Login from './Login'
import { Auth } from 'aws-amplify'

// const Auth = () => {

// }

const AlwaysOn = (props) => {
  return (
    <div>
      <div>I am always here to show current auth state: {props.authState}</div>
    </div>
  )
}
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

const Dashboard = () => {
  return (
    <>
      <Login />
      <Authenticator hideDefault onStateChange={handleAuthStateChange} />
    </>
  )
}

export default Dashboard

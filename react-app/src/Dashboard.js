/* eslint-disable react/jsx-props-no-spreading */
// import { Authenticator } from 'aws-amplify-react'
import React, { useEffect } from 'react'
import { Auth } from 'aws-amplify'

// const Auth = () => {

// }

// const AlwaysOn = (props) => {
//   return (
//     <div>
//       <div>I am always here to show current auth state: {props.authState}</div>
//     </div>
//   )
// }

const Dashboard = () => {
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user)
      })
      .catch(() => {
        console.log('dashboard no user')
      })
  })
  return <h1> Dashboard </h1>
}

export default Dashboard

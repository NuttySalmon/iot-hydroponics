import React, { useEffect, useContext } from 'react'
import { Auth } from 'aws-amplify'
import { Redirect } from 'react-router-dom'
import UserContext from '../UserAuth/UserContext'

const Logout = () => {
  const { changeLoggedIn } = useContext(UserContext) // Context for changing the user's state

  // Function to sign out the user, and update the user's state.
  async function signOut() {
    try {
      const user = await Auth.signOut()
      console.log(user)
      console.log('Logged out.')

      changeLoggedIn(false) // Context function that changes the user's state.
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }
  useEffect(signOut) // This function runs everytime the DOM gets updated.
  return <Redirect to="/login" />
}

export default Logout

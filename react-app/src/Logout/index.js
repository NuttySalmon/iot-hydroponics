import React, { useEffect, useContext } from 'react'
import { Auth } from 'aws-amplify'
import { Redirect } from 'react-router-dom'
import UserContext from '../UserAuth/UserContext'

const Logout = () => {
  const { changeLoggedIn } = useContext(UserContext)
  async function signOut() {
    try {
      const user = await Auth.signOut()
      console.log(user)
      console.log('Logged out.')

      changeLoggedIn(false)
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }
  useEffect(signOut)
  return <Redirect to="/login" />
}

export default Logout

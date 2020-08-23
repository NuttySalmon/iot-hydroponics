import React, { useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { Redirect } from 'react-router-dom'

async function signOut() {
  try {
    const user = await Auth.signOut()
    console.log(user)
    console.log('Logged out.')
  } catch (error) {
    console.log('error signing out: ', error)
  }
}

const Logout = () => {
  useEffect(() => {
    signOut()
  }) // Look up useEffect
  return <Redirect to="/login" />
}

export default Logout

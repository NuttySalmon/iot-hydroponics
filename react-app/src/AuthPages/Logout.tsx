import React, { useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { useHistory } from 'react-router-dom'

const Logout = () => {
  const history = useHistory()
  // Function to sign out the user
  async function signOut() {
    try {
      const user = await Auth.signOut()
      console.log(user)
      console.log('Logged out.')
      history.push('/login')
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }
  // handles sign out when this componenet is mounted
  useEffect(() => {
    signOut()
  }, [])
  return <p>Logging out...</p>
}

export default Logout

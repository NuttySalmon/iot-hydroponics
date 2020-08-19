import React from 'react';
import { Auth } from 'aws-amplify';
import { Redirect } from 'react-router-dom'

const Logout = () => {
  async function signOut() {
    try {
      const user = await Auth.signOut();
      console.log(user)
      console.log("It works!!!!")
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  signOut()
  return <Redirect to="/login" />
}

export default Logout

import React, {useEffect} from 'react';
import { Auth } from 'aws-amplify';
import { Redirect } from 'react-router-dom'

async function signOut() {
  try {
    const user = await Auth.signOut();
    console.log(user)
    console.log("It works!!!!")
  } catch (error) {
    console.log('error signing out: ', error);
  }
}


const Logout = () => {
  useEffect(() => {signOut()})  // Look up useEffect
  return <Redirect to="/login" />
}

export default Logout

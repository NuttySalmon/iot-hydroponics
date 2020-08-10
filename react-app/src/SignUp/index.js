import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div>
      <h1>Sign Up page</h1>
      <ul>
        <li>
          <Link to="/">Landing</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
        <li>
          <Link to="/sample/">SASS Sample</Link>
        </li>
      </ul>
    </div>
  )
}

export default SignUp

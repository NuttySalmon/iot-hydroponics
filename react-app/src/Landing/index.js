import React from 'react'
import {Link} from 'react-router-dom'

function Landing() {
  return (
    <div>
      <h1>Landing Page</h1>
      <ul>
        <li>
          <Link to="/">Landing</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/sample/">SASS Sample</Link>
        </li>
      </ul>
    </div>
  )
}

export default Landing

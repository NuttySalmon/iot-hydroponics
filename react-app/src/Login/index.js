import React from 'react'
import LoginBox from './LoginBox';
import './scss/index.scss'
import background from './img/login-bg.png'
 
function Login() {
  return (
    <div className='backImage' style={{backgroundImage: `url(${background})`}}>
      <LoginBox />
    </div>
 )
}

export default Login


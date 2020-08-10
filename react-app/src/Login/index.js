import React from 'react'
import LoginBox from './LoginBox';
import background from './img/login-bg.png'
import LogoTrans from '../common/components/LogoTrans';
import style from './scss/login.module.scss';
 
function Login() {
  return (
    <div className={style.background} style={{backgroundImage: `url(${background})`}}>
      <LogoTrans />
      <LoginBox />
    </div>
 )
}

export default Login


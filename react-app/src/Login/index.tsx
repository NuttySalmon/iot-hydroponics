import React, { useState } from 'react'
import background from './img/login-bg.png'
import FullPage from '../common/components/FullPage'
import LoginForm from './LoginForm'
import VerifyForm from '../Verify/VerifyForm'
import FormContainer from '../common/components/FormContainer'
import style from './scss/login.module.scss'

function Login() {
  const [accVerify, changeAccVerify] = useState(false)

  return (
    <FullPage bg={background}>
      <FormContainer title="Welcome Back" style={style.box}>
        {accVerify ? <VerifyForm /> : <LoginForm changeAccVerify={changeAccVerify} />}
      </FormContainer>
    </FullPage>
  )
}

export default Login

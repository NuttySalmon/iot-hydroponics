import React, { useState } from 'react'
import background from './img/login-bg.png'
import FullPage from '../../common/components/FullPage'
import LoginForm from './LoginForm'
import VerifyForm from '../Verify/VerifyForm'
import FormContainer from '../../common/components/FormContainer'
import style from './scss/login.module.scss'

function Login() {
  const [accVerify, changeAccVerify] = useState(false)
  const [email, changeEmail] = useState('')

  return (
    <FullPage bg={background}>
      <FormContainer
        title={accVerify ? 'Verify Account' : 'Welcome Back'}
        style={style.box}
      >
        {accVerify ? (
          <VerifyForm {...{ email }} loginPagePath="/login" />
        ) : (
          <LoginForm {...{ changeAccVerify, changeEmail, email }} />
        )}
      </FormContainer>
    </FullPage>
  )
}

export default Login

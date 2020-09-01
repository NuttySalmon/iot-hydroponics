import React from 'react'
import background from './img/login-bg.jpg'
import LoginForm from './LoginForm'
import style from './scss/login.module.scss'
import FormWrapper from './AuthFormWrapper'

const Login = () => (
  <FormWrapper
    background={background}
    boxStyle={style.box}
    form={LoginForm}
    title="Welcome Back"
  />
)

export default Login

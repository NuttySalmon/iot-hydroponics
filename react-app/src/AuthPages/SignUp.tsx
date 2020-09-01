import React from 'react'
import background from './img/sign-up-bg.jpg'
import FormWrapper from './AuthFormWrapper'
import style from './scss/signup.module.scss'
import SignUpForm from './SignUpForm'

const SignUp = () => (
  <FormWrapper
    background={background}
    boxStyle={style.box}
    form={SignUpForm}
    title="Create an account"
  />
)

export default SignUp

import React from 'react'
import background from './img/sign-up-bg.png'
import FormWrapper from '../FormWrapper'
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

// <FullPage bg={background}>
//   <FormContainer
//     title="Create an account"
//     style={style.box}
//     logoStyle={style.logoRight}
//   >
//     <SignUpForm />
//   </FormContainer>
// </FullPage>
// }

export default SignUp

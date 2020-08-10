import React from 'react'
import background from './img/login-bg.png'
import FullPage from '../common/components/FullPage';
import LoginForm from './LoginForm'
import FormContainer from "../common/components/FormContainer"
import style from './scss/login.module.scss'

function Login() {
   const formLinks = [
     {to: '/signup', text: 'Don\'t have an account?'}
   ];

   return (
     <FullPage bg={background}>
       <FormContainer 
         title="Welcome Back"
         formLinks={formLinks}
         style={style.box}
       >
         <LoginForm />
       </FormContainer>
     </FullPage>
 )
}

export default Login


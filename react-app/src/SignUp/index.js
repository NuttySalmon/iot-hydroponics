import React from 'react'
import background from './img/sign-up-bg.png'
import FullPage from '../common/components/FullPage';
import FormContainer from "../common/components/FormContainer"
import style from './scss/signup.module.scss'
import SignUpForm from './SignUpForm';

function SignUp() {
   const formLinks = [
     {to: '/login', text: 'Already have an account?'}
   ];

   return (
     <FullPage bg={background}>
       <FormContainer 
         title="Create an account"
         formLinks={formLinks}
         style={style.box}
       >
         <SignUpForm />
       </FormContainer>
     </FullPage>
 )
}

export default SignUp



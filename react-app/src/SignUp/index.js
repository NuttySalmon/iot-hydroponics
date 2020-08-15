import React from 'react'
import background from './img/sign-up-bg.png'
import FullPage from '../common/components/FullPage';
import FormContainer from "../common/components/FormContainer"
import style from './scss/signup.module.scss'
import SignUpForm from './SignUpForm';

function SignUp() {
   return (
     <FullPage bg={background}>
       <FormContainer 
         title="Create an account"
         style={style.box}
       >
         <SignUpForm />
       </FormContainer>
     </FullPage>
 )
}

export default SignUp



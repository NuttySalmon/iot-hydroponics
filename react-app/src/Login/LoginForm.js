import React, {createRef} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
// import { Auth } from 'aws-amplify';
import TextField from '../common/components/TextField'
import '../common/scss/components/buttons.scss';
import '../common/scss/components/form-elements.scss';
import style from './scss/login.module.scss'


const LoginForm = () => {
  const emailField = createRef();
  const passwordField = createRef(); 

  const awsSignIn = async () => {
      const username = emailField.current.value
      const password = passwordField.current.value
      try {
          // const user = await Auth.signIn(username, password);
          // console.log(user);
      } catch (error) {
          console.log('error signing in', error);
      }
  }
  return (
    <Form className='user-form'>
      <TextField ref={emailField} type="email"> Email </TextField>
      <div style={{ marginTop: "2.5em" }}><TextField ref={passwordField} type="password">Password</TextField></div>
      <Row><Col className={style.formBtn}><Button variant="short" onClick={awsSignIn}> Login </Button></Col></Row>
      <div className={style.formLink}> 
        <Row><Col><Link to='/signup'>Don&apos;t have an account? </Link></Col></Row>
        <Row className="mt-1"><Col><Link to='/forget-password'>Forget password</Link></Col></Row>
      </div>
    </Form>
  )
}

export default LoginForm

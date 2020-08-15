import React from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import TextField from '../common/components/TextField'
import '../common/scss/components/buttons.scss';
import '../common/scss/components/form-elements.scss';
import style from './scss/login.module.scss'

const LoginForm = () => {
  return (
    <Form className='user-form'>
      <TextField type="email"> Email </TextField>
      <div style={{ marginTop: "2.5em" }}><TextField type="password">Password</TextField></div>
      <Row><Col className={style.formBtn}><Button variant="short"> Login </Button></Col></Row>
      <div className={style.formLink}> 
        <Row><Col><Link to='/signup'>Don&apos;t have an account? </Link></Col></Row>
        <Row className="mt-1"><Col><Link to='/forget-password'>Forget password</Link></Col></Row>
      </div>
    </Form>
  )
}

export default LoginForm

import React from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import TextField from '../common/components/TextField'
import '../common/scss/components/buttons.scss';
import '../common/scss/components/form-elements.scss';
import style from './scss/login.module.scss'

const LoginForm = () => {
  return (
    <Form className='user-form'>
      <TextField type="email"> Email </TextField>
      <TextField type="password">Password</TextField>
      <Row><Col className={style.formbtn}><Button variant="short"> Login </Button></Col></Row>
    </Form>
  )
}

export default LoginForm

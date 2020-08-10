import React from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import TextField from '../common/components/TextField'
import '../common/scss/components/buttons.scss';
import '../common/scss/components/form-elements.scss';

const LoginForm = () => {
  return (
    <Form className='user-form'>
      <TextField type="email"> Email </TextField>
      <TextField type="password">Password</TextField>
      <Row><Col className="form-btn"><Button variant="short"> Login </Button></Col></Row>
    </Form>
  )
}

export default LoginForm

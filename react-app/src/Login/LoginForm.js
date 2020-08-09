import React from 'react'
import {Form, Button} from 'react-bootstrap'
import TextField from '../common/components/TextField'

const LoginForm = () => {
  return (
    <Form>
      <h1 className='header'>Welcome Back</h1>
      <TextField> Email </TextField>

      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" />
        <div className='inputName'>
          <Form.Label>Password</Form.Label>
        </div>
      </Form.Group>
      <Button variant="short">
        Submit
      </Button>
    </Form>
  )
}

export default LoginForm

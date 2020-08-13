import React from 'react'
import {Form, Col, Button} from 'react-bootstrap'
import TextField from '../common/components/TextField'
import style from './scss/signup.module.scss'

const SignUpForm = () => {
  return (
    <Form>
      <Form.Row>
        <TextField id="fname" as={Col}> First Name </TextField>
        <TextField id="lname" as={Col}> Last Name </TextField>
      </Form.Row> 
      <TextField id="email" type="email">Email</TextField>
      <TextField id="password" type="password">New password</TextField>
      <TextField id="rePassword" type="password">Re-type password</TextField>
      <TextField id="deviceId">Device ID</TextField>
      <Col className={style.formbtn}><Button variant="short"> Register </Button></Col>
    </Form>
  )
}

export default SignUpForm

import React from 'react'
import {Form, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TextField from '../common/components/TextField'
import style from './scss/signup.module.scss'

const SignUpForm = () => {
  return (
    <Form>
      <Form.Row>
        <Col lg={6}>
          <TextField id="fname"> First Name </TextField>
        </Col>
        <Col>
          <TextField id="lname"> Last Name </TextField>
        </Col>
      </Form.Row> 
      <TextField id="email" type="email">Email</TextField>
      <TextField id="password" type="password">New password</TextField>
      <TextField id="rePassword" type="password">Re-type password</TextField>
      <TextField id="deviceId">Device ID</TextField>
      <Form.Row className={style.formBtn}><Button variant="short"> Register </Button></Form.Row>
      <div className={style.formLink}>
        <Form.Row><Col><Link to="/login">Already have an account? </Link></Col></Form.Row>
      </div>
    </Form>
  )
}

export default SignUpForm

import React, {createRef} from 'react'
import {Form, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TextField from '../common/components/TextField'
import style from './scss/signup.module.scss'
// need to make first/last name email PW 2x PW devID  bool for checkbot
const SignUpForm = () => {
  const fNameField = createRef();
  const lNameField = createRef(); 
  const EmailField = createRef();
  const PwField = createRef();
  const PWConField = createRef();
  const DevIDField = createRef();

  const awsReg = async () => {
    const Firstname = fNameField.current.value
    const Lastname = lNameField.current.value
    const Email = EmailField.current.value
    const password = PwField.current.value
    const passwordcon = PWConField.current.value
    const DevID = DevIDField.current.value
      try {
           console.log(Firstname);
           console.log(Lastname);
           console.log(Email);
           console.log(password);
           console.log(passwordcon);
           console.log(DevID);
      } catch (error) {
          console.log('error signing up', error);
      }
  }
  return (
    <Form>
      <Form.Row>
        <Col lg={6}>
          <TextField ref={fNameField} id="fname"> First Name </TextField>
        </Col>
        <Col>
          <TextField ref={lNameField} id="lname"> Last Name </TextField>
        </Col>
      </Form.Row> 
      <TextField ref={EmailField} id="email" type="email">Email</TextField>
      <TextField ref={PwField} id="password" type="password">New password</TextField>
      <TextField ref={PWConField} id="rePassword" type="password">Re-type password</TextField>
      <TextField ref={DevIDField} id="deviceId">Device ID</TextField>
      <Form.Row className={style.formBtn}><Button variant="short" onClick={awsReg}> Register </Button></Form.Row>
      <div className={style.formLink}>
        <Form.Row><Col><Link to="/login">Already have an account? </Link></Col></Form.Row>
      </div>
    </Form>
  )
}

export default SignUpForm

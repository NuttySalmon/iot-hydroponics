import React, { createRef } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import TextField from '../common/components/TextField';
import style from './scss/signup.module.scss';
// need to make first/last name email PW 2x PW devID  bool for checkbot
const SignUpForm = () => {
  const fNameField = createRef();
  const lNameField = createRef();
  const EmailField = createRef();
  const PwField = createRef();
  const PWConField = createRef();
  const DevIDField = createRef();

  const awsReg = async (event) => {
    event.preventDefault();
    const given_name = fNameField.current.value;
    const family_name = lNameField.current.value;
    const email = EmailField.current.value;
    const password = PwField.current.value;
    const passwordcon = PWConField.current.value;
    const devID = DevIDField.current.value;
    if (password !== passwordcon) {
      // TODO: when password not equal
    }
    try {
      console.log(given_name);
      console.log(family_name);
      console.log(email);
      console.log(password);
      console.log(passwordcon);
      const res = await Auth.signUp({
        username: email,
        password,
        attributes: {
          given_name,
          family_name,
          email,
        },
      });
      console.log(res);
    } catch (error) {
      console.log('error signing up', error);
    }
  };
  return (
    <Form action="#" onSubmit={awsReg}>
      <Form.Row>
        <Col lg={6}>
          <TextField ref={fNameField} id="fname">
            First Name
          </TextField>
        </Col>
        <Col>
          <TextField ref={lNameField} id="lname">
            Last Name
          </TextField>
        </Col>
      </Form.Row>
      <TextField ref={EmailField} id="email" type="email">
        Email
      </TextField>
      <TextField ref={PwField} id="password" type="password">
        New password
      </TextField>
      <TextField ref={PWConField} id="rePassword" type="password">
        Re-type password
      </TextField>
      <Form.Row className={style.formBtn}>
        <Button variant="short" type="submit">
          Register
        </Button>
      </Form.Row>
      <div className={style.formLink}>
        <Form.Row>
          <Col>
            <Link to="/login">Already have an account? </Link>
          </Col>
        </Form.Row>
      </div>
    </Form>
  );
};

export default SignUpForm;

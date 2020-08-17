/* eslint-disable camelcase */
import React, { createRef } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { useState } from 'react';
import TextField from '../common/components/TextField';
import style from './scss/signup.module.scss';
// need to make first/last name email PW 2x PW devID  bool for checkbot
const SignUpForm = () => {
  const fNameField = createRef();
  const lNameField = createRef();
  const EmailField = createRef();
  const PwField = createRef();
  const PWConField = createRef();

  const awsReg = async (event) => {
    event.preventDefault();
    const signUpInfo = {
      given_name: fNameField.current.value,
      family_name: lNameField.current.value,
      email: EmailField.current.value,
      password: PwField.current.value,
      passwordcon: PWConField.current.value,
    };
    if (signUpInfo.password !== signUpInfo.passwordcon) {
      // TODO: when password not equal
    }
    try {
      console.log(signUpInfo);
      const res = await Auth.signUp({
        username: signUpInfo.email,
        password: signUpInfo.password,
        attributes: {
          given_name: signUpInfo.given_name,
          family_name: signUpInfo.family_name,
          email: signUpInfo.email,
        },
      });
      console.log(res);
    } catch (error) {
      console.log('error signing up', error);
    }
  };

  // for showing password hint
  const [isPasswordFocus, changePasswordFocus] = useState(false);
  const [isPasswordError, changePasswordError] = useState(false);
  const passwordHint =
    'Minimum length of 8. At least 1 character (A-Z or a-z) and 1 number (0-9).';

  const [isPasswordMismatch, changePasswordMismatch] = useState(false);
  const passwordMismatchMsg = "Password doesn't match.";

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
      <TextField
        ref={PwField}
        id="password"
        type="password"
        onFocus={() => changePasswordFocus(true)}
        onBlur={() => changePasswordFocus(false)}
        hint={passwordHint}
        showHint={isPasswordFocus}
        error={isPasswordError}
      >
        New password
      </TextField>
      <TextField ref={PWConField} id="rePassword" type="password" showHint>
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

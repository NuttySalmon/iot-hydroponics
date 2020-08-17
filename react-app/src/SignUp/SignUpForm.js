/* eslint-disable camelcase */
import React, { createRef } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { useState } from 'react';
import TextField from '../common/components/TextField';
import style from './scss/signup.module.scss';
// need to make first/last name email PW 2x PW devID  bool for checkbot

const validateName = (name) => {
  // TODO: check name
  return false;
};
const validatePassword = (password) => {
  // TODO: add password regex. length > 8, at least 1 char and 1 num
  return false;
};

const validatePasswordCon = (password, passwordCon) => {
  // TODO: validate re-type password
  return false;
};

const validateEmail = (email) => {
  // TODO: regex to validate email address
  return false;
};

const SignUpForm = () => {
  const [firstName, changeFirstName] = useState('');
  const [lastName, changeLastName] = useState('');
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');
  const [passwordCon, changePasswordCon] = useState('');

  const [fNameValid, changeFNameValid] = useState(true);
  const [lNameValid, changeLNameValid] = useState(true);
  const [emailValid, changeEmailValid] = useState(true);
  const [passwordValid, changePasswordValid] = useState(true);
  const [passwordConValid, changePasswordConValid] = useState(true);

  const [isPasswordFocus, changePasswordFocus] = useState(false);
  const nameErrorMsg = 'Invalid name';
  const emailErrorMsg = 'Invalid email';
  const passwordHint =
    'Minimum length of 8. At least 1 character (A-Z or a-z) and 1 number (0-9).';
  const passwordConErrorMsg = "Password doesn't match.";

  const awsReg = async (event) => {
    event.preventDefault();
    const fNameIsValid = validateName(firstName);
    const lNameIsValid = validateName(lastName);
    const emailIsValid = validateEmail(email);
    const passwordIsValid = validatePassword(password);
    const passwordConIsValid = validatePasswordCon(password, passwordCon);

    changeFNameValid(fNameIsValid);
    changeLNameValid(lNameIsValid);
    changeEmailValid(emailIsValid);
    changePasswordValid(passwordIsValid);
    changePasswordConValid(passwordConIsValid);

    const valid =
      fNameIsValid &&
      lNameIsValid &&
      emailIsValid &&
      passwordIsValid &&
      passwordConIsValid;
    if (valid) {
      try {
        const res = await Auth.signUp({
          username: email,
          password,
          attributes: {
            given_name: firstName,
            family_name: lastName,
            email,
          },
        });
        console.log(res);
      } catch (error) {
        console.log('error signing up', error);
      }
    }
  };

  return (
    <Form action="#" onSubmit={awsReg}>
      {/* Names  */}
      <Form.Row>
        <Col lg={6}>
          <TextField
            value={firstName}
            onChange={changeFirstName}
            hint={nameErrorMsg}
            showHint={!fNameValid}
          >
            First Name
          </TextField>
        </Col>
        <Col>
          <TextField
            value={lastName}
            onChange={changeLastName}
            hint={nameErrorMsg}
            showHint={!lNameValid}
          >
            Last Name
          </TextField>
        </Col>
      </Form.Row>

      {/* Eamil */}
      <TextField
        value={email}
        onChange={changeEmail}
        hint={emailErrorMsg}
        showHint={!emailValid}
      >
        Email
      </TextField>

      {/* Password */}
      <TextField
        value={password}
        type="password"
        onFocus={() => changePasswordFocus(true)}
        onBlur={() => changePasswordFocus(false)}
        hint={passwordHint}
        showHint={isPasswordFocus || !passwordValid}
        error={!passwordValid}
        onChange={changePassword}
      >
        New password
      </TextField>

      {/* Retype password */}
      <TextField
        value={passwordCon}
        onChange={changePasswordCon}
        type="password"
        hint={passwordConErrorMsg}
        showHint={!passwordConValid}
      >
        Re-type password
      </TextField>

      {/* Submit button */}
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

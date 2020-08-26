/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */

import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import TextField from '../common/components/TextField'
import style from './scss/signup.module.scss'

const minimumPasswordLength = 8
// 2-30 chars, allows lower case, upper case, space
const NameChecker = /^[a-zA-Z ]{2,30}$/
// at least one digit, one uppecase/one lower case
const PasswordChecker = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+/
// check for @ symbol with strings on each end
const EmailChecker = /^\S+@\S+$/
const UserNameExistsException = 'UsernameExistsException'
const InvalidPasswordException = 'InvalidPasswordException'
const defaultEmailErrorMsg = 'Invalid email'
const existedEmailErrorMsg = 'An account already exist with this email.'

const validateName = (name) => NameChecker.test(name)
const validatePasswordCon = (password, passwordCon) => passwordCon === password
const validateEmail = (email) => EmailChecker.test(email)

const validatePassword = (password) => {
  if (password.length <= minimumPasswordLength) return false
  return PasswordChecker.test(password)
}

const SignUpForm = () => {
  const [firstName, changeFirstName] = useState('')
  const [lastName, changeLastName] = useState('')
  const [email, changeEmail] = useState('')
  const [password, changePassword] = useState('')
  const [passwordCon, changePasswordCon] = useState('')

  const [fNameValid, changeFNameValid] = useState(true)
  const [lNameValid, changeLNameValid] = useState(true)
  const [emailValid, changeEmailValid] = useState(true)
  const [passwordValid, changePasswordValid] = useState(true)
  const [passwordConValid, changePasswordConValid] = useState(true)
  const [isPasswordFocus, changePasswordFocus] = useState(false)

  const [emailErrorMsg, changeEmailErrorMsg] = useState(defaultEmailErrorMsg)
  const [genericErrorMsg, changeGenericErrorMsg] = useState('')
  const nameErrorMsg = 'Invalid name'
  const passwordHint =
    'Minimum length of 8. At least 1 character (A-Z or a-z) and 1 number (0-9).'
  const passwordConErrorMsg = "Password doesn't match."

  const handleAWSError = (error) => {
    switch (error.name) {
      case UserNameExistsException:
        changeEmailErrorMsg(existedEmailErrorMsg)
        changeEmailValid(false)
        break
      case InvalidPasswordException:
        changePasswordValid(false)
        break
      default:
        changeGenericErrorMsg('An error occured. Please try again.')
    }
  }

  const awsReg = async (event) => {
    changeGenericErrorMsg('')
    changeEmailErrorMsg(defaultEmailErrorMsg)
    event.preventDefault()

    // client side validation
    const fNameIsValid = validateName(firstName)
    const lNameIsValid = validateName(lastName)
    const emailIsValid = validateEmail(email)
    const passwordIsValid = validatePassword(password)
    const passwordConIsValid = validatePasswordCon(password, passwordCon)

    changeFNameValid(fNameIsValid)
    changeLNameValid(lNameIsValid)
    changeEmailValid(emailIsValid)
    changePasswordValid(passwordIsValid)
    changePasswordConValid(passwordConIsValid)

    const valid =
      fNameIsValid &&
      lNameIsValid &&
      emailIsValid &&
      passwordIsValid &&
      passwordConIsValid
    // server side validation WORK ON THIS
    if (true) {
      try {
        const res = await Auth.signUp({
          username: email,
          password,
          attributes: {
            given_name: firstName,
            family_name: lastName,
            email,
          },
        })
        console.log(res)
      } catch (error) {
        // invalid emails, backend password checker to match amazon's policy
        // aws might not have fetched the information
        // none matching then show generic error message showing somewhere else
        handleAWSError(error)
        console.log('error signing up', error)
      }
    }
  }

  return (
    <Form action="#" onSubmit={awsReg}>
      {/* Names  */}
      <Form.Row>
        <Col lg={6}>
          <TextField
            label="First name"
            value={firstName}
            onChange={changeFirstName}
            hint={nameErrorMsg}
            showHint={!fNameValid}
          />
        </Col>
        <Col>
          <TextField
            label="Last name"
            value={lastName}
            onChange={changeLastName}
            hint={nameErrorMsg}
            showHint={!lNameValid}
          />
        </Col>
      </Form.Row>

      {/* Eamil */}
      <TextField
        label="Email"
        value={email}
        onChange={changeEmail}
        hint={emailErrorMsg}
        showHint={!emailValid}
      />

      {/* Password */}
      <TextField
        label="New password"
        value={password}
        type="password"
        changeIsFocused={changePasswordFocus}
        hint={passwordHint}
        showHint={isPasswordFocus || !passwordValid}
        error={!passwordValid}
        onChange={changePassword}
      />

      {/* Retype password */}
      <TextField
        label="Re-type password"
        value={passwordCon}
        onChange={changePasswordCon}
        type="password"
        hint={passwordConErrorMsg}
        showHint={!passwordConValid}
      />
      <div className={style.genericError}>{genericErrorMsg}</div>
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
  )
}

export default SignUpForm

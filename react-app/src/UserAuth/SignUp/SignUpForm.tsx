/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */

import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import TextField from '../../common/components/TextField'
import style from './scss/signup.module.scss'
import { WrappedFormProps } from '../FormWrapper'

const minimumPasswordLength = 8

/** Regex */
// 2-30 chars, allows lower case, upper case, space
const NameChecker = /^[a-zA-Z ]{1,30}$/
// at least one digit, one uppecase/one lower case
const PasswordChecker = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+/
// check for @ symbol with strings on each end
const EmailChecker = /^\S+@\S+$/

/** Exception name */
const UserNameExistsException = 'UsernameExistsException'
const InvalidPasswordException = 'InvalidPasswordException'
const defaultEmailErrorMsg = 'Invalid email'
const existedEmailErrorMsg = 'An account already exist with this email.'

/**
 * Check if a name is valid
 * @param {string} name - first name or last name string
 * @returns {boolean} - whether name is valid
 */
const validateName = (name: string) => NameChecker.test(name)

/**
 * Check if the re-entered passwords match
 * @param {string} password - password string
 * @param {string} passwordCon - re-entered password string
 * @returns {boolean} - whether the passwords match
 */
const validatePasswordCon = (password: string, passwordCon: string) =>
  passwordCon === password

/**
 * Checks to see if the email address is correct
 * @param {string} email - email string
 * @returns {boolean} - whether the email is valid or not
 */
const validateEmail = (email: string) => EmailChecker.test(email)

/**
 * Checks if password fufills policy requirement
 * @param {string} password password string
 * @returns {boolean} - whether the password meets the criteria
 */
const validatePassword = (password: string) => {
  if (password.length <= minimumPasswordLength) return false
  return PasswordChecker.test(password)
}

/**
 * Component for rendering sign up form and handling user sign up
 */
const SignUpForm = ({
  changeAccVerify,
  changeEmail,
  email,
}: WrappedFormProps) => {
  const [firstName, changeFirstName] = useState('')
  const [lastName, changeLastName] = useState('')
  const [password, changePassword] = useState('')
  const [passwordCon, changePasswordCon] = useState('')

  // for displaying error messages in the front end
  const [fNameValid, changeFNameValid] = useState(true)
  const [lNameValid, changeLNameValid] = useState(true)
  const [emailValid, changeEmailValid] = useState(true)
  const [passwordValid, changePasswordValid] = useState(true)
  const [passwordConValid, changePasswordConValid] = useState(true)
  const [isPasswordFocus, changePasswordFocus] = useState(false)

  // error messages for front end
  const [emailErrorMsg, changeEmailErrorMsg] = useState(defaultEmailErrorMsg)
  const [genericErrorMsg, changeGenericErrorMsg] = useState('')
  const nameErrorMsg = 'Invalid name'
  const passwordHint =
    'Minimum length of 8. At least 1 character (A-Z or a-z) and 1 number (0-9).'
  const passwordConErrorMsg = "Password doesn't match."

  const handleAWSError = (error: { name: string }) => {
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

  /**
   * Handle user registration with form inputs
   * @param {React.SyntheticEvent} event - onSubmit form event
   */
  const handleRegistration = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    changeGenericErrorMsg('') // reset generic message
    changeEmailErrorMsg(defaultEmailErrorMsg) // reset email error msg to front end validation error message

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
    if (valid) {
      try {
        // sending request to aws
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
        changeAccVerify(true)
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
    <Form action="#" onSubmit={handleRegistration} className="user-form">
      {/* Names  */}
      <Form.Row>
        <Col md={6}>
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

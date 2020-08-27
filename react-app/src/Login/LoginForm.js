import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import TextField from '../common/components/TextField'
import '../common/scss/components/buttons.scss'
import '../common/scss/components/form-elements.scss'
import style from './scss/login.module.scss'

const userNotFoundException = 'UserNotFoundException'
const notAuthorizedException = 'NotAuthorizedException'
const userNotConfirmedException = 'UserNotConfirmedException'

const checkValid = (fieldValue) => fieldValue !== ''

const LoginForm = ({ changeAccVerify, changeEmail, email }) => {
  const [password, changePassword] = useState('')
  const [err, changeErr] = useState('')
  const [emailValid, changeEmailValid] = useState(true)
  const [passValid, changePassValid] = useState(true)
  const [emailErrMessage, changeEmailErrMessage] = useState('')
  const [passErrMessage, changePassErrMessage] = useState('')

  const handleError = (error) => {
    switch (error.name) {
      case userNotFoundException:
        // changeErr('You have entered your email or password incorrectly.')
        changeEmailValid(false)
        changeEmailErrMessage('This email does not exist. ')
        break
      case notAuthorizedException:
        changePassValid(false)
        changePassErrMessage('Email and password do not match. ')
        break
      case userNotConfirmedException:
        changeAccVerify(true)
        break
      default:
        changeErr('An error occured. Please try again.')
    }
  }

  const awsSignIn = async (event) => {
    event.preventDefault()
    changeAccVerify(false) // reset
    changeErr('')
    const emailValidTemp = checkValid(email)
    const passwordValidTemp = checkValid(password)
    changeEmailValid(emailValidTemp)
    changePassValid(passwordValidTemp)
    changeEmailErrMessage('Email field cannot be empty.')
    changePassErrMessage('Password field cannot be empty. ')

    if (emailValidTemp && passwordValidTemp) {
      try {
        const user = await Auth.signIn(email, password)
        console.log(user)
      } catch (error) {
        console.log(error)
        handleError(error)
      }
    }
  }

  return (
    <Form className="user-form" onSubmit={awsSignIn}>
      <TextField
        label="Email"
        value={email}
        onChange={changeEmail}
        type="text"
        hint={emailErrMessage}
        showHint={!emailValid}
      />
      <div style={{ marginTop: '1.5em' }}>
        <TextField
          label="Password"
          value={password}
          onChange={changePassword}
          type="password"
          hint={passErrMessage}
          showHint={!passValid}
        />
      </div>
      <Row>
        <Col>
          <div className={style.warning}>{err}</div>
        </Col>
      </Row>
      <Row>
        <Col className={style.formBtn}>
          <Button variant="short" type="submit">
            Login
          </Button>
        </Col>
      </Row>
      <div className={style.formLink}>
        <Row>
          <Col>
            <Link to="/signup">Don&apos;t have an account? </Link>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col>
            <Link to="/forget-password">Forget password</Link>
          </Col>
        </Row>
      </div>
    </Form>
  )
}

export default LoginForm

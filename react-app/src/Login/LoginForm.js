import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

import { Auth, withAuthenticator } from 'aws-amplify'
// import aws_exports from '../aws-exports'
// import { Authenticator } from 'aws-amplify-react'
import { Link } from 'react-router-dom'
import TextField from '../common/components/TextField'
import '../common/scss/components/buttons.scss'
import '../common/scss/components/form-elements.scss'
import style from './scss/login.module.scss'

const userNotFoundException = 'UserNotFoundException'
const notAuthorizedException = 'NotAuthorizedException'

const handleError = (error, callback) => {
  if (error.name === notAuthorizedException) {
    callback('You have entered your email or password incorrectly.')
  } else if (error.name === userNotFoundException) {
    callback('This account does not exist.')
  } else {
    callback('Error occurred while logging in.')
  }
}

const getUserData = () => {}

const LoginForm = () => {
  const [email, changeEmail] = useState('')
  const [password, changePassword] = useState('')
  const [err, changeErr] = useState('')

  const awsSignIn = async (event) => {
    event.preventDefault()
    try {
      const user = await Auth.signIn(email, password)
      console.log(user.email_verified)
    } catch (error) {
      handleError(error, (msg) => changeErr(msg))
    }
  }

  return (
    <Form className="user-form" onSubmit={awsSignIn}>
      <TextField
        label="Email"
        value={email}
        onChange={changeEmail}
        type="text"
      />
      <div style={{ marginTop: '1.5em' }}>
        <TextField
          label="Password"
          value={password}
          onChange={changePassword}
          type="password"
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

import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import TextField from '../common/components/TextField'
import '../common/scss/components/buttons.scss'
import '../common/scss/components/form-elements.scss'

const userNotFoundException = 'UserNotFoundException'
const expiredCodeException = 'ExpiredCodeException'

const checkValid = (fieldValue) => fieldValue !== ''

const VerifyForm = ({ email }) => {
  const [code, changeCode] = useState('')
  const [generalErrMsg, changeGeneralErrMsg] = useState('')
  const [codeValid, changeCodeValid] = useState(true)
  const [codeErrMessage, changeCodeErrMessage] = useState('')

  const handleError = (error) => {
    changeCodeValid(false)
    switch (error.name) {
      case userNotFoundException:
        // changeErr('You have entered your email or password incorrectly.')
        changeCodeErrMessage('Invalid Code. ')
        break
      case expiredCodeException:
        changeCodeErrMessage('The code you have entered has expired. ')
        break
      default:
        changeCodeErrMessage('')
        changeGeneralErrMsg('An error occured. Please try again.')
    }
  }

  const history = useHistory()

  const awsVerify = async (event) => {
    event.preventDefault()
    changeGeneralErrMsg('')
    const codeValidTemp = checkValid(code)
    changeCodeValid(codeValidTemp)
    changeCodeErrMessage('Email field cannot be empty.')

    if (codeValidTemp) {
      try {
        await Auth.confirmSignUp(email, code)
        Auth.currentAuthenticatedUser().then(user => {console.log(user)})
        history.push("/dashboard")
      } catch (error) {
        console.log(error)
        handleError(error)
      }
    }
  }

  const resendCode = async () => {
    try {
      await Auth.resendSignUp(email)
      console.log('code resent successfully')
    } catch (error) {
      console.log('error resending code: ', error)
    }
  }

  return (
    <>
      <Form className="user-form" onSubmit={awsVerify}>
        <Row>
          <Col className="col text-center">
            <p>
              The verfication code has been sent to <b>{email}</b>.   
            </p>
            <p><a href="#" onClick={resendCode}>Resend Code</a></p>
          </Col>
        </Row>
        <TextField
          label="Enter Verification Code"
          value={code}
          onChange={changeCode}
          type="text"
          hint={codeErrMessage}
          showHint={!codeValid}
        />
        <Row>
          <Col className="mt-5 text-center">
            <Button variant="short" type="submit">
              Verify
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default VerifyForm

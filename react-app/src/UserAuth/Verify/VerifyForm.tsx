import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import TextField from '../../common/components/TextField'
import style from './scss/VerifyForm.module.scss'
import '../../common/scss/components/buttons.scss'
import '../../common/scss/components/form-elements.scss'

const userNotFoundException = 'UserNotFoundException'
const expiredCodeException = 'ExpiredCodeException'
const codeMismatchException = 'CodeMismatchException'

// check if code field is empty
const checkValid = (fieldValue: string) => Boolean(fieldValue)

type VerifyFormProps = {
  email: string
  loginPagePath: string
}

const VerifyForm = ({ email, loginPagePath }: VerifyFormProps) => {
  const [code, changeCode] = useState('')
  const [generalErrMsg, changeGeneralErrMsg] = useState('')
  const [codeValid, changeCodeValid] = useState(true)
  const [codeErrMessage, changeCodeErrMessage] = useState('')
  const [resendMsg, changeResendMsg] = useState('') // Display message for resending code.
  const history = useHistory()

  // for getting code related error message and handling general error
  const getCodeErrMsg = (error: any) => {
    changeCodeValid(false)
    switch (error.name) {
      case userNotFoundException:
        return 'User could not be found. '
      case expiredCodeException:
        return 'The code you have entered has expired.'
      case codeMismatchException:
        return 'Invalid verification code provided.'
      default:
        changeGeneralErrMsg('An error occured. Please try again.')
        return ''
    }
  }

  // code to verify account
  const awsVerify = async (event: any) => {
    event.preventDefault()
    changeGeneralErrMsg('') // reset general error message
    const codeValidTemp = checkValid(code) // check if code is valid
    changeCodeValid(codeValidTemp)
    changeCodeErrMessage('Verification code cannot be empty.')

    if (codeValidTemp) {
      try {
        await Auth.confirmSignUp(email, code) // sent to aws
        Auth.currentAuthenticatedUser().then((user) => {
          console.log(user)
        })
        history.push(loginPagePath) // Reroute if user is validated.
      } catch (error) {
        console.log(error)
        changeCodeErrMessage(getCodeErrMsg(error)) // Display error messages.
      }
    }
  }

  // For resending verificaiton code
  const resendCode = async () => {
    try {
      await Auth.resendSignUp(email)
      changeResendMsg('Code has been resent successfully! ')
    } catch (error) {
      changeResendMsg('There has been an error resending verification code. ')
    }
  }

  return (
    <>
      <Form className="user-form" onSubmit={awsVerify}>
        <Row className="mb-0">
          <Col className={style.prompt}>
            <Row>
              <Col>
                <p>
                  The verfication code has been send to <b>{email}</b>.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  Click{' '}
                  <a href="#" onClick={resendCode}>
                    here
                  </a>{' '}
                  to resent code.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>{resendMsg}</p>
              </Col>
            </Row>
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
        <Row className={style.generalError}>
          <Col>{generalErrMsg}</Col>
        </Row>
        <Row>
          <Col className={style.formBtn}>
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

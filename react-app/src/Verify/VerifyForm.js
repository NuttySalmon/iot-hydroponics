import React, { useState, useContext } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import TextField from '../common/components/TextField'
import style from './scss/VerifyForm.module.scss'
import '../common/scss/components/buttons.scss'
import '../common/scss/components/form-elements.scss'
import UserContext from '../UserAuth/UserContext'

const userNotFoundException = 'UserNotFoundException'
const expiredCodeException = 'ExpiredCodeException'
const codeMismatchException = 'CodeMismatchException'

// check if code field is empty
const checkValid = (fieldValue) => fieldValue !== ''

const VerifyForm = ({ email }) => {
  const [code, changeCode] = useState('')
  const [generalErrMsg, changeGeneralErrMsg] = useState('')
  const [codeValid, changeCodeValid] = useState(true)
  const [codeErrMessage, changeCodeErrMessage] = useState('')
  const [resendMsg, changeResendMsg] = useState('') // Display message for resending code.
  const history = useHistory()
  const {changeLoggedIn} = useContext(UserContext)

  
  // for handling verification code submission error
  const handleError = (error) => {
    changeCodeValid(false)
    switch (error.name) {
      case userNotFoundException:
        changeCodeErrMessage('User could not be found. ')
        break
      case expiredCodeException:
        changeCodeErrMessage('The code you have entered has expired.')
        break
      case codeMismatchException:
        changeCodeErrMessage('Invalid verification code provided.')
        break
      default:
        changeCodeErrMessage('')
        changeGeneralErrMsg('An error occured. Please try again.')
    }
  }

 
  // code to verify account
  const awsVerify = async (event) => {
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
        changeLoggedIn(true)
        history.push('/dashboard')
      } catch (error) {
        console.log(error)
        handleError(error)
      }
    }
  }

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
                <p>The verfication code has been sent to <b>{email}</b>.</p>
              </Col>
            </Row>
            <Row>
              <Col>
               <p> Click <a href="#" onClick={resendCode}> here </a> to resent code. </p>
              </Col>
            </Row>
            <Row>
              <Col><p>{resendMsg}</p></Col>
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

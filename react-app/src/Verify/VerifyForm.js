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
        changeCodeErrMessage('User could not be found. ')
        break
      case expiredCodeException:
        changeCodeErrMessage('The code you have entered has expired. ')
        break
      case codeMismatchException:
        changeCodeErrMessage('Invalid verification code provided. ')
        break
      default:
        changeCodeErrMessage('')
        changeGeneralErrMsg('An error occured. Please try again.')
    }
  }

  const history = useHistory()
  const {changeLoggedIn} = useContext(UserContext)
  
  const awsVerify = async (event) => {
    event.preventDefault()
    changeGeneralErrMsg('')
    const codeValidTemp = checkValid(code)
    changeCodeValid(codeValidTemp)
    changeCodeErrMessage('Email field cannot be empty.')

    if (codeValidTemp) {
      try {
        await Auth.confirmSignUp(email, code)
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
      console.log('code resent successfully')
    } catch (error) {
      console.log('error resending code: ', error)
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
              <Col><p>{/* TODO: Resent code response or error message here */}</p></Col>
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
          <Col>{/* TODO: General error message here */}</Col>
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

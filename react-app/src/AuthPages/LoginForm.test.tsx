import * as React from 'react'
import {
  render,
  fireEvent,
  screen,
  getByLabelText,
  waitFor,
} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import LoginForm from './LoginForm'
import { lastUpdatedSinceText } from '../common/util'

const submit = () => {
  fireEvent(
    screen.getByRole('button'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  )
}

const renderForm = (email) => {
  return render(
    <Router>
      <LoginForm
        changeAccVerify={() => {}}
        changeEmail={() => {}}
        email={email}
      />
    </Router>
  )
}

const passwordEmptyError = /Password field cannot be empty./i
const emailEmptyError = /Email field cannot be empty./i
const doNotMatchError = 'Email and password do not match.'

test('Show error messages when email field is empty', () => {
  const form = renderForm('')
  submit()
  const emailError = form.getByTestId('email-hint')
  expect(emailError.innerHTML).toMatch(emailEmptyError)
})

test('Show error messages when password field is empty', async () => {
  const form = renderForm('')
  submit()
  let passwordError = screen.getByTestId('password-hint')
  expect(passwordError.innerHTML).toMatch(passwordEmptyError)
  // const passwordField = form.getByRole('password-input')
  // fireEvent.change(passwordField, {
  //   target: { value: 'blabla' },
  // })
  // console.log(passwordField.value)
  // submit()
  // let passwordError = screen.getByTestId('password-hint')
  // await waitFor(() => expect(passwordError.innerHTML).toBe(doNotMatchError))
})

// test('Show error messages when password field is empty', () => {
//   fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'example@example.com' } })
//   fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'fakepassword' } })
//   const passwordError = screen.getByText('Password field cannot be empty.')
//   expect(passwordError).toBeTruthy()
// })

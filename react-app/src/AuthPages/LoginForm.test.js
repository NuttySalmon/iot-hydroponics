import * as React from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import LoginForm from './LoginForm'
import { Auth } from 'aws-amplify'

const submit = () => {
  fireEvent(
    screen.getByRole('button'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  )
}

const renderForm = (email = '', changeAccVerify = () => {}) => {
  return render(
    <Router>
      <LoginForm
        changeAccVerify={changeAccVerify}
        changeEmail={() => {}}
        email={email}
      />
    </Router>
  )
}

/**
 * Change field value to abitary string
 * @param {HTMLElement} field
 */
const fillField = (field) => {
  fireEvent.change(field, {
    target: { value: 'blabla' },
  })
}
function MockSignInError(name) {
  this.name = name
}
MockSignInError.prototype = Error.prototype

/**
 * Setup form and fields to not be empty and submit form
 */
const setupFields = () => {
  const mockChangeAccVerify = jest.fn((value) => {})
  const form = renderForm('test@email.com', mockChangeAccVerify)
  const passwordField = form.getByRole('password-input')
  fillField(passwordField)

  const passwordError = form.getByTestId('password-hint')
  const emailError = form.getByTestId('email-hint')
  const generalError = form.getByTestId('general-error')

  submit()
  return { passwordError, emailError, generalError, mockChangeAccVerify }
}

const passwordEmptyError = /Password field cannot be empty./i
const emailEmptyError = /Email field cannot be empty./i

jest.mock('aws-amplify')

test('Show error messages only when email field is empty', () => {
  const form = renderForm()
  submit()
  const emailError = form.getByTestId('email-hint')
  expect(emailError.innerHTML).toMatch(emailEmptyError)
})

test('No email error when email is not empty', () => {
  const form = renderForm('bla')
  const emailError = form.getByTestId('email-hint')
  submit()
  expect(emailError).not.toBeVisible()
})

test('Show error messages only when password field is empty', () => {
  const form = renderForm()
  submit()
  const passwordError = form.getByTestId('password-hint')
  const passwordField = form.getByRole('password-input')

  expect(passwordError.innerHTML).toMatch(passwordEmptyError)
  expect(passwordError).toBeVisible()

  fillField(passwordField)

  submit()
  expect(passwordError).not.toBeVisible()
})

test('Successful login no error', () => {
  Auth.signIn.mockResolvedValue({})
  const {
    passwordError,
    emailError,
    generalError,
    mockChangeAccVerify,
  } = setupFields()
  expect(passwordError).not.toBeVisible()
  expect(emailError).not.toBeVisible()
  expect(generalError).toBeEmptyDOMElement()
  expect(mockChangeAccVerify.mock.calls.pop()[0]).toBeFalsy()
})

test('Show email does not exist error', async () => {
  Auth.signIn.mockImplementation(async () => {
    throw new MockSignInError('UserNotFoundException')
  })
  const {
    passwordError,
    emailError,
    generalError,
    mockChangeAccVerify,
  } = setupFields()
  submit()
  await waitFor(() => expect(emailError).toBeVisible())
  expect(emailError.innerHTML).toMatch(/This email does not exist./i)
  expect(passwordError).not.toBeVisible()
  expect(generalError).toBeEmptyDOMElement()
  expect(mockChangeAccVerify.mock.calls.pop()[0]).toBeFalsy()
})

test('Show wrong credentials error', async () => {
  Auth.signIn.mockImplementation(async () => {
    throw new MockSignInError('NotAuthorizedException')
  })
  const {
    passwordError,
    emailError,
    generalError,
    mockChangeAccVerify,
  } = setupFields()
  submit()
  await waitFor(() => expect(passwordError).toBeVisible())
  expect(passwordError.innerHTML).toMatch(/Email and password do not match./i)
  expect(emailError).not.toBeVisible()
  expect(generalError).toBeEmptyDOMElement()
  expect(mockChangeAccVerify.mock.calls.pop()[0]).toBeFalsy()
})

test('Show unknown error', async () => {
  Auth.signIn.mockImplementation(async () => {
    throw new MockSignInError('Blablabla')
  })
  const {
    passwordError,
    emailError,
    generalError,
    mockChangeAccVerify,
  } = setupFields()
  submit()
  await waitFor(() =>
    expect(generalError.innerHTML).toMatch(
      /An error occured. Please try again/i
    )
  )
  expect(passwordError).not.toBeVisible()
  expect(emailError).not.toBeVisible()
  expect(mockChangeAccVerify.mock.calls.pop()[0]).toBeFalsy()
})

test('Change state to show confirmation screen', async () => {
  Auth.signIn.mockImplementation(async () => {
    throw new MockSignInError('UserNotConfirmedException')
  })
  const { mockChangeAccVerify } = setupFields()
  submit()
  // expect to set to display verify page
  await waitFor(() =>
    expect(mockChangeAccVerify.mock.calls.pop()[0]).toBeTruthy()
  )
})

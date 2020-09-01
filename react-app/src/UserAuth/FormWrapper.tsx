/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import FullPage from '../common/components/FullPage'
import FormContainer, {
  FormContainerProps,
} from '../common/components/FormContainer'
import VerifyForm from './Verify/VerifyForm'

type WrapperProps = {
  /** Background image for the page */
  background: string
  /** Form to be wrapped  */
  form: React.FC<WrappedFormProps>
} & Omit<FormContainerProps, 'children'>

/** Type for wrapped form */
export type WrappedFormProps = {
  /** Function to change whether to show account verify form */
  changeAccVerify: React.Dispatch<React.SetStateAction<boolean>>
  /** Function to change controlled email field */
  changeEmail: React.Dispatch<React.SetStateAction<string>>
  /** Email state for controlled text field */
  email: string
}

/**
 * Wrapper around form to render form with styling and dynamically show account verification
 * form or the form component provided
 */
function FormWrapper({ background, form: C, title, ...rest }: WrapperProps) {
  // State for whether to show account verification form
  const [accVerify, changeAccVerify] = useState(false)
  // State for controlled email field in wrapped form
  const [email, changeEmail] = useState('')

  return (
    <FullPage bg={background}>
      <FormContainer title={accVerify ? 'Verify Account' : title} {...rest}>
        {accVerify ? (
          // show verification form
          <VerifyForm {...{ email }} loginPagePath="/login" />
        ) : (
          // show wrapped form
          <C {...{ changeAccVerify, changeEmail, email }} />
        )}
      </FormContainer>
    </FullPage>
  )
}

export default FormWrapper

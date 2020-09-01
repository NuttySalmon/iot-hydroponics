import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row } from 'react-bootstrap'
import LogoTrans from '../common/components/LogoTrans'

export type AuthFormContainerProps = {
  /** Form title */
  title: string
  /** Children elements to be wrapped inside container */
  children: React.ReactNode
  /** Custom style of form box */
  boxStyle: string | undefined
  /** Custom style for logo */
  logoStyle?: string
}

/** Render auth pages with logo and box for form */
const AuthFormContainer: React.FC<AuthFormContainerProps> = ({
  title,
  children,
  boxStyle,
  logoStyle,
}: AuthFormContainerProps) => (
  <Container className={boxStyle}>
    <div className="align-self-center col">
      <Row className="m-0">
        <LogoTrans style={`col ${logoStyle}`} />
      </Row>
      <Row className="form-title">
        <h1>{title}</h1>
      </Row>
      {/* Form title */}
      <Row>{children}</Row>
      {/* actual form */}
    </div>
  </Container>
)

AuthFormContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  boxStyle: PropTypes.string.isRequired,
  logoStyle: PropTypes.string,
}

AuthFormContainer.defaultProps = {
  logoStyle: undefined,
}
export default AuthFormContainer

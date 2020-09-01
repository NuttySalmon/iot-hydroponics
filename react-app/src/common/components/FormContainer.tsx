import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row } from 'react-bootstrap'
import '../scss/components/form-elements.scss'
import LogoTrans from './LogoTrans'

export type FormContainerProps = {
  /** Form title */
  title: string
  /** Children elements to be wrapped inside container */
  children: React.ReactNode
  /** Custom style of form box */
  boxStyle: string | undefined
  /** Custom style for logo */
  logoStyle?: string
}

const FormContainer: React.FC<FormContainerProps> = ({
  title,
  children,
  boxStyle,
  logoStyle,
}: FormContainerProps) => (
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

FormContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  boxStyle: PropTypes.string.isRequired,
  logoStyle: PropTypes.string,
}

FormContainer.defaultProps = {
  logoStyle: undefined,
}
export default FormContainer

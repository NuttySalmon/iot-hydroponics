import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row } from 'react-bootstrap'
import '../scss/components/form-elements.scss'
import LogoTrans from './LogoTrans'

type FormContainerProps = {
  /** Form title */
  title?: string
  /** Children elements to be wrapped inside container */
  children: React.ReactNode
  /** Custom style of form box */
  style?: string | undefined
  /** Custom style for logo */
  logoStyle?: string
}

const FormContainer: React.FC<FormContainerProps> = ({
  title,
  children,
  style,
  logoStyle,
}: FormContainerProps) => (
  <Container className={style}>
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
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
  logoStyle: PropTypes.string,
}

FormContainer.defaultProps = {
  title: '',
  style: undefined,
  logoStyle: undefined,
}
export default FormContainer

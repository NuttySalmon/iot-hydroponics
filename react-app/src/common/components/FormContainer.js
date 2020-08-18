import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row } from 'react-bootstrap'
import '../scss/components/form-elements.scss'
import LogoTrans from './LogoTrans'

/**
 * Render form with box and style of the box
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.style
 * @param {string} props.logoStyle
 */

const FormContainer = ({ title, children, style, logoStyle }) => (
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
  /** Form title */
  title: PropTypes.string,
  /** Children */
  children: PropTypes.element.isRequired,
  /** Custom styling of the form box */
  style: PropTypes.string.isRequired,
  /** Optional */
  logoStyle: PropTypes.string,
}

FormContainer.defaultProps = {
  title: null,
  logoStyle: '',
}
export default FormContainer

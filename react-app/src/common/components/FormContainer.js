import React from 'react'
import PropTypes from 'prop-types';
import {Container, Row } from 'react-bootstrap'
import '../scss/components/form-elements.scss'

/**
 * Render form with box and style of the box 
 * @param props
 * @param props.title - Title of the form 
 * @param props.children - The form component
 * @param props.style - CSS class for the form box 
 */

const FormContainer = ({title, children, style}) => (
  <Container className={style}>
    <div className="align-self-center col">
      <Row><h1>{title}</h1></Row> 
      {/* Form title */}
      <Row>{children}</Row>    
      {/* actual form */}
    </div>
  </Container>
)

FormContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  style: PropTypes.string.isRequired
};

FormContainer.defaultProps = {
  title: null,
}
export default FormContainer;
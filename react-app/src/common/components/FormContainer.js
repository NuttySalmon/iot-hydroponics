import React from 'react'
import PropTypes from 'prop-types';
import {Container, Row } from 'react-bootstrap'
import '../scss/components/form-elements.scss'
import LogoTrans from './LogoTrans';

/**
 * Render form with box and style of the box 
 * @param props
 * @param props.title - Title of the form 
 * @param props.children - The form component
 * @param props.style - CSS class for the form box 
 * @param props.logoStyle - optional style for logo
 */

const FormContainer = ({title, children, style, logoStyle}) => (
  <Container className={style}>
    <div className="align-self-center col">
      <Row className="m-0"><LogoTrans style={`col ${logoStyle}`}/></Row>
      <Row className="form-title"><h1>{title}</h1></Row> 
      {/* Form title */}
      <Row>{children}</Row>    
      {/* actual form */}
    </div>
  </Container>
)

FormContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  style: PropTypes.string.isRequired,
  logoStyle: PropTypes.string
};

FormContainer.defaultProps = {
  title: null,
  logoStyle: '' 
}
export default FormContainer;
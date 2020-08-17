import React from 'react'
import { Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import LogoTrans from './LogoTrans'
import '../scss/components/form-elements.scss'

/**
 * Render page with full background and logo
 * @param props
 * @param props.children - Element to render in page
 * @param props.bg - background image
 * @param props.rightLogo - move logo to right when windows too short
 */

const FullPage = ({ children, bg, rightLogo }) => {
  return (
    <div
      className={`full-bg ${rightLogo ? 'logo-right-short' : ''}`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <LogoTrans />
      <Row style={{ margin: 0, height: '100%', width: '100vw' }}>
        {children}
      </Row>
    </div>
  );
};

FullPage.propTypes = {
  bg: PropTypes.string,
  rightLogo: PropTypes.bool,
};

FullPage.defaultProps = {
  bg: null,
  rightLogo: false,
};

export default FullPage;

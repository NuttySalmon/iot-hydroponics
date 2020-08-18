import React from 'react'
import { Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import '../scss/components/form-elements.scss'

/**
 * Render page with full background and logo
 * @param {object} props
 * @param {string} props.bg - background image
 */
const FullPage = ({ children, bg }) => {
  return (
    <div className="full-bg" style={{ backgroundImage: `url(${bg})` }}>
      <Row style={{ margin: 0, height: '100%', width: '100vw' }}>
        {children}
      </Row>
    </div>
  )
}

FullPage.propTypes = {
  /** Element to render in page */
  children: PropTypes.node.isRequired,
  /** Background image path */
  bg: PropTypes.string,
}

FullPage.defaultProps = {
  bg: null,
}

export default FullPage

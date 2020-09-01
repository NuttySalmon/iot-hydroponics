import React from 'react'
import { Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import '../scss/components/form-elements.scss'

/**
 * Render page with full background and logo
 */

type FullPageProp = {
  /** Element to render in page */
  children: React.ReactNode
  /** Background image path */
  bg?: string
}
const FullPage = ({ children, bg }: FullPageProp) => {
  return (
    <div
      className="full-bg"
      style={{ backgroundImage: bg ? `url(${bg})` : undefined }}
    >
      <Row style={{ margin: 0, height: '100%', width: '100vw' }}>
        {children}
      </Row>
    </div>
  )
}

FullPage.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
}

FullPage.defaultProps = {
  bg: '',
}

export default FullPage

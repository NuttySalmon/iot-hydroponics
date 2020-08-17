import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/components/logos.scss'
import PropTypes from 'prop-types'

const LogoTrans = ({style}) => {
  return (
    <div className={`logo-trans ${style}`}>
      <Link to="/">
        <span className='logo'>HydroGarden</span>
      </Link>
    </div>
  )
}

LogoTrans.propTypes = {
  style: PropTypes.string
}
LogoTrans.defaultProps = {
  /** Optional additional style for logo */
  style: ''
}
export default LogoTrans

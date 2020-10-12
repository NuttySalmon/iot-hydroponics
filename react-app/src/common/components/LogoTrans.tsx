import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/components/logos.scss'

/**
 *
 * @param {any} props
 * @param {string | number} [props.style='']
 */
const LogoTrans = ({ style = '' }) => {
  return (
    <div className={`logo-trans ${style}`}>
      <Link to="/">
        <span className="logo" />
      </Link>
    </div>
  )
}

export default LogoTrans

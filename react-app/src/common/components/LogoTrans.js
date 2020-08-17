import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/components/logos.scss'

const LogoTrans = () => {
  return (
    <div className="logo-trans">
      <Link to="/">
        <span className='logo'>HydroGarden</span>
      </Link>
    </div>
  )
}

export default LogoTrans

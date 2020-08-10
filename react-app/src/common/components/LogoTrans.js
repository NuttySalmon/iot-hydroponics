import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/components/logos.scss'

const LogoTrans = () => {
  return (
    <Link to="/">
      <span className="logo-trans">HydroGarden</span>
    </Link>
  )
}

export default LogoTrans

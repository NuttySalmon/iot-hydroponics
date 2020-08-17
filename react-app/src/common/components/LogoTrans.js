import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/components/logos.scss'

const LogoTrans = ({style}) => {
  return (
    <div className={`logo-trans ${style}`}>
      <Link to="/">
        <span className='logo'>HydroGarden</span>
      </Link>
    </div>
  )
}

LogoTrans.defaultProps = {
  style: ''
}
export default LogoTrans

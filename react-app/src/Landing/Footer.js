import React from 'react'
import { Row } from 'react-bootstrap'
import style from './scss/landing.module.scss'

const Footer = () => {
  return (
    <Row className={style.footer}>
      <p>Copyright © 2020 HydroGarden.</p>
      <p>All right reserved.</p>
      <p>
        <a href="#terms">Terms of Use</a>
        &nbsp;|&nbsp;
        <a href="#policy">Privacy Policy</a>
      </p>
    </Row>
  )
}

export default Footer

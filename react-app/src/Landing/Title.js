import React from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './scss/landing.module.scss'
import arrowStyle from './scss/arrow.module.scss'

const Title = (props) => {
  const { bg, des } = props
  return (
    <Row>
      <div className="full-bg" style={{ backgroundImage: `url(${bg})` }}>
        <Container className={style.titleBox}>
          <Row>
            <span className="logo logo-lg" />
          </Row>
          <Row className={style.titleDesc}>
            <p>
              {des}
              <br />
              <a href="#more">Learn More</a>
            </p>
          </Row>
          <Row>
            <Col>
              <Link to="/signup">
                <Button variant="btn btn-trans">Get started</Button>
              </Link>
            </Col>
            <Col>
              <Link to="/login">
                <Button variant="btn btn-trans">Login</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <a href="#members">
        <div className={arrowStyle.arrowContain}>
          <div className={`${arrowStyle.arrow} ${arrowStyle.shadow}`} />
          <div className={arrowStyle.arrow} />
        </div>
      </a>
    </Row>
  )
}

export default Title

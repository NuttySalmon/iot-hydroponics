import React from 'react'
import {Row, Col, Button, Container} from 'react-bootstrap'
import bg from './img/lettuce-bg.png'
import style from './scss/landing.module.scss'
import '../common/scss/components/logos.scss'

const Title = () => {
  return (
    <div className="full-bg" style={{ backgroundImage: `url(${bg})` }}>
        
                
      <Container className={style.titleBox}>
        <Col>
          <Row>
            <Col>
              <span className="logo-lg">HydroGarden</span>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col className="mb-4" style={{maxWidth: 900}}>
              <p>
                HydroGarden will actively monitor the plant’s desired light, temperature, and moisture levels for the user. This will allow users to grow any desired plant, disregarding weather conditions given by the time of year. A dedicated user interface will be designed to allow individuals to manage the environment without physically being there. This is beneficial towards people that may travel more often than others, but would still want to maintain plant life.    
                <br />
                <a href="#more">Learn More</a> 
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="d-flex justify-content-center">
                <Row>
                  <Col>
                    <Button variant="btn btn-trans">Get started</Button>
                  </Col>
                  <Col> 
                    <Button variant="btn btn-trans">Login</Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Container>
                
            

    </div>
  )
}

export default Title

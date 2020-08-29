import React from 'react'
import {Container, Row} from 'react-bootstrap'
import style from './scss/landing.module.scss'

const Description = ({title, des}) => {
  return (
    <Container className={style.description}>
      <Row>
        <h1>
          {title}
        </h1>
      </Row>
      <Row className="justify-content-md-left">
        <p style={{width: "100%"}}>
          {des}
        </p>
      </Row>
    </Container>
  )
}

export default Description

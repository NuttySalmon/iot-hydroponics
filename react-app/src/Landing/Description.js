import React from 'react'
import { Container, Row } from 'react-bootstrap'
import style from './scss/landing.module.scss'

const Description = ({ title, des, justified }) => (
  <Container className={style.description}>
    <Row>
      <h1>{title}</h1>
    </Row>
    <Row>
      <div className={justified ? 'text-justify' : null}>{des}</div>
    </Row>
  </Container>
)

export default Description

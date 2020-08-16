import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Row} from 'react-bootstrap'
import Title from './Title'

function Landing() {
  return (
   <Container fluid>
   <Row><Title/></Row>
   <Row></Row>
   <Row></Row>
   <Row></Row>
   <Row></Row>
   <Row></Row>
   </Container> 
  )
}

export default Landing

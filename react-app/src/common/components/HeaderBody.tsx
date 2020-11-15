import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from '../scss/components/header-body.module.scss'
type HeaderBodyProps = {
  button?: React.ReactElement<any>
  header: React.ReactElement<any>
}

const HeaderBody: React.FC<HeaderBodyProps> = ({
  button,
  header,
  children,
}) => (
  <Container className="pt-5 pl-5 pr-5">
    <Row className={style.headerRow}>
      <Col sm={12} md="auto">
        {header}
      </Col>
      {button ? <Col className={style.headerButton}>{button}</Col> : null}
    </Row>
    <Row>{children}</Row>
  </Container>
)

export default HeaderBody

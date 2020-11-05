import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from '../scss/components/header-body.module.scss'
type HeaderBodyProps = {
  button?: React.ReactElement<any>
  header: string
}
const HeaderBody: React.FC<HeaderBodyProps> = ({
  button,
  header,
  children,
}) => (
  <Container className="mt-5">
    <Row className={style.headerRow}>
      <Col sm={12} md="auto">
        <h2> {header}</h2>
      </Col>
      {button ? <Col className={style.headerButton}>{button}</Col> : null}
    </Row>
    <div>{children}</div>
  </Container>
)

export default HeaderBody

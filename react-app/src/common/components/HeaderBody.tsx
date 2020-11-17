import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import style from '../scss/components/header-body.module.scss'
type HeaderBodyProps = {
  button?: React.ReactElement<any>
  header: React.ReactElement<any>
  /** Display back button */
  back?: boolean
}

const HeaderBody: React.FC<HeaderBodyProps> = ({
  button,
  header,
  children,
  back,
}) => {
  const history = useHistory()
  return (
    <Container className="pt-5 pl-5 pr-5">
        {back ? (
          <button id={style.backButton} onClick={history.goBack}>
            &#9664;&nbsp;Back
          </button>
        ) : null}
      <Row className={style.headerRow}>
        <Col sm={12} md="auto">
          {header}
        </Col>
        {button ? <Col className={style.headerButton}>{button}</Col> : null}
      </Row>
      <Row>{children}</Row>
    </Container>
  )
}

export default HeaderBody
